import {RUNTIME_URL,buildDriver,parseResult} from './csharp-protocol.mjs?v=csharp-3';
let compiler=null,compilation=null;
// Forward worker startup diagnostics so failures are visible in browser developer tools.
for(const level of ['debug','info','log','warn','error']) {
 const original=console[level].bind(console);
 console[level]=(...args)=>{original(...args);postMessage({type:'trace',message:args.filter(x=>typeof x==='string').join(' ').slice(0,1500)})};
}

async function init(){
 postMessage({type:'stage',message:'Loading the C# runtime…'});
 const {WasmSharpWorker}=await import(RUNTIME_URL);
 postMessage({type:'stage',message:'Starting .NET and downloading compiler files…'});
 compiler=await WasmSharpWorker.initializeAsync({enableDiagnosticTracing:true},{onDownloadResourceProgress(loaded,total){postMessage({type:'progress',loaded,total})},onMetadataLoad(){postMessage({type:'stage',message:'Preparing C# compiler…'})}});
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
