(() => {
"use strict";
const list=Array.isArray(window.CS1_UNITS)?window.CS1_UNITS:[];
const $=id=>document.getElementById(id);
const store="cs1:guided:v1:";
const all=new Map(list.map(x=>[x.id,x]));
const ordered=[...list].sort((a,b)=>a.unit-b.unit||a.lesson-b.lesson);
const mapping=(window.CS1_LEARNING_MAP||{}).challengeToLessons||{};
let active=null,worker=null,ready=null,onReady=null,onFailure=null,pending=null,seq=0,busy=false;
function read(k){try{return localStorage.getItem(store+k)}catch{return null}}
function write(k,v){try{localStorage.setItem(store+k,v);return true}catch{return false}}
function erase(k){try{localStorage.removeItem(store+k)}catch{}}
function clean(s){return String(s||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}
function prose(s){return clean(s).replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>").replace(/\n\n/g,"</p><p>").replace(/^/,"<p>").concat("</p>")}
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
 if(l.existingDraftKey&&read("draft:"+id)===null){try{const prior=localStorage.getItem(l.existingDraftKey);if(prior!==null)write("draft:"+id,prior)}catch{}}
 if(l.existingPassKey&&read("pass:"+id)===null){try{if(localStorage.getItem(l.existingPassKey)==="true")write("pass:"+id,"true")}catch{}}
 $("unit").value=String(l.unit);
 $("unit-label").textContent="UNIT "+String(l.unit).padStart(2,"0")+" · LESSON "+l.lesson+" OF 4";
 $("title").textContent=l.title;$("points").textContent=l.points+" pts";
 $("summary").textContent=l.summary;$("lead").innerHTML=prose(l.summary);
 $("lesson-example").textContent=l.exampleCode;
 $("walkthrough").textContent=l.explanation;$("reflection").textContent=l.reflection;
 $("pitfall").textContent=l.pitfall;$("mission").innerHTML=prose(l.mission);
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
 l.hints.forEach((hint,i)=>{const d=document.createElement("details"),s=document.createElement("summary"),p=document.createElement("p");s.textContent="Hint "+(i+1);p.textContent=hint;d.append(s,p);hints.append(d)});
 $("output").textContent="Run an example to see what your code produces.";
 const at=ordered.findIndex(x=>x.id===l.id);
 $("previous-lesson").disabled=at===0;
 $("next-lesson").disabled=at===ordered.length-1;
 $("next-lesson").textContent=at===ordered.length-1?"All lessons complete":ordered[at+1].unit===l.unit?"Next lesson →":"Next unit →";
 const targets=$("related-challenges");targets.replaceChildren();
 const related=Object.entries(mapping).filter(([id,lessonIds])=>lessonIds.includes(l.id)).map(([id])=>id).slice(0,4);
 const intro=document.createElement("p");
 intro.textContent=related.length?"Related practice questions. Some also introduce skills not yet taught in these units.":"This foundational skill supports later challenges. Most questions also require functions, introduced in Unit 03.";
 targets.append(intro);
 for(const key of related){const a=document.createElement("a");a.href="../challenges/#"+encodeURIComponent(key);a.textContent=(window.CS1_LEARNING_MAP?.challengeNames?.[key]||key.split("-").map(s=>s.slice(0,1).toUpperCase()+s.slice(1)).join(" "))+" →";targets.append(a);}
 
 feedback(read("pass:"+id)==="true"?"You passed the public examples on this device.":"Use Run and Check to practice. Official submission happens on GitHub.",read("pass:"+id)==="true"?"good":"");
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
  worker=new Worker("../python-worker.js");
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
 "            if not callable(__env.get('solution')): raise NameError('Define solution')",
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
async function test(allCases){
 if(!active||busy)return;const l=active,source=$("code").value;write("draft:"+l.id,source);
 blocking(true);feedback(allCases?"Checking all published examples...":"Running the first example...");
 try{
  await init();status("Running...");
  const cases=allCases?l.cases:[l.cases[0]],results=[];
  if(l.mode==="script"){
   const r=await runCode(source),out=normalize(r.output);
   results.push({ok:r.success&&out===normalize(cases[0].expected),received:out,error:r.success?"":"Python error"});
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
  $("output").textContent=lines.join("\n").trim();
  const passed=passes===cases.length;
  if(allCases){
   if(passed)write("pass:"+l.id,"true");else erase("pass:"+l.id);
   feedback(passes+"/"+cases.length+" public examples passed. "+(passed?"Good work! ":"Revise and try again. ")+"GitHub submission remains separate.",passed?"good":"bad");
  }else feedback(passed?"First example passed. Use Check examples for all cases.":"Compare the expected and received output.",passed?"good":"bad");
  status("Python ready");navigation();
 }catch(err){$("output").textContent=String(err?.message||err);feedback("The check could not finish. Your draft is saved locally.","bad")}
 finally{blocking(false)}
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
 $("run").onclick=()=>test(false);$("check").onclick=()=>test(true);
 $("save").onclick=()=>feedback(write("draft:"+active.id,$("code").value)?"Draft saved on this device.":"Can't save here. Use Copy code.");
 $("copy").onclick=async()=>{try{await navigator.clipboard.writeText($("code").value);feedback("Copied code. Paste it into main.py in your GitHub fork.","good")}catch{feedback("Clipboard unavailable. Select and copy manually.")}};
 $("reset").onclick=()=>{if(!confirm("Restore starter code and replace this draft?"))return;$("code").value=active.starter;write("draft:"+active.id,active.starter);erase("pass:"+active.id);navigation();feedback("Starter restored.")};
 $("code").addEventListener("input",()=>{write("draft:"+active.id,$("code").value);erase("pass:"+active.id);navigation()});
 $("code").addEventListener("keydown",e=>{
  if(e.key==="Tab"){e.preventDefault();const a=e.target;a.setRangeText("    ",a.selectionStart,a.selectionEnd,"end");a.dispatchEvent(new Event("input"))}
  if((e.ctrlKey||e.metaKey)&&e.key==="Enter"){e.preventDefault();test(false)}
 });
 const requested=decodeURIComponent(location.hash.slice(1));select(all.has(requested)?requested:list[0].id);
}
begin();
})();