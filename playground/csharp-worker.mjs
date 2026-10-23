// .NET distinguishes a standalone worker from its own pthread workers with this flag.
// Set it before importing the loader: our message handler already exists by import time.
globalThis.dotnetSidecar=true;
import {RUNTIME_URL,buildDriver,parseResult} from './csharp-protocol.mjs?v=csharp-7';
let compiler=null,compilation=null,executing=false;
let runtimeErrors=[];
// Forward worker startup diagnostics so failures are visible in browser developer tools.
for(const level of ['debug','info','log','warn','error']) {
 const original=console[level].bind(console);
 console[level]=(...args)=>{original(...args);if(executing&&level==='error')runtimeErrors.push(args.map(String).join(' '));postMessage({type:'trace',message:args.filter(x=>typeof x==='string').join(' ').slice(0,1500)})};
}

async function init(){
 postMessage({type:'stage',message:'Loading the C# runtime…'});
 const {WasmSharpWorker}=await import(RUNTIME_URL);
 postMessage({type:'stage',message:'Starting .NET and downloading compiler files…'});
 compiler=await WasmSharpWorker.initializeAsync({enableDiagnosticTracing:false},{onDownloadResourceProgress(loaded,total){postMessage({type:'progress',loaded,total})},onMetadataLoad(){postMessage({type:'stage',message:'Preparing C# compiler…'})}});
 postMessage({type:'ready'});
}
const ready=init().catch(error=>postMessage({type:'load-error',message:String(error?.message||error)}));
onmessage=async e=>{
 const {id,source,nonce,checks}=e.data;
 try{
  await ready;if(!compiler)throw Error('The C# compiler could not load.');
  const driver=buildDriver(source,{nonce,checks});
  if(compilation)await compilation.recompileAsync(driver);else compilation=await compiler.createCompilationAsync(driver);
  executing=true;runtimeErrors=[];
  const result=await compilation.run();executing=false;
  if(!result.success)throw Error('Compiler host error: '+(result.diagnostics||[]).map(d=>d.id+': '+d.message).join('\n'));
  const parsed=parseResult(result.stdOut,nonce);
  if(runtimeErrors.length)parsed.stderr=[parsed.stderr,...runtimeErrors].filter(Boolean).join('\n');
  postMessage({type:'result',id,...parsed});
 }catch(error){executing=false;postMessage({type:'error',id,message:String(error?.message||error)})}
};
