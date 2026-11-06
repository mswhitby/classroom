import {sidebarTitles} from './sidebar-tooltip.mjs?v=1';
import {submittedActivities,submissionKey} from './submission-history.mjs?v=reading-1';
import {accountCourses,forgetCourseSections,courseUnits,unitHref} from './course-navigation.mjs?v=reading-1';
const root=new URL('./',import.meta.url),main=document.getElementById('main'),sidebar=document.getElementById('sidebar');
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const href=id=>'#/course/'+id;
const metadata={'computer-science-1':['py','Python','--tile-py'],'game-programming':['c#','C# · Unity','--tile-cs'],'mobile-app-dev':['js','HTML · CSS · JavaScript','--tile-js'],uil:['jv','Java','--tile-jv'],capstone:['++','Capstone','--tile-cap'],'tsi-math':['ma','Math · Open access','--tile-cap']};
let catalog=[];const manifests=new Map();
try{const r=await fetch(new URL('catalog.json',root));if(r.ok)catalog=await r.json()}catch{}
await Promise.allSettled(catalog.filter(c=>c.status!=='planned').map(async c=>{const r=await fetch(new URL('data/'+c.id+'/course.json?v=classroom-20261106',root));if(r.ok)manifests.set(c.id,await r.json())}));
const read=(key,fallback)=>{try{return localStorage.getItem(key)??fallback}catch{return fallback}},save=(key,v)=>{try{localStorage.setItem(key,v)}catch{}};
const practice=id=>id==='tsi-math'?href(id)+'/lesson/'+manifests.get(id)?.weeks?.[0]?.sessions?.at(-1)?.id:id==='capstone'?href(id):id==='computer-science-1'?href(id)+'/practice':id==='mobile-app-dev'?href(id)+'/projects':id==='uil'?href(id)+'/practice':href(id)+'/practice';
const practiceLabel=id=>id==='computer-science-1'?'Challenges':id==='mobile-app-dev'?'Projects':'Practice';
const grade=id=>id==='tsi-math'?href(id)+'/results':'#/progress/'+id;
function entries(c){
 const m=manifests.get(c.id);if(!m)return [];
 const groups=courseUnits(c.id,m).map(u=>({...u,items:u.lessons.map(l=>({id:l.id,activity:l.exercise?.id||l.id,title:u.label==='Week'?'Day '+l.number+' · '+l.title:l.title,url:l.url})).concat(u.quiz?[{id:u.quiz.id,checkpoint:true,title:u.quiz.title,url:href(c.id)+'/quiz/'+u.quiz.id}]:[])}));
 return groups.concat((m.projects||[]).map(p=>({id:p.id,title:p.title,project:true,items:p.steps.map(l=>({id:l.id,activity:'project:'+p.id,title:l.title,url:href(c.id)+'/project/'+p.id+'/'+l.id}))})));
}
let menuCourses=[],menuVersion=0;
async function refreshCourses(){const version=++menuVersion;const rows=await accountCourses(catalog,window.PlaygroundAccount);if(version===menuVersion){menuCourses=rows;sync(true)}}
let submitted=new Set(),submissionOwner=null,submissionVersion=0;
async function refreshSubmissions(){
 const account=window.PlaygroundAccount,owner=account?.user?.id||null,version=++submissionVersion;
 if(owner!==submissionOwner){submitted.clear();submissionOwner=owner;sync(true)}
 if(!account?.signedIn||!owner)return;
 try{const rows=await account.submissionHistory();if(version===submissionVersion&&window.PlaygroundAccount?.user?.id===owner){submitted=submittedActivities(rows);sync(true)}}catch{}
}
document.addEventListener('playground-account-ready',refreshSubmissions);
document.addEventListener('playground-submitted',e=>{const r=e.detail;if(window.PlaygroundAccount?.signedIn&&r?.id&&r.submitted_at){submissionVersion++;submitted.add(submissionKey(r.course_id,r.activity_id));sync(true)}});
function completed(course,item){return !item.checkpoint&&submitted.has(submissionKey(course,course==='computer-science-1'?(item.challenge?'challenge:':'lesson:')+item.id:item.activity||item.id))}
function tile(id){const m=metadata[id]||['{ }','','--tile-py'];return '<span class="tile tile-xs" style="background:var('+m[2]+')">'+m[0]+'</span>'}
let signature='';
function sync(force=false){
 if(!main||!sidebar)return;
 for(const badge of main.querySelectorAll('[data-activity-submitted]')){const done=submitted.has(submissionKey(badge.dataset.course,badge.dataset.activitySubmitted));const label=done?'✓ Submitted':'Not submitted';if(badge.textContent!==label)badge.textContent=label;badge.classList.toggle('is-submitted',done)}
 for(const link of main.querySelectorAll('[data-python-review]')){const done=submitted.has(submissionKey('computer-science-1',link.dataset.pythonReview));const label=done?'Review':'Open';if(link.textContent!==label)link.textContent=label}
 const parts=location.hash.replace(/^#\/?/,'').split('/').filter(Boolean).map(x=>{try{return decodeURIComponent(x)}catch{return x}});
 const course=parts[0]==='course'?catalog.find(c=>c.id===parts[1]):parts[0]==='progress'?catalog.find(c=>c.id===parts[1]):null,workspace=document.body.classList.contains('ws');
 sidebar.hidden=!course;sidebar.inert=innerWidth<=900&&!sidebar.classList.contains('open');main.classList.toggle('main-centered',!course);document.getElementById('menu-toggle').hidden=!course;
 const progress=course?[...entries(course),{items:(manifests.get(course.id)?.challenges||[]).map(l=>({id:l.id,challenge:true}))}].flatMap(g=>g.items.map(i=>completed(course.id,i)?'1':'0')).join(''):'';const key=location.hash+'|'+workspace+'|'+progress;if(!force&&key===signature)return;signature=key;if(!course)return;
 const storageKey=workspace?'pg-sb-collapsed-ws':'pg-sb-collapsed',collapsed=read(storageKey,workspace?'1':'0')==='1';
 sidebar.classList.toggle('collapsed',collapsed);
 const selected=parts.at(-1),section=parts[0]==='progress'?'grades':parts[2]==='practice'||parts[2]==='challenge'||parts[2]==='projects'?'practice':'lessons';
 if(workspace){save('playground:last:'+course.id,JSON.stringify({title:main.querySelector('h1')?.textContent||'Continue lesson',url:location.hash}))}
 const rows=menuCourses.map(c=>'<div class="class-row"><div class="class-name">'+tile(c.id)+esc(c.title)+'</div><div class="sections"><a href="'+href(c.id)+'">Lessons</a><a href="'+practice(c.id)+'">'+practiceLabel(c.id)+'</a><a href="'+grade(c.id)+'">Grades</a></div></div>').join('');
 const outline=parts[2]==='challenge'||parts[2]==='practice'&&course.id==='computer-science-1'?[{id:'challenges',title:'Challenges',items:(manifests.get(course.id)?.challenges||[]).map(l=>({id:l.id,activity:'challenge:'+l.id,title:l.title,url:href(course.id)+'/challenge/'+encodeURIComponent(l.id),challenge:true}))}]:entries(course);
 const groups=outline.map(g=>{
  const count=g.items.filter(i=>!i.checkpoint).length,done=g.items.filter(i=>completed(course.id,i)).length,active=parts[2]==='unit'&&g.id===selected||g.items.some(i=>i.id===selected),open=read('pg-open:'+course.id+':'+g.id,active?'1':'0')==='1';
  const url=g.id==='challenges'?practice(course.id):g.project?g.items[0]?.url:unitHref(course.id,g.id),label=g.label||'Project';
  return '<div class="unit-row'+(active?' is-current':'')+'"><button type="button" class="unit-toggle" data-unit="'+esc(g.id)+'" aria-label="'+(open?'Collapse':'Expand')+' '+label.toLowerCase()+' '+(g.number||esc(g.title))+'" aria-expanded="'+open+'"><span class="caret">›</span></button><a class="unit-title" data-full-title="'+esc(g.title)+'" href="'+url+'" '+(parts[2]==='unit'&&g.id===selected?'aria-current="page"':'')+'>'+ (g.number?'<span class="num">'+String(g.number).padStart(2,'0')+'</span>':'')+'<span class="uname">'+esc(g.title)+'</span></a>'+(course.id==='tsi-math'?'':'<span class="unit-progress" aria-label="'+done+' of '+count+' submitted">'+(done===count?'✓':done+'/'+count)+'</span>')+'</div><ul class="lessons" data-unit-items="'+esc(g.id)+'" '+(open?'':'hidden')+'>'+g.items.map(i=>'<li><a class="lesson-link" data-full-title="'+esc(i.title)+'" href="'+i.url+'" '+(i.id===selected?'aria-current="page"':'')+'>'+(course.id==='tsi-math'||i.checkpoint?'':'<span class="lesson-completion '+(completed(course.id,i)?'is-complete':'')+'" aria-label="'+(completed(course.id,i)?'Submitted':'Not submitted')+'">'+(completed(course.id,i)?'✓':'·')+'</span>')+'<span class="lname">'+esc(i.title)+'</span></a></li>').join('')+'</ul>';
 }).join('');
 const nav=(key,url,icon,label)=>'<a class="nav-link" href="'+url+'" title="'+label+'" '+(key===section?'aria-current="page"':'')+'><span class="ico" aria-hidden="true">'+icon+'</span><span class="grow">'+label+'</span></a>';
 sidebar.innerHTML='<div class="sb-head"><div class="menu-wrap picker-wrap"><button type="button" class="picker" id="picker" aria-label="Switch course: '+esc(course.title)+'" aria-expanded="false">'+tile(course.id)+'<span class="picker-text"><span class="picker-name">'+esc(course.title)+'</span><span class="picker-sub">'+esc((metadata[course.id]||['',''])[1])+'</span></span><span aria-hidden="true">⌄</span></button><div class="menu class-menu" id="class-menu" hidden><a href="#/">Home · all my classes</a><div class="menu-sep"></div>'+(rows||'<p class="course-menu-empty">No courses yet. <a href="#/classes">Manage my classes</a></p>')+'</div></div><button type="button" class="sb-collapse" id="sb-collapse" aria-label="'+(collapsed?'Expand':'Collapse')+' sidebar" aria-expanded="'+!collapsed+'">◧</button></div><div class="sb-scroll">'+nav('lessons',href(course.id),'▤',course.id==='tsi-math'?'Weeks':'Units')+'<div class="outline" role="group" aria-label="Units and lessons">'+groups+(course.id==='tsi-math'?'<a class="lesson-link" href="'+href(course.id)+'/teacher">Facilitator guide</a>':'')+'</div><div class="sb-sep"></div>'+nav('practice',practice(course.id),'‹/›',practiceLabel(course.id))+nav('grades',grade(course.id),'◷','Grades')+'</div>';
 sidebar.querySelector('#picker').onclick=()=>{const menu=sidebar.querySelector('#class-menu');if(sidebar.classList.contains('collapsed')){save(storageKey,'0');sidebar.classList.remove('collapsed');sidebar.querySelector('#sb-collapse').setAttribute('aria-label','Collapse sidebar')}menu.hidden=!menu.hidden;menu.classList.toggle('open',!menu.hidden);sidebar.querySelector('#picker').setAttribute('aria-expanded',String(!menu.hidden))};
 sidebar.querySelector('#sb-collapse').onclick=()=>{save(storageKey,sidebar.classList.contains('collapsed')?'0':'1');sync(true)};
 for(const button of sidebar.querySelectorAll('[data-unit]'))button.onclick=()=>{const open=button.getAttribute('aria-expanded')!=='true';save('pg-open:'+course.id+':'+button.dataset.unit,open?'1':'0');button.setAttribute('aria-expanded',String(open));button.setAttribute('aria-label',button.getAttribute('aria-label').replace(/^(Expand|Collapse)/,open?'Collapse':'Expand'));const list=[...sidebar.querySelectorAll('[data-unit-items]')].find(n=>n.dataset.unitItems===button.dataset.unit);list.hidden=!open};
 for(const a of sidebar.querySelectorAll('a'))a.addEventListener('click',()=>{sidebar.classList.remove('open');sidebar.inert=innerWidth<=900});
}
if(window.PlaygroundAccount&&window.PlaygroundAccount.status!=='Checking your account…'){refreshCourses();refreshSubmissions()}document.addEventListener('playground-account-ready',refreshCourses);addEventListener('hashchange',()=>{if(window.PlaygroundAccount?.classroom?.context.is_teacher){forgetCourseSections(window.PlaygroundAccount);refreshCourses();refreshSubmissions()}});document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible'){forgetCourseSections(window.PlaygroundAccount);refreshCourses();refreshSubmissions()}});
sidebarTitles(sidebar);
if(main&&sidebar){new MutationObserver(()=>sync()).observe(main,{childList:true,subtree:true});addEventListener('hashchange',()=>sync(true));sync()}
document.getElementById('menu-toggle').onclick=()=>{sidebar.classList.toggle('open');sidebar.inert=!sidebar.classList.contains('open');document.getElementById('menu-toggle').setAttribute('aria-expanded',String(sidebar.classList.contains('open')))};
document.getElementById('theme-toggle').onclick=()=>window.PlaygroundTheme.set(document.documentElement.dataset.theme==='dark'?'light':'dark');
document.addEventListener('click',e=>{if(!e.target.closest('.picker-wrap')){const menu=document.getElementById('class-menu');if(menu){menu.hidden=true;menu.classList.remove('open');document.getElementById('picker')?.setAttribute('aria-expanded','false')}}});
function identity(){const user=window.PlaygroundAccount?.user,handle=user?.user_metadata?.user_name||user?.user_metadata?.preferred_username||'Guest';document.getElementById('account-handle').textContent=handle==='Guest'?'Guest':'@'+handle;document.getElementById('account-avatar').textContent=handle==='Guest'?'○':handle.slice(0,2).toUpperCase()}
identity();document.addEventListener('playground-account-ready',identity);
const trigger=document.getElementById('jump-open'),dialog=document.createElement('dialog');dialog.className='jump-dialog';dialog.setAttribute('aria-label','Jump to a page or lesson');dialog.innerHTML='<button type="button" class="jump-close">Close</button><h2>Jump to</h2><input type="search" aria-label="Search pages and lessons" placeholder="Search lessons, practice, and pages"><nav aria-label="Search results"></nav>';document.body.append(dialog);dialog.querySelector('button').onclick=()=>dialog.close();
const search=dialog.querySelector('input'),results=dialog.querySelector('nav'),all=[];
for(const c of catalog){all.push({course:c.id,title:c.title,url:href(c.id)},{course:c.id,title:c.title+' · Practice',url:practice(c.id)},{course:c.id,title:c.title+' · Grades',url:grade(c.id)});for(const g of entries(c))all.push(...g.items.map(i=>({...i,course:c.id})));for(const ch of manifests.get(c.id)?.challenges||[])all.push({course:c.id,title:ch.title,url:href(c.id)+'/challenge/'+encodeURIComponent(ch.id)})}
all.push({title:'My classes',url:'#/classes'},{title:'Teacher dashboard',url:'#/teacher'},{title:'Debugging',url:'#/debug'});
function show(){const q=search.value.toLowerCase();results.innerHTML=all.filter(x=>(!x.course||menuCourses.some(c=>c.id===x.course))&&x.title.toLowerCase().includes(q)).slice(0,50).map(x=>'<a href="'+x.url+'">'+esc(x.title)+'</a>').join('')||'<p>No matching pages.</p>';for(const a of results.querySelectorAll('a'))a.onclick=()=>dialog.close()}
const open=()=>{show();dialog.showModal();search.focus()};trigger.onclick=open;search.oninput=show;search.onkeydown=e=>{if(e.key==='Enter'){e.preventDefault();results.querySelector('a')?.click()}else if(e.key==='ArrowDown'){e.preventDefault();results.querySelector('a')?.focus()}};
document.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();if(!dialog.open)open()}if(e.key==='Escape'){sidebar?.classList.remove('open')}});

addEventListener('resize',()=>{if(sidebar)sidebar.inert=innerWidth<=900&&!sidebar.classList.contains('open')});
