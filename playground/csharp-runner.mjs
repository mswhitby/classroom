// A terminable worker owns the runtime. Student code never runs on the UI thread.
export class CSharpRunner {
 constructor({onStatus=()=>{},loadTimeout=120000,executionTimeout=10000,workerFactory=url=>new Worker(url,{type:'module'})}={}){Object.assign(this,{onStatus,loadTimeout,executionTimeout,workerFactory});this.worker=null;this.pending=null;this.ready=null;this.sequence=0;}
 initialize(){
  if(this.ready)return this.ready;
  const worker=this.worker=this.workerFactory(new URL('./csharp-worker.mjs',import.meta.url));
  this.onStatus('Loading C# compiler…');
  this.ready=new Promise((resolve,reject)=>{this.resolveReady=resolve;this.rejectReady=reject});
  this.loadTimer=setTimeout(()=>this.stop('The C# compiler could not finish loading. Try again or check your network.'),this.loadTimeout);
  worker.onmessage=({data:r})=>{
   if(worker!==this.worker)return;
   if(r.type==='progress'){this.onStatus('Loading C# compiler…');return}
   if(r.type==='ready'){clearTimeout(this.loadTimer);this.resolveReady?.();this.resolveReady=this.rejectReady=null;this.onStatus('C# ready');return}
   if(r.type==='load-error'){this.stop('C# could not load: '+r.message);return}
   if(!this.pending||r.id!==this.pending.id)return;
   const task=this.pending;this.pending=null;clearTimeout(task.timer);
   if(r.type==='error')task.reject(new Error(r.message));else task.resolve(r);
   this.onStatus('C# ready');
  };
  worker.onerror=()=>this.stop('The C# runtime stopped unexpectedly. Run again to restart it.');
  return this.ready;
 }
 async run(source,checks=null){
  if(this.pending||this.starting)throw Error('Finish or stop the current run first.');
  this.starting=true;
  try{await this.initialize();const id=++this.sequence,nonce=crypto.randomUUID();return await new Promise((resolve,reject)=>{const timer=setTimeout(()=>this.stop('Execution timed out after 10 seconds. Check for a non-ending loop.'),this.executionTimeout);this.pending={id,timer,resolve,reject};this.onStatus(checks?'Checking…':'Running…');this.worker.postMessage({id,source,checks,nonce})})}finally{this.starting=false}
 }
 stop(message='Execution stopped.'){
  this.worker?.terminate();this.worker=null;clearTimeout(this.loadTimer);
  const reject=this.rejectReady;this.resolveReady=this.rejectReady=null;this.ready=null;
  if(this.pending){clearTimeout(this.pending.timer);this.pending.reject(new Error(message));this.pending=null}
  reject?.(new Error(message));this.onStatus(message);
 }
 dispose(){this.stop('C# runtime closed.');}
}
