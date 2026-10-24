let currentCleanup=()=>{};
export function disposeStudyLayout(){currentCleanup();currentCleanup=()=>{};document.body.classList.remove('study-page','workspace-expanded','workspace-resizing');document.querySelector('main')?.classList.remove('study-main')}
const separator=(label,orientation)=>{const e=document.createElement('div');e.className=orientation==='vertical'?'study-resize-width':'study-resize-height';e.tabIndex=0;e.setAttribute('role','separator');e.setAttribute('aria-label',label);e.setAttribute('aria-orientation',orientation);e.title=orientation==='vertical'?'Drag to change the lesson and coding widths. Arrow keys also work.':'Drag to change the height. Arrow keys also work.';return e};
export function setupStudyLayout(main,{course,title,competency,lessonNumber,lessonCount,headingLabel,instructionTitle}={}){
 disposeStudyLayout();const controller=new AbortController(),signal=controller.signal;
 currentCleanup=()=>{controller.abort();document.body.classList.remove('workspace-expanded','workspace-resizing')};
 const layout=main.querySelector('.course-layout,.mobile-layout'),article=layout?.querySelector(':scope > article'),workspace=article?.querySelector('.workspace');if(!layout||!article)return;
 main.classList.add('study-main');document.body.classList.add('study-page');layout.classList.add('study-layout');article.classList.add('study-content');
 const crumbs=main.querySelector(':scope > .breadcrumbs');if(crumbs)article.prepend(crumbs);
 if(!workspace)return;
 const isMobile=course==='mobile-app-dev';
 let grid=article.querySelector('.lesson-grid'),copy=grid?.querySelector('.lesson-copy');
 if(isMobile){
  const prose=article.querySelector('#mobile-prose');prose.querySelector('h1')?.remove();
  const heading=document.createElement('header');heading.className='lesson-heading';
  const eyebrow=document.createElement('div');eyebrow.className='eyebrow';eyebrow.textContent=headingLabel||`Competency ${lessonNumber} of ${lessonCount} · ${competency}`;
  const h1=document.createElement('h1');h1.textContent=title;heading.append(eyebrow,h1);article.insertBefore(heading,prose);
  grid=document.createElement('div');grid.className='lesson-grid';article.insertBefore(grid,prose);
  copy=document.createElement('section');copy.className='panel lesson-copy';grid.append(copy,workspace);copy.append(prose);
 }
 grid.classList.add('study-grid');copy.classList.add('study-instructions');workspace.classList.add('study-workspace');
 const unity=article.querySelector('.unity-task');if(unity)copy.append(unity);
 const content=document.createElement('div');content.className='study-panel-content';content.append(...copy.childNodes);
 const copyHead=document.createElement('div');copyHead.className='study-panel-heading';copyHead.innerHTML='<h2></h2><span>Study & apply</span>';copyHead.querySelector('h2').textContent=instructionTitle||'Learn the concept';copy.append(copyHead,content);
 const width=separator('Resize lesson and coding area widths','vertical');grid.insertBefore(width,workspace);
 const oldHead=workspace.querySelector('.workspace-head'),expand=oldHead.querySelector('button');oldHead.className='editor-header';
 const head=document.createElement('div');head.className='study-panel-heading';head.innerHTML='<h2>Try it yourself</h2>';head.append(expand);workspace.prepend(head);
 expand.textContent='⛶ Expand workspace';expand.classList.add('secondary');expand.onclick=null;expand.setAttribute('aria-pressed','false');
 const lang=document.createElement('span');lang.textContent=isMobile?competency:'C#';oldHead.append(lang);
 const editor=workspace.querySelector('.CodeMirror')||workspace.querySelector('textarea');const editorHeight=separator('Resize code editor height','horizontal');editor.after(editorHeight);
 // Output belongs to the editor; opening it must grow the workspace.
 const toolbar=workspace.querySelector('.toolbar'),consolePanel=workspace.querySelector('.mobile-console'),terminalPanel=workspace.querySelector('.csharp-terminal');
 if(consolePanel)editorHeight.after(consolePanel);
 if(toolbar&&(consolePanel||terminalPanel))(consolePanel||terminalPanel).after(toolbar);
 const terminal=workspace.querySelector('#csharp-output'),terminalHeight=separator('Resize terminal height','horizontal');terminal?.after(terminalHeight);
 const preview=workspace.querySelector('#mobile-preview');let previewHeight;if(preview){previewHeight=separator('Resize preview height','horizontal');(preview.closest('.mobile-results')||preview).after(previewHeight)}
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
 bind(width,{key:'lesson-width',initial:48,min:25,max:65,axis:'width',apply:n=>grid.style.setProperty('--lesson-width',n+'%')});
 bind(editorHeight,{key:'editor-height',initial:360,min:180,max:1400,axis:'height',apply:n=>workspace.style.setProperty('--editor-height',n+'px')});
 if(terminal)bind(terminalHeight,{key:'terminal-height',initial:170,min:100,max:1000,axis:'height',apply:n=>workspace.style.setProperty('--terminal-height',n+'px')});
 if(preview)bind(previewHeight,{key:'preview-height',initial:260,min:140,max:1000,axis:'height',apply:n=>workspace.style.setProperty('--preview-height',n+'px')});
 function expanded(on){workspace.classList.toggle('is-expanded',on);document.body.classList.toggle('workspace-expanded',on);expand.textContent=on?'↙ Restore workspace':'⛶ Expand workspace';expand.setAttribute('aria-pressed',String(on));if(on)workspace.scrollTop=0;else expand.focus()}
 expand.addEventListener('click',()=>expanded(!workspace.classList.contains('is-expanded')),{signal});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&workspace.classList.contains('is-expanded')){e.preventDefault();expanded(false)}},{signal});
 const caret=layout.querySelector('.menu-caret'),links=layout.querySelector('#course-links,#mobile-links');
 if(caret&&links){const collapse=on=>{layout.classList.toggle('collapsed',on);links.hidden=on;caret.textContent=on?'›':'‹';caret.setAttribute('aria-expanded',String(!on));caret.setAttribute('aria-label',on?'Show course menu':'Hide course menu');caret.title=on?'Show menu':'Hide menu';save('menu-collapsed',Number(on))};collapse(read('menu-collapsed',0)===1);caret.onclick=()=>collapse(!layout.classList.contains('collapsed'))}
}
