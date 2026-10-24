(() => {
"use strict";
const items = Array.isArray(window.CS1_CHALLENGES) ? window.CS1_CHALLENGES : [];
const $ = id => document.getElementById(id);
const rank = {"Very Easy":0,"Easy":1,"Hard":2};
const ordered = [...items].sort((a,b)=>a.title.localeCompare(b.title,"en",{numeric:true}));
const byId = new Map(ordered.map(x=>[x.id,x]));
const learningMap=window.CS1_LEARNING_MAP||{challengeToLessons:{},advancedNotYetTaught:[]};
const prefix = "cs1:challenges:2026-10-26:";
const marker = "CS1_PUBLIC_CASES=";
let current=null, busy=false, worker=null, readyPromise=null, bootResolve=null, bootReject=null, pending=null, seq=0;

function escapeHTML(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");}
function inline(s){
 return escapeHTML(s)
 .replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>")
 .replace(new RegExp("\\x60([^\\x60]+)\\x60","g"),"<code>$1</code>")
 .replace(/\[([^\]]+)\]\(README\.md\)/g,'<a href="#'+encodeURIComponent(current?.id||"") + '">$1</a>')
 .replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g,'<a target="_blank" rel="noopener" href="$2">$1</a>');
}
function simpleText(s){
 return String(s||"").split(/\n\s*\n/).map(block=>{
 const lines=block.trim().split(/\n/);
 if(lines.every(x=>/^\s*-\s+/.test(x))){
  return "<ul>"+lines.map(x=>"<li>"+inline(x.replace(/^\s*-\s+/,""))+"</li>").join("")+"</ul>";
 }
 return "<p>"+lines.map(inline).join("<br>")+"</p>";
 }).join("");
}
function renderSkills(source){
 const fence=String.fromCharCode(96).repeat(3);
 const lines=String(source||"").split(/\r?\n/),html=[];
 let inCode=false,inList=false,inTable=false,code=[],codeLang="";
 const closeList=()=>{if(inList){html.push("</ul>");inList=false;}};
 const closeTable=()=>{if(inTable){html.push("</tbody></table>");inTable=false;}};
 const isTableLine=line=>line.startsWith("|")&&line.endsWith("|");
 for(let i=0;i<lines.length;i++){
  const raw=lines[i],line=raw.trim();
  if(line.startsWith(fence)){
   if(!inCode){closeList();closeTable();inCode=true;code=[];codeLang=line.slice(fence.length);}
   else{html.push('<pre><code>'+escapeHTML(code.join("\n"))+"</code></pre>");inCode=false;codeLang="";}
   continue;
  }
  if(inCode){code.push(raw);continue;}
  if(!line){closeList();closeTable();continue;}
  if(isTableLine(line)){
   closeList();
   const cells=line.slice(1,-1).split("|").map(s=>s.trim());
   if(cells.every(c=>/^:?-+:?$/.test(c)))continue;
   if(!inTable){html.push('<table><thead><tr>'+cells.map(c=>"<th>"+inline(c)+"</th>").join("")+'</tr></thead><tbody>');inTable=true;}
   else html.push("<tr>"+cells.map(c=>"<td>"+inline(c)+"</td>").join("")+"</tr>");
   continue;
  }
  closeTable();
  if(/^<\/?(details|summary)(>| )/.test(line)){
    closeList();html.push(line);continue;
  }
  if(/^#{1,4} /.test(line)){
   closeList();const depth=line.match(/^#+/)[0].length;html.push("<h"+Math.min(depth+1,5)+">"+inline(line.slice(depth+1))+"</h"+Math.min(depth+1,5)+">");continue;
  }
  if(/^[-*] /.test(line)||/^\d+\. /.test(line)){
   if(!inList){html.push("<ul>");inList=true;}
   html.push("<li>"+inline(line.replace(/^([-*]|\d+\.) /,""))+"</li>");continue;
  }
  closeList();
  if(/^---+$/.test(line)){html.push("<hr>");continue;}
  html.push("<p>"+inline(line)+"</p>");
 }
 closeList();closeTable();
 if(inCode)html.push("<pre><code>"+escapeHTML(code.join("\n"))+"</code></pre>");
 return html.join("\n");
}
function get(k){try{return localStorage.getItem(prefix+k);}catch{return null;}}
function set(k,v){try{localStorage.setItem(prefix+k,v);return true;}catch{return false;}}
function unset(k){try{localStorage.removeItem(prefix+k);}catch{}}
function inform(message,type=""){$("feedback").textContent=message;$("feedback").className="feedback"+(type?" "+type:"");}
function status(message){$("runtime").textContent=message;}
function tags(){
 const node=$("tags");node.replaceChildren();
 const values=[current.difficulty,...current.topics];
 values.forEach((value,i)=>{const span=document.createElement("span");span.className="tag"+(!i?" difficulty":"");span.textContent=value;node.append(span);});
}
function showList(){
 const search=$("search").value.toLowerCase().trim(),difficulty=$("difficulty").value,topic=$("topic").value;
 const displayed=ordered.filter(x=>(!difficulty||x.difficulty===difficulty)&&(!topic||x.topics.includes(topic))&&(!search||[x.title,x.id,...x.topics].join(" ").toLowerCase().includes(search)));
 $("visible-count").textContent=displayed.length+" shown";
 const nav=$("challenge-list");nav.replaceChildren();
 for(const challenge of displayed){
  const item=document.createElement("button");item.type="button";item.className="challenge-option"+(current?.id===challenge.id?" selected":"");
  item.setAttribute("aria-current",current?.id===challenge.id?"true":"false");
  const name=document.createElement("strong");name.textContent=challenge.title;
  const sub=document.createElement("small");sub.textContent=challenge.difficulty+" · "+challenge.points+" points";
  item.append(name,sub);item.addEventListener("click",()=>select(challenge.id));
  nav.append(item);
 }
 if(!displayed.length){const note=document.createElement("p");note.textContent="No challenges match. Change the filters.";nav.append(note);}
}
function displayExamples(){
 const area=$("examples");area.replaceChildren();
 const heading=document.createElement("h4");heading.textContent="Published examples";area.append(heading);
 current.examples.forEach((ex,i)=>{
  const box=document.createElement("div");box.className="example";
  const title=document.createElement("strong");title.textContent="Example "+(i+1);
  const label1=document.createElement("div");label1.textContent="INPUT";
  const code1=document.createElement("pre"),input=document.createElement("code");input.className="language-python";input.textContent=ex.call;code1.append(input);
  const label2=document.createElement("div");label2.textContent="EXPECTED OUTPUT";
  const code2=document.createElement("pre"),expected=document.createElement("code");expected.className="language-python";expected.textContent=ex.expected;code2.append(expected);
  box.append(title,label1,code1,label2,code2);area.append(box);
 });
}
function select(id){
 if(busy){inform("Finish the current run before choosing another challenge.");return;}
 const chosen=byId.get(id);if(!chosen)return;
 current=chosen;
 $("challenge-title").textContent=current.title;
 $("challenge-points").textContent=current.points+" pts";
 $("description").textContent="Build a solution using your existing Python skills. Read the requirements before testing your function.";
 $("scenario").innerHTML=simpleText(current.scenario);
 $("parameters").innerHTML=simpleText(current.parameters);
 $("behavior").innerHTML=simpleText(current.behavior);
 $("code").value=get("draft:"+id)??current.starter;
 $("output").textContent="Run code to see printed output or Python errors.";$("output").classList.remove("terminal-error");$("check-results").hidden=true;
 $("github-question").href="https://github.com/mswhitby/python_problems_20261026/tree/main/problems/"+encodeURIComponent(id);
 const area=$("related-lessons");area.replaceChildren();
 const rule=learningMap.requirements?.[id];
 const info=document.createElement("p");
 if(!rule){
  info.textContent="Curriculum prerequisites have not been reviewed for this challenge yet.";
 }else if(!rule.ready){
  info.textContent="Advanced challenge: not all required topics are taught in Units 01–06. Browse freely, but this question is not recommended as independent practice yet.";
 }else{
  info.textContent="These lessons provide the full foundational skills needed for this challenge:";
 }
 area.append(info);
 if(rule?.ready){
  for(const lessonId of rule.lessons){
   const link=document.createElement("a");link.href="../units/#"+encodeURIComponent(lessonId);
   const label=lessonId.split("/")[1].replace(/^\d+-/,"").replace(/-/g," ");
   link.textContent="Unit "+Number(lessonId.slice(0,2))+" · "+label.replace(/\b\w/g,c=>c.toUpperCase())+" →";
   area.append(link);
  }
 }else if(rule?.skills?.length){
  const missing=document.createElement("p");
  missing.textContent="Still to learn: "+rule.skills.join(", ")+".";
  area.append(missing);
 }
 $("skills-button").hidden=!current.skills;
 $("skills-section").hidden=true;
 $("skills-button").textContent="Additional skills walkthrough";
 $("skills-content").innerHTML="";
 displayExamples();tags();showList();
 const checked=get("pass:"+id)==="true";
 inform(checked?"Your published examples passed on this device. You can continue improving your code.":"Run code to experiment; Check answer tests the published examples.",checked?"good":"");
 try{history.replaceState(null,"","#"+id);}catch{}
}
function shutdown(){
 if(worker)worker.terminate();
 worker=null;readyPromise=null;bootResolve=null;bootReject=null;
 if(pending){clearTimeout(pending.timer);pending=null;}
}
function initPython(){
 if(readyPromise)return readyPromise;
 status("Loading Python...");
 readyPromise=new Promise((resolve,reject)=>{bootResolve=resolve;bootReject=reject;});
 try{
  worker=new Worker("../python-worker.js");
  worker.onmessage=(e)=>{
   const x=e.data||{};
   if(x.type==="ready"){status("Python ready");bootResolve?.();bootResolve=null;bootReject=null;return;}
   if(x.type==="load-error"){
    const fail=bootReject;status("Python unavailable");shutdown();
    fail?.(new Error("Could not load Python. Check the internet connection or ask the teacher for help."));
    return;
   }
   if(x.type==="result"&&pending&&x.id===pending.id){
    const request=pending;clearTimeout(request.timer);pending=null;request.resolve(x);
   }
  };
  worker.onerror=()=>{
   const fail=bootReject;const ongoing=pending;
   status("Python unavailable");shutdown();
   fail?.(new Error("Python runtime failed to load."));
   ongoing?.reject(new Error("The Python worker stopped unexpectedly."));
  };
 }catch(e){const fail=bootReject;shutdown();fail?.(e);}
 return readyPromise;
}
function runPython(code){
 return new Promise((resolve,reject)=>{
  const id=++seq;
  const timer=setTimeout(()=>{
   const old=pending;status("Execution stopped");shutdown();
   old?.reject(new Error("Code ran longer than 6 seconds. Python restarted; inspect your loops and retry."));
  },6000);
  pending={id,timer,resolve,reject};
  worker.postMessage({type:"run",id,code});
 });
}
function probe(source,cases){
 const testData=JSON.stringify(JSON.stringify(cases));
 return [
 "import ast as __ast",
 "import json as __json",
 "import io as __io",
 "import contextlib as __ctx",
 "__source = "+JSON.stringify(source),
 "__cases = __json.loads("+testData+")",
 "__records = []",
 "for __entry in __cases:",
 "    try:",
 "        __globals = {'__name__': 'student_solution'}",
 "        __capture = __io.StringIO()",
 "        with __ctx.redirect_stdout(__capture):",
 "            exec(compile(__source, 'solution.py', 'exec'), __globals)",
 "            __name=__entry['call'].split('(',1)[0].strip()",
 "            if __name not in __globals and callable(__globals.get('solution')): __globals[__name]=__globals['solution']",
 "            if not callable(__globals.get(__name)):",
 "                raise NameError('Define '+__name)",
 "            __actual = eval(compile(__ast.parse(__entry['call'], mode='eval'), 'example', 'eval'), __globals)",
 "        __expected = __ast.literal_eval(__entry['expected'])",
 "        __passed = type(__actual) is type(__expected) and __actual == __expected",
 "        __records.append({'passed': __passed, 'received': repr(__actual)[:350], 'type': type(__actual).__name__, 'message': ''})",
 "    except BaseException as __exc:",
 "        __records.append({'passed': False, 'received': '', 'type': '', 'message': (type(__exc).__name__ + ': ' + str(__exc))[:350]})",
 "print('"+marker+"' + __json.dumps(__records))"
 ].join("\n");
}
function setBusy(flag){busy=flag;for(const id of ["run","check","reset"])$(id).disabled=flag;}
async function execute(all){
 if(busy||!current)return;
 const c=current,source=$("code").value;set("draft:"+c.id,source);setBusy(true);
 const output=$("output"),checks=$("check-results");output.classList.remove("terminal-error");
 if(all){checks.hidden=false;checks.textContent="Checking published examples..."}else output.textContent="";
 try{
  await initPython();status(all?"Checking...":"Running...");
  if(!all){
   const response=await runPython(source);
   output.textContent=response.output||(response.success?"(No output. Use print() to display a value.)":"Python stopped.");
   output.classList.toggle("terminal-error",!response.success);
   inform(response.success?"Run complete. Use Check answer to test the return values.":"Review the Python error in the terminal.",response.success?"":"bad");return;
  }
  const response=await runPython(probe(source,c.examples));
  if(!response.success)throw new Error(response.output||"Python could not complete this code.");
  const line=String(response.output||"").split("\n").find(x=>x.startsWith(marker));
  if(!line)throw new Error("The checker didn't return a result.");
  const results=JSON.parse(line.slice(marker.length));
  if(results.length!==c.examples.length)throw new Error("Not all examples produced results.");
  const passed=results.filter(x=>x.passed===true).length;
  checks.textContent=results.map((r,i)=>"Example "+(i+1)+": "+(r.passed?"PASS":"NEEDS REVISION")+"\nInput: "+c.examples[i].call+"\nExpected: "+c.examples[i].expected+"\n"+(r.message?"Error: "+r.message:"Received: "+r.received)).join("\n\n");
  const errors=results.filter(x=>x.message).map(x=>x.message);
  if(errors.length){output.textContent=errors.join("\n");output.classList.add("terminal-error")}
  if(passed===results.length)set("pass:"+c.id,"true");else unset("pass:"+c.id);
  inform(passed+"/"+results.length+" published examples passed.",passed===results.length?"good":"bad");
 }catch(err){output.textContent=String(err?.message||err);output.classList.add("terminal-error");if(all)checks.textContent="The check could not finish. Review the terminal.";inform("Your draft is saved. Revise and try again.","bad")}
 finally{status("Python ready");setBusy(false)}
}
function start(){
 if(items.length!==24||new Set(items.map(x=>x.id)).size!==24){
  $("output").textContent="Challenge data is incomplete. Refresh the page or tell your teacher.";
  return;
 }
 $("total-count").textContent=items.length+" challenges";
 $("points-count").textContent=items.reduce((a,x)=>a+x.points,0)+" available points";
 const topics=[...new Set(items.flatMap(x=>x.topics))].sort();
 topics.forEach(t=>{const opt=document.createElement("option");opt.value=t;opt.textContent=t;$("topic").append(opt);});
 ["search","difficulty","topic"].forEach(id=>$(id).addEventListener(id==="search"?"input":"change",showList));
 $("skills-button").addEventListener("click",()=>{
  const open=$("skills-section").hidden;
  $("skills-section").hidden=!open;
  $("skills-button").textContent=open?"Hide walkthrough":"Additional skills walkthrough";
  if(open)$("skills-content").innerHTML=renderSkills(current.skills||"");
 });
 $("close-skills").addEventListener("click",()=>{$("skills-section").hidden=true;$("skills-button").textContent="Additional skills walkthrough";});
 $("run").addEventListener("click",()=>execute(false));
 $("check").addEventListener("click",()=>execute(true));
 $("save").addEventListener("click",()=>inform(set("draft:"+current.id,$("code").value)?"Draft saved on this browser.":"Browser storage unavailable. Use Copy code for a backup."));
 $("copy").addEventListener("click",async()=>{
  try{await navigator.clipboard.writeText($("code").value);inform("Copied. Your code is ready to paste into your own project.","good");}
  catch{inform("Clipboard access is unavailable. Select the editor text and copy it manually.");}
 });
 $("reset").addEventListener("click",()=>{
  if(!confirm("Replace your code with this challenge's original starter file?"))return;
  $("code").value=current.starter;set("draft:"+current.id,current.starter);unset("pass:"+current.id);
  $("output").textContent="Starter restored. Run an example to test it.";
  inform("Starter code restored.");showList();
 });
 $("code").addEventListener("input",()=>{set("draft:"+current.id,$("code").value);unset("pass:"+current.id);});
 $("code").addEventListener("keydown",event=>{
  if(event.key==="Tab"){
   event.preventDefault();const field=event.target;field.setRangeText("    ",field.selectionStart,field.selectionEnd,"end");field.dispatchEvent(new Event("input"));
  }
  if((event.ctrlKey||event.metaKey)&&event.key==="Enter"){event.preventDefault();execute(false);}
 });
 const hash=decodeURIComponent(location.hash.slice(1));
 select(byId.has(hash)?hash:"mood-music-label");
}
start();
})();
