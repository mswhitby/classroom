import {groupStudentAssignments,weeklyStudentRows,availableWeeks,weekLabel,centralWeekStart} from './teacher-history.mjs?v=student-history-1';
const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const friendly=id=>String(id||'Assignment').replace(/^(lesson|challenge|quiz|project|programming):/,'').split('/').at(-1).replace(/^\d+-/,'').replace(/[-_]/g,' ').replace(/\b[a-z]/g,c=>c.toUpperCase());
const date=value=>value?new Date(value).toLocaleString('en-US',{dateStyle:'medium',timeStyle:'short'}):'—';
export function studentAssignmentsHtml(history,{points=0,week=centralWeekStart()}={}){
 const rows=groupStudentAssignments(history);
 const completed=rows.filter(r=>r.completed).length;
 const graded=rows.filter(r=>r.graded_count>0).length;
 const handed=rows.filter(r=>r.submissions.length>0).length;
 return `<div class="expanded-student-card">
  <div class="student-detail-heading"><div><h3>Assignment history</h3><p class="fine">All saved activities for this course, not just the most recent 200 class hand-ins.</p></div>
    <span class="student-weekly-total">${esc(points)} verified pts · ${esc(weekLabel(week))}</span></div>
  <div class="student-assignment-stats"><span><strong>${completed}</strong> browser-completed</span><span><strong>${handed}</strong> submitted</span><span><strong>${graded}</strong> server-graded</span></div>
  <p class="fine">Practice completions are student-browser reports, not grades. Ungraded hand-ins earn no verified points until assessed. Repeated submissions of the same assignment do not duplicate earned points.</p>
  ${rows.length?`<div class="student-assignment-scroll"><table class="teacher-table student-assignment-table">
    <thead><tr><th>Assignment</th><th>Progress</th><th>Best grade</th><th>Checks</th><th>Updated</th><th>Hand-ins</th></tr></thead>
    <tbody>${rows.map(r=>`<tr>
      <th scope="row">${esc(friendly(r.activity_id))}<small>${esc(r.activity_kind)}</small></th>
      <td>${r.status==='graded'?'Server-graded':r.status==='completed'?'Practice completed':r.status==='submitted'?'Submitted, not graded':r.status==='needs_revision'?'Needs revision':'Started'}</td>
      <td>${r.best_points===null?'—':esc(r.best_points)+' / '+esc(r.best_possible)}</td>
      <td>${r.checks}</td><td>${esc(date(r.last_date))}</td>
      <td>${r.submissions.length?`<details class="assignment-handins"><summary>${r.submissions.length} hand-in${r.submissions.length===1?'':'s'}</summary>
        ${r.submissions.map(sub=>`<div class="assignment-handin">
         <span>${esc(date(sub.submitted_at))}<small>${sub.grade_status==='graded'?'Graded: '+esc(sub.points)+' / '+esc(sub.possible):esc(sub.grade_status==='ungraded'?'Not graded':sub.grade_status)}</small></span>
         <button type="button" class="secondary" data-history-receipt="${esc(sub.id)}">Open copy</button>
        </div>`).join('')}</details>`:'—'}</td>
    </tr>`).join('')}</tbody></table></div>`:'<p>No assignments recorded for this course yet.</p>'}
  <div class="student-inline-receipt" hidden></div>
 </div>`;
}
export function weeklyPointsHtml(roster,weeklyData,preferredWeek,serverNow=new Date()){
 const weeks=availableWeeks(weeklyData,serverNow);
 const selected=weeks.includes(preferredWeek)?preferredWeek:centralWeekStart(serverNow);
 const rows=weeklyStudentRows(roster,weeklyData,selected);
 const total=rows.reduce((a,r)=>a+r.earned,0);
 const active=rows.filter(r=>r.earned>0).length;
 const fmt=n=>Number(n.toFixed(2));
 return `<section class="panel teacher-weekly-points">
  <div class="teacher-weekly-heading">
   <div><h2>Weekly points</h2><p>Server-graded score improvements only. Weeks run Monday–Sunday, Central Time.</p></div>
   <label for="teacher-points-week">Week <select id="teacher-points-week">${weeks.map(w=>`<option value="${esc(w)}" ${w===selected?'selected':''}>${esc(weekLabel(w))}</option>`).join('')}</select></label>
  </div>
  <div class="progress-grid"><div class="stat"><strong>${esc(fmt(total))}</strong><span>Verified points awarded</span></div>
  <div class="stat"><strong>${active}</strong><span>Students earning points</span></div>
  <div class="stat"><strong>${rows.length}</strong><span>Students enrolled</span></div></div>
  <div class="teacher-table-wrap"><table class="teacher-table"><thead><tr><th>Student</th><th>Verified points</th><th>Improved assignments</th></tr></thead>
  <tbody>${rows.map(r=>`<tr><th scope="row">${esc(r.display_name)}<small>@${esc(r.github_account)}</small></th><td>${esc(fmt(r.earned))}</td><td>${r.earned_assignments}</td></tr>`).join('')}</tbody></table></div>
  <p class="fine">${weeklyData?.method==='verified_score_improvements'?'Only positive improvements to a student’s previous best server-graded score count in the submission week.':'Weekly point data is unavailable; displayed values are not final.'} Other assignments remain visible in student histories and are not automatically awarded points.</p>
 </section>`;
}
