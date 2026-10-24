export class JavaRunner{
 constructor(onStatus=()=>{}){this.onStatus=onStatus;this.worker=null;this.reject=null;this.timer=null}
 run(source,args=[]){
  this.stop();
  return new Promise((resolve,reject)=>{
   this.reject=reject;const worker=this.worker=new Worker(new URL('./java-worker.mjs',import.meta.url),{type:'module'});
   const finish=()=>{clearTimeout(this.timer);worker.terminate();this.worker=null;this.reject=null};
   this.timer=setTimeout(()=>{finish();reject(Error('Java stopped after 45 seconds. Inspect your loops and try again.'))},45000);
   worker.onmessage=({data})=>{if(data.type==='status')this.onStatus(data.text);else if(data.type==='result'){finish();resolve(data)}};
   worker.onerror=()=>{finish();reject(Error('The Java tools could not run in this browser. Try a current browser or download the program for your Java 26 IDE.'))};
   worker.postMessage({source,args});
  });
 }
 stop(){clearTimeout(this.timer);this.worker?.terminate();this.worker=null;this.reject?.(Error('Java execution stopped.'));this.reject=null}
 dispose(){this.stop()}
}
