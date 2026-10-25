import {ActivityReporter} from './classroom-model.mjs';
export class ClassroomClient{
 constructor(client,account){this.client=client;this.account=account;this.context={is_teacher:false,memberships:[]};this.available=false;this.reporter=new ActivityReporter({rpc:(...args)=>this.rpc(...args),getMemberships:()=>this.context.memberships,onError:()=>{this.activityError=true}})}
 async rpc(name,args={}){const {data,error}=await this.client.rpc(name,args);if(error)throw error;return data}
 async refreshContext(){this.context=await this.rpc('playground_classroom_context');this.available=true;return this.context}
 async start(){
  if(!this.account.signedIn)return;
  try{await this.refreshContext()}catch{return}
  const listener=event=>{
   if(!event.isTrusted)return;
   const target=event.target;
   if(target?.closest?.('.account-menu,.material-preferences,.submission-actions'))return;
   if(event.type==='input')this.reporter.interact(target?.closest?.('.CodeMirror,textarea')?'edit':'interact');
   else if(event.type==='click'){
    const b=target?.closest?.('button');const id=b?.id||'';
    this.reporter.interact(/check/.test(id)?'check':/run/.test(id)?'run':'interact');
   }else this.reporter.interact();
  };
  for(const type of ['input','click','keydown','pointerdown'])document.addEventListener(type,listener,{capture:true,passive:true});
  document.addEventListener('visibilitychange',()=>this.reporter.send(true));
  window.addEventListener('hashchange',()=>{this.reporter.current=null});
  this.contextTimer=setInterval(async()=>{if(document.visibilityState!=='visible')return;try{await this.refreshContext();this.reporter.send()}catch{}},60000);
  this.timer=setInterval(()=>{if(document.visibilityState==='visible')this.reporter.send()},30000);
 }
 setActivity(course,activity){return this.reporter.setActivity(course,activity)}
 signalSubmission(){return this.reporter.interact('submit')}
}
