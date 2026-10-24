export function previewConsoleBridge(token){
 return `const send=(kind,details={})=>parent.postMessage({token:${JSON.stringify(token)},kind,...details},'*');
 const format=value=>{try{if(value instanceof Error)return value.name+': '+value.message;if(typeof value==='string')return value;const json=JSON.stringify(value,null,2);return json===undefined?String(value):json}catch{return String(value)}};
 for(const level of ['log','info','warn','error','debug'])console[level]=(...args)=>send('log',{level,text:args.map(format).join(' ').slice(0,10000)});
 console.clear=()=>send('clear');console.assert=(condition,...args)=>{if(!condition)send('log',{level:'error',text:'Assertion failed: '+args.map(format).join(' ')})};
 window.onerror=(message,source,line)=>send('error',{text:String(message)+' (line '+line+')'});
 window.onunhandledrejection=e=>send('error',{text:format(e.reason)});`;
}
export function createConsoleDrawer(root){
 const body=root.querySelector('.mobile-console-body'),output=root.querySelector('#mobile-output'),toggle=root.querySelector('[data-console-toggle]'),count=root.querySelector('[data-console-count]'),clear=root.querySelector('[data-console-clear]'),grip=root.querySelector('[data-console-resize]');
 const controller=new AbortController(),signal=controller.signal;let entries=[],height=0,drag=null,expandedHeight=170;
 try{expandedHeight=Math.max(80,Math.min(700,Number(localStorage.getItem('playground:mobile-console-height'))||170))}catch{}
 function resize(n){height=Math.max(0,Math.min(700,Math.round(n)));if(height<36)height=0;if(height>0){expandedHeight=height;try{localStorage.setItem('playground:mobile-console-height',String(height))}catch{}}
  root.style.setProperty('--console-height',height+'px');root.parentElement.style.setProperty('--console-height',height+'px');body.hidden=height===0;root.classList.toggle('is-open',height>0);toggle.setAttribute('aria-expanded',String(height>0));toggle.setAttribute('aria-label',height>0?'Close console':'Open console');root.querySelector('[data-console-caret]').textContent=height>0?'⌄':'⌃';grip.setAttribute('aria-valuenow',String(height));grip.setAttribute('aria-valuetext',height+' pixels');
 }
 function render(){output.replaceChildren();for(const e of entries){const row=document.createElement('div');row.className='console-entry console-'+e.level;row.textContent=(e.level==='warn'?'Warning: ':e.level==='error'?'Error: ':'')+e.text;output.append(row)}count.textContent=String(entries.length);clear.disabled=entries.length===0;output.scrollTop=output.scrollHeight}
 const reset=()=>{entries=[];render()};
 toggle.addEventListener('click',()=>resize(height?0:expandedHeight),{signal});clear.addEventListener('click',reset,{signal});
 grip.addEventListener('pointerdown',e=>{if(e.button!==0)return;e.preventDefault();grip.focus();drag={y:e.clientY,height};grip.setPointerCapture(e.pointerId);document.body.classList.add('workspace-resizing')},{signal});
 grip.addEventListener('pointermove',e=>{if(drag)resize(drag.height+drag.y-e.clientY)},{signal});
 const finish=()=>{drag=null;document.body.classList.remove('workspace-resizing')};for(const event of ['pointerup','pointercancel','lostpointercapture'])grip.addEventListener(event,finish,{signal});
 grip.addEventListener('keydown',e=>{if(e.key==='ArrowUp'||e.key==='ArrowDown'){e.preventDefault();resize(e.key==='ArrowUp'&&height===0?expandedHeight:height+(e.key==='ArrowUp'?20:-20)*(e.shiftKey?5:1))}else if(e.key==='Home'){e.preventDefault();resize(0)}else if(e.key==='End'){e.preventDefault();resize(700)}else if(e.key==='Enter'||e.key===' '){e.preventDefault();resize(height?0:expandedHeight)}},{signal});
 grip.addEventListener('dblclick',()=>resize(height?0:expandedHeight),{signal});resize(0);reset();
 return {clear:reset,append(text,level='log'){if(entries.length>=200)return;const kind=['warn','error','info','debug'].includes(level)?level:'log';entries.push({text:String(text).slice(0,10000),level:kind});render();if(kind==='error'&&height===0)resize(expandedHeight)},dispose(){controller.abort();finish()}};
}
