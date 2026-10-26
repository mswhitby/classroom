(() => {
"use strict";
const list=Array.isArray(window.CS1_UNITS)?window.CS1_UNITS:[];
const $=id=>document.getElementById(id);
const store="cs1:guided:v1:";
const all=new Map(list.map(x=>[x.id,x]));
const ordered=[...list].sort((a,b)=>a.unit-b.unit||a.lesson-b.lesson);
const requirements=(window.CS1_LEARNING_MAP||{}).requirements||{};
let active=null,worker=null,ready=null,onReady=null,onFailure=null,pending=null,seq=0,busy=false;
function read(k){try{return window.PlaygroundAccount.storage.getItem(store+k)}catch{return null}}
function write(k,v){try{window.PlaygroundAccount.storage.setItem(store+k,v);return true}catch{return false}}
function erase(k){try{window.PlaygroundAccount.storage.removeItem(store+k)}catch{}}
function clean(s){return String(s??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}
function inline(s){
 return clean(s).replace(/`([^`]+)`/g,"<code>$1</code>").replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>");
}
function prose(s){
 return String(s??"").split(/\n\s*\n/).filter(x=>x.trim()).map(p=>"<p>"+p.trim().split("\n").map(inline).join("<br>")+"</p>").join("");
}
function feedback(s,mode=""){$("feedback").textContent=s;$("feedback").className="feedback"+(mode?" "+mode:"")}
function status(s){$("runtime").textContent=s}
function navigation(){
 const shown=list.filter(l=>!$("unit").value||String(l.unit)===$("unit").value).sort((a,b)=>a.unit-b.unit||a.lesson-b.lesson);
 $("visible").textContent=shown.length+" lessons";
 const nav=$("lesson-list");nav.replaceChildren();
 for(const l of shown){
  const btn=document.createElement("button");btn.type="button";btn.className="challenge-option"+(active?.id===l.id?" selected":"");
  const title=document.createElement("strong");title.textContent=l.title;
  const sub=document.createElement("small");sub.textContent="Unit "+l.unit+" · Lesson "+l.lesson+" · "+l.points+" points"+(read("pass:"+l.id)==="true"?" · ✓ checked":"");
  btn.append(title,sub);btn.onclick=()=>select(l.id);nav.append(btn);
 }
 $("progress").textContent=list.filter(l=>read("pass:"+l.id)==="true").length+"/"+list.length+" checked";
}
function select(id){
 if(busy){feedback("Finish the current run before changing lessons.");return;}
 const l=all.get(id);if(!l)return;active=l;
 window.PlaygroundAccount.mountSubmission({anchor:$("save"),course_id:"computer-science-1",activity_id:"lesson:"+id,activity_kind:"lesson",getFiles:()=>({"main.py":$("code").value})});
 if(!window.PlaygroundAccount.signedIn&&l.existingDraftKey&&read("draft:"+id)===null){try{const prior=window.PlaygroundAccount.storage.getItem(l.existingDraftKey);if(prior!==null)write("draft:"+id,prior)}catch{}}
 if(!window.PlaygroundAccount.signedIn&&l.existingPassKey&&read("pass:"+id)===null){try{if(window.PlaygroundAccount.storage.getItem(l.existingPassKey)==="true")write("pass:"+id,"true")}catch{}}
 $("unit").value=String(l.unit);
 $("unit-label").textContent="UNIT "+String(l.unit).padStart(2,"0")+" · LESSON "+l.lesson+" OF 4";
 $("title").textContent=l.title;$("points").textContent=l.points+" pts";
 $("summary").innerHTML=inline(l.summary);
 const body=$("lesson-markdown");body.textContent="Opening lesson…";
 const renderLesson=async()=>{try{
  const path="content/"+l.markdown;
  let r;try{r=await fetch("https://raw.githubusercontent.com/mswhitby/computer-science-1/main/units/"+l.markdown,{cache:"no-cache",signal:AbortSignal.timeout(4000)});if(!r.ok)throw Error()}catch{r=await fetch(path)}if(!r.ok)throw Error("Lesson unavailable");
  const text=await r.text();if(active?.id!==id)return;
  if(!window.PlaygroundUI){await new Promise(resolve=>document.addEventListener('playground-ui-ready',resolve,{once:true}));if(active?.id!==id)return}
  window.PlaygroundUI.markdown(body,text,"https://github.com/mswhitby/computer-science-1/blob/main/units/"+l.markdown);
  document.getElementById('python-task-details')?.remove();const details=document.createElement('div');details.id='python-task-details';details.append(...window.StudentFlow.taskSection(body));document.getElementById('practice-input')?.after(details);
 }catch{if(active?.id===id)body.innerHTML='<p>The lesson could not open. Refresh to try again, or use the complete lesson link below.</p>'}};
 renderLesson();
 $("mode-label").textContent=l.mode==="script"?"CHECK CONSOLE OUTPUT":"CHECK RETURN VALUES";
 $("code").value=read("draft:"+id)??l.starter;
 $("full-lesson").href="https://github.com/mswhitby/computer-science-1/blob/main/units/"+l.markdown;
 const tags=$("concept-tag");tags.replaceChildren();const t=document.createElement("span");t.className="tag difficulty";t.textContent=l.concept;tags.append(t);
 const examples=$("case-list");examples.replaceChildren();const h=document.createElement("h4");h.textContent="Published examples";examples.append(h);
 l.cases.forEach((c,i)=>{
  const box=document.createElement("div"),strong=document.createElement("strong");box.className="example";strong.textContent="Example "+(i+1);box.append(strong);
  if(c.call){const lbl=document.createElement("div");lbl.textContent="INPUT";const p=document.createElement("pre");p.textContent=c.call;box.append(lbl,p);}
  const output=document.createElement("div");output.textContent=l.mode==="script"?"EXPECTED OUTPUT":"EXPECTED RETURN";
  const p=document.createElement("pre");p.textContent=c.expected;box.append(output,p);examples.append(box);
 });
 const hints=$("lesson-hints");hints.replaceChildren();
 l.hints.forEach((hint,i)=>{const d=document.createElement("details"),s=document.createElement("summary"),p=document.createElement("p");s.textContent="Hint "+(i+1);p.innerHTML=inline(hint);d.append(s,p);hints.append(d)});
 $("output").textContent="Run code to see printed output or Python errors here.";
 $("check-results").textContent="";$("check-results").hidden=true;$("run-status").textContent="Ready to run";
 const at=ordered.findIndex(x=>x.id===l.id);
 $("previous-lesson").disabled=at===0;
 $("next-lesson").disabled=at===ordered.length-1;
 $("next-lesson").textContent=at===ordered.length-1?"All lessons complete":ordered[at+1].unit===l.unit?"Next lesson →":"Next unit →";
 const targets=$("related-challenges");targets.replaceChildren();
 const eligible=Object.entries(requirements).filter(([key,rule])=>{
  if(!rule.ready||!Array.isArray(rule.lessons)||!rule.lessons.includes(l.id))return false;
  const unlocked=ordered.findIndex(x=>x.id===rule.readyAfter);
  return unlocked>=0&&unlocked<=at;
 }).map(([key])=>key).slice(0,4);
 const intro=document.createElement("p");
 if(!eligible.length){
  intro.textContent="No challenge is fully supported by the lessons completed at this point. Keep learning—or browse the full bank for optional advanced exploration.";
 }else{
  intro.textContent="Ready for independent practice: these challenges use skills taught through this lesson.";
 }
 targets.append(intro);
 for(const key of eligible){
  const a=document.createElement("a");a.href="../challenges/#"+encodeURIComponent(key);
  a.textContent=(window.CS1_LEARNING_MAP?.challengeNames?.[key]||key)+" →";
  targets.append(a);
 }

 feedback(read("pass:"+id)==="true"?"You passed the public examples on this device.":"Run executes your code and tests the published examples.",read("pass:"+id)==="true"?"good":"");
 const copy=document.getElementById('lesson-instructions');
 const summary=document.createElement('p');summary.id='practice-objective';summary.textContent=l.summary;
 const input=document.createElement('p');input.id='practice-input';input.textContent=l.mode==='script'?'Input: no keyboard input. Write a program that prints the expected lines below.':'Input: the checker calls your function using the arguments below. Return the expected value; printing is optional.';
 if(!copy.dataset.studentPractice)window.StudentFlow.practiceTabs(copy,{objective:'Complete main.py using the requirements and examples below.',practiceNodes:[summary,input,$('case-list')]});else{document.getElementById('practice-objective').textContent=l.summary;document.getElementById('practice-input').textContent=input.textContent}
 window.StudentFlow.workspaceTabs(document.querySelector('.workspace'));
 navigation();try{history.replaceState(null,"","#"+encodeURIComponent(id))}catch{}
}
function stop(){
 if(worker)worker.terminate();worker=null;ready=null;onReady=null;onFailure=null;
 if(pending){clearTimeout(pending.timer);pending=null}
}
function init(){
 if(ready)return ready;status("Loading Python...");
 ready=new Promise((resolve,reject)=>{onReady=resolve;onFailure=reject});
 try{
  worker=new Worker("../python-worker.js?v=20261023-terminal");
  worker.onmessage=e=>{
   const v=e.data||{};
   if(v.type==="ready"){status("Python ready");onReady?.();onReady=null;onFailure=null;return}
   if(v.type==="load-error"){const fail=onFailure;stop();status("Python unavailable");fail?.(new Error("Python could not load on this network."));return}
   if(v.type==="result"&&pending&&v.id===pending.id){const p=pending;clearTimeout(p.timer);pending=null;p.resolve(v)}
  };
  worker.onerror=()=>{const f=onFailure,p=pending;stop();status("Python unavailable");f?.(new Error("Python worker unavailable"));p?.reject(new Error("Python worker stopped"))};
 }catch(err){const f=onFailure;stop();f?.(err)}
 return ready;
}
function runCode(code){
 return new Promise((resolve,reject)=>{
  const id=++seq;
  const timer=setTimeout(()=>{const p=pending;stop();status("Python restarted");p?.reject(new Error("Execution timed out after 6 seconds."))},6000);
  pending={id,timer,resolve,reject};
  worker.postMessage({type:"run",id,code});
 });
}
function harness(source,cases){
 const data=JSON.stringify(JSON.stringify(cases));
 return [
 "import ast as __ast","import io as __io","import json as __json","import contextlib as __ctx",
 "__student = "+JSON.stringify(source),
 "__cases = __json.loads("+data+")",
 "__results=[]",
 "for __case in __cases:",
 "    try:",
 "        __env={'__name__':'student'}",
 "        with __ctx.redirect_stdout(__io.StringIO()):",
 "            exec(compile(__student,'main.py','exec'),__env)",
 "            __name=__case['call'].split('(',1)[0].strip()",
 "            if __name not in __env and callable(__env.get('solution')): __env[__name]=__env['solution']",
 "            if not callable(__env.get(__name)): raise NameError('Define '+__name)",
 "            __actual=eval(compile(__ast.parse(__case['call'],mode='eval'),'case','eval'),__env)",
 "        __expected=__ast.literal_eval(__case['expected'])",
 "        __ok=type(__actual) is type(__expected) and __actual==__expected",
 "        __results.append({'ok':__ok,'received':repr(__actual)[:300],'error':''})",
 "    except BaseException as __ex:",
 "        __results.append({'ok':False,'received':'','error':(type(__ex).__name__+': '+str(__ex))[:300]})",
 "print('UNIT_TEST_RESULTS='+__json.dumps(__results))"
 ].join("\n")
}
function normalize(s){return String(s||"").replace(/\r\n/g,"\n").replace(/\n$/,"")}
function blocking(on){busy=on;for(const id of ["run","check","reset"])$(id).disabled=on}
async function runStudentCode(){
 if(!active||busy)return;
 const source=$("code").value;
 write("draft:"+active.id,source);
 blocking(true);$("output").classList.remove("terminal-error");$("output").textContent="";$("run-status").textContent="Running...";
 try{
  await init();status("Running...");
  const result=await runCode(source);
  $("output").classList.toggle("terminal-error",!result.success);$("output").textContent=result.output||(result.success?"(No output. Use print() to display a value.)":"Python stopped without output.");
  $("run-status").textContent=result.success?"Run complete":"Python error";
  status("Python ready");
 }catch(err){
  $("output").classList.add("terminal-error");$("output").textContent=String(err?.message||err);
  $("run-status").textContent="Run could not finish";
 }finally{blocking(false)}
}
async function checkAnswer(){
 if(!active||busy)return;
 const l=active,source=$("code").value;write("draft:"+l.id,source);
 blocking(true);$("check-results").hidden=false;$("check-results").textContent="Checking...";
 feedback("Checking all published examples...");
 try{
  await init();status("Checking...");
  const cases=l.cases,results=[];
  if(l.mode==="script"){
   const r=await runCode(source),out=normalize(r.output);
   $("output").classList.toggle("terminal-error",!r.success);$("output").textContent=r.output||(r.success?"(No output. Use print() to display a value.)":"Python stopped without output.");
   $("run-status").textContent=r.success?"Run complete":"Python error";
   results.push({ok:r.success&&out===normalize(cases[0].expected),received:out,error:r.success?"":"Python error — see the terminal"});
  }else{
   const r=await runCode(harness(source,cases));
   if(!r.success)throw new Error(r.output);
   const line=String(r.output||"").split("\n").find(x=>x.startsWith("UNIT_TEST_RESULTS="));
   if(!line)throw new Error("No checker response.");
   results.push(...JSON.parse(line.slice("UNIT_TEST_RESULTS=".length)));
  }
  if(results.length!==cases.length)throw new Error("Checker returned incomplete feedback");
  let passes=0,lines=[];
  results.forEach((r,i)=>{
   if(r.ok)passes++;
   lines.push("Example "+(i+1)+": "+(r.ok?"PASS":"NEEDS REVISION"));
   if(cases[i].call)lines.push("Input: "+cases[i].call);
   lines.push("Expected: "+cases[i].expected);
   lines.push(r.error?"Error: "+r.error:"Received: "+r.received);
   lines.push("");
  });
  const errors=results.filter(r=>r.error).map(r=>r.error);if(errors.length){$("output").textContent=errors.join("\n");$("output").classList.add("terminal-error")}
  $("check-results").textContent=lines.join("\n").trim();
  const passed=passes===cases.length;
  window.PlaygroundAccount.recordAttempt("computer-science-1","lesson:"+l.id,"lesson",{passed,passedCases:passes,totalCases:cases.length});
  if(passed)write("pass:"+l.id,"true");else erase("pass:"+l.id);
  feedback(passes+"/"+cases.length+" public examples passed. "+(passed?"Good work! ":"Revise and try again. ")+"Try additional inputs to explore boundary cases.",passed?"good":"bad");
  status("Python ready");navigation();
 }catch(err){
  $("check-results").textContent=String(err?.message||err);
  feedback("The check could not finish. Your draft is saved locally.","bad");
 }finally{blocking(false)}
}

function setupWorkspaceSizing(){
 const panel=$("coding-workspace");
 if(!panel||!$("workspace-divider")||!$("expand-workspace"))return;
 const grid=panel.parentElement;
 const widthHandle=$("workspace-divider"),expand=$("expand-workspace");
 const clamp=(n,min,max)=>Math.max(min,Math.min(max,n));
 function bindHandle(handle,{initial,min,max,axis,apply,measure,key}){
  let value=initial,drag=null;
  function set(n){
   value=clamp(n,min,max);apply(value);
   handle.setAttribute("aria-valuenow",String(Math.round(value)));
   handle.setAttribute("aria-valuetext",Math.round(value)+(axis==="width"?" percent lesson width":" pixels"));
   write("layout:"+key,String(value));
  }
  const saved=read("layout:"+key);
  set(saved!==null&&Number.isFinite(Number(saved))?Number(saved):initial);
  handle.addEventListener("pointerdown",e=>{
   if(e.button!==0)return;
   e.preventDefault();handle.focus();
   drag={start:axis==="width"?e.clientX:e.clientY,value,extent:measure()};
   handle.setPointerCapture(e.pointerId);
   document.body.classList.add("workspace-resizing");
  });
  handle.addEventListener("pointermove",e=>{
   if(!drag)return;
   const delta=(axis==="width"?e.clientX:e.clientY)-drag.start;
   set(drag.value+(axis==="width"?delta/drag.extent*100:delta));
  });
  function finish(){drag=null;document.body.classList.remove("workspace-resizing")}
  handle.addEventListener("pointerup",finish);
  handle.addEventListener("pointercancel",finish);
  handle.addEventListener("lostpointercapture",finish);
  handle.addEventListener("dblclick",()=>set(initial));
  handle.addEventListener("keydown",e=>{
   const minus=axis==="width"?"ArrowLeft":"ArrowUp",plus=axis==="width"?"ArrowRight":"ArrowDown";
   if(e.key===minus||e.key===plus){e.preventDefault();set(value+(e.key===plus?1:-1)*(axis==="width"?2:20)*(e.shiftKey?5:1))}
   else if(e.key==="Home"){e.preventDefault();set(min)}
   else if(e.key==="End"){e.preventDefault();set(max)}
  });
 }
 bindHandle(widthHandle,{initial:48,min:25,max:65,axis:"width",key:"lesson-width",
  measure:()=>Math.max(1,grid.getBoundingClientRect().width),
  apply:n=>grid.style.setProperty("--lesson-width",n+"%")});
 bindHandle($("editor-height-divider"),{initial:360,min:180,max:1400,axis:"height",key:"editor-height",
  measure:()=>1,apply:n=>panel.style.setProperty("--editor-height",n+"px")});
 bindHandle($("terminal-height-divider"),{initial:170,min:100,max:1000,axis:"height",key:"terminal-height",
  measure:()=>1,apply:n=>panel.style.setProperty("--terminal-height",n+"px")});
 function setExpanded(on){
  panel.classList.toggle("is-expanded",on);document.body.classList.toggle("workspace-expanded",on);
  expand.setAttribute("aria-pressed",String(on));expand.textContent=on?"↙ Restore workspace":"⛶ Expand workspace";
  if(on)panel.scrollTop=0;
  else expand.focus();
 }
 expand.addEventListener("click",()=>setExpanded(!panel.classList.contains("is-expanded")));
 document.addEventListener("keydown",e=>{if(e.key==="Escape"&&panel.classList.contains("is-expanded")){e.preventDefault();setExpanded(false)}});
}

function begin(){
 if(list.length!==24||all.size!==24){$("output").textContent="Incomplete lesson data. Refresh or tell your teacher.";return;}
 for(let n=1;n<=6;n++){
  const l=list.find(x=>x.unit===n),opt=document.createElement("option");opt.value=String(n);opt.textContent="Unit "+n+" — "+l.unitName;$("unit").append(opt);
 }
 $("unit").onchange=()=>{
  if(!$("unit").value){navigation();return;}
  const l=ordered.find(x=>String(x.unit)===$("unit").value);if(l)select(l.id);
 };
 $("previous-lesson").onclick=()=>{const i=ordered.findIndex(x=>x.id===active?.id);if(i>0){select(ordered[i-1].id);$("title").scrollIntoView?.({block:"start",behavior:"smooth"})}};
 $("next-lesson").onclick=()=>{const i=ordered.findIndex(x=>x.id===active?.id);if(i>=0&&i<ordered.length-1){select(ordered[i+1].id);$("title").scrollIntoView?.({block:"start",behavior:"smooth"})}};
 $("run").onclick=checkAnswer;$("check").onclick=checkAnswer;
 $("save").onclick=()=>feedback(write("draft:"+active.id,$("code").value)?"Draft saved on this device.":"Can't save here. Use Copy code.");
 $("copy").onclick=async()=>{try{await navigator.clipboard.writeText($("code").value);feedback("Copied. Keep a backup or paste it into your own project.","good")}catch{feedback("Clipboard unavailable. Select and copy manually.")}};
 $("reset").onclick=()=>{if(!confirm("Restore starter code and replace this draft?"))return;$("code").value=active.starter;write("draft:"+active.id,active.starter);erase("pass:"+active.id);$("check-results").textContent="";$("check-results").hidden=true;$("output").textContent="Run code to see printed output or Python errors here.";$("run-status").textContent="Ready to run";navigation();feedback("Starter restored.")};
 $("code").addEventListener("input",()=>{write("draft:"+active.id,$("code").value);erase("pass:"+active.id);$("check-results").hidden=true;$("check-results").textContent="";feedback("Code changed. Run to test the requirements.");navigation()});
 $("code").addEventListener("keydown",e=>{
  if(e.key==="Tab"){e.preventDefault();const a=e.target;a.setRangeText("    ",a.selectionStart,a.selectionEnd,"end");a.dispatchEvent(new Event("input"))}
  if((e.ctrlKey||e.metaKey)&&e.key==="Enter"){e.preventDefault();runStudentCode()}
 });
 const requested=decodeURIComponent(location.hash.slice(1));select(all.has(requested)?requested:list[0].id);
}
setupWorkspaceSizing();
begin();
})();