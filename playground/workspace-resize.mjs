// Fill in drag controls on legacy challenge workspaces; existing course controls win.
export function ensureWorkspaceResize(workspace){
 const grid=workspace.closest('.grid,.study-grid');if(!grid)return;
 const controller=new AbortController(),signal=controller.signal;
 const prefix='playground:layout:'+location.pathname+':';
 function bind(parent,before,label,orientation,key,initial,min,max,apply){
  const handle=document.createElement('div');handle.className=orientation==='vertical'?'resize-width':'resize-height';handle.tabIndex=0;handle.setAttribute('role','separator');handle.setAttribute('aria-label',label);handle.setAttribute('aria-orientation',orientation);handle.setAttribute('aria-valuemin',min);handle.setAttribute('aria-valuemax',max);handle.title='Drag to resize. Arrow keys also work; double-click resets.';
  parent.insertBefore(handle,before);let value=initial,drag;
  function set(n){value=Math.min(max,Math.max(min,Number.isFinite(n)?n:initial));apply(value);handle.setAttribute('aria-valuenow',Math.round(value));try{localStorage.setItem(prefix+key,value)}catch{}}
  try{const saved=localStorage.getItem(prefix+key);if(saved!==null)value=Number(saved)}catch{}set(value);
  handle.addEventListener('pointerdown',e=>{if(e.button!==0)return;e.preventDefault();handle.focus();drag={x:e.clientX,y:e.clientY,value,width:grid.getBoundingClientRect().width};handle.setPointerCapture(e.pointerId);document.body.classList.add('workspace-resizing')},{signal});
  handle.addEventListener('pointermove',e=>{if(drag)set(drag.value+(orientation==='vertical'?(e.clientX-drag.x)/Math.max(1,drag.width)*100:e.clientY-drag.y))},{signal});
  const finish=()=>{drag=null;document.body.classList.remove('workspace-resizing')};for(const type of ['pointerup','pointercancel','lostpointercapture'])handle.addEventListener(type,finish,{signal});
  handle.addEventListener('keydown',e=>{const decrement=orientation==='vertical'?'ArrowLeft':'ArrowUp',increment=orientation==='vertical'?'ArrowRight':'ArrowDown';if(e.key===decrement||e.key===increment){e.preventDefault();set(value+(e.key===increment?1:-1)*(orientation==='vertical'?2:20)*(e.shiftKey?5:1))}else if(e.key==='Home'){e.preventDefault();set(min)}else if(e.key==='End'){e.preventDefault();set(max)}},{signal});handle.addEventListener('dblclick',()=>set(initial),{signal});
 }
 if(!grid.querySelector('.resize-width,.study-resize-width'))bind(grid,workspace,'Resize lesson and coding area widths','vertical','lesson-width',44,25,65,n=>grid.style.setProperty('--lesson-width',n+'%'));
 const editor=workspace.querySelector('.CodeMirror')||workspace.querySelector('textarea');
 if(editor&&!workspace.querySelector('.resize-height,.study-resize-height'))bind(editor.parentElement,editor.nextSibling,'Resize code editor height','horizontal','editor-height',360,180,1400,n=>workspace.style.setProperty('--editor-height',n+'px'));
 const output=workspace.querySelector('#output');
 if(output&&!workspace.querySelector('#terminal-height-divider'))bind(output.parentElement,output.nextSibling,'Resize terminal height','horizontal','terminal-height',170,100,1000,n=>workspace.style.setProperty('--terminal-height',n+'px'));
 // All listeners are attached to disposable DOM nodes; no global listeners remain on navigation.
 return ()=>controller.abort();
}
