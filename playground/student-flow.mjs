import {ensureWorkspaceResize} from './workspace-resize.mjs?v=home-points-1';
let serial=0;
// Move the existing live controls and content; never duplicate editors or student code.
export function tabPanels(host,items,label){
 const id='student-tabs-'+(++serial),nav=document.createElement('div');nav.className='student-tabs';nav.setAttribute('role','tablist');nav.setAttribute('aria-label',label);
 const buttons=items.map(([name,panel],i)=>{const b=document.createElement('button');b.type='button';b.id=id+'-tab-'+i;b.textContent=name;b.setAttribute('role','tab');b.setAttribute('aria-controls',id+'-panel-'+i);panel.id=panel.id||id+'-panel-'+i;b.setAttribute('aria-controls',panel.id);panel.setAttribute('role','tabpanel');panel.setAttribute('aria-labelledby',b.id);panel.tabIndex=0;nav.append(b);return b});
 function select(i,focus=false){items.forEach(([,panel],j)=>{panel.hidden=j!==i;buttons[j].setAttribute('aria-selected',String(i===j));buttons[j].tabIndex=i===j?0:-1});items[i][1].dispatchEvent(new Event('panel-selected'));if(focus)buttons[i].focus()}
 buttons.forEach((b,i)=>{b.onclick=()=>select(i);b.onkeydown=e=>{let n=i;if(e.key==='ArrowRight')n=(i+1)%items.length;else if(e.key==='ArrowLeft')n=(i+items.length-1)%items.length;else if(e.key==='Home')n=0;else if(e.key==='End')n=items.length-1;else return;e.preventDefault();select(n,true)}});
 host.append(nav,...items.map(x=>x[1]));select(0);return name=>{const i=items.findIndex(x=>x[0]===name);if(i>=0)select(i)};
}
// Both modes move the existing authored content and share the live editor and checker.
export function practiceTabs(copy,{objective,input,expected,submit,practiceNodes=[]}={}){
 if(!copy||copy.dataset.studentPractice)return;copy.dataset.studentPractice='true';
 const content=copy.querySelector('.study-panel-content,.panel-content')||copy;
 const lesson=document.createElement('div');lesson.className='student-lesson';lesson.append(...content.childNodes);
 const practice=document.createElement('div');practice.className='student-practice';
 const add=(title,text)=>{if(!text)return;const h=document.createElement('h3'),p=document.createElement('p');h.textContent=title;p.textContent=text;practice.append(h,p)};
 if(!practiceNodes.length){add('Your task',objective);add('Input',input);add('Expected result',expected)}for(const node of practiceNodes)if(node)practice.append(node);
 // Keep teacher-authored hints available during independent practice.
 const hints=lesson.querySelector('#lesson-hints,#hints');
 if(hints){const heading=document.createElement('h3');heading.textContent='Hints';practice.append(heading,hints)}
 const learn=document.createElement('div');learn.className='student-learn';
 const guide=document.createElement('section');guide.className='learn-guide';guide.setAttribute('aria-label','Step-by-step guide');
 const full=document.createElement('details');full.className='complete-lesson';const summary=document.createElement('summary');summary.textContent='Read the complete lesson';full.append(summary,lesson);learn.append(guide,full);
 let step=0;
 const build=()=>{
  if(!copy.isConnected)return;
  const steps=[{title:'Understand the task',nodes:[...practice.children].filter(n=>!n.matches('details,#lesson-hints,#hints'))}];
  const authoredHints=[...practice.querySelectorAll('details')].filter(n=>/hint/i.test(n.querySelector('summary')?.textContent||''));
  for(const hint of authoredHints)steps.push({title:hint.querySelector('summary').textContent,nodes:[...hint.children].filter(n=>n.tagName!=='SUMMARY')});
  // Use the actual published prose when no exercise-specific hints exist.
  {const prose=lesson.querySelector('.markdown-body');if(prose){const sections=[];let section;for(const node of prose.children){if(node.tagName==='H2'){section=/practice|your task|your turn|reflection|hints/i.test(node.textContent)?null:{title:node.textContent,nodes:[]};if(section)sections.push(section)}else if(section)section.nodes.push(node)}steps.splice(1,0,...sections.filter(s=>s.nodes.length).slice(0,4))}}
  if(steps.length===1){for(const [selector,title] of [['#parameters','Identify the inputs'],['#behavior','Plan the required behavior'],['#examples,#case-list','Trace the published examples']]){const node=practice.querySelector(selector);if(node)steps.push({title,nodes:[node]})}}
  steps.push({title:'Test and explain your solution',check:true});
  step=Math.min(step,steps.length-1);guide.replaceChildren();
  const status=document.createElement('p');status.className='learn-status';status.setAttribute('role','status');status.textContent=`Step ${step+1} of ${steps.length}`;
  const h=document.createElement('h3');h.textContent=steps[step].title;guide.append(status,h);
  for(const node of steps[step].nodes||[]){const clone=node.cloneNode(true);for(const el of [clone,...clone.querySelectorAll('*')]){el.removeAttribute('id');el.removeAttribute('for');el.removeAttribute('aria-controls');el.removeAttribute('aria-labelledby')}clone.querySelectorAll('input,textarea,button,select').forEach(n=>n.remove());guide.append(clone)}
  const prompt=document.createElement('p');prompt.className='learn-try';prompt.textContent=step===0?'Try it: predict one published example before editing. Identify the inputs and the required result.':steps[step].check?'Run your code, compare the actual result with every published example, and explain any change you made. Submit when you are ready.':'Try it: apply this idea to the same task in your editor. Run your code and compare the result before continuing.';guide.append(prompt);
  if(steps[step].check){const check=document.createElement('button');check.type='button';check.textContent='Check my code';check.onclick=()=>{const workspace=copy.closest('.study-grid,.grid')?.querySelector('.workspace');const control=workspace?.querySelector('#check-code,#mobile-check,#project-check,#uil-check,#check');control?.click();workspace?.querySelector('[data-result-tests]')?.click()};guide.append(check)}
  const nav=document.createElement('div');nav.className='learn-navigation';for(const [label,delta] of [['Back',-1],['Next step',1]]){const button=document.createElement('button');button.type='button';button.textContent=label;button.className='secondary';button.disabled=delta<0?step===0:step===steps.length-1;button.onclick=()=>{step+=delta;build();guide.querySelector('h3').tabIndex=-1;guide.querySelector('h3').focus()};nav.append(button)}guide.append(nav);
 };
 const head=copy.querySelector('.study-panel-heading,.panel-heading');if(head)head.hidden=true;
 tabPanels(content,[['Practice',practice],['Learn',learn]],'Activity instructions');content.querySelector('.student-tabs').classList.add('mode-switch');
 const note=document.createElement('p');note.className='mode-note';note.textContent='Same task, editor, tests, and submission. Switch any time.';content.querySelector('.student-tabs').after(note);
 // Canonical Markdown and Python lesson selections update after initial rendering.
 const observer=new MutationObserver(()=>{step=0;build()});observer.observe(practice,{childList:true,subtree:true,characterData:true});observer.observe(lesson,{childList:true,subtree:true,characterData:true});
 build();copy.refreshLearn=()=>{step=0;build()};
}
export function workspaceTabs(workspace){
 if(!workspace||workspace.dataset.studentWorkspace)return;workspace.dataset.studentWorkspace='true';workspace.classList.add('student-workspace','ws-code');workspace.classList.remove('panel');
 const find=s=>workspace.querySelector(s),toolbar=find('.toolbar');if(!toolbar)return;
 const run=find('#run-code,#mobile-run,#project-run,#uil-run,#run'),check=find('#check-code,#mobile-check,#project-check,#uil-check,#check');
 if(run)run.textContent='Run';if(check){check.hidden=false;check.textContent='Check'}toolbar.classList.add('ws-actions');
 const more=document.createElement('details');more.className='student-more';const summary=document.createElement('summary');summary.textContent='More';more.append(summary);
 for(const b of [...toolbar.querySelectorAll(':scope > button')]){if(b===run||b===check||/reset|stop/.test(b.id))continue;if(/save/.test(b.id))b.hidden=true;else more.append(b)}
 for(const a of [...toolbar.querySelectorAll(':scope > a')])more.append(a);
 const flag=document.createElement('button');flag.type='button';flag.textContent='Flag for teacher review';flag.onclick=()=>{
  const dialog=document.createElement('dialog');dialog.className='review-dialog';dialog.setAttribute('aria-label','Flag for teacher review');
  dialog.innerHTML='<form><h2>Flag for teacher review</h2><p>Describe the issue with the task or result. Your teacher receives this activity and your note. This does not submit your work.</p><label>Your note<textarea name="note" rows="4" maxlength="1000" required></textarea></label><p role="status"></p><div class="actions"><button type="button" data-cancel>Cancel</button><button type="submit">Send flag</button></div></form>';
  document.body.append(dialog);dialog.querySelector('[data-cancel]').onclick=()=>dialog.close();dialog.addEventListener('close',()=>dialog.remove(),{once:true});dialog.querySelector('form').onsubmit=async e=>{e.preventDefault();const button=dialog.querySelector('[type=submit]'),status=dialog.querySelector('[role=status]');button.disabled=true;try{await window.PlaygroundAccount.flagForReview(dialog.querySelector('textarea').value);status.textContent='Flag saved for your teacher. Your work has not been submitted.';button.hidden=true;dialog.querySelector('[data-cancel]').textContent='Close'}catch(error){status.textContent=error.message;button.disabled=false}};dialog.showModal();dialog.querySelector('textarea').focus();
 };more.append(flag);toolbar.append(more);
 const submission=find('.submission-actions'),pageHead=workspace.closest('article')?.querySelector('.lesson-heading');if(submission&&pageHead){submission.classList.add('ws-submit');pageHead.append(submission)}
 const editorGrip=find('.study-resize-height,.resize-height');if(editorGrip)editorGrip.after(toolbar);
 const result=document.createElement('div');result.className='ws-output';result.setAttribute('aria-label','Program output and checks');
 const preview=find('#mobile-preview'),console=find('.mobile-console,.csharp-terminal,.terminal-pane'),output=find('#output');
 const consolePanel=document.createElement('section'),checksPanel=document.createElement('section'),previewPanel=document.createElement('section');
 consolePanel.className='output-console';checksPanel.className='output-checks';previewPanel.className='output-preview';
 if(preview){const grip=preview.nextElementSibling;previewPanel.append(preview);if(grip?.classList.contains('study-resize-height'))previewPanel.append(grip)}
 if(console){consolePanel.append(console);consolePanel.addEventListener('panel-selected',()=>{const toggle=console.querySelector('[data-console-toggle]');if(toggle?.getAttribute('aria-expanded')==='false')toggle.click()})}else if(output){const label=output.previousElementSibling;if(label?.classList.contains('console-heading'))consolePanel.append(label);consolePanel.append(output)}
 for(const selector of ['#csharp-checks','#uil-checks','#mobile-feedback','#project-feedback','#check-results','#feedback','#code-status','#uil-feedback','#project-save-status','#python-feedback']){const node=find(selector);if(node)checksPanel.append(node)}
 const empty=document.createElement('p');empty.className='checks-empty fine';empty.textContent='Press Check to test your code against the published requirements.';checksPanel.prepend(empty);
 const update=()=>{const hidden=[...checksPanel.children].some(n=>n!==empty&&!n.hidden&&n.textContent.trim());if(empty.hidden!==hidden)empty.hidden=hidden};new MutationObserver(update).observe(checksPanel,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['hidden']});
 workspace.append(result);workspace.querySelector('.mobile-results')?.remove();const items=[['Console',consolePanel],['Checks',checksPanel]];if(preview)items.push(['Preview',previewPanel]);const select=tabPanels(result,items,'Workspace output');
 result.querySelectorAll('[role="tab"]')[1].dataset.resultTests='';
 workspace.querySelectorAll('.workspace-help,.workspace-body,.check-section,.submission,:scope > .h6').forEach(n=>{if(!n.querySelector('input,textarea,button'))n.hidden=true});
 check?.addEventListener('click',()=>select('Checks'));run?.addEventListener('click',()=>select(preview?'Preview':'Console'));
 ensureWorkspaceResize(workspace);return ()=>{};
}
export function taskSection(prose){
 if(!prose)return [];
 const heading=[...prose.querySelectorAll('h2,h3')].find(n=>/your turn|your task|what you will build|practice(?:\s*:|$)|input file|requirements|try it|step goal/i.test(n.textContent));if(!heading)return [];
 const nodes=[heading];let n=heading.nextElementSibling;while(n&&!/^H[12]$/.test(n.tagName)){nodes.push(n);n=n.nextElementSibling}return nodes;
}
