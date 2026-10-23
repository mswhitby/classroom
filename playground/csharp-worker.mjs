import {RUNTIME_URL,buildDriver,parseResult} from './csharp-protocol.mjs';
let compiler=null,compilation=null;
async function init(){
 const {WasmSharpWorker}=await import(RUNTIME_URL);
 compiler=await WasmSharpWorker.initializeAsync({enableDiagnosticTracing:false},{onDownloadResourceProgress(loaded,total){postMessage({type:'progress',loaded,total})}});
 postMessage({type:'ready'});
}
const ready=init().catch(error=>postMessage({type:'load-error',message:String(error?.message||error)}));
onmessage=async e=>{
 const {id,source,nonce,checks}=e.data;
 try{
  await ready;if(!compiler)throw Error('The C# compiler could not load.');
  const driver=buildDriver(source,{nonce,checks});
  if(compilation)await compilation.recompileAsync(driver);else compilation=await compiler.createCompilationAsync(driver);
  const result=await compilation.run();
  if(!result.success)throw Error('Compiler host error: '+(result.diagnostics||[]).map(d=>d.id+': '+d.message).join('\n'));
  postMessage({type:'result',id,...parseResult(result.stdOut,nonce)});
 }catch(error){postMessage({type:'error',id,message:String(error?.message||error)})}
};
