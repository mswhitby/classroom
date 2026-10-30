import {COURSES,activityState} from './classroom-model.mjs?v=student-1';
const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const options=()=>Object.entries(COURSES).map(([id,name])=>`<option value="${id}">${esc(name)}</option>`).join('');
const courseHref=id=>id==='computer-science-1'?'/computer-science-1/units/':'#/course/'+encodeURIComponent(id);
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
 main.innerHTML=`<div class="eyebrow">Your learning spaces</div><h1>My classes</h1><p class="intro">Join your class with the code from your teacher. A valid code enrolls you immediately.</p>${service.context.is_teacher?'<p><a class="btn btn-primary" href="#/teacher">Open teacher dashboard →</a></p>':''}<div class="classroom-columns"><section class="panel"><h2>Join a class</h2><form id="join-class"><label for="class-code">Class code</label><input id="class-code" maxlength="20" autocomplete="off" required><label class="class-consent"><input id="activity-consent" type="checkbox" required> I understand that, when I join, my teacher can see my practice results, submissions, current lesson, and recent browser activity. Draft code and individual keystrokes are not shared.</label><button type="submit">Join class</button><p id="join-status" role="status"></p></form></section><section class="panel"><h2>My sections</h2><button id="refresh-memberships" class="secondary">Refresh class status</button><div id="memberships"></div></section></div><section class="panel"><h2>What activity sharing means</h2><p>Only approved class members share activity. Signals distinguish recent interaction from an open page. They do not prove attention, learning, or time spent. Activity outside this website is not visible.</p><p>Drafts stay private. Run and tests are practice; only Submit work creates a hand-in. Guests do not send class activity.</p></section>`;
 const memberships=main.querySelector('#memberships');
 function render(){memberships.innerHTML=service.context.memberships.length?service.context.memberships.map(m=>`<article class="class-membership"><h3>${esc(m.name)}</h3><p>${esc(COURSES[m.course_id])} · ${m.status==='approved'?'Enrolled':m.status==='pending'?'Waiting for teacher approval':'Not enrolled'}</p>${m.status==='approved'?`<a href="${courseHref(m.course_id)}">Open course →</a>`:''}${m.status!=='removed'?`<button class="secondary" data-leave="${esc(m.class_id)}">Leave class</button>`:''}</article>`).join(''):'<p>No classes yet. Enter your class code to join.</p>';
  memberships.querySelectorAll('[data-leave]').forEach(b=>b.onclick=async()=>{if(!confirm('Leave this class and stop sharing class activity with this teacher?'))return;try{await service.rpc('playground_leave_class',{p_class:b.dataset.leave});await service.refreshContext();render()}catch{alert('Could not leave this class. Try again.')}})
 }
 render();
 main.querySelector('#refresh-memberships').onclick=async()=>{try{await service.refreshContext();render()}catch{alert('Class status could not refresh. Try again.')}};
 main.querySelector('#join-class').onsubmit=async event=>{event.preventDefault();const button=event.target.querySelector('button'),status=main.querySelector('#join-status');button.disabled=true;try{const result=await service.rpc('playground_join_class',{p_code:main.querySelector('#class-code').value,p_name:account.user?.user_metadata?.user_name||account.user?.user_metadata?.preferred_username||'GitHub student'});status.textContent=result.status==='approved'?'You are enrolled in '+result.name+'.':result.status==='removed'?'Ask your teacher to restore your place in '+result.name+'.':'Request sent for '+result.name+'. Wait for your teacher to approve it.';await service.refreshContext();render()}catch{status.textContent='Could not join. Check the code and your name, then try again.'}finally{button.disabled=false}};
}
export async function teacherPage(main,account){
 const pageHash=location.hash;document.title='Teacher dashboard | Playground';main.innerHTML='<p role="status">Opening teacher dashboard…</p>';
 const service=await serviceFor(main,account);if(!service||location.hash!==pageHash)return;
 if(!service.context.is_teacher){main.innerHTML='<h1>Teacher dashboard</h1><p>This GitHub account does not have teacher access.</p><a href="#/classes">Open my classes →</a>';return}
 let disposed=false,selected='',classes=[],snapshot=null,inflight=false,version=0;
 main.innerHTML=`<div class="eyebrow">Your classroom</div><h1>Teacher dashboard</h1><p class="intro">See your sections, recent student activity, practice checks, and work students chose to submit.</p><div class="teacher-toolbar"><label for="teacher-section">Class section</label><select id="teacher-section"></select><button id="teacher-refresh" class="secondary">Refresh now</button><span id="teacher-updated" role="status"></span></div><details class="panel" id="new-class-panel"><summary>Create a class section</summary><form id="create-class" class="class-form"><label for="section-name">Section name</label><input id="section-name" placeholder="Period 2 · Computer Science I" maxlength="80" required><label for="section-course">Course</label><select id="section-course">${options()}</select><button type="submit">Create section</button><p id="create-status" role="status"></p></form></details><section class="panel" id="class-invitation"></section><section class="panel" id="manual-assignments" hidden><h2>Manually assign students</h2><p>Paste GitHub usernames, separated by lines, spaces, or commas. Students with existing Playground GitHub accounts enroll immediately. Others will be assigned automatically when they first sign in.</p><form id="assign-students" class="class-form"><label for="assignment-usernames">Student GitHub usernames</label><textarea id="assignment-usernames" rows="5" placeholder="student-username&#10;another-student" required></textarea><button type="submit">Add students to this class</button><p id="assignment-status" role="status"></p></form><div id="assignment-results"></div><div id="queued-assignments"></div></section><div id="teacher-data"></div><section class="panel"><h2>Reading activity signals</h2><p><strong>Recently interacting:</strong> an approved student’s visible page reported an interaction within two minutes, with a signal received in the last 65 seconds. <strong>Viewing page:</strong> the page is visible and reporting, with no recent interaction. <strong>No recent signal:</strong> the page may be hidden, closed, offline, or idle.</p><p>Updates refresh about every 20 seconds while this dashboard is visible. These are browser-reported clues, not attendance, proof of attention, or grades. Draft code and individual keystrokes are not collected for this view.</p></section><section id="submission-detail" class="panel" hidden></section>`;
 const $=id=>main.querySelector('#'+id);
 async function refreshQueued(){
  const classId=selected;
  if(!classId){$('manual-assignments').hidden=true;return}
  $('manual-assignments').hidden=false;
  try{
   const queued=await service.rpc('playground_teacher_queued_assignments',{p_class:classId});
   if(disposed||location.hash!==pageHash||selected!==classId)return;
   $('queued-assignments').innerHTML=queued.length?`<h3>Awaiting first sign-in (${queued.length})</h3><p>These GitHub usernames have not yet been matched to a Playground account. Enrollment will happen when that account signs in.</p>${queued.map(q=>`<div class="progress-row"><span>@${esc(q.username)}</span><button class="secondary" data-queued="${esc(q.username)}">Cancel assignment</button></div>`).join('')}`:'';
   $('queued-assignments').querySelectorAll('[data-queued]').forEach(b=>b.onclick=async()=>{
    if(!confirm('Cancel the queued assignment for @'+b.dataset.queued+'?'))return;
    b.disabled=true;
    try{await service.rpc('playground_teacher_cancel_assignment',{p_class:classId,p_username:b.dataset.queued});await refreshQueued()}
    catch{alert('Could not cancel this assignment. Try again.')}
    finally{b.disabled=false}
   });
  }catch{if(!disposed&&selected===classId)$('queued-assignments').textContent='Could not load usernames awaiting first sign-in. Apply the manual class assignment SQL migration in Supabase if this feature is new.'}
 }
 async function loadClasses(){classes=await service.rpc('playground_teacher_classes');if(disposed||location.hash!==pageHash)return;selected=classes.some(c=>c.id===selected)?selected:classes[0]?.id||'';$('teacher-section').innerHTML=classes.length?classes.map(c=>`<option value="${esc(c.id)}" ${c.id===selected?'selected':''}>${esc(c.name)} · ${esc(COURSES[c.course_id])}</option>`).join(''):'<option>No sections yet</option>';$('new-class-panel').open=!classes.length;await refresh()}
 function render(data){
  const c=classes.find(c=>c.id===selected);if(!c)return;
  $('class-invitation').innerHTML=`<h2>${esc(c.name)}</h2><p>${esc(COURSES[c.course_id])}</p><p>Join code: <strong class="join-code">${esc(c.join_code)}</strong> <button class="secondary" id="copy-class-code">Copy code</button></p><p>Students open <a href="#/classes">My classes</a>, sign in with GitHub and enter this code to enroll immediately.</p>`;
  $('copy-class-code').onclick=async()=>{try{await navigator.clipboard.writeText(c.join_code);$('copy-class-code').textContent='Copied'}catch{$('copy-class-code').textContent='Select the code to copy'}};
  const pending=data.roster.filter(m=>m.status==='pending'),approved=data.roster.filter(m=>m.status==='approved'),removed=data.roster.filter(m=>m.status==='removed');
  const classified=approved.map(m=>({...m,activity:data.stale?{...activityState(data.signals.filter(s=>s.user_id===m.user_id),Date.parse(data.server_time)),state:'unknown',label:'Status unavailable'}:activityState(data.signals.filter(s=>s.user_id===m.user_id),Date.parse(data.server_time))}));
  const receiptCounts=new Map();for(const s of data.submissions)receiptCounts.set(s.user_id,(receiptCounts.get(s.user_id)||0)+1);
  $('teacher-data').innerHTML=`<div class="progress-grid"><div class="stat"><strong>${approved.length}</strong><span>Enrolled students</span></div><div class="stat"><strong>${classified.filter(m=>m.activity.state==='active').length}</strong><span>Recently interacting</span></div><div class="stat"><strong>${pending.length}</strong><span>Waiting for approval</span></div></div><section class="panel"><h2>Join requests</h2>${pending.length?pending.map(m=>`<div class="progress-row"><span>${esc(m.display_name)} <small>${esc(m.github_account||'GitHub account unavailable')}</small><small>Requested ${esc(time(m.joined_at))}</small></span><span><button data-student="${m.user_id}" data-status="approved">Approve</button> <button class="secondary" data-student="${m.user_id}" data-status="removed">Decline</button></span></div>`).join(''):'<p>No pending requests.</p>'}</section><section class="panel"><h2>Class activity</h2><p>Students are identified by their GitHub accounts. “Practice passed” is separate from a submission.</p>${approved.length?`<div class="teacher-table-wrap"><table class="teacher-table"><thead><tr><th>Student</th><th>Activity signal</th><th>Current activity</th><th>Practice</th><th>Hand-ins</th><th>Membership</th></tr></thead><tbody>${classified.map(m=>{const checks=data.checks.find(r=>r.user_id===m.user_id),practice=data.practice.filter(r=>r.user_id===m.user_id),signal=m.activity.signal;return `<tr><th scope="row">${esc(m.display_name)}<small>${esc(m.github_account||'GitHub account unavailable')}</small></th><td><span class="activity-badge ${m.activity.state}">${esc(m.activity.label)}</span><small>${signal?'Last signal '+esc(time(signal.last_seen_at)):'No activity reported yet'}</small></td><td>${esc(activityName(signal?.activity_id))}<small>${esc(signal?.action||'')}</small></td><td>${practice.filter(p=>p.status==='completed'&&p.activity_kind!=='self-report').length} passed<small>${Number(checks?.checks)||0} checks total</small></td><td>${receiptCounts.get(m.user_id)||0}<small>In recent hand-ins</small></td><td><button class="secondary" data-student="${m.user_id}" data-status="removed">Remove</button></td></tr>`}).join('')}</tbody></table></div>`:'<p>No students yet. Share the join code to enroll your class.</p>'}</section><section class="panel"><h2>Recent hand-ins</h2><p>Latest 200 submissions for approved students in this section. Opening a hand-in shows the saved copy; later draft edits do not change it.</p>${data.submissions.length?data.submissions.map(s=>`<div class="progress-row"><span>${esc(approved.find(m=>m.user_id===s.user_id)?.display_name||'Student')} · ${esc(activityName(s.activity_id))}<small>Submitted ${esc(time(s.submitted_at))}</small></span><button class="secondary" data-receipt="${s.id}">Open hand-in</button></div>`).join(''):'<p>No hand-ins yet. Run never creates one.</p>'}</section>${removed.length?`<details class="panel"><summary>Removed or declined (${removed.length})</summary>${removed.map(m=>`<div class="progress-row"><span>${esc(m.display_name)}</span><button class="secondary" data-student="${m.user_id}" data-status="approved">Restore</button></div>`).join('')}</details>`:''}`;
  $('teacher-data').querySelectorAll('[data-student]').forEach(b=>b.onclick=async()=>{if(!confirm((b.dataset.status==='approved'?'Approve ':'Remove or decline ')+data.roster.find(m=>m.user_id===b.dataset.student)?.display_name+' for this section?'))return;b.disabled=true;try{await service.rpc('playground_set_member',{p_class:selected,p_student:b.dataset.student,p_status:b.dataset.status});await refresh()}catch{alert('Could not change this membership. Try again.')}finally{b.disabled=false}});
  $('teacher-data').querySelectorAll('[data-receipt]').forEach(b=>b.onclick=async()=>{
   const classId=selected;const panel=$('submission-detail');panel.hidden=false;panel.replaceChildren();panel.textContent='Opening submitted copy…';
   try{const row=await service.rpc('playground_teacher_submission',{p_class:classId,p_submission:b.dataset.receipt});if(disposed||selected!==classId)return;panel.replaceChildren();const heading=document.createElement('h2');heading.textContent='Submitted copy · '+activityName(row.activity_id);const meta=document.createElement('p');meta.textContent='Submitted '+time(row.submitted_at)+' · Receipt '+row.id;panel.append(heading,meta);for(const [name,source] of Object.entries(row.files)){const h=document.createElement('h3'),pre=document.createElement('pre'),code=document.createElement('code');h.textContent=name;code.textContent=source;pre.append(code);panel.append(h,pre)}panel.scrollIntoView({block:'start',behavior:'smooth'})}catch{if(!disposed)panel.textContent='This hand-in could not be opened. It may no longer be available to this section.'}
  });
 }
 async function refresh(){
  if(disposed||location.hash!==pageHash||inflight)return;
  if(!selected){$('class-invitation').innerHTML='<h2>Start with your first section</h2><p>Create a section above to get its join code.</p>';$('teacher-data').replaceChildren();return}
  inflight=true;const classId=selected,request=++version;
  try{const data=await service.rpc('playground_teacher_snapshot',{p_class:classId});if(disposed||location.hash!==pageHash||request!==version||selected!==classId)return;snapshot=data;render(data);void refreshQueued();$('teacher-updated').textContent='Updated '+new Date().toLocaleTimeString()}
  catch{if(!disposed&&location.hash===pageHash){if(snapshot)render({...snapshot,stale:true});$('teacher-updated').textContent='Could not refresh. Previous data may be out of date.'}}
  finally{inflight=false;if(!disposed&&selected!==classId)refresh()}
 }
 $('teacher-section').onchange=async()=>{selected=$('teacher-section').value;snapshot=null;version++;$('submission-detail').hidden=true;$('teacher-data').textContent='Opening section…';$('class-invitation').replaceChildren();await refresh();await refreshQueued()};
 $('teacher-refresh').onclick=refresh;
 $('assign-students').onsubmit=async e=>{
  e.preventDefault();
  if(!selected)return;
  const classId=selected,button=e.target.querySelector('button'),status=$('assignment-status'),results=$('assignment-results');
  const raw=$('assignment-usernames').value.split(/[\s,;]+/).map(v=>v.trim().replace(/^@/,'')).filter(Boolean);
  const unique=[...new Map(raw.map(v=>[v.toLowerCase(),v])).values()];
  if(!unique.length){status.textContent='Enter at least one GitHub username.';return}
  if(unique.length>500){status.textContent='Please add no more than 500 usernames at a time.';return}
  button.disabled=true;results.replaceChildren();
  const assigned=[];
  try{
   for(let i=0;i<unique.length;i+=100){
    const batch=await service.rpc('playground_teacher_assign_students',{p_class:classId,p_usernames:unique.slice(i,i+100)});
    assigned.push(...batch);
   }
   if(disposed||selected!==classId||location.hash!==pageHash)return;
   const counts={};for(const item of assigned)counts[item.status]=(counts[item.status]||0)+1;
   status.textContent=[
    (counts.enrolled||0)+' newly enrolled',
    (counts.already_enrolled||0)+' already enrolled',
    (counts.queued||0)+(counts.already_queued||0)+' awaiting first sign-in',
    (counts.removed||0)+' previously removed',
    (counts.invalid||0)+' invalid',
    (counts.ambiguous||0)+' ambiguous'
   ].join(' · ');
   results.innerHTML='<details><summary>Show results for '+assigned.length+' usernames</summary><ul>'+assigned.map(item=>`<li>@${esc(item.username)} — ${esc(item.status.replaceAll('_',' '))}</li>`).join('')+'</ul></details>';
   $('assignment-usernames').value='';
   await refresh();await refreshQueued();
  }catch(error){
   status.textContent='Could not finish assigning usernames. '+assigned.length+' processed; other usernames may need retrying. '+(error?.message||'Check the Supabase migration and try again.');
   if(assigned.length)results.innerHTML='<p>Processed: '+assigned.map(a=>esc(a.username)).join(', ')+'</p>';
  }finally{button.disabled=false}
 };
 $('create-class').onsubmit=async e=>{e.preventDefault();const b=e.target.querySelector('button');b.disabled=true;try{const c=await service.rpc('playground_create_class',{p_name:$('section-name').value,p_course:$('section-course').value});if(disposed||location.hash!==pageHash)return;selected=c.id;$('section-name').value='';$('create-status').textContent='Section created.';await loadClasses()}catch{$('create-status').textContent='Could not create this section. Check the name and try again.'}finally{b.disabled=false}};
 try{await loadClasses()}catch{$('teacher-updated').textContent='Classes could not load. Refresh to try again.'}
 const visible=()=>{if(document.visibilityState==='visible'){if(snapshot)render({...snapshot,stale:true});refresh()}};document.addEventListener('visibilitychange',visible);
 const timer=setInterval(()=>{if(document.visibilityState==='visible')refresh()},20000);
 return {dispose(){disposed=true;version++;clearInterval(timer);document.removeEventListener('visibilitychange',visible)}};
}
