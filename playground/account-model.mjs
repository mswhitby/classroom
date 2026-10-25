// Explicit bindings for practice data only. Auth tokens, appearance, and layout
// keys are never synchronized through this adapter.
export const CONTENT_VERSION='1';
const json=value=>{try{return JSON.parse(value)}catch{return null}};
const binding=(course_id,activity_id,activity_kind,type,file_name='main')=>({course_id,activity_id,activity_kind,type,file_name});
export function describeKey(key){
 let m;
 if((m=/^playground:draft:game-programming:(.+)$/.exec(key)))return binding('game-programming',m[1],'programming','draft');
 if((m=/^playground:quiz-answers:game-programming:(.+)$/.exec(key)))return binding('game-programming',m[1],'quiz','draft','answers.json');
 if((m=/^playground:draft:mobile-app-dev:(.+)$/.exec(key)))return binding('mobile-app-dev',m[1],m[1].startsWith('project:')?'project':'lesson','draft');
 if((m=/^playground:mobile-check:(.+)$/.exec(key)))return binding('mobile-app-dev',m[1],'lesson','progress');
 if((m=/^playground:mobile-project-check:(.+)$/.exec(key)))return binding('mobile-app-dev','project:'+m[1],'project','progress');
 if((m=/^playground:uil:draft:(.+)$/.exec(key)))return binding('uil',m[1],'programming','draft');
 if((m=/^playground:uil:check:(.+)$/.exec(key)))return binding('uil',m[1],'programming','progress');
 if(key==='playground:uil:written-answers')return binding('uil','written-01','quiz','draft','answers.json');
 if(key==='playground:uil:written-result')return binding('uil','written-01','quiz','progress');
 if((m=/^cs1:guided:v1:(draft|pass):(.+)$/.exec(key)))return binding('computer-science-1','lesson:'+m[2],'lesson',m[1]==='draft'?'draft':'progress');
 if((m=/^cs1:challenges:2026-10-26:(draft|pass):(.+)$/.exec(key)))return binding('computer-science-1','challenge:'+m[2],'challenge',m[1]==='draft'?'draft':'progress');
 if((m=/^cs1:unit01:(draft|pass):(.+)$/.exec(key)))return binding('computer-science-1','legacy-lesson:'+m[2],'lesson',m[1]==='draft'?'draft':'progress');
 return null;
}
export function draftKey(row){
 const {course_id:c,activity_id:a,file_name:f}=row;
 if(c==='game-programming')return f==='answers.json'?'playground:quiz-answers:game-programming:'+a:f==='main'?'playground:draft:game-programming:'+a:null;
 if(c==='mobile-app-dev'&&f==='main')return 'playground:draft:mobile-app-dev:'+a;
 if(c==='uil')return a==='written-01'&&f==='answers.json'?'playground:uil:written-answers':f==='main'?'playground:uil:draft:'+a:null;
 if(c==='computer-science-1'&&f==='main'){
  for(const [prefix,key] of [['lesson:','cs1:guided:v1:draft:'],['challenge:','cs1:challenges:2026-10-26:draft:'],['legacy-lesson:','cs1:unit01:draft:']])if(a.startsWith(prefix))return key+a.slice(prefix.length);
 }
 return null;
}
export function stateOf(raw){
 const v=json(raw);
 if(v===true||v?.passed===true||v?.selfReported===true)return 'completed';
 if(v?.kind==='quiz')return v.passed?'completed':'needs_revision';
 if(v&&Number.isFinite(v.correct)&&Number.isFinite(v.total))return v.correct===v.total?'completed':'needs_revision';
 if(v===false||v?.passed===false)return 'needs_revision';
 return 'started';
}
export function progressRow(userId,key,raw,entry=null){
 let meta=describeKey(key);
 if(key==='playground:progress:v1'&&entry?.startsWith('game-programming:')){
  const value=json(raw);meta=binding('game-programming',entry.slice('game-programming:'.length),value?.kind==='quiz'?'quiz':value?.kind==='unity-practice'?'self-report':'programming','progress');
 }
 if(!meta||meta.type!=='progress')return null;
 return {user_id:userId,course_id:meta.course_id,activity_id:meta.activity_id,content_version:CONTENT_VERSION,activity_kind:meta.activity_kind,status:stateOf(raw),practice_data:{storage_key:key,raw, ...(entry?{entry}:{})}};
}
export function acceptedProgress(row){
 const p=row.practice_data;
 if(!p||typeof p.storage_key!=='string'||typeof p.raw!=='string')return null;
 const rebuilt=progressRow(row.user_id,p.storage_key,p.raw,p.entry);
 if(!rebuilt||rebuilt.course_id!==row.course_id||rebuilt.activity_id!==row.activity_id||row.content_version!==CONTENT_VERSION)return null;
 return {key:p.storage_key,raw:p.raw,entry:p.entry||null};
}
export function idOf(row){return [row.course_id,row.activity_id,row.file_name||row.content_version||'1'].join('|')}
export class AccountCache{
 constructor(storage,userId=null,onWrite=()=>{}){this.native=storage;this.userId=userId;this.onWrite=onWrite}
 scoped(key){return this.userId?'playground:account:'+this.userId+':'+key:key}
 isPrivate(key){return key==='playground:progress:v1'||!!describeKey(key)}
 getItem(key){return this.native.getItem(this.isPrivate(key)?this.scoped(key):key)}
 setItem(key,value){
  value=String(value);const before=this.getItem(key);this.native.setItem(this.isPrivate(key)?this.scoped(key):key,value);
  if(this.userId&&this.isPrivate(key))this.onWrite(key,value,before);
 }
 removeItem(key){
  const meta=describeKey(key);
  if(this.userId&&meta?.type==='progress'){this.setItem(key,'false');return}
  this.native.removeItem(this.isPrivate(key)?this.scoped(key):key);
 }
 hydrateDraft(row){const key=draftKey(row);if(!key||!describeKey(key))return;this.native.setItem(this.scoped(key),row.source_code)}
 hydrateProgress(row){
  const data=acceptedProgress(row);if(!data)return;
  if(data.entry){const aggregate=json(this.getItem(data.key))||{};aggregate[data.entry]=json(data.raw);this.native.setItem(this.scoped(data.key),JSON.stringify(aggregate))}
  else this.native.setItem(this.scoped(data.key),data.raw);
 }
 clearAccount(){if(!this.userId)return;const prefix='playground:account:'+this.userId+':';for(const key of this.keys())if(key.startsWith(prefix))this.native.removeItem(key)}
 keys(){return Array.from({length:this.native.length},(_,i)=>this.native.key(i)).filter(Boolean)}
 guestKeys(){return this.keys().filter(key=>this.isPrivate(key)&&!key.startsWith('playground:account:'))}
}
