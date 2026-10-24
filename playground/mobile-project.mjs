import {createConsoleDrawer} from './console-drawer.mjs?v=console-2';
import {setupStudyLayout} from './study-layout.mjs?v=projects-1';
import {buildProjectPreview} from './project-preview.mjs?v=projects-1';
const base='#/course/mobile-app-dev',data='data/mobile-app-dev/';
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const path=(id,step)=>`${base}/project/${encodeURIComponent(id)}/${encodeURIComponent(step)}`;
async function get(file){const r=await fetch(data+file);if(!r.ok)throw Error('The project could not open. Refresh to try again.');return file.endsWith('.json')?r.json():r.text()}
export async function mobileProjectPage(main,id,stepId){
 const route=location.hash,c=await get('course.json'),project=c.projects?.find(p=>p.id===id);
 if(location.hash!==route)return;
 if(!project){main.innerHTML='<h1>Project not found</h1><a href="'+base+'">Return to Mobile App &amp; Web →</a>';return}
 const index=stepId?project.steps.findIndex(s=>s.id===stepId):0;
 if(index<0){main.innerHTML='<h1>Project step not found</h1><a href="'+path(id,project.steps[0].id)+'">Start the project →</a>';return}
 const step=project.steps[index],[markdown,starter]=await Promise.all([get(step.markdown),get(project.starterFile)]);
 if(!window.PlaygroundUI)await new Promise(r=>document.addEventListener('playground-ui-ready',r,{once:true}));
 if(location.hash!==route)return;
 document.title=project.title+' · '+step.title+' | Ms. Whitby’s Playground';
 main.innerHTML=`<div class="breadcrumbs"><a href="${base}">Mobile App &amp; Web</a> / Mini-projects / ${esc(project.title)}</div><div class="mobile-layout"><aside class="course-nav"><button id="mobile-caret" class="menu-caret" aria-label="Hide course menu" aria-expanded="true">‹</button><nav id="mobile-links"><div class="side-intro"><div class="eyebrow">Guided mini-project</div><h2>${esc(project.title)}</h2><p>${esc(project.summary)}</p></div><div class="side-stats"><span>${project.steps.length} steps</span><span>One shared draft</span></div><h3>Project walkthrough</h3>${project.steps.map((s,i)=>`<a href="${path(id,s.id)}" ${i===index?'aria-current="page"':''}>${i+1}. ${esc(s.title)}<small>${esc(s.focus)}</small></a>`).join('')}<h3>Related lessons</h3>${c.lessons.filter(l=>project.skills.includes(l.competency)).map(l=>`<a href="${base}/lesson/${l.id}">${esc(l.competency)}<small>${esc(l.title)}</small></a>`).join('')}<a href="${base}/projects">All mini-projects →</a></nav></aside><article><div id="mobile-prose"><div id="project-markdown" class="markdown-body"></div>${index===project.steps.length-1?'<details id="project-example"><summary>Compare a finished example</summary><p>One possible solution. Compare small sections and explain the differences.</p><pre><code id="project-example-code" class="language-html">Open to load the example.</code></pre></details>':''}<nav class="project-step-nav" aria-label="Walkthrough steps">${index>0?`<a href="${path(id,project.steps[index-1].id)}">← ${esc(project.steps[index-1].title)}</a>`:'<span></span>'}${index<project.steps.length-1?`<a href="${path(id,project.steps[index+1].id)}">Next: ${esc(project.steps[index+1].title)} →</a>`:`<a href="${base}/projects">Back to projects →</a>`}</nav></div><section class="panel workspace"><div class="workspace-head"><strong>index.html</strong><button id="project-expand" aria-pressed="false">Expand</button></div><label class="sr-only" for="project-code">Club Connect HTML, CSS, and JavaScript code</label><textarea id="project-code" spellcheck="false" autocapitalize="off"></textarea><div class="toolbar"><button id="project-run">▶ Run code</button><button id="project-check" class="secondary">✓ Check this step</button><button id="project-save" class="secondary">Save draft</button><button id="project-reset" class="secondary">Reset project</button><button id="project-download" class="secondary">Download index.html</button></div><h2 class="h6 px-3">Your club page</h2><div class="mobile-results"><iframe id="mobile-preview" class="mobile-preview" sandbox="allow-scripts allow-forms" title="Your club page preview"></iframe><section class="mobile-console" aria-label="JavaScript console"><div class="console-resize" data-console-resize role="separator" tabindex="0" aria-label="Resize console" aria-orientation="horizontal" aria-controls="mobile-console-body" aria-valuemin="0" aria-valuemax="700" aria-valuenow="0"></div><div class="console-heading"><button data-console-toggle class="console-toggle" aria-controls="mobile-console-body" aria-expanded="false" aria-label="Open console"><strong>Console</strong><span data-console-count aria-live="polite">0</span><span data-console-caret aria-hidden="true">⌃</span></button><button data-console-clear class="secondary console-clear" aria-label="Clear console" disabled>Clear</button></div><div id="mobile-console-body" class="mobile-console-body" hidden><div id="mobile-output" role="log" aria-label="Console messages" aria-live="polite"></div></div></section></div><div class="workspace-body"><h3>Step feedback</h3><div id="project-feedback" role="status" aria-live="polite">Run your page, make a change, then check this step.</div><p id="project-save-status" role="status"></p></div></section></article></div>`;
 const $=name=>main.querySelector('#'+name),key='playground:draft:mobile-app-dev:project:'+id;
 window.PlaygroundUI.markdown($('project-markdown'),markdown);let value=starter;try{value=localStorage.getItem(key)??starter}catch{}
 $('project-code').value=value;window.PlaygroundUI.editor($('project-code'),'html');
 let disposed=false,token='',timer=null;
 const save=()=>{try{localStorage.setItem(key,$('project-code').value);return true}catch{return false}};
 $('project-code').oninput=()=>{const saved=save();$('project-save-status').textContent=saved?'Draft saved on this device.':'Storage unavailable. Download your page to keep it.';$('project-feedback').textContent='Code changed. Run or check again.'};
 $('project-save').onclick=()=>{$('project-save-status').textContent=save()?'Draft saved on this device.':'Storage unavailable. Download your page to keep it.'};
 $('project-reset').onclick=()=>{if(confirm('Restore the project starter? This replaces your draft for all four steps.')){$('project-code').value=starter;$('project-code').dispatchEvent(new Event('input'));$('mobile-preview').srcdoc='';drawer.clear();$('project-feedback').textContent='Starter restored for all steps.'}};
 $('project-download').onclick=()=>{const url=URL.createObjectURL(new Blob([$('project-code').value],{type:'text/html'}));const a=document.createElement('a');a.href=url;a.download='index.html';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000)};
 setupStudyLayout(main,{course:'mobile-app-dev',title:project.title+' · '+step.title,competency:'HTML · CSS · JavaScript',lessonNumber:index+1,lessonCount:project.steps.length,headingLabel:`Mini-project · Step ${index+1} of ${project.steps.length}`,instructionTitle:'Project walkthrough'});
 const drawer=createConsoleDrawer(main.querySelector('.mobile-console'));
 const receive=e=>{
  if(disposed||e.source!==$('mobile-preview')?.contentWindow||e.data?.token!==token)return;
  const d=e.data;
  if(d.kind==='log')drawer.append(d.text,d.level);
  if(d.kind==='clear')drawer.clear();
  if(d.kind==='ready')clearTimeout(timer);
  if(d.kind==='error'){clearTimeout(timer);drawer.append(d.text,'error');$('project-feedback').textContent='Review the error in the console, make a correction, and run again.'}
  if(d.kind==='project-checks'){
   clearTimeout(timer);const results=d.results;if(!Array.isArray(results))return;
   const area=$('project-feedback');area.replaceChildren();const summary=document.createElement('p');summary.textContent=results.filter(r=>r.pass).length+'/'+results.length+' checks passed for this step.';area.append(summary);
   const list=document.createElement('ul');for(const row of results){const li=document.createElement('li');li.textContent=(row.pass?'✓ ':'Revise: ')+row.label;list.append(li)}area.append(list);
  }
 };
 window.addEventListener('message',receive);
 function run(check){
  if(disposed)return;clearTimeout(timer);save();drawer.clear();token=crypto.randomUUID();$('project-feedback').textContent=check?'Checking this step…':'Preview updated. Try your page.';
  $('mobile-preview').srcdoc=buildProjectPreview($('project-code').value,{token,step:step.id,check});
  timer=setTimeout(()=>{if(!disposed){drawer.append('The preview did not finish. Check your scripts and try again.','error');$('project-feedback').textContent='The preview could not finish. Review the console.'}},6000);
 }
 $('project-run').onclick=()=>run(false);$('project-check').onclick=()=>run(true);
 const example=$('project-example');
 if(example)example.addEventListener('toggle',async()=>{if(!example.open||example.dataset.loaded)return;try{const code=await get(project.exampleFile);if(disposed)return;const block=$('project-example-code');block.textContent=code;example.dataset.loaded='true'}catch{if(!disposed)$('project-example-code').textContent='The example could not load. Close this section and try again.'}});
 return {dispose(){disposed=true;clearTimeout(timer);window.removeEventListener('message',receive);drawer.dispose()}};
}

export async function mobileProjectIndex(main){
 const route=location.hash,c=await get('course.json');if(location.hash!==route)return;
 document.title='Mini-projects · Mobile App & Web | Ms. Whitby’s Playground';
 main.innerHTML=`<div class="breadcrumbs"><a href="${base}">Mobile App &amp; Web</a> / Mini-projects</div><div class="eyebrow">Put your skills together</div><h1>Mini-projects</h1><p class="intro">Build something useful with a guided walkthrough. Each project connects the skills you learn in lessons.</p><div class="unit-list">${(c.projects||[]).map(p=>`<article class="unit-card"><span class="eyebrow">${p.steps.length} guided steps · ${p.skills.map(esc).join(' / ')}</span><h2>${esc(p.title)}</h2><p>${esc(p.summary)}</p><ol>${p.steps.map(step=>`<li>${esc(step.title)}</li>`).join('')}</ol><a href="${path(p.id,p.steps[0].id)}">Start the mini-project →</a></article>`).join('')}</div><p><a href="${base}">Explore the lessons →</a></p>`;
}
