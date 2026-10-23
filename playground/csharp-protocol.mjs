// Compile the original student source with Roslyn; no C#-to-JavaScript rewriting.
export const RUNTIME_VERSION='0.10.2';
export const RUNTIME_URL=new URL("./vendor/wasmsharp/WasmSharpWorker.js?v=7",import.meta.url).href;
export function buildChecks(cases){
 if(!Array.isArray(cases)||!cases.length)throw Error('No published test cases.');
 const calls=cases.map((c,i)=>`Check(${i}, () => global::Program.${c.call}, ${c.expected});`).join('\n');
 return `using System;
using System.Collections.Generic;
using System.Globalization;
using System.Text;
public static class __PlaygroundChecks {
static string B64(string value) => Convert.ToBase64String(Encoding.UTF8.GetBytes(value ?? ""));
static void Check<T>(int index, Func<T> action, T expected) {
 string received="", error=""; bool passed=false;
 try {T actual=action();received=Convert.ToString(actual,CultureInfo.InvariantCulture) ?? "null";
 if(actual is float a && expected is float b)passed=Math.Abs(a-b)<=0.0001f;
 else passed=EqualityComparer<T>.Default.Equals(actual,expected);
 }catch(Exception e){error=e.GetType().Name+": "+e.Message;}
 Console.WriteLine("PLAYGROUND_CASE:"+index+":"+(passed?"1":"0")+":"+B64(received)+":"+B64(Convert.ToString(expected,CultureInfo.InvariantCulture))+":"+B64(error));
}
public static void Main(string[] args){${calls}}
}`;
}
export function buildDriver(source,{nonce,checks=null}={}){
 if(!nonce||!/^[a-z0-9-]+$/i.test(nonce))throw Error('Invalid execution ID.');
 // Source and checker are independent syntax trees. For checks, compile a library
 // and invoke the checker explicitly without changing the student's Main or class names.
 return `using System;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp;
using Microsoft.CodeAnalysis.Text;
using WasmSharp.Core.Services;
public static class __PlaygroundHost {
class LimitedWriter : TextWriter {
 readonly StringBuilder buffer=new StringBuilder();
 public override Encoding Encoding => Encoding.UTF8;
 public override void Write(char value){if(buffer.Length>=20000)throw new InvalidOperationException("Output limit reached (20,000 characters).");buffer.Append(value);}
 public override void Write(string value){if(value!=null)foreach(char c in value)Write(c);}
 public override string ToString()=>buffer.ToString();
}
static string B64(string value)=>Convert.ToBase64String(Encoding.UTF8.GetBytes(value??""));
public static void Main(string[] args){
 string source=${JSON.stringify(source)};
 string checker=${JSON.stringify(checks||'')};
 var options=new CSharpCompilationOptions(checker.Length>0?OutputKind.DynamicallyLinkedLibrary:OutputKind.ConsoleApplication).WithConcurrentBuild(false);
 var trees=checker.Length>0?new[]{CSharpSyntaxTree.ParseText(SourceText.From(source),null,"Program.cs"),CSharpSyntaxTree.ParseText(SourceText.From(checker),null,"Checks.cs")}:new[]{CSharpSyntaxTree.ParseText(SourceText.From(source),null,"Program.cs")};
 var compilation=CSharpCompilation.Create("Student_${nonce.replaceAll('-','_')}",trees,MetadataReferenceCache.MetadataReferences,options);
 using var stream=new MemoryStream();
 var emitted=compilation.Emit(stream);
 string diagnostics=string.Join("\\n",emitted.Diagnostics.Where(d=>d.Severity==DiagnosticSeverity.Error||d.Severity==DiagnosticSeverity.Warning).Select(d=>d.ToString()));
 bool compiled=emitted.Success, success=false;
 var output=new LimitedWriter();var errors=new LimitedWriter();
 if(compiled){
  var oldOut=Console.Out;var oldError=Console.Error;
  try {
   Console.SetOut(output);
   var assembly=Assembly.Load(stream.ToArray());var entry=checker.Length>0?assembly.GetType("__PlaygroundChecks").GetMethod("Main"):assembly.EntryPoint;
   if(entry==null)throw new InvalidOperationException("Define a static Main method or use top-level statements.");
   var result=entry.Invoke(null,entry.GetParameters().Length==0?null:new object[]{Array.Empty<string>()});
   if(result is System.Threading.Tasks.Task task){
    if(!task.IsCompleted)throw new NotSupportedException("This practice runner currently supports synchronous console programs. Awaited asynchronous work is not supported yet.");
    task.GetAwaiter().GetResult();
   }
   success=true;
  }catch(Exception e){
   while(e is TargetInvocationException && e.InnerException!=null)e=e.InnerException;
   try{errors.Write(e.GetType().Name+": "+e.Message);}catch{}
  }finally{Console.SetOut(oldOut);}
 }
 Console.WriteLine("PLAYGROUND_RESULT:${nonce}:"+(compiled?"1":"0")+":"+(success?"1":"0")+":"+B64(output.ToString())+":"+B64(errors.ToString())+":"+B64(diagnostics));
}
}`;
}
function decode(s){const bytes=Uint8Array.from(atob(s),c=>c.charCodeAt(0));return new TextDecoder().decode(bytes)}
export function parseResult(text,nonce){
 const prefix=`PLAYGROUND_RESULT:${nonce}:`;
 const line=String(text||'').split(/\r?\n/).find(l=>l.startsWith(prefix));
 if(!line)throw Error('The C# runtime did not return a result. Stop and run again.');
 const parts=line.slice(prefix.length).split(':');if(parts.length!==5)throw Error('Incomplete C# runtime response.');
 return {compiled:parts[0]==='1',success:parts[1]==='1',stdout:decode(parts[2]),stderr:decode(parts[3]),diagnostics:decode(parts[4])};
}
export function parseChecks(stdout,count){
 const rows=String(stdout).split(/\r?\n/).filter(l=>l.startsWith('PLAYGROUND_CASE:')).map(l=>{const p=l.split(':');if(p.length!==6)throw Error('Incomplete check result.');return {index:Number(p[1]),passed:p[2]==='1',received:decode(p[3]),expected:decode(p[4]),error:decode(p[5])}});
 if(rows.length!==count||new Set(rows.map(r=>r.index)).size!==count||rows.some(r=>!Number.isInteger(r.index)||r.index<0||r.index>=count))throw Error('The checker did not finish every published test.');
 return rows.sort((a,b)=>a.index-b.index);
}
