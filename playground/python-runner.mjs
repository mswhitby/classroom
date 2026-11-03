// The canonical Pyodide worker stays in the subject snapshot; lifecycle is shared UI code.
export class PythonRunner{
 constructor({onStatus=()=>{},workerFactory=url=>new Worker(url),loadTimeout=60000,runTimeout=6000}={}){Object.assign(this,{onStatus,workerFactory,loadTimeout,runTimeout});this.sequence=0;this.worker=null;this.loading=null;this.pending=null;this.closed=false}
 init(){
  if(this.closed)return Promise.reject(Error('Python workspace closed.'));
  if(this.loading)return this.loading;
  this.onStatus('Loading Python…');
  this.loading=new Promise((resolve,reject)=>{
   this.rejectLoad=reject;this.loadTimer=setTimeout(()=>this.stop('Python could not load in time. Try again.'),this.loadTimeout);
   try{this.worker=this.workerFactory(new URL('data/computer-science-1/python-worker.js',document.baseURI));
    this.worker.onmessage=({data:r})=>{
     if(r.type==='ready'){clearTimeout(this.loadTimer);this.rejectLoad=null;this.onStatus('Python ready');resolve()}
     else if(r.type==='load-error')this.stop(r.message||'Python could not load.');
     else if(r.type==='result'&&r.id===this.pending?.id){const p=this.pending;clearTimeout(p.timer);this.pending=null;this.onStatus('Python ready');p.resolve(r)}
    };this.worker.onerror=()=>this.stop('Python worker failed. Try again.');
   }catch(e){this.stop(e.message)}
  });
  const attempt=this.loading;attempt.catch(()=>{if(this.loading===attempt)this.loading=null});return attempt;
 }
 async run(code){await this.init();if(this.closed)throw Error('Python workspace closed.');if(this.pending)throw Error('Python is already running.');this.onStatus('Running…');return new Promise((resolve,reject)=>{const id=++this.sequence,timer=setTimeout(()=>this.stop('Execution timed out after 6 seconds. Inspect your loops and retry.'),this.runTimeout);this.pending={id,timer,resolve,reject};this.worker.postMessage({type:'run',id,code})})}
 stop(message='Python stopped.'){clearTimeout(this.loadTimer);this.worker?.terminate();this.worker=null;const pending=this.pending;this.pending=null;if(pending){clearTimeout(pending.timer);pending.reject(Error(message))}this.rejectLoad?.(Error(message));this.rejectLoad=null;this.loading=null;this.onStatus(message)}
 dispose(){this.closed=true;this.stop('Python workspace closed.')}
}
