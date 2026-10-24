import {load} from './vendor/teavm/compiler.wasm-runtime.js';
let compiler;
const asset=name=>new URL('./vendor/teavm/'+name,import.meta.url).href;
async function init(){
 const [module,sdk,library]=await Promise.all([load(asset('compiler.wasm')),fetch(asset('compile-classlib-teavm.bin')).then(bytes),fetch(asset('runtime-classlib-teavm.bin')).then(bytes)]);
 compiler=module.exports.createCompiler();compiler.setSdk(sdk);compiler.setTeaVMClasslib(library);
}
async function bytes(r){if(!r.ok)throw Error('The Java practice tools could not load.');return new Int8Array(await r.arrayBuffer())}
self.onmessage=async({data:{source,args=[]}})=>{
 let stdout='',stderr='',diagnostics=[];
 const capture=key=>ch=>{if(key==='stdout')stdout=(stdout+String.fromCharCode(ch)).slice(0,20000);else stderr=(stderr+String.fromCharCode(ch)).slice(0,20000)};
 try{
  if(!compiler){postMessage({type:'status',text:'Loading Java…'});await init()}
  compiler.clearSourceFiles();compiler.clearOutputFiles();compiler.clearInputClassFiles();
  const registration=compiler.onDiagnostic(d=>diagnostics.push((d.fileName||'Java')+(d.lineNumber>0?':'+d.lineNumber:'')+': '+d.message));
  // javac checks the original program. Only its source filename is inferred.
  const className=source.match(/\bpublic\s+(?:final\s+)?class\s+([\w$]+)/)?.[1]||source.match(/\bclass\s+([\w$]+)/)?.[1]||'Practice';
  compiler.addSourceFile(className+'.java',source);
  postMessage({type:'status',text:'Compiling…'});
  try{
   if(!compiler.compile())throw Error(diagnostics.join('\n')||'Java compilation failed.');
   const classes=compiler.detectMainClasses();
   if(classes.length!==1)throw Error('Include one public static void main(String[] args) entry point.');
   if(!compiler.generateWebAssembly({outputName:'practice',mainClass:classes[0]}))throw Error(diagnostics.join('\n')||'This program uses a library unavailable in browser practice. Download it and use your Java 26 IDE.');
   const wasm=compiler.getWebAssemblyOutputFile('practice.wasm');
   const app=await load(wasm,{installImports(o){o.teavmConsole.putcharStdout=capture('stdout');o.teavmConsole.putcharStderr=capture('stderr')}});
   postMessage({type:'status',text:'Running…'});app.exports.main(args);
   postMessage({type:'result',success:!stderr,stdout,stderr,diagnostics:diagnostics.join('\n')});
  }finally{registration.destroy()}
 }catch(e){postMessage({type:'result',success:false,stdout,stderr,diagnostics:String(e?.message||e)})}
};
