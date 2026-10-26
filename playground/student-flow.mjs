let serial=0;
// Move the existing live controls and content; never duplicate editors or student code.
export function tabPanels(host,items,label){
 const id='student-tabs-'+(++serial),nav=document.createElement('div');nav.className='student-tabs';nav.setAttribute('role','tablist');nav.setAttribute('aria-label',label);
 const buttons=items.map(([name,panel],i)=>{const b=document.createElement('button');b.type='button';b.id=id+'-tab-'+i;b.textContent=name;b.setAttribute('role','tab');b.setAttribute('aria-controls',id+'-panel-'+i);panel.id=panel.id||id+'-panel-'+i;b.setAttribute('aria-controls',panel.id);panel.setAttribute('role','tabpanel');panel.setAttribute('aria-labelledby',b.id);panel.tabIndex=0;nav.append(b);return b});
 function select(i,focus=false){items.forEach(([,panel],j)=>{panel.hidden=j!==i;buttons[j].setAttribute('aria-selected',String(i===j));buttons[j].tabIndex=i===j?0:-1});if(focus)buttons[i].focus()}
 buttons.forEach((b,i)=>{b.onclick=()=>select(i);b.onkeydown=e=>{let n=i;if(e.key==='ArrowRight')n=(i+1)%items.length;else if(e.key==='ArrowLeft')n=(i+items.length-1)%items.length;else if(e.key==='Home')n=0;else if(e.key==='End')n=items.length-1;else return;e.preventDefault();select(n,true)}});
 host.append(nav,...items.map(x=>x[1]));select(0);return name=>select(items.findIndex(x=>x[0]===name));
}
export function practiceTabs(copy,{objective,input,expected,submit,practiceNodes=[]}={}){
 if(!copy||copy.dataset.studentPractice)return;copy.dataset.studentPractice='true';
 const content=copy.querySelector('.study-panel-content,.panel-content')||copy;
 const lesson=document.createElement('div');lesson.className='student-lesson';lesson.append(...content.childNodes);
 const practice=document.createElement('div');practice.className='student-practice';
 const add=(title,text)=>{if(!text)return;const h=document.createElement('h3'),p=document.createElement('p');h.textContent=title;p.textContent=text;practice.append(h,p)};
 add('Your task',objective);add('Input',input);add('Expected result',expected);for(const node of practiceNodes)if(node)practice.append(node);
 add('What to submit',submit||'Submit your completed code for this activity. Run tests your draft; Submit hands in a separate copy.');
 const head=copy.querySelector('.study-panel-heading,.panel-heading');if(head)head.hidden=true;
 tabPanels(content,[['Practice',practice],['Lesson',lesson]],'Activity instructions');
}
export function workspaceTabs(workspace){
 if(!workspace||workspace.dataset.studentWorkspace)return;workspace.dataset.studentWorkspace='true';workspace.classList.add('student-workspace');
 const find=s=>workspace.querySelector(s),toolbar=find('.toolbar');if(!toolbar)return;
 const run=find('#run-code,#mobile-run,#project-run,#uil-run,#run'),check=find('#check-code,#mobile-check,#project-check,#uil-check,#check');
 if(run)run.textContent='Run';if(check)check.hidden=true;
 const more=document.createElement('details');more.className='student-more';const moreTitle=document.createElement('summary');moreTitle.textContent='More';more.append(moreTitle);
 for(const b of [...toolbar.querySelectorAll('button')]){if(b===run||b===check||b.closest('.submission-actions'))continue;if(/save/i.test(b.id))b.hidden=true;else if(/stop/i.test(b.id)){b.classList.add('student-stop')}else more.append(b)}
 for(const a of [...toolbar.querySelectorAll('a')])more.append(a);if(more.children.length>1)toolbar.append(more);
 const result=document.createElement('section');result.className='student-results';
 const preview=find('#mobile-preview'),consolePanel=find('.mobile-console,.csharp-terminal,.terminal-pane')||find('#output')?.parentElement;
 const console=document.createElement('div');console.className='student-result-body';
 const consoleBody=consolePanel?.querySelector('.mobile-console-body');if(consoleBody)consoleBody.hidden=false;
 if(consolePanel){if(consolePanel===workspace){const output=find('#output');if(output)console.append(output)}else console.append(consolePanel)}
 const tests=document.createElement('div');tests.className='student-result-body';
 for(const s of ['#csharp-checks','#uil-checks','#mobile-feedback','#project-feedback','#check-results','#feedback','#code-status','#uil-feedback','#project-save-status']){const n=find(s);if(n)tests.append(n)}
 const hint=document.createElement('p');hint.textContent='Run executes your code and tests the published requirements. Passing tests does not submit your work.';tests.prepend(hint);
 workspace.append(result);const items=[];if(preview){const page=document.createElement('div');page.className='student-result-body';page.append(preview);items.push(['Preview',page])}items.push(['Tests',tests],['Console',console]);
 const choose=tabPanels(result,items,'Program results');
 if(run)run.addEventListener('click',()=>choose('Tests'));
 // Submission stays attached to its existing toolbar so repeated Python selections replace it safely.
 workspace.append(toolbar);
 workspace.querySelectorAll('.workspace-help,.workspace-body>h3,.check-section>h3,.submission,.mobile-results>h2').forEach(n=>n.hidden=true);
 const autosave=document.createElement('p');autosave.className='student-autosave';autosave.textContent='Drafts save automatically. Guests save on this device; signed-in work syncs to your account.';toolbar.before(autosave);
 workspace.querySelectorAll('.workspace-body>p').forEach(n=>{if(!n.id)n.hidden=true});
 return choose;
}
export function taskSection(prose){
 if(!prose)return [];
 const heading=[...prose.querySelectorAll('h2,h3')].find(n=>/your turn|your task|what you will build|practice:|input file|requirements|try it|step goal/i.test(n.textContent));if(!heading)return [];
 const nodes=[heading];let n=heading.nextElementSibling;while(n&&!/^H[12]$/.test(n.tagName)){nodes.push(n);n=n.nextElementSibling}return nodes;
}
