const root=new URL('./',import.meta.url),main=document.getElementById('main'),sidebar=document.getElementById('sidebar');
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const href=id=>'#/course/'+id;
const metadata={'computer-science-1':['py','Python','--tile-py'],'game-programming':['c#','C# · Unity','--tile-cs'],'mobile-app-dev':['js','HTML · CSS · JavaScript','--tile-js'],uil:['jv','Java','--tile-jv'],capstone:['++','Capstone','--tile-cap'],'tsi-math':['ma','Math · Open access','--tile-cap']};
let catalog=[];const manifests=new Map();
try{const r=await fetch(new URL('catalog.json',root));if(r.ok)catalog=await r.json()}catch{}
await Promise.allSettled(catalog.filter(c=>c.status!=='planned').map(async c=>{const r=await fetch(new URL('data/'+c.id+'/course.json',root));if(r.ok)manifests.set(c.id,await r.json())}));
const read=(key,fallback)=>{try{return localStorage.getItem(key)??fallback}catch{return fallback}},save=(key,v)=>{try{localStorage.setItem(key,v)}catch{}};
const practice=id=>id==='tsi-math'?href(id):id==='capstone'?href(id):id==='computer-science-1'?href(id)+'/practice':id==='mobile-app-dev'?href(id)+'/projects':id==='uil'?href(id)+'/practice':href(id)+'/practice';
const grade=id=>id==='tsi-math'?href(id):'#/progress/'+id;
function entries(c){
 const m=manifests.get(c.id);if(!m)return [];
 if(m.weeks)return m.weeks.map(w=>({id:w.id,title:w.title,items:[...w.sessions.map(l=>({id:l.id,title:l.title,url:href(c.id)+'/lesson/'+l.id})),{id:'facilitator',title:'Facilitator guide',url:href(c.id)+'/teacher/'+w.sessions[0].id}]}));
 if(m.units)return m.units.map(u=>({id:u.id,title:u.title,number:u.number,items:[...u.lessons.map(l=>({id:l.id,activity:l.exercise?.id||l.id,title:l.title,url:href(c.id)+'/lesson/'+encodeURIComponent(l.id)})),{id:u.quiz.id,title:u.quiz.title,url:href(c.id)+'/quiz/'+u.quiz.id}]}));
 if(c.id==='computer-science-1')return [...new Set(m.lessons.map(l=>l.unit))].map(n=>({id:String(n),number:n,title:m.lessons.find(l=>l.unit===n).unitName,items:m.lessons.filter(l=>l.unit===n).map(l=>({id:l.id,activity:l.exercise?.id||l.id,title:l.title,url:href(c.id)+'/lesson/'+encodeURIComponent(l.id)}))}));
 return [{id:'lessons',title:c.id==='uil'?'Programming':'Lessons',items:(m.lessons||[]).map(l=>({id:l.id,activity:l.exercise?.id||l.id,title:l.title,url:href(c.id)+'/lesson/'+encodeURIComponent(l.id)}))},...(m.projects||[]).map(p=>({id:p.id,title:p.title,items:p.steps.map(s=>({id:s.id,title:s.title,url:href(c.id)+'/project/'+p.id+'/'+s.id}))}))];
}
function completed(course,item){
 const account=window.PlaygroundAccount,storage=account?.storage||localStorage;
 try{
  const activity=course==='computer-science-1'?'lesson:'+item.id:item.activity||item.id;
  if(account?.summaries().some(r=>r.course===course&&r.activity===activity&&r.status==='completed'))return true;
  if(course==='computer-science-1')return storage.getItem('cs1:guided:v1:pass:'+item.id)==='true';
  const keys=course==='mobile-app-dev'?['playground:mobile-check:'+item.id]:course==='uil'?['playground:uil:check:'+item.id]:[];
  if(keys.some(k=>JSON.parse(storage.getItem(k)||'null')?.passed===true))return true;
  const records=JSON.parse(storage.getItem('playground:progress:v1')||'{}');
  return [records[course+':'+activity],records[course+':'+item.id]].some(r=>r?.passed===true||r?.selfReported===true);
 }catch{return false}
}
function tile(id){const m=metadata[id]||['{ }','','--tile-py'];return '<span class="tile tile-xs" style="background:var('+m[2]+')">'+m[0]+'</span>'}
let signature='';
function sync(force=false){
 if(!main||!sidebar)return;
 const parts=location.hash.replace(/^#\/?/,'').split('/').filter(Boolean).map(x=>{try{return decodeURIComponent(x)}catch{return x}});
 const course=parts[0]==='course'?catalog.find(c=>c.id===parts[1]):parts[0]==='progress'?catalog.find(c=>c.id===parts[1]):null,workspace=document.body.classList.contains('ws');
 sidebar.hidden=!course;sidebar.inert=innerWidth<=900&&!sidebar.classList.contains('open');main.classList.toggle('main-centered',!course);document.getElementById('menu-toggle').hidden=!course;
 const progress=course?entries(course).flatMap(g=>g.items.map(i=>completed(course.id,i)?'1':'0')).join(''):'';const key=location.hash+'|'+workspace+'|'+progress;if(!force&&key===signature)return;signature=key;if(!course)return;
 const storageKey=workspace?'pg-sb-collapsed-ws':'pg-sb-collapsed',collapsed=read(storageKey,workspace?'1':'0')==='1';
 sidebar.classList.toggle('collapsed',collapsed);
 const selected=parts.at(-1),section=parts[0]==='progress'?'grades':parts[2]==='practice'||parts[2]==='projects'?'practice':'lessons';
 if(workspace){save('playground:last:'+course.id,JSON.stringify({title:main.querySelector('h1')?.textContent||'Continue lesson',url:location.hash}))}
 const rows=catalog.map(c=>'<div class="class-row"><div class="class-name">'+tile(c.id)+esc(c.title)+'</div><div class="sections"><a href="'+href(c.id)+'">Lessons</a><a href="'+practice(c.id)+'">Practice</a><a href="'+grade(c.id)+'">Grades</a></div></div>').join('');
 const groups=entries(course).map(g=>{const done=g.items.filter(i=>completed(course.id,i)).length;const active=g.items.some(i=>i.id===selected),open=read('pg-open:'+course.id+':'+g.id,active?'1':'0')==='1';return '<button type="button" class="unit-btn'+(active?' is-current':'')+'" data-unit="'+esc(g.id)+'" aria-expanded="'+open+'"><span class="caret">›</span>'+(g.number?'<span class="num">'+String(g.number).padStart(2,'0')+'</span>':'')+'<span class="uname">'+esc(g.title)+'</span><span class="unit-progress" aria-label="'+done+' of '+g.items.length+' completed">'+(done===g.items.length?'✓':done+'/'+g.items.length)+'</span></button><ul class="lessons" data-unit-items="'+esc(g.id)+'" '+(open?'':'hidden')+'>'+g.items.map(i=>'<li><a class="lesson-link" href="'+i.url+'" '+(i.id===selected?'aria-current="page"':'')+'><span class="lesson-completion '+(completed(course.id,i)?'is-complete':'')+'" aria-label="'+(completed(course.id,i)?'Completed':'Not completed')+'">'+(completed(course.id,i)?'✓':'·')+'</span><span class="lname">'+esc(i.title)+'</span></a></li>').join('')+'</ul>'}).join('');
 const nav=(key,url,icon,label)=>'<a class="nav-link" href="'+url+'" title="'+label+'" '+(key===section?'aria-current="page"':'')+'><span class="ico" aria-hidden="true">'+icon+'</span><span class="grow">'+label+'</span></a>';
 sidebar.innerHTML='<div class="sb-head"><div class="menu-wrap picker-wrap"><button type="button" class="picker" id="picker" aria-label="Switch course: '+esc(course.title)+'" aria-expanded="false">'+tile(course.id)+'<span class="picker-text"><span class="picker-name">'+esc(course.title)+'</span><span class="picker-sub">'+esc((metadata[course.id]||['',''])[1])+'</span></span><span aria-hidden="true">⌄</span></button><div class="menu class-menu" id="class-menu" hidden><a href="#/">Home · all my classes</a><div class="menu-sep"></div>'+rows+'</div></div><button type="button" class="sb-collapse" id="sb-collapse" aria-label="'+(collapsed?'Expand':'Collapse')+' sidebar" aria-expanded="'+!collapsed+'">◧</button></div><div class="sb-scroll">'+nav('lessons',href(course.id),'▤','Lessons')+'<div class="outline" role="group" aria-label="Units and lessons">'+groups+'</div><div class="sb-sep"></div>'+nav('practice',practice(course.id),'‹/›','Practice')+nav('grades',grade(course.id),'◷','Grades')+'</div>';
 sidebar.querySelector('#picker').onclick=()=>{const menu=sidebar.querySelector('#class-menu');if(sidebar.classList.contains('collapsed')){save(storageKey,'0');sidebar.classList.remove('collapsed');sidebar.querySelector('#sb-collapse').setAttribute('aria-label','Collapse sidebar')}menu.hidden=!menu.hidden;menu.classList.toggle('open',!menu.hidden);sidebar.querySelector('#picker').setAttribute('aria-expanded',String(!menu.hidden))};
 sidebar.querySelector('#sb-collapse').onclick=()=>{save(storageKey,sidebar.classList.contains('collapsed')?'0':'1');sync(true)};
 for(const button of sidebar.querySelectorAll('[data-unit]'))button.onclick=()=>{const open=button.getAttribute('aria-expanded')!=='true';save('pg-open:'+course.id+':'+button.dataset.unit,open?'1':'0');button.setAttribute('aria-expanded',String(open));const list=[...sidebar.querySelectorAll('[data-unit-items]')].find(n=>n.dataset.unitItems===button.dataset.unit);list.hidden=!open};
 for(const a of sidebar.querySelectorAll('a'))a.addEventListener('click',()=>{sidebar.classList.remove('open');sidebar.inert=innerWidth<=900});
}
if(main&&sidebar){new MutationObserver(()=>sync()).observe(main,{childList:true,subtree:true});addEventListener('hashchange',()=>sync(true));sync()}
document.getElementById('menu-toggle').onclick=()=>{sidebar.classList.toggle('open');sidebar.inert=!sidebar.classList.contains('open');document.getElementById('menu-toggle').setAttribute('aria-expanded',String(sidebar.classList.contains('open')))};
document.getElementById('theme-toggle').onclick=()=>window.PlaygroundTheme.set(document.documentElement.dataset.theme==='dark'?'light':'dark');
document.addEventListener('click',e=>{if(!e.target.closest('.picker-wrap')){const menu=document.getElementById('class-menu');if(menu){menu.hidden=true;menu.classList.remove('open');document.getElementById('picker')?.setAttribute('aria-expanded','false')}}});
function identity(){const user=window.PlaygroundAccount?.user,handle=user?.user_metadata?.user_name||user?.user_metadata?.preferred_username||'Guest';document.getElementById('account-handle').textContent=handle==='Guest'?'Guest':'@'+handle;document.getElementById('account-avatar').textContent=handle==='Guest'?'○':handle.slice(0,2).toUpperCase()}
identity();document.addEventListener('playground-account-ready',identity);
const trigger=document.getElementById('jump-open'),dialog=document.createElement('dialog');dialog.className='jump-dialog';dialog.setAttribute('aria-label','Jump to a page or lesson');dialog.innerHTML='<button type="button" class="jump-close">Close</button><h2>Jump to</h2><input type="search" aria-label="Search pages and lessons" placeholder="Search lessons, practice, and pages"><nav aria-label="Search results"></nav>';document.body.append(dialog);dialog.querySelector('button').onclick=()=>dialog.close();
const search=dialog.querySelector('input'),results=dialog.querySelector('nav'),all=[];
for(const c of catalog){all.push({title:c.title,url:href(c.id)},{title:c.title+' · Practice',url:practice(c.id)},{title:c.title+' · Grades',url:grade(c.id)});for(const g of entries(c))all.push(...g.items);for(const ch of manifests.get(c.id)?.challenges||[])all.push({title:ch.title,url:href(c.id)+'/challenge/'+encodeURIComponent(ch.id)})}
all.push({title:'My classes',url:'#/classes'},{title:'Teacher dashboard',url:'#/teacher'},{title:'Debugging',url:'#/debug'});
function show(){const q=search.value.toLowerCase();results.innerHTML=all.filter(x=>x.title.toLowerCase().includes(q)).slice(0,50).map(x=>'<a href="'+x.url+'">'+esc(x.title)+'</a>').join('')||'<p>No matching pages.</p>';for(const a of results.querySelectorAll('a'))a.onclick=()=>dialog.close()}
const open=()=>{show();dialog.showModal();search.focus()};trigger.onclick=open;search.oninput=show;search.onkeydown=e=>{if(e.key==='Enter'){e.preventDefault();results.querySelector('a')?.click()}else if(e.key==='ArrowDown'){e.preventDefault();results.querySelector('a')?.focus()}};
document.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();if(!dialog.open)open()}if(e.key==='Escape'){sidebar?.classList.remove('open')}});

addEventListener('resize',()=>{if(sidebar)sidebar.inert=innerWidth<=900&&!sidebar.classList.contains('open')});
