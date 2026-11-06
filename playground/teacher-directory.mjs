// Teacher-only account directory: all registered GitHub accounts, not a pasted roster.
import {mountGoogleSheetRoster,normalizeGithub} from './google-sheet-roster.mjs?v=dual-period-1';
import {sortRoster} from './roster-sort.mjs?v=dual-period-1';
import {availableRosterPeriods,rosterPeriodsForStudent} from './roster-periods.mjs?v=all-periods-1';
const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const labelFor=course=>({'computer-science-1':'Computer Science I','game-programming':'Game Programming & Design','mobile-app-dev':'Mobile App & Web',uil:'UIL Computer Science',capstone:'Capstone'})[course]||course;

export function mountTeacherDirectory(container,service,{classes=[],sort='last',onChanged=async()=>{},onNamesChanged=()=>{},onSortChange=()=>{}}={}){
 let people=[],sections=classes,disposed=false,request=0,selected=new Set(),filter='all',query='',sheetRows=[],sheetByGithub=new Map(),duplicateGithub=new Set(),sheetPeriod='all',savedNames=new Map(),namesAvailable=false,sheetById=new Map(),sortBy=sort,sheetSyncAvailable=false;
 container.innerHTML=`<div class="directory-heading"><h2>Registered accounts</h2><span id="directory-count" role="status"></span></div>
 <p>Every GitHub account registered on this site appears here, including people who haven't joined a class. Mark private clients separately, then organize students into sections.</p>
 <details class="panel" id="sheet-mapping"><summary>Google Sheet roster (optional)</summary><div id="sheet-linker"></div><p id="sheet-match-summary" role="status"></p><p id="sheet-sync-status" role="status">Verified Sheet matches are synchronized whenever Google Sheet is loaded.</p><div id="sheet-unmatched"></div></details>
 <div class="directory-controls">
  <label>Find an account<input id="directory-search" type="search" placeholder="Name, GitHub username, or section" autocomplete="off"></label>
  <label>Sort students by<select id="directory-sort"><option value="last">Last name</option><option value="first">First name</option><option value="github">GitHub username</option></select></label>
  <label>Show<select id="directory-filter"><option value="all">All accounts</option><option value="enrolled">Enrolled students</option><option value="unassigned">Unassigned students</option><option value="client">Private clients</option><option value="without-sheet">No Sheet match</option></select></label>
  <label id="sheet-period-label" hidden>Class period<select id="sheet-period"><option value="all">All periods</option></select></label>
  <button id="directory-refresh" class="secondary" type="button">Refresh accounts</button>
 </div>
 <div class="directory-bulk"><label><input id="directory-select-visible" type="checkbox"> Select visible students</label><label>Add selected to <select id="directory-bulk-class"></select></label><button id="directory-bulk-add" type="button">Add selected</button></div>
 <p id="directory-status" role="status"></p><div id="directory-list"><p>Loading accounts…</p></div>`;
 const $=id=>container.querySelector('#'+id);
 const sheetBridge=mountGoogleSheetRoster($('sheet-linker'),{onRows:rows=>applySheetRows(rows,{sync:rows.length>0})});
 $('directory-sort').value=['last','first','github'].includes(sortBy)?sortBy:'last';
 const tell=message=>{$('directory-status').textContent=message};
 const active=p=>p.memberships.filter(m=>m.status==='approved'||m.status==='pending');
 const match=p=>sheetByGithub.get(normalizeGithub(p.github_account))||sheetById.get(p.user_id)||null;
 const effectiveSheet=(id,github='')=>sheetByGithub.get(normalizeGithub(github))||sheetById.get(id)||null;
 const periodsFor=(id,github='')=>effectiveSheet(id,github)?.periods||[];
 const filterPeriodsFor=p=>rosterPeriodsForStudent(periodsFor(p.user_id,p.github_account),active(p));
 const nameFor=(userId,github='',fallback='')=>{
  const p=people.find(person=>person.user_id===userId);
  const sheet=effectiveSheet(userId,github);
  const candidate=[p?.student_name,savedNames.get(userId),fallback,p?.display_name].find(v=>v&&normalizeGithub(v)!==normalizeGithub(github));
  return sheet?.name||candidate||github||'Student';
 };
 const fieldsFor=(id,github='',fallback='')=>{const sheet=effectiveSheet(id,github);return {name:nameFor(id,github,fallback),first:sheet?.firstName||sheet?.first_name||'',last:sheet?.lastName||sheet?.last_name||'',github}};
 const visible=()=>sortRoster(people.filter(p=>{
  const memberships=active(p);
  if(filter==='enrolled'&&(p.kind!=='student'||!memberships.length))return false;
  if(filter==='unassigned'&&(p.kind!=='student'||memberships.length))return false;
  if(filter==='client'&&p.kind!=='client')return false;
  if(filter==='without-sheet'&&match(p))return false;
  if(sheetPeriod!=='all'&&!filterPeriodsFor(p).includes(sheetPeriod))return false;
  const search=query.toLocaleLowerCase();
  return !search||[p.github_account,nameFor(p.user_id,p.github_account),match(p)?.name,...periodsFor(p.user_id,p.github_account),...memberships.map(m=>m.name),...memberships.map(m=>labelFor(m.course_id))].some(s=>String(s).toLocaleLowerCase().includes(search));
 }),sortBy,p=>fieldsFor(p.user_id,p.github_account,p.student_name||p.display_name));
 async function applySheetRows(rows,{sync=false}={}){
  if(disposed)return '';
  sheetRows=Array.isArray(rows)?rows:[];
  duplicateGithub=new Set();
  sheetByGithub=new Map();
  for(const entry of sheetRows){
   if(sheetByGithub.has(entry.github)){duplicateGithub.add(entry.github);sheetByGithub.delete(entry.github)}
   else if(!duplicateGithub.has(entry.github))sheetByGithub.set(entry.github,entry);
  }
  const refreshPeriodFilter=()=>{
   const periods=availableRosterPeriods(sections,[...sheetById.values(),...sheetRows],people);
   $('sheet-period').innerHTML='<option value="all">All periods</option>'+periods.map(p=>`<option value="${esc(p)}">${esc(p)}</option>`).join('');
   sheetPeriod=periods.includes(sheetPeriod)?sheetPeriod:'all';
   $('sheet-period').value=sheetPeriod;
   $('sheet-period-label').hidden=!periods.length;
  };
  refreshPeriodFilter();
  const registered=new Set(people.map(p=>normalizeGithub(p.github_account)));
  const matched=people.filter(p=>p.kind==='student'&&sheetByGithub.has(normalizeGithub(p.github_account))).length;
  const missing=[...sheetByGithub.values()].filter(r=>!registered.has(r.github));
  $('sheet-match-summary').textContent=sheetRows.length
   ? matched+' registered student accounts matched. '+missing.length+' GitHub accounts have not registered. '+duplicateGithub.size+' duplicate usernames skipped.'
   : 'Saved matches remain available across refreshes. Reconnect Google to check updated names and periods.';
  $('sheet-unmatched').innerHTML=missing.length
   ? '<details><summary>Sheet usernames not registered ('+missing.length+')</summary><p>Students must sign into Playground before they can be matched.</p><ul>'+
      missing.slice(0,200).map(r=>`<li>@${esc(r.github)} (${esc((r.periods||[]).join(', ')||'No period')})</li>`).join('')+'</ul></details>'
   :'';
  render();onNamesChanged();
  if(!sync)return '';
  if(!sheetSyncAvailable)throw Error('Sheet sync is unavailable. Apply the teacher Sheet roster migration first.');
  const matchedRows=people.filter(p=>p.kind==='student'&&sheetByGithub.has(normalizeGithub(p.github_account)));
  if(!matchedRows.length){
   $('sheet-sync-status').textContent='No registered student accounts matched. No database changes.';
   return 'No registered student accounts matched.';
  }
  const payload=matchedRows.map(p=>{
   const row=sheetByGithub.get(normalizeGithub(p.github_account));
   return {user_id:p.user_id,first_name:row.firstName||'',last_name:row.lastName||'',periods:row.periods||[]};
  });
  let added=0,updated=0,unchanged=0;
  for(let i=0;i<payload.length;i+=200){
   const result=await service.rpc('playground_teacher_sync_sheet',{p_rows:payload.slice(i,i+200)});
   added+=Number(result.new)||0;updated+=Number(result.updated)||0;unchanged+=Number(result.unchanged)||0;
  }
  const stored=await service.rpc('playground_teacher_sheet_roster');
  if(disposed)return '';
  sheetById=new Map((Array.isArray(stored)?stored:[]).map(p=>[p.user_id,p]));
  refreshPeriodFilter();
  const message='Roster checked: '+added+' new, '+updated+' updated, '+unchanged+' unchanged. Section assignments were not changed.';
  $('sheet-sync-status').textContent=message;
  render();onNamesChanged();
  return message;
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
       <span><strong>${esc(nameFor(p.user_id,p.github_account))}</strong><small>@${esc(p.github_account)}${periodsFor(p.user_id,p.github_account).length?' · Sheet periods '+esc(periodsFor(p.user_id,p.github_account).join(', ')):''}</small></span></label><div class="directory-name-edit"><label>Teacher backup name<input type="text" data-display-name="${esc(p.user_id)}" maxlength="80" value="${esc(savedNames.get(p.user_id)||'')}" placeholder="Optional backup name"></label><button type="button" class="secondary" data-save-name="${esc(p.user_id)}" ${namesAvailable?'':'disabled'}>Save name</button><small>${sheet?.name?'Sheet name is primary':p.student_name?'Student-provided name is the backup':'GitHub username is the backup'}</small></div></div>
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
   try{
    const names=await service.rpc('playground_teacher_names');
    if(disposed||ticket!==request)return;
    savedNames=new Map((Array.isArray(names)?names:[]).filter(n=>n.user_id&&n.display_name).map(n=>[n.user_id,n.display_name]));namesAvailable=true;
   }catch(error){
    namesAvailable=false;
    tell('Names are temporary until the teacher display names SQL migration is applied. '+(error?.message||''));
   }
   try{
    const stored=await service.rpc('playground_teacher_sheet_roster');
    if(disposed||ticket!==request)return;
    sheetById=new Map((Array.isArray(stored)?stored:[]).map(p=>[p.user_id,p]));
    sheetSyncAvailable=true;
   }catch(error){
    sheetSyncAvailable=false;
    tell('Saved Sheet roster unavailable: '+(error?.message||'Apply the Sheet sync migration.'));
   }
   await applySheetRows(sheetRows,{sync:false});
   selected=new Set([...selected].filter(id=>people.some(p=>p.user_id===id&&p.kind==='student')));
   render();onNamesChanged();
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
  if(b.hasAttribute('data-save-name')){
   const id=b.dataset.saveName,input=container.querySelector('[data-display-name="'+id+'"]');
   if(!input||!namesAvailable)return;
   b.disabled=true;
   try{
    const name=input.value.trim();await service.rpc('playground_teacher_save_names',{p_rows:[{user_id:id,display_name:name}]});
    if(name)savedNames.set(id,name);else savedNames.delete(id);
    render();onNamesChanged();tell(name?'Teacher backup name saved.':'Teacher backup name cleared.');
   }catch(error){tell(error?.message||'Could not save the student name.')}finally{if(b.isConnected)b.disabled=false}
   return;
  }
  const id=b.dataset.add||b.dataset.move||b.dataset.remove;
  if(!id)return;
  const action=b.hasAttribute('data-add')?'add':b.hasAttribute('data-move')?'move':'remove';
  await perform(id,action,{from:b.dataset.from||null,to:action==='remove'?null:getTarget(id)});
 };
 container.onchange=async e=>{
  const t=e.target;
  if(t.id==='directory-filter'){filter=t.value;render();return}
   if(t.id==='directory-sort'){sortBy=t.value;onSortChange(sortBy);render();return}
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
 return {reload,nameFor,fieldsFor,periodsFor,setSort(value){sortBy=value;$('directory-sort').value=value;render()},setClasses(newClasses){sections=newClasses;applySheetRows(sheetRows,{sync:false})},dispose(){disposed=true;request++;sheetBridge.dispose();sheetRows=[];sheetByGithub.clear()}};
}
