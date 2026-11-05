export const COURSES={'computer-science-1':'Computer Science I','game-programming':'Game Programming & Design','mobile-app-dev':'Mobile App & Web',uil:'UIL Computer Science',capstone:'Capstone'};
export function activityState(signals,serverNow=Date.now()){
 const rows=signals.filter(s=>s.visible&&serverNow-Date.parse(s.last_seen_at)<=65000&&serverNow>=Date.parse(s.last_seen_at)-5000);
 const recent=rows.filter(s=>s.last_interaction_at&&serverNow-Date.parse(s.last_interaction_at)<=120000).sort((a,b)=>Date.parse(b.last_interaction_at)-Date.parse(a.last_interaction_at));
 if(recent.length)return {state:'active',label:'Recently interacting',signal:recent[0]};
 rows.sort((a,b)=>Date.parse(b.last_seen_at)-Date.parse(a.last_seen_at));
 if(rows.length)return {state:'viewing',label:'Viewing page',signal:rows[0]};
 const latest=[...signals].sort((a,b)=>Date.parse(b.last_seen_at)-Date.parse(a.last_seen_at))[0];
 return {state:'unknown',label:'No recent signal',signal:latest||null};
}
export class ActivityReporter{
 constructor({rpc,getMemberships,now=()=>Date.now(),visible=()=>document.visibilityState==='visible',session=crypto.randomUUID(),onError=()=>{}}){Object.assign(this,{rpc,getMemberships,now,visible,session,onError});this.current=null;this.lastSent=-Infinity;this.pendingInteraction=false;this.action='view';this.running=false}
 setActivity(course,activity){if(this.current?.course===course&&this.current?.activity===activity)return;this.current={course,activity};this.pendingInteraction=false;this.action='view';this.lastSent=-Infinity;return this.send(true)}
 eligible(){return !!this.current&&this.getMemberships().some(m=>m.status==='approved'&&m.course_id===this.current.course)}
 interact(action='interact'){if(!this.visible())return;this.pendingInteraction=true;this.action=action;return this.send()}
 async send(force=false){
  if(this.running||!this.eligible()||(!force&&this.now()-this.lastSent<15000))return;
  const current={...this.current},interacted=this.pendingInteraction,action=this.action;
  this.pendingInteraction=false;this.running=true;this.lastSent=this.now();
  try{await this.rpc('playground_activity_signal',{p_session:this.session,p_course:current.course,p_activity:current.activity,p_action:action,p_interacted:interacted,p_visible:this.visible()})}
  catch{if(this.current?.course===current.course&&this.current?.activity===current.activity&&interacted)this.pendingInteraction=true;this.onError()}
  finally{this.running=false}
 }
}
