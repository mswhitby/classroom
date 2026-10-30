// Teacher-only account directory: all registered GitHub accounts, not a pasted roster.
import {mountGoogleSheetRoster,normalizeGithub} from './google-sheet-roster.mjs?v=1';
const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const labelFor=course=>({'computer-science-1':'Computer Science I','game-programming':'Game Programming & Design','mobile-app-dev':'Mobile App & Web',uil:'UIL Computer Science',capstone:'Capstone'})[course]||course;

export function mountTeacherDirectory(container,service,{classes=[],onChanged=async()=>{}}={}){
 let people=[],sections=classes,disposed=false,request=0,selected=new Set(),filter='all',query='',sheetRows=[],sheetByGithub=new Map(),duplicateGithub=new Set(),sheetPeriod='all';
 container.innerHTML=`<div class="directory-heading"><h2>Registered accounts</h2><span id="directory-count" role="status"></span></div>
 <p>Every GitHub account registered on this site appears here, including people who haven't joined a class. Mark private clients separately, then organize students into sections.</p>
 <details class="panel" id="sheet-mapping" open><summary>Google Sheet roster (optional)</summary><div id="sheet-linker"></div><p id="sheet-match-summary" role="status"></p><div id="sheet-unmatched"></div></details>
 <div class="directory-controls">
  <label>Find an account<input id="directory-search" type="search" placeholder="Name, GitHub username, or section" autocomplete="off"></label>
  <label>Show<select id="directory-filter"><option value="all">All accounts</option><option value="enrolled">Enrolled students</option><option value="unassigned">Unassigned students</option><option value="client">Private clients</option><option value="without-sheet">No Sheet match</option></select></label>
  <label id="sheet-period-label" hidden>Sheet class period<select id="sheet-period"><option value="all">All periods</option></select></label>
  <button id="directory-refresh" class="secondary" type="button">Refresh accounts</button>
 </div>
 <div class="directory-bulk"><label><input id="directory-select-visible" type="checkbox"> Select visible students</label><label>Add selected to <select id="directory-bulk-class"></select></label><button id="directory-bulk-add" type="button">Add selected</button></div>
 <p id="directory-status" role="status"></p><div id="directory-list"><p>Loading accounts…</p></div>`;
 const $=id=>container.querySelector('#'+id);
 const sheetBridge=mountGoogleSheetRoster($('sheet-linker'),{onRows:rows=>applySheetRows(rows)});
 const tell=message=>{$('directory-status').textContent=message};
 const active=p=>p.memberships.filter(m=>m.status==='approved'||m.status==='pending');
 const match=p=>sheetByGithub.get(normalizeGithub(p.github_account));
 const visible=()=>people.filter(p=>{
  const memberships=active(p);
  if(filter==='enrolled'&&(p.kind!=='student'||!memberships.length))return false;
  if(filter==='unassigned'&&(p.kind!=='student'||memberships.length))return false;
  if(filter==='client'&&p.kind!=='client')return false;
  if(filter==='without-sheet'&&match(p))return false;
  if(sheetPeriod!=='all'&&match(p)?.period!==sheetPeriod)return false;
  const search=query.toLocaleLowerCase();
  return !search||[p.github_account,match(p)?.name,match(p)?.period,...memberships.map(m=>m.name),...memberships.map(m=>labelFor(m.course_id))].some(s=>String(s).toLocaleLowerCase().includes(search));
 });
 function applySheetRows(rows){
  sheetRows=Array.isArray(rows)?rows:[];
  duplicateGithub=new Set();
  sheetByGithub=new Map();
  for(const entry of sheetRows){
   if(sheetByGithub.has(entry.github)){duplicateGithub.add(entry.github);sheetByGithub.delete(entry.github)}
   else if(!duplicateGithub.has(entry.github))sheetByGithub.set(entry.github,entry);
  }
  const periods=[...new Set(sheetRows.map(r=>r.period).filter(Boolean))].sort((a,b)=>a.localeCompare(b,undefined,{numeric:true}));
  $('sheet-period').innerHTML='<option value="all">All periods</option>'+periods.map(p=>`<option value="${esc(p)}">${esc(p)}</option>`).join('');
  sheetPeriod='all';
  $('sheet-period-label').hidden=!sheetRows.length;
  const registered=new Set(people.map(p=>normalizeGithub(p.github_account)));
  const matched=people.filter(p=>match(p)&&p.kind==='student').length;
  const missing=[...sheetByGithub.values()].filter(r=>!registered.has(r.github));
  $('sheet-match-summary').textContent=sheetRows.length
   ? matched+' of '+people.filter(p=>p.kind==='student').length+' registered student accounts matched to Sheet usernames. '+missing.length+' Sheet usernames have no registered account. '+duplicateGithub.size+' duplicate GitHub usernames in the Sheet.'
   : 'No Sheet loaded. Registered accounts can still be managed by GitHub username.';
  $('sheet-unmatched').innerHTML=missing.length
   ? '<details><summary>Sheet usernames not registered ('+missing.length+')</summary><p>These students must sign in to Playground with GitHub before you can assign their accounts.</p><ul>'+missing.slice(0,200).map(r=>`<li>@${esc(r.github)} (${esc(r.period||'No period')})</li>`).join('')+'</ul></details>'
   :'';
  render();
 }
 function classSelectOptions(value=''){
  return '<option value="">Select section…</option>'+sections.map(c=>`<option value="${esc(c.id)}" ${c.id===value?'selected':''}>${esc(c.name)} · ${esc(labelFor(c.course_id))}</option>`).join('');
 }
 function refreshControls(){
  $('directory-bulk-class').innerHTML=classSelectOptions($('directory-bulk-class').value);
  $('directory-bulk-add').disabled=!selected.size||!sections.length;
 }
 function render(){
  if(disposed)return;
  const all=people,shown=visible();
  const enrolled=all.filter(p=>p.kind==='student'&&active(p).length).length;
  const clients=all.filter(p=>p.kind==='client').length;
  $('directory-count').textContent=`${all.length} accounts · ${enrolled} enrolled · ${all.length-clients-enrolled} unassigned students · ${clients} private clients`;
  const allVisibleStudents=shown.filter(p=>p.kind==='student');
  $('directory-select-visible').checked=allVisibleStudents.length>0&&allVisibleStudents.every(p=>selected.has(p.user_id));
  $('directory-select-visible').indeterminate=allVisibleStudents.some(p=>selected.has(p.user_id))&&!$('directory-select-visible').checked;
  $('directory-list').innerHTML=shown.length?shown.map(p=>{
   const memberships=active(p),sheet=match(p);
   return `<article class="directory-person" data-person="${esc(p.user_id)}">
     <div class="directory-person-id"><label class="directory-person-select"><input type="checkbox" data-check="${esc(p.user_id)}" ${selected.has(p.user_id)?'checked':''} ${p.kind==='client'?'disabled':''} aria-label="Select ${esc(p.github_account)}">
       <span><strong>${esc(sheet?.name||p.github_account)}</strong><small>@${esc(p.github_account)}${sheet?.period?' · Sheet period '+esc(sheet.period):''}</small></span></label></div>
     <div class="directory-kind"><label>Account type<select data-kind="${esc(p.user_id)}"><option value="student" ${p.kind==='student'?'selected':''}>Student</option><option value="client" ${p.kind==='client'?'selected':''}>Private client</option></select></label></div>
     <div class="directory-sections"><div class="directory-label">Class sections</div>${memberships.length?memberships.map(m=>`<div class="directory-section"><span>${esc(m.name)} <small>· ${esc(labelFor(m.course_id))}${m.status==='pending'?' · pending':''}</small></span><button class="secondary" data-move="${esc(p.user_id)}" data-from="${esc(m.class_id)}" type="button" ${p.kind==='client'?'disabled':''}>Move</button><button class="secondary" data-remove="${esc(p.user_id)}" data-from="${esc(m.class_id)}" type="button">Remove</button></div>`).join(''):'<span class="directory-unassigned">No class assignment</span>'}</div>
     <div class="directory-assign"><label>Destination section<select data-target="${esc(p.user_id)}" ${p.kind==='client'?'disabled':''}>${classSelectOptions()}</select></label><button type="button" data-add="${esc(p.user_id)}" ${p.kind==='client'||!sections.length?'disabled':''}>Add</button></div>
   </article>`;
  }).join(''):'<p>No accounts match this filter.</p>';
  refreshControls();
 }
 async function reload(){
  const ticket=++request;
  try{
   const rows=await service.rpc('playground_teacher_directory');
   if(disposed||ticket!==request)return;
   people=Array.isArray(rows)?rows:[];
   if(sheetRows.length)applySheetRows(sheetRows);
   selected=new Set([...selected].filter(id=>people.some(p=>p.user_id===id&&p.kind==='student')));
   render();
  }catch(error){
   if(disposed||ticket!==request)return;
   $('directory-list').textContent='Could not load registered accounts. Apply the registered-account roster SQL migration in Supabase.';
   tell(error?.message||'The account directory is unavailable.');
  }
 }
 function getTarget(userId){
  return container.querySelector('[data-target="'+userId+'"]')?.value||'';
 }
 async function perform(userId,action,{from=null,to=null}={}){
  const person=people.find(p=>p.user_id===userId);
  if(!person)return;
  if(!to&&action!=='remove'){tell('Choose a destination section for @'+person.github_account+'.');return}
  if(action==='move'){
   const source=sections.find(c=>c.id===from),dest=sections.find(c=>c.id===to);
   if(from===to){tell('Choose a different destination section.');return}
   if(source?.course_id!==dest?.course_id){tell('To enroll a student in a different subject, use Add rather than Move.');return}
  }
  if(action==='remove'&&!confirm('Remove @'+person.github_account+' from this class section? Their saved work will remain intact.'))return;
  if(action==='move'&&!confirm('Move @'+person.github_account+' to the selected section?'))return;
  const button=container.querySelector('[data-'+action+'="'+userId+'"]');
  if(button)button.disabled=true;
  try{
   await service.rpc('playground_teacher_manage_membership',{p_student:userId,p_action:action,p_to_class:to,p_from_class:from});
   tell('@'+person.github_account+(action==='remove'?' removed from the section.':action==='move'?' moved to another section.':' added to the section.'));
   await reload();await onChanged();
  }catch(error){tell(error?.message||'Could not update this class assignment.')}
  finally{if(button?.isConnected)button.disabled=false}
 }
 container.onclick=async e=>{
  const b=e.target.closest('button');if(!b||!container.contains(b))return;
  if(b.id==='directory-refresh'){await reload();return}
  const id=b.dataset.add||b.dataset.move||b.dataset.remove;
  if(!id)return;
  const action=b.hasAttribute('data-add')?'add':b.hasAttribute('data-move')?'move':'remove';
  await perform(id,action,{from:b.dataset.from||null,to:action==='remove'?null:getTarget(id)});
 };
 container.onchange=async e=>{
  const t=e.target;
  if(t.id==='directory-filter'){filter=t.value;render();return}
  if(t.id==='directory-select-visible'){
   for(const p of visible().filter(p=>p.kind==='student'))t.checked?selected.add(p.user_id):selected.delete(p.user_id);
   render();return
  }
  if(t.matches('[data-check]')){t.checked?selected.add(t.dataset.check):selected.delete(t.dataset.check);refreshControls();return}
  if(t.matches('[data-kind]')){
   const id=t.dataset.kind,p=people.find(p=>p.user_id===id),newKind=t.value;
   if(!p||p.kind===newKind)return;
   if(newKind==='client'&&active(p).length&&!confirm('Mark @'+p.github_account+' as a private client? This removes all of their class assignments but keeps their saved work.')){t.value=p.kind;return}
   t.disabled=true;
   try{await service.rpc('playground_teacher_set_account_kind',{p_student:id,p_kind:newKind});selected.delete(id);tell('@'+p.github_account+' is now a '+(newKind==='client'?'private client.':'student.'));await reload();await onChanged()}
   catch(error){t.value=p.kind;tell(error?.message||'Could not change the account type.')}
   finally{if(t.isConnected)t.disabled=false}
  }
 };
 $('directory-search').oninput=e=>{query=e.target.value;render()};
 $('sheet-period').onchange=e=>{sheetPeriod=e.target.value;render()};
 $('directory-bulk-add').onclick=async()=>{
  const dest=$('directory-bulk-class').value;
  if(!dest){tell('Select a destination section for the chosen students.');return}
  const ids=[...selected];
  if(!ids.length)return;
  const b=$('directory-bulk-add');b.disabled=true;
  try{
   let total=0;
   for(let i=0;i<ids.length;i+=200){
    total+=await service.rpc('playground_teacher_bulk_add',{p_students:ids.slice(i,i+200),p_class:dest});
   }
   selected.clear();
   tell(total+' students added to '+(sections.find(c=>c.id===dest)?.name||'the section')+'.');
   await reload();await onChanged();
  }catch(error){tell(error?.message||'Could not add the selected students.')}
  finally{if(b.isConnected)b.disabled=false}
 };
 refreshControls();
 return {reload,setClasses(newClasses){sections=newClasses;render()},dispose(){disposed=true;request++;sheetBridge.dispose();sheetRows=[];sheetByGithub.clear()}};
}
