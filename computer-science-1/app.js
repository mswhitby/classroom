(() => {
"use strict";
const lessons=window.CS1_LESSONS;
const $=(id)=>document.getElementById(id);
const key="cs1:unit01:";
const unitURL="https://github.com/mswhitby/computer-science-1/blob/main/units/01-how-programs-work/";
let index=0, busy=false, worker=null, readyPromise=null, readyResolve=null, readyReject=null, pending=null, seq=0;
function read(id){try{return localStorage.getItem(key+id);}catch{return null;}}
function write(id,value){try{localStorage.setItem(key+id,value);return true;}catch{return false;}}
function erase(id){try{localStorage.removeItem(key+id);}catch{}}
function status(text){$("runtime").textContent=text;}
function inform(text,type=""){const box=$("feedback");box.textContent=text;box.className="feedback"+(type?" "+type:"");}
function refreshProgress(){
 const completed=lessons.filter(l=>read("pass:"+l.id)==="true").length;
 $("progress-count").textContent=completed+" of "+lessons.length;
 $("progress-fill").style.width=(100*completed/lessons.length)+"%";
}
function navigation(){
 const parent=$("lesson-nav");parent.replaceChildren();
 lessons.forEach((lesson,i)=>{
   const btn=document.createElement("button");btn.type="button";btn.className="step";
   btn.setAttribute("aria-current",i===index?"step":"false");
   const num=document.createElement("span");num.className="step-num";num.textContent=String(i+1).padStart(2,"0");
   const group=document.createElement("span");
   const name=document.createElement("strong");name.textContent=lesson.label;
   const detail=document.createElement("small");detail.textContent=i===3?"Cumulative project":"Lesson "+(i+1);
   group.append(name,detail);btn.append(num,group);
   if(read("pass:"+lesson.id)==="true"){
     const check=document.createElement("span");check.className="done";check.textContent="✓";
     check.setAttribute("aria-label","Passed");btn.append(check);
   }
   btn.addEventListener("click",()=>select(i));parent.append(btn);
 });
}
function select(i){
 if(busy){inform("Finish running your code before switching lessons.");return;}
 if(!Number.isInteger(i)||i<0||i>=lessons.length)return;
 index=i;const l=lessons[i];
 $("position").textContent="LESSON "+(i+1)+" OF "+lessons.length;
 $("title").textContent=l.title;
 $("subtitle").textContent=l.summary;
 $("lesson-content").innerHTML=l.text; // Only trusted, authored lesson data.
 $("exercise-count").textContent="EXERCISE "+String(i+1).padStart(2,"0");
 $("exercise-title").textContent=l.exercise;
 $("prompt").textContent=l.prompt;
 $("expected").textContent=l.expected;
 $("code").value=read("draft:"+l.id)??l.starter;
 $("output").textContent="Select Run code to see what Python produces.";
 $("lesson-link").href=unitURL+l.file;
 const list=$("hint-list");list.replaceChildren();
 l.hints.forEach((hint,n)=>{
   const details=document.createElement("details");
   const summary=document.createElement("summary");summary.textContent="Hint "+(n+1);
   const p=document.createElement("p");p.textContent=hint;
   details.append(summary,p);list.append(details);
 });
 inform("Checking code here is for practice. It does not submit your work.");
 navigation();refreshProgress();
 try{history.replaceState(null,"","#"+l.id);}catch{}
}
function stopWorker(){
 if(worker)worker.terminate();worker=null;readyPromise=null;readyResolve=null;readyReject=null;
 if(pending){clearTimeout(pending.timer);pending=null;}
}
function boot(){
 if(readyPromise)return readyPromise;
 status("Loading Python…");
 readyPromise=new Promise((resolve,reject)=>{readyResolve=resolve;readyReject=reject;});
 try{
   worker=new Worker("./python-worker.js");
   worker.onmessage=(event)=>{
     const message=event.data;
     if(message.type==="ready"){status("Python ready");readyResolve?.();readyResolve=null;readyReject=null;return;}
     if(message.type==="load-error"){
       status("Python unavailable");
       readyReject?.(new Error("Could not load Python. Check your internet connection and whether the school network permits cdn.jsdelivr.net."));
       stopWorker();return;
     }
     if(message.type==="result" && pending && message.id===pending.id){
       const active=pending;clearTimeout(active.timer);pending=null;
       active.resolve(message);
     }
   };
   worker.onerror=()=>{
     status("Python unavailable");
     readyReject?.(new Error("The Python runtime failed to load. Check browser or network restrictions."));
     if(pending)pending.reject(new Error("Python worker error"));
     stopWorker();
   };
 }catch(error){
   status("Python unavailable");readyReject?.(error);stopWorker();
 }
 return readyPromise;
}
function setBusy(flag){
 busy=flag;
 for(const id of ["run","check","reset"])$(id).disabled=flag;
}
function runPython(code){
 return new Promise((resolve,reject)=>{
   const id=++seq;
   const timer=setTimeout(()=>{
     status("Execution stopped");
     reject(new Error("This program took longer than 5 seconds. The Python worker was restarted."));
     stopWorker();
   },5000);
   pending={id,resolve,reject,timer};
   worker.postMessage({type:"run",code,id});
 });
}
function normalized(str){return str.replace(/\r\n/g,"\n").replace(/\n$/,"");}
async function execute(check){
 if(busy)return;
 const lesson=lessons[index],code=$("code").value;
 write("draft:"+lesson.id,code);
 setBusy(true);status("Starting…");inform(check?"Checking your output…":"Running your code…");
 try{
   await boot();
   status("Running…");
   const result=await runPython(code);
   status(result.success?"Python ready":"Python error");
   $("output").textContent=result.output||"(Program finished without printing anything.)";
   if(!check){
     inform(result.success?"Program ran. Compare your output with the task, or click Check.":"Python reported an error. Read the console and try again.",result.success?"":"bad");
   }else if(!result.success){
     erase("pass:"+lesson.id);
     inform("Your program couldn't finish. Read the error in the console, make a correction, and check again.","bad");
   }else if(normalized(result.output)===lesson.expected){
     if(lesson.id==="04-robotics-status"){
       const hasCustomComment=code.split("\n").some(line=>/^\s*#\s*\S/.test(line)&&!line.includes("Write a three-line")&&!line.includes("Include a comment explaining"));
       if(!hasCustomComment){
         erase("pass:"+lesson.id);
         inform("The output matches! Add your own short comment explaining this program, then check again.","bad");
       }else{
         write("pass:"+lesson.id,"true");
         inform("✓ Correct output and a comment are present. Great work! Save or copy your code for GitHub submission.","good");
       }
     }else{
       write("pass:"+lesson.id,"true");
       inform("✓ Your output matches the requirements. You can continue or improve your code.","good");
     }
   }else{
     erase("pass:"+lesson.id);
     inform("Not quite. Compare every output line with the expected result. Check capitalization, spelling, spaces, and order.","bad");
   }
   navigation();refreshProgress();
 }catch(error){
   $("output").textContent=String(error.message||error);
   inform("The Python runtime could not complete this run. Your draft is still saved in this browser.","bad");
 }finally{setBusy(false);}
}
function start(){
 if(!Array.isArray(lessons)||!lessons.length)return;
 $("run").addEventListener("click",()=>execute(false));
 $("check").addEventListener("click",()=>execute(true));
 $("save").addEventListener("click",()=>{
   inform(write("draft:"+lessons[index].id,$("code").value)?"Draft saved on this device.":"Browser storage is unavailable. Use Copy to keep your code.");
 });
 $("copy").addEventListener("click",async()=>{
   try{await navigator.clipboard.writeText($("code").value);inform("Copied! Paste it into the matching main.py file in your GitHub fork.","good");}
   catch{inform("Clipboard permission isn't available. Select your code and copy it manually.");}
 });
 $("reset").addEventListener("click",()=>{
   if(!confirm("Restore this exercise's starter code? Your edited draft will be replaced."))return;
   const l=lessons[index];$("code").value=l.starter;write("draft:"+l.id,l.starter);erase("pass:"+l.id);
   $("output").textContent="Starter code restored. Run your program when ready.";
   inform("Starter restored. Your previous draft for this exercise has been replaced.");
   navigation();refreshProgress();
 });
 $("code").addEventListener("input",()=>{
   const l=lessons[index];write("draft:"+l.id,$("code").value);
   if(read("pass:"+l.id)==="true"){erase("pass:"+l.id);navigation();refreshProgress();}
 });
 $("code").addEventListener("keydown",(e)=>{
   if(e.key==="Tab"){
     e.preventDefault();const area=e.target;const a=area.selectionStart,b=area.selectionEnd;
     area.setRangeText("    ",a,b,"end");area.dispatchEvent(new Event("input"));
   }
   if((e.ctrlKey||e.metaKey)&&e.key==="Enter"){e.preventDefault();execute(false);}
 });
 const fromHash=lessons.findIndex(x=>"#"+x.id===location.hash);
 select(fromHash>=0?fromHash:0);
}
start();
})();