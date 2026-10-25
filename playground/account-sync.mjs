import {describeKey,progressRow,draftKey,idOf,CONTENT_VERSION} from './account-model.mjs';
export class PracticeSync{
 constructor({client,cache,userId,storage,onStatus=()=>{}}){Object.assign(this,{client,cache,userId,storage,onStatus});try{this.queue=JSON.parse(storage.getItem(this.queueKey)||'[]')}catch{this.queue=[]}if(!Array.isArray(this.queue))this.queue=[];this.revisions=new Map();this.progress=new Map();this.running=false;this.timer=null;this.conflicts=[]}
 get queueKey(){return 'playground:pending:'+this.userId}
 persist(){this.storage.setItem(this.queueKey,JSON.stringify(this.queue))}
 notify(message){this.onStatus(message,this.queue.length,this.conflicts.length)}
 enqueue(type,row,expected){
  const previous=this.queue.find(t=>t.type===type&&idOf(t.row)===idOf(row));
  if(type==='draft'&&previous)expected=previous.expected;
  const task={id:crypto.randomUUID(),owner:this.userId,type,row,...(expected!==undefined?{expected}:{})};
  if(type!=='attempt')this.queue=this.queue.filter(t=>t.type!==type||idOf(t.row)!==idOf(row));
  this.queue.push(task);if(previous&&this.conflicts.some(t=>t.id===previous.id))this.conflicts=this.conflicts.map(t=>t.id===previous.id?task:t);this.persist();this.notify('Changes saved on this device; syncing…');clearTimeout(this.timer);this.timer=setTimeout(()=>this.flush(),900);
 }
 write(key,raw,before){
  if(key==='playground:progress:v1'){
   let current,old;try{current=JSON.parse(raw);old=JSON.parse(before||'{}')}catch{return}
   for(const [entry,value] of Object.entries(current||{}))if(JSON.stringify(old?.[entry])!==JSON.stringify(value)){
    const row=progressRow(this.userId,key,JSON.stringify(value),entry);if(row){this.progress.set(idOf(row),row);this.enqueue('progress',row);if(['quiz','code-check'].includes(value.kind))this.attempt(row.course_id,row.activity_id,row.activity_kind,value)}
   }return;
  }
  const meta=describeKey(key);if(!meta)return;
  if(meta.type==='draft'){
   const row={user_id:this.userId,course_id:meta.course_id,activity_id:meta.activity_id,file_name:meta.file_name,source_code:raw};this.enqueue('draft',row,this.revisions.get(idOf(row))??0);
  }else{
   const row=progressRow(this.userId,key,raw);if(row){this.progress.set(idOf(row),row);this.enqueue('progress',row);if(!key.includes(':pass:')){let value;try{value=JSON.parse(raw)}catch{value={}}this.attempt(row.course_id,row.activity_id,row.activity_kind,value)}}
  }
 }
 attempt(course,activity,kind,data){this.enqueue('attempt',{id:crypto.randomUUID(),user_id:this.userId,course_id:course,activity_id:activity,content_version:CONTENT_VERSION,activity_kind:kind,practice_data:data})}
 async rows(table){
  const all=[];for(let offset=0;;offset+=200){const {data,error}=await this.client.from(table).select('*').eq('user_id',this.userId).range(offset,offset+199);if(error)throw error;all.push(...data);if(data.length<200)return all}
 }
 async hydrate(){
  const [progress,drafts]=await Promise.all([this.rows('playground_progress'),this.rows('playground_drafts')]);
  const pending=new Set(this.queue.filter(t=>t.type!=='attempt').map(t=>t.type+'|'+idOf(t.row)));
  for(const row of progress){this.progress.set(idOf(row),row);if(!pending.has('progress|'+idOf(row)))this.cache.hydrateProgress(row)}
  for(const row of drafts){this.revisions.set(idOf(row),row.revision);if(!pending.has('draft|'+idOf(row)))this.cache.hydrateDraft(row)}
  this.notify(this.queue.length?'Syncing saved changes…':'Practice and drafts are up to date.');await this.flush();
 }
 async saveDraft(task){
  const r=task.row;let query;
  if(task.expected===0)query=this.client.from('playground_drafts').insert(r).select('revision');
  else query=this.client.from('playground_drafts').update({source_code:r.source_code}).eq('user_id',this.userId).eq('course_id',r.course_id).eq('activity_id',r.activity_id).eq('file_name',r.file_name).eq('revision',task.expected).select('revision');
  const {data,error}=await query;
  if(error?.code==='23505'||(!error&&!data?.length)){
   const current=await this.client.from('playground_drafts').select('*').eq('user_id',this.userId).eq('course_id',r.course_id).eq('activity_id',r.activity_id).eq('file_name',r.file_name).single();
   if(current.error)throw current.error;
   return current.data.source_code===r.source_code?{revision:current.data.revision}:{conflict:true};
  }
  if(error)throw error;return {revision:data[0].revision};
 }
 flush(){if(this.inflight)return this.inflight;this.inflight=this.drain().finally(()=>{this.inflight=null});return this.inflight}
 async drain(){
  this.running=true;
  try{
   for(const task of [...this.queue]){
    if(task.owner!==this.userId||task.row.user_id!==this.userId)throw Error('Account changed. Reload before syncing.');
    if(this.conflicts.some(t=>t.id===task.id))continue;
    if(task.type==='draft'){
     const result=await this.saveDraft(task);
     if(result.conflict){const latest=this.queue.find(t=>t.type==='draft'&&idOf(t.row)===idOf(task.row));if(latest&&!this.conflicts.some(t=>t.id===latest.id))this.conflicts.push(latest);continue}
     this.revisions.set(idOf(task.row),result.revision);
     for(const next of this.queue)if(next.id!==task.id&&next.type==='draft'&&idOf(next.row)===idOf(task.row)&&next.expected===task.expected)next.expected=result.revision;
    }else{
     const table=task.type==='attempt'?'playground_attempts':'playground_progress';
     const query=task.type==='attempt'?this.client.from(table).insert(task.row):this.client.from(table).upsert(task.row,{onConflict:'user_id,course_id,activity_id,content_version'});
     const {error}=await query;if(error&&!(task.type==='attempt'&&error.code==='23505'))throw error;
    }
    this.queue=this.queue.filter(t=>t.id!==task.id);this.persist();
   }
   this.notify(this.conflicts.length?'A newer draft exists on another device. Choose which copy to keep.':this.queue.length?'Changes are waiting to sync.':'Practice and drafts are up to date.');
  }catch{this.notify('Changes are saved on this device. Sync could not finish; try again when connected.')}
  finally{this.running=false}
 }
 async resolve(task,keepLocal){
  const {data,error}=await this.client.from('playground_drafts').select('*').eq('user_id',this.userId).eq('course_id',task.row.course_id).eq('activity_id',task.row.activity_id).eq('file_name',task.row.file_name).single();if(error)throw error;
  this.storage.setItem('playground:backup:'+this.userId+':'+task.id,JSON.stringify({local:task.row,cloud:data}));
  this.queue=this.queue.filter(t=>t.type!=='draft'||idOf(t.row)!==idOf(task.row));this.conflicts=this.conflicts.filter(t=>idOf(t.row)!==idOf(task.row));this.revisions.set(idOf(task.row),data.revision);
  if(keepLocal)this.enqueue('draft',task.row,data.revision);else this.cache.hydrateDraft(data);
  this.persist();await this.flush();
 }
 dispose(){clearTimeout(this.timer)}
}
