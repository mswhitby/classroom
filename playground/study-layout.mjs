import {practiceTabs,workspaceTabs,taskSection} from './student-flow.mjs?v=redesign-2';
let currentCleanup=()=>{};
export function disposeStudyLayout(){currentCleanup();currentCleanup=()=>{};document.body.classList.remove('study-page','ws','workspace-expanded','workspace-resizing');document.querySelector('main')?.classList.remove('study-main')}
const separator=(label,orientation)=>{const e=document.createElement('div');e.className=orientation==='vertical'?'study-resize-width':'study-resize-height';e.tabIndex=0;e.setAttribute('role','separator');e.setAttribute('aria-label',label);e.setAttribute('aria-orientation',orientation);e.title=orientation==='vertical'?'Drag to change the lesson and coding widths. Arrow keys also work.':'Drag to change the height. Arrow keys also work.';return e};
export function setupStudyLayout(main,{course,title,competency,lessonNumber,lessonCount,headingLabel,instructionTitle,taskObjective,taskInput,taskExpected}={}){
 disposeStudyLayout();const controller=new AbortController(),signal=controller.signal;
 currentCleanup=()=>{controller.abort();document.body.classList.remove('workspace-expanded','workspace-resizing')};
 const layout=main.querySelector('.course-layout,.mobile-layout'),article=layout?.querySelector(':scope > article'),workspace=article?.querySelector('.workspace');if(!layout||!article||!workspace)return;
 main.querySelector(':scope > .breadcrumbs')?.remove();main.classList.add('study-main');document.body.classList.add('study-page','ws');layout.classList.add('study-layout');article.classList.add('study-content','ws-main');if(!workspace)return;
 const isMobile=course==='mobile-app-dev';let grid=article.querySelector('.lesson-grid'),copy=grid?.querySelector('.lesson-copy');
 if(isMobile){const prose=article.querySelector('#mobile-prose');prose.querySelector('h1')?.remove();const heading=document.createElement('header');heading.className='lesson-heading';const h1=document.createElement('h1');h1.textContent=title;heading.append(h1);article.insertBefore(heading,prose);grid=document.createElement('div');grid.className='lesson-grid';article.insertBefore(grid,prose);copy=document.createElement('section');copy.className='lesson-copy';grid.append(copy,workspace);copy.append(prose)}
 grid.classList.add('study-grid','ws-body');copy.classList.add('study-instructions','ws-lesson');copy.classList.remove('panel');workspace.classList.add('study-workspace');
 let heading=article.querySelector('.lesson-heading');if(!heading){heading=document.createElement('header');heading.className='lesson-heading';const old=article.querySelector('h1');if(old)heading.append(old);else{const h=document.createElement('h1');h.textContent=title||'Programming practice';heading.append(h)}article.prepend(heading)}
 heading.classList.add('ws-head');const h1=heading.querySelector('h1');for(const n of [...heading.children])if(n!==h1)n.remove();
 const back=document.createElement('a');back.href='#/course/'+course;back.className='ws-back';back.textContent='‹ '+(course==='computer-science-1'?'Python':course==='game-programming'?'Game Programming':course==='uil'?'UIL':'Mobile & Web');heading.prepend(back);
 for(const node of [...article.children])if(node!==heading&&node!==grid){if(node.matches('.breadcrumbs'))node.remove();else copy.append(node)}
 const content=document.createElement('div');content.className='study-panel-content';content.append(...copy.childNodes);copy.append(content);
 const width=separator('Resize lesson and coding area widths','vertical');grid.insertBefore(width,workspace);
 const oldHead=workspace.querySelector('.workspace-head'),expand=oldHead.querySelector('button');oldHead.className='ws-tabs editor-header';oldHead.querySelector('strong')?.classList.add('file');const saved=document.createElement('span');saved.className='saved';saved.textContent='Draft autosaves';oldHead.insertBefore(saved,expand);expand.textContent='⛶';expand.setAttribute('aria-label','Expand workspace');expand.classList.add('icon-btn');expand.onclick=null;expand.setAttribute('aria-pressed','false');
 const editor=workspace.querySelector('.CodeMirror')||workspace.querySelector('textarea');const editorHeight=separator('Resize code editor height','horizontal');editor.after(editorHeight);
 const terminal=workspace.querySelector('#csharp-output'),terminalHeight=separator('Resize terminal height','horizontal');terminal?.after(terminalHeight);const preview=workspace.querySelector('#mobile-preview');let previewHeight;if(preview){previewHeight=separator('Resize preview height','horizontal');preview.after(previewHeight)}
 queueMicrotask(()=>{if(!workspace.isConnected)return;const prose=copy.querySelector('#mobile-prose,#uil-prose,#python-prose');const task=['game-programming','computer-science-1'].includes(course)?[...content.children].filter(n=>!['game-markdown','python-prose'].includes(n.id)&&!n.classList.contains('unity-task')&&!n.classList.contains('lesson-bottom')):taskSection(prose);practiceTabs(copy,{objective:taskObjective,input:taskInput,expected:taskExpected,practiceNodes:task});workspaceTabs(workspace)});
 const storageKey='playground:layout:'+course+':';
 const read=(key,fallback)=>{try{const value=localStorage.getItem(storageKey+key);return value===null?fallback:Number(value)}catch{return fallback}};
 const save=(key,value)=>{try{localStorage.setItem(storageKey+key,String(value))}catch{}};
 function bind(handle,{key,initial,min,max,axis,apply}){
  let value=initial,drag=null;
  function set(n){value=Math.min(max,Math.max(min,Number.isFinite(n)?n:initial));apply(value);handle.setAttribute('aria-valuenow',String(Math.round(value)));handle.setAttribute('aria-valuetext',Math.round(value)+(axis==='width'?' percent lesson width':' pixels'));save(key,value)}
  handle.setAttribute('aria-valuemin',String(min));handle.setAttribute('aria-valuemax',String(max));set(read(key,initial));
  handle.addEventListener('pointerdown',e=>{if(e.button!==0)return;e.preventDefault();handle.focus();drag={start:axis==='width'?e.clientX:e.clientY,value,extent:grid.getBoundingClientRect().width};handle.setPointerCapture(e.pointerId);document.body.classList.add('workspace-resizing')},{signal});
  handle.addEventListener('pointermove',e=>{if(!drag)return;const delta=(axis==='width'?e.clientX:e.clientY)-drag.start;set(drag.value+(axis==='width'?delta/drag.extent*100:delta))},{signal});
  const finish=()=>{drag=null;document.body.classList.remove('workspace-resizing')};for(const event of ['pointerup','pointercancel','lostpointercapture'])handle.addEventListener(event,finish,{signal});
  handle.addEventListener('dblclick',()=>set(initial),{signal});
  handle.addEventListener('keydown',e=>{const minus=axis==='width'?'ArrowLeft':'ArrowUp',plus=axis==='width'?'ArrowRight':'ArrowDown';if(e.key===minus||e.key===plus){e.preventDefault();set(value+(e.key===plus?1:-1)*(axis==='width'?2:20)*(e.shiftKey?5:1))}else if(e.key==='Home'){e.preventDefault();set(min)}else if(e.key==='End'){e.preventDefault();set(max)}},{signal});
 }
 bind(width,{key:'lesson-width',initial:36,min:25,max:65,axis:'width',apply:n=>grid.style.setProperty('--lesson-width',n+'%')});
 bind(editorHeight,{key:'editor-height',initial:360,min:180,max:1400,axis:'height',apply:n=>workspace.style.setProperty('--editor-height',n+'px')});
 if(terminal)bind(terminalHeight,{key:'terminal-height',initial:170,min:100,max:1000,axis:'height',apply:n=>workspace.style.setProperty('--terminal-height',n+'px')});
 if(preview)bind(previewHeight,{key:'preview-height',initial:260,min:140,max:1000,axis:'height',apply:n=>workspace.style.setProperty('--preview-height',n+'px')});
 function expanded(on){workspace.classList.toggle('is-expanded',on);document.body.classList.toggle('workspace-expanded',on);expand.textContent=on?'↙':'⛶';expand.setAttribute('aria-label',on?'Restore workspace':'Expand workspace');expand.setAttribute('aria-pressed',String(on));if(on)workspace.scrollTop=0;else expand.focus()}
 expand.addEventListener('click',()=>expanded(!workspace.classList.contains('is-expanded')),{signal});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&workspace.classList.contains('is-expanded')){e.preventDefault();expanded(false)}},{signal});
 const caret=layout.querySelector('.menu-caret'),links=layout.querySelector('#course-links,#mobile-links');
 if(caret&&links){const collapse=on=>{layout.classList.toggle('collapsed',on);links.hidden=on;caret.textContent=on?'›':'‹';caret.setAttribute('aria-expanded',String(!on));caret.setAttribute('aria-label',on?'Show course menu':'Hide course menu');caret.title=on?'Show menu':'Hide menu';save('menu-collapsed',Number(on))};collapse(read('menu-collapsed',0)===1);caret.onclick=()=>collapse(!layout.classList.contains('collapsed'))}
}
