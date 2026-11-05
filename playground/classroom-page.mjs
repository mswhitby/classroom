import {COURSES,activityState} from './classroom-model.mjs?v=student-1';
import {mountTeacherDirectory} from './teacher-directory.mjs?v=all-periods-1';
import {sortRoster} from './roster-sort.mjs?v=dual-period-1';
import {centralWeekStart} from './teacher-history.mjs?v=student-history-1';
import {studentAssignmentsHtml,weeklyPointsHtml} from './teacher-student-panel.mjs?v=student-history-1';
const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const options=()=>Object.entries(COURSES).map(([id,name])=>`<option value="${id}">${esc(name)}</option>`).join('');
const courseHref=id=>'#/course/'+encodeURIComponent(id);
const activityName=value=>String(value||'—').replace(/^(lesson|challenge|project):/,'').split('/').at(-1).replace(/^\d+-/,'').replace(/[-_]/g,' ').replace(/\b[a-z]/g,c=>c.toUpperCase());
const time=value=>value?new Date(value).toLocaleString():'—';
function access(main,account){
 if(!account.signedIn){main.innerHTML='<h1>Your classes</h1><p>Sign in with GitHub to join a class or open your teacher dashboard.</p><button id="class-login">Sign in with GitHub</button>';main.querySelector('#class-login').onclick=()=>account.signIn();return false}
 return true;
}
async function serviceFor(main,account){
 if(!access(main,account))return null;
 const pageHash=location.hash,service=account.classroom;
 try{await service.refreshContext();return service}catch{if(location.hash===pageHash)main.innerHTML='<h1>Classroom setup</h1><p>The classroom connection is not available yet. If setup was just completed, refresh this page. Your drafts and practice are unchanged.</p>';return null}
}
export async function classesPage(main,account){
 const pageHash=location.hash;document.title='My classes | Playground';main.innerHTML='<p role="status">Opening your classes…</p>';
 const service=await serviceFor(main,account);if(!service||location.hash!==pageHash)return;
 main.innerHTML=`<div class="eyebrow">Your learning spaces</div><h1>My classes</h1><p class="intro">Join your class with the code from your teacher. A valid code enrolls you immediately.</p>${service.context.is_teacher?'<p><a class="btn btn-primary" href="#/teacher">Open teacher dashboard →</a></p>':''}<div class="classroom-columns"><section class="panel"><h2>Join a class</h2><form id="join-class"><label for="class-code">Class code</label><input id="class-code" maxlength="20" autocomplete="off" required><label for="student-display-name">Your name for your teacher</label><input id="student-display-name" maxlength="80" autocomplete="name" required><label class="class-consent"><input id="activity-consent" type="checkbox" required> I understand that, when I join, my teacher can see my practice results, submissions, current lesson, and recent browser activity. Draft code and individual keystrokes are not shared.</label><button type="submit">Join class</button><p id="join-status" role="status"></p></form></section><section class="panel"><h2>My sections</h2><p>Update the name shown to your teacher when a school roster name is not available.</p><button type="button" id="save-student-display-name" class="secondary">Save my name</button><p id="student-name-status" role="status"></p><button id="refresh-memberships" class="secondary">Refresh class status</button><div id="memberships"></div></section></div><section class="panel"><h2>What activity sharing means</h2><p>Only approved class members share activity. Signals distinguish recent interaction from an open page. They do not prove attention, learning, or time spent. Activity outside this website is not visible.</p><p>Drafts stay private. Run and tests are practice; only Submit work creates a hand-in. Guests do not send class activity.</p></section>`;
 const memberships=main.querySelector('#memberships');
 const studentName=main.querySelector('#student-display-name');
 studentName.value=service.context.memberships.find(m=>m.status!=='removed'&&m.display_name)?.display_name||account.user?.user_metadata?.full_name||account.user?.user_metadata?.name||'';
 main.querySelector('#save-student-display-name').disabled=!service.context.memberships.some(m=>m.status==='approved'||m.status==='pending');
 main.querySelector('#save-student-display-name').onclick=async()=>{const status=main.querySelector('#student-name-status'),name=studentName.value.trim();if(!name||name.length>80){status.textContent='Enter your name (up to 80 characters).';return}try{await service.rpc('playground_update_my_display_name',{p_name:name});await service.refreshContext();render();status.textContent='Your backup name was updated.'}catch{status.textContent='Could not save your name. Please try again.'}};
 function render(){memberships.innerHTML=service.context.memberships.length?service.context.memberships.map(m=>`<article class="class-membership"><h3>${esc(m.name)}</h3><p>${esc(COURSES[m.course_id])} · ${m.status==='approved'?'Enrolled':m.status==='pending'?'Waiting for teacher approval':'Not enrolled'}</p>${m.status==='approved'?`<a href="${courseHref(m.course_id)}">Open course →</a>`:''}${m.status!=='removed'?`<button class="secondary" data-leave="${esc(m.class_id)}">Leave class</button>`:''}</article>`).join(''):'<p>No classes yet. Enter your class code to join.</p>';
  memberships.querySelectorAll('[data-leave]').forEach(b=>b.onclick=async()=>{if(!confirm('Leave this class and stop sharing class activity with this teacher?'))return;try{await service.rpc('playground_leave_class',{p_class:b.dataset.leave});await service.refreshContext();render()}catch{alert('Could not leave this class. Try again.')}})
 }
 render();
 main.querySelector('#refresh-memberships').onclick=async()=>{try{await service.refreshContext();render()}catch{alert('Class status could not refresh. Try again.')}};
 main.querySelector('#join-class').onsubmit=async event=>{event.preventDefault();const button=event.target.querySelector('button'),status=main.querySelector('#join-status');button.disabled=true;try{const result=await service.rpc('playground_join_class',{p_code:main.querySelector('#class-code').value,p_name:studentName.value.trim()});status.textContent=result.status==='approved'?'You are enrolled in '+result.name+'.':result.status==='removed'?'Ask your teacher to restore your place in '+result.name+'.':'Request sent for '+result.name+'. Wait for your teacher to approve it.';await service.refreshContext();render()}catch{status.textContent='Could not join. Check the code and your name, then try again.'}finally{button.disabled=false}};
}
export async function teacherPage(main,account){
 const pageHash=location.hash;document.title='Teacher dashboard | Playground';main.innerHTML='<p role="status">Opening teacher dashboard…</p>';
 const service=await serviceFor(main,account);if(!service||location.hash!==pageHash)return;
 if(!service.context.is_teacher){main.innerHTML='<h1>Teacher dashboard</h1><p>This GitHub account does not have teacher access.</p><a href="#/classes">Open my classes →</a>';return}
 let disposed=false,selected='',classes=[],snapshot=null,inflight=false,version=0,selectedStudent='';
 const historyCache=new Map(),historyPending=new Map();
 let weeklyData=null,weeklyClass='',weeklyFetchedAt=0,weekChoice=null,inlineReceipt=null;
 const preferenceKey='playground:teacher:dashboard:'+(account.user?.id||'teacher-preview');
 let preferences={};try{preferences=JSON.parse(localStorage.getItem(preferenceKey)||'{}')||{}}catch{}
 preferences.sort=['first','last','github'].includes(preferences.sort)?preferences.sort:'last';
 const savePreferences=()=>{try{localStorage.setItem(preferenceKey,JSON.stringify({view:preferences.view,section:preferences.section,sort:preferences.sort}))}catch{}};
 main.innerHTML=`<div class="eyebrow">Your classroom</div><h1>Teacher dashboard</h1><p class="intro">See your sections, recent student activity, practice checks, and work students chose to submit.</p><div class="teacher-toolbar"><label for="teacher-section">Class section</label><select id="teacher-section"></select><button id="teacher-refresh" class="secondary">Refresh now</button><span id="teacher-updated" role="status"></span></div><details class="panel" id="new-class-panel"><summary>Create a class section</summary><form id="create-class" class="class-form"><label for="section-name">Section name</label><input id="section-name" placeholder="Period 2 · Computer Science I" maxlength="80" required><label for="section-course">Course</label><select id="section-course">${options()}</select><button type="submit">Create section</button><p id="create-status" role="status"></p></form></details><section class="panel" id="class-invitation"></section><section class="panel" id="registered-directory"></section><div id="teacher-data"></div><section class="panel"><h2>Reading activity signals</h2><p><strong>Recently interacting:</strong> an approved student’s visible page reported an interaction within two minutes, with a signal received in the last 65 seconds. <strong>Viewing page:</strong> the page is visible and reporting, with no recent interaction. <strong>No recent signal:</strong> the page may be hidden, closed, offline, or idle.</p><p>Updates refresh about every 20 seconds while this dashboard is visible. These are browser-reported clues, not attendance, proof of attention, or grades. Draft code and individual keystrokes are not collected for this view.</p></section><section id="submission-detail" class="panel" hidden></section>`;
 const $=id=>main.querySelector('#'+id);
 // Keep section monitoring, account management and setup in separate views.
 main.classList.add('teacher-dashboard');
 const tabs=document.createElement('div');tabs.className='student-tabs teacher-tabs';tabs.setAttribute('role','tablist');tabs.setAttribute('aria-label','Teacher dashboard views');
 const views=[['Class overview',['class-invitation','teacher-data','submission-detail']],['Accounts',['registered-directory']],['Section setup',['new-class-panel']]];
 const panels=views.map(([name,ids],i)=>{const panel=document.createElement('section');panel.id='teacher-view-'+i;panel.setAttribute('role','tabpanel');panel.setAttribute('aria-labelledby','teacher-tab-'+i);for(const id of ids)panel.append($(id));const button=document.createElement('button');button.id='teacher-tab-'+i;button.type='button';button.textContent=name;button.setAttribute('role','tab');button.setAttribute('aria-controls',panel.id);button.onclick=()=>selectView(i);button.onkeydown=e=>{if(!['ArrowLeft','ArrowRight','Home','End'].includes(e.key))return;e.preventDefault();const n=e.key==='Home'?0:e.key==='End'?2:(i+(e.key==='ArrowRight'?1:2))%3;selectView(n);tabs.children[n].focus()};tabs.append(button);return panel});
 function selectView(n){panels.forEach((panel,i)=>{panel.hidden=i!==n;tabs.children[i].setAttribute('aria-selected',String(i===n));tabs.children[i].tabIndex=i===n?0:-1});preferences.view=n;savePreferences()}
 $('teacher-section').closest('.teacher-toolbar').after(tabs,...panels);selectView(Number.isInteger(preferences.view)&&preferences.view>=0&&preferences.view<3?preferences.view:0);
 const signals=[...main.querySelectorAll(':scope > section')].find(n=>n.querySelector('h2')?.textContent==='Reading activity signals');if(signals){const details=document.createElement('details'),summary=document.createElement('summary');summary.textContent='How activity signals work';details.className='panel';details.append(summary,...signals.childNodes);details.querySelector('h2')?.remove();panels[0].append(details);signals.remove()}
 const directory=mountTeacherDirectory($('registered-directory'),service,{classes,sort:preferences.sort,onChanged:()=>refresh(),onNamesChanged:()=>{if(snapshot)render(snapshot)},onSortChange:value=>{preferences.sort=value;savePreferences();if(snapshot)render(snapshot)}});
 const displayName=m=>directory.nameFor(m.user_id,m.github_account,m.display_name);
 async function loadClasses(){classes=await service.rpc('playground_teacher_classes');if(disposed||location.hash!==pageHash)return;selected=classes.some(c=>c.id===selected)?selected:classes.some(c=>c.id===preferences.section)?preferences.section:classes[0]?.id||'';preferences.section=selected;savePreferences();$('teacher-section').innerHTML=classes.length?classes.map(c=>`<option value="${esc(c.id)}" ${c.id===selected?'selected':''}>${esc(c.name)} · ${esc(COURSES[c.course_id])}</option>`).join(''):'<option>No sections yet</option>';$('new-class-panel').open=!classes.length;if(!classes.length)selectView(2);directory.setClasses(classes);await directory.reload();await refresh()}
 function showInlineReceipt(receiptId){
  const slot=$('expanded-student-card')?.querySelector('.student-inline-receipt');
  if(!slot)return;
  const currentClass=selected,currentStudent=selectedStudent;
  inlineReceipt={id:receiptId,student:currentStudent,section:currentClass,html:'Opening saved hand-in…'};
  slot.hidden=false;slot.textContent=inlineReceipt.html;
  service.rpc('playground_teacher_submission',{p_class:currentClass,p_submission:receiptId}).then(row=>{
   if(disposed||selected!==currentClass||selectedStudent!==currentStudent)return;
   const content=Object.entries(row.files||{}).map(([filename,code])=>`<h5>${esc(filename)}</h5><pre><code>${esc(code)}</code></pre>`).join('');
   inlineReceipt.html=`<div class="student-detail-heading"><h4>Submitted copy · ${esc(activityName(row.activity_id))}</h4><button type="button" class="secondary" data-close-inline-receipt>Close</button></div><p>Submitted ${esc(time(row.submitted_at))}</p>${content}`;
   const target=$('expanded-student-card')?.querySelector('.student-inline-receipt');
   if(target){target.hidden=false;target.innerHTML=inlineReceipt.html;target.querySelector('[data-close-inline-receipt]')?.addEventListener('click',()=>{inlineReceipt=null;target.hidden=true})}
  }).catch(()=>{
   if(inlineReceipt?.id===receiptId){
    inlineReceipt.html='<p>Could not open this submitted copy.</p>';
    const target=$('expanded-student-card')?.querySelector('.student-inline-receipt');
    if(target){target.hidden=false;target.innerHTML=inlineReceipt.html}
   }
  });
 }
 function showStudentDetails(data,approved){
  const panel=$('expanded-student-card');
  if(!panel||!selectedStudent)return;
  const student=approved.find(m=>m.user_id===selectedStudent);
  if(!student)return;
  const key=selected+'|'+selectedStudent,existing=historyCache.get(key);
  const chosen=weekChoice||centralWeekStart(data.server_time||new Date());
  const earned=(weeklyData?.weeks||[]).find(r=>r.user_id===selectedStudent&&r.week_start===chosen);
  if(existing?.error){panel.textContent=existing.error;return}
  if(existing?.data){
   panel.innerHTML=studentAssignmentsHtml(existing.data,{points:Number(earned?.points)||0,week:chosen});
   panel.querySelectorAll('[data-history-receipt]').forEach(btn=>btn.onclick=()=>showInlineReceipt(btn.dataset.historyReceipt));
   if(inlineReceipt?.student===selectedStudent&&inlineReceipt.section===selected){
    const receipt=panel.querySelector('.student-inline-receipt');
    receipt.hidden=false;receipt.innerHTML=inlineReceipt.html;
    receipt.querySelector('[data-close-inline-receipt]')?.addEventListener('click',()=>{
     inlineReceipt=null;receipt.hidden=true
    });
   }
   return;
  }
  panel.innerHTML='<p role="status">Loading complete assignment history…</p>';
  if(historyPending.has(key))return;
  const promise=service.rpc('playground_teacher_student_history',{p_class:selected,p_student:selectedStudent});
  historyPending.set(key,promise);
  promise.then(history=>{
   historyCache.set(key,{data:history,loadedAt:Date.now()});
   if(!disposed&&selected+'|'+selectedStudent===key&&snapshot)showStudentDetails(snapshot,snapshot.roster.filter(m=>m.status==='approved'));
  }).catch(error=>{
   historyCache.set(key,{error:'Assignment history could not load: '+(error?.message||'Please refresh.')});
   if(!disposed&&selected+'|'+selectedStudent===key&&snapshot)showStudentDetails(snapshot,snapshot.roster.filter(m=>m.status==='approved'));
  }).finally(()=>historyPending.delete(key));
 }
 function render(data){
  const c=classes.find(c=>c.id===selected);if(!c)return;
  $('class-invitation').innerHTML=`<h2>${esc(c.name)}</h2><p>${esc(COURSES[c.course_id])}</p><p>Join code: <strong class="join-code">${esc(c.join_code)}</strong> <button class="secondary" id="copy-class-code">Copy code</button></p><p>Students open <a href="#/classes">My classes</a>, sign in with GitHub and enter this code to enroll immediately.</p>`;
  $('copy-class-code').onclick=async()=>{try{await navigator.clipboard.writeText(c.join_code);$('copy-class-code').textContent='Copied'}catch{$('copy-class-code').textContent='Select the code to copy'}};
  const pending=data.roster.filter(m=>m.status==='pending'),approved=sortRoster(data.roster.filter(m=>m.status==='approved'),preferences.sort,m=>directory.fieldsFor(m.user_id,m.github_account,m.display_name)),removed=data.roster.filter(m=>m.status==='removed');
  const classified=approved.map(m=>({...m,activity:data.stale?{...activityState(data.signals.filter(s=>s.user_id===m.user_id),Date.parse(data.server_time)),state:'unknown',label:'Status unavailable'}:activityState(data.signals.filter(s=>s.user_id===m.user_id),Date.parse(data.server_time))}));
  const reviewFlags=data.submissions.filter(s=>s.activity_id.startsWith('review:'));const handins=data.submissions.filter(s=>!s.activity_id.startsWith('review:'));
  const receiptCounts=new Map();for(const s of handins)receiptCounts.set(s.user_id,(receiptCounts.get(s.user_id)||0)+1);
  $('teacher-data').innerHTML=`<div class="progress-grid"><div class="stat"><strong>${approved.length}</strong><span>Enrolled students</span></div><div class="stat"><strong>${classified.filter(m=>m.activity.state==='active').length}</strong><span>Recently interacting</span></div><div class="stat"><strong>${pending.length}</strong><span>Waiting for approval</span></div></div>${weeklyPointsHtml(approved.map(m=>({user_id:m.user_id,github_account:m.github_account,display_name:displayName(m)})),weeklyData,weekChoice,data.server_time||new Date())}<section class="panel"><h2>Join requests</h2>${pending.length?pending.map(m=>`<div class="progress-row"><span>${esc(displayName(m))} <small>${esc(m.github_account||'GitHub account unavailable')}</small><small>Requested ${esc(time(m.joined_at))}</small></span><span><button data-student="${m.user_id}" data-status="approved">Approve</button> <button class="secondary" data-student="${m.user_id}" data-status="removed">Decline</button></span></div>`).join(''):'<p>No pending requests.</p>'}</section><section class="panel"><h2>Section roster &amp; activity</h2><p>All enrolled students are listed, including those who are offline. Google Sheet names are preferred; practice checks are separate from submitted work.</p><label class="roster-sort-label" for="overview-sort">Sort students by <select id="overview-sort"><option value="last" ${preferences.sort==='last'?'selected':''}>Last name</option><option value="first" ${preferences.sort==='first'?'selected':''}>First name</option><option value="github" ${preferences.sort==='github'?'selected':''}>GitHub username</option></select></label>${approved.length?`<div class="teacher-table-wrap"><table class="teacher-table section-roster-table"><thead><tr><th>Student</th><th>Activity signal</th><th>Current activity</th><th>Practice</th><th>Hand-ins</th><th>Membership</th></tr></thead><tbody>${classified.map(m=>{const checks=data.checks.find(r=>r.user_id===m.user_id),practice=data.practice.filter(r=>r.user_id===m.user_id),signal=m.activity.signal;return `<tr><th scope="row"><button type="button" class="teacher-student-name" data-student-details="${esc(m.user_id)}" aria-expanded="${selectedStudent===m.user_id?'true':'false'}" aria-controls="expanded-student-card">${selectedStudent===m.user_id?'▾':'▸'} ${esc(displayName(m))}</button><small>@${esc(m.github_account||'GitHub account unavailable')}${directory.periodsFor(m.user_id,m.github_account).length?' · Sheet periods '+esc(directory.periodsFor(m.user_id,m.github_account).join(', ')):''}</small></th><td><span class="activity-badge ${m.activity.state}">${esc(m.activity.label)}</span><small>${signal?'Last signal '+esc(time(signal.last_seen_at)):'No activity reported yet'}</small></td><td>${esc(activityName(signal?.activity_id))}<small>${esc(signal?.action||'')}</small></td><td>${practice.filter(p=>p.status==='completed'&&p.activity_kind!=='self-report').length} passed<small>${Number(checks?.checks)||0} checks total</small></td><td>${receiptCounts.get(m.user_id)||0}<small>In recent hand-ins</small></td><td><button class="secondary" data-student="${m.user_id}" data-status="removed">Remove</button></td></tr>${selectedStudent===m.user_id?'<tr class="student-expansion-row"><td colspan="6"><div id="expanded-student-card"></div></td></tr>':''}`}).join('')}</tbody></table></div>`:'<p>No students yet. Share the join code to enroll your class.</p>'}</section><section class="panel"><h2>Flagged for teacher review</h2><p>Activity reports from students in this section. Opening a flag shows their note.</p>${reviewFlags.length?reviewFlags.map(s=>`<div class="progress-row"><span>${esc(displayName(approved.find(m=>m.user_id===s.user_id)||{user_id:s.user_id,display_name:'Student'}))} · ${esc(activityName(s.activity_id.slice(7)))}</span><button data-receipt="${s.id}">Open flag</button></div>`).join(''):'<p>No review flags.</p>'}</section><section class="panel"><h2>Recent hand-ins</h2><p>Latest 200 submissions for approved students in this section. Opening a hand-in shows the saved copy; later draft edits do not change it.</p>${handins.length?handins.map(s=>`<div class="progress-row"><span>${esc(displayName(approved.find(m=>m.user_id===s.user_id)||{user_id:s.user_id,display_name:'Student'}))} · ${esc(activityName(s.activity_id))}<small>Submitted ${esc(time(s.submitted_at))}</small></span><button class="secondary" data-receipt="${s.id}">Open hand-in</button></div>`).join(''):'<p>No hand-ins yet. Run never creates one.</p>'}</section>${removed.length?`<details class="panel"><summary>Removed or declined (${removed.length})</summary>${removed.map(m=>`<div class="progress-row"><span>${esc(displayName(m))}</span><button class="secondary" data-student="${m.user_id}" data-status="approved">Restore</button></div>`).join('')}</details>`:''}`;
  $('overview-sort').onchange=e=>{preferences.sort=e.target.value;savePreferences();directory.setSort(preferences.sort);render(data)};
  const weeks=$('teacher-points-week');if(weeks)weeks.onchange=e=>{weekChoice=e.target.value;render(data)};
  showStudentDetails(data,approved);
  $('teacher-data').querySelectorAll('[data-student-details]').forEach(b=>b.onclick=()=>{selectedStudent=selectedStudent===b.dataset.studentDetails?'':b.dataset.studentDetails;inlineReceipt=null;render(data)});
  $('teacher-data').querySelectorAll('[data-student]').forEach(b=>b.onclick=async()=>{if(!confirm((b.dataset.status==='approved'?'Approve ':'Remove or decline ')+displayName(data.roster.find(m=>m.user_id===b.dataset.student)||{user_id:b.dataset.student,display_name:'Student'})+' for this section?'))return;b.disabled=true;try{await service.rpc('playground_set_member',{p_class:selected,p_student:b.dataset.student,p_status:b.dataset.status});await refresh();await directory.reload()}catch{alert('Could not change this membership. Try again.')}finally{b.disabled=false}});
  $('teacher-data').querySelectorAll('[data-receipt]').forEach(b=>b.onclick=async()=>{
   const classId=selected;const panel=$('submission-detail');panel.hidden=false;panel.replaceChildren();panel.textContent='Opening submitted copy…';
   try{const row=await service.rpc('playground_teacher_submission',{p_class:classId,p_submission:b.dataset.receipt});if(disposed||selected!==classId)return;panel.replaceChildren();const heading=document.createElement('h2');heading.textContent='Submitted copy · '+activityName(row.activity_id);const meta=document.createElement('p');meta.textContent='Submitted '+time(row.submitted_at)+' · Receipt '+row.id;panel.append(heading,meta);if(row.activity_id.startsWith('review:')){heading.textContent='Flagged for teacher review · '+activityName(row.activity_id.slice(7));try{const report=JSON.parse(row.files['review-request.json']);const note=document.createElement('p');note.textContent=report.note;panel.append(note)}catch{}}for(const [name,source] of Object.entries(row.files)){const h=document.createElement('h3'),pre=document.createElement('pre'),code=document.createElement('code');h.textContent=name;code.textContent=source;pre.append(code);panel.append(h,pre)}panel.scrollIntoView({block:'start',behavior:'smooth'})}catch{if(!disposed)panel.textContent='This hand-in could not be opened. It may no longer be available to this section.'}
  });
 }
 async function refresh(){
  if(disposed||location.hash!==pageHash||inflight)return;
  if(!selected){$('class-invitation').innerHTML='<h2>Start with your first section</h2><p>Create a section above to get its join code.</p>';$('teacher-data').replaceChildren();return}
  inflight=true;const classId=selected,request=++version;
  try{
   const checkWeekly=!weeklyData||weeklyClass!==classId||Date.now()-weeklyFetchedAt>60000;
   const [data,weekly]=await Promise.all([
    service.rpc('playground_teacher_snapshot',{p_class:classId}),
    checkWeekly?service.rpc('playground_teacher_weekly_points',{p_class:classId})
      .catch(()=>({weeks:[],method:'unavailable'})):Promise.resolve(weeklyData)
   ]);
   if(disposed||location.hash!==pageHash||request!==version||selected!==classId)return;
   if(checkWeekly){weeklyData=weekly;weeklyClass=classId;weeklyFetchedAt=Date.now()}
   snapshot=data;render(data);$('teacher-updated').textContent='Updated '+new Date().toLocaleTimeString();
  }
  catch{if(!disposed&&location.hash===pageHash){if(snapshot)render({...snapshot,stale:true});$('teacher-updated').textContent='Could not refresh. Previous data may be out of date.'}}
  finally{inflight=false;if(!disposed&&selected!==classId)refresh()}
 }
 $('teacher-section').onchange=async()=>{selected=$('teacher-section').value;preferences.section=selected;savePreferences();selectedStudent='';snapshot=null;version++;weeklyData=null;weeklyClass='';weeklyFetchedAt=0;weekChoice=null;inlineReceipt=null;$('submission-detail').hidden=true;$('teacher-data').textContent='Opening section…';$('class-invitation').replaceChildren();await refresh();await directory.reload()};
 $('teacher-refresh').onclick=async()=>{historyCache.clear();weeklyFetchedAt=0;await refresh();await directory.reload()};
 $('create-class').onsubmit=async e=>{e.preventDefault();const b=e.target.querySelector('button');b.disabled=true;try{const c=await service.rpc('playground_create_class',{p_name:$('section-name').value,p_course:$('section-course').value});if(disposed||location.hash!==pageHash)return;selected=c.id;$('section-name').value='';$('create-status').textContent='Section created.';await loadClasses()}catch{$('create-status').textContent='Could not create this section. Check the name and try again.'}finally{b.disabled=false}};
 try{await loadClasses()}catch{$('teacher-updated').textContent='Classes could not load. Refresh to try again.'}
 const visible=()=>{if(document.visibilityState==='visible'){if(snapshot)render({...snapshot,stale:true});refresh()}};document.addEventListener('visibilitychange',visible);
 const timer=setInterval(()=>{if(document.visibilityState==='visible')refresh()},20000);
 return {dispose(){main.classList.remove('teacher-dashboard');disposed=true;version++;clearInterval(timer);directory.dispose();document.removeEventListener('visibilitychange',visible)}};
}
