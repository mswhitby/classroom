import {latestSubmissions,recordedScore,gradeLabel} from './grade-results.mjs?v=1';
import {courseUnits} from './course-navigation.mjs?v=reading-1';
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export async function gradesPage(main,catalog,courseId){
 const route=location.hash,Account=window.PlaygroundAccount,course=catalog.find(c=>c.id===courseId);
 main.innerHTML='<div class="page-head"><div class="titles"><nav class="crumbs">'+esc(course?.title||'All playgrounds')+'</nav><h1 class="page-title">Grades</h1></div></div><div id="grades-submissions" class="table-wrap" role="status">Loading submitted work…</div>';
 const history=main.querySelector('#grades-submissions');
 if(!Account.signedIn){history.innerHTML='<p class="fine">Sign in to view your submitted work and grades.</p><button type="button" class="btn">Sign in with GitHub</button>';history.querySelector('button').onclick=()=>Account.signIn();return}
 try{
  const submissions=latestSubmissions((await Account.submissionHistory()).filter(r=>!courseId||r.course_id===courseId));
  const metadata=new Map();
  await Promise.allSettled([...new Set(submissions.map(r=>r.course_id))].map(async id=>{
   const response=await fetch('data/'+encodeURIComponent(id)+'/course.json');if(!response.ok)return;const manifest=await response.json();
   for(const u of courseUnits(id,manifest))for(const l of u.lessons){const entry={title:l.title,meta:'Lesson · '+u.label+' '+String(u.number).padStart(2,'0'),url:l.url,points:l.points};for(const key of [l.id,'lesson:'+l.id,l.exercise?.id].filter(Boolean))metadata.set(id+'|'+key,entry)}
   for(const l of manifest.lessons||[])metadata.set(id+'|lesson:'+l.id,{title:l.title,meta:'Lesson · Unit '+String(l.unit).padStart(2,'0'),url:'#/course/'+id+'/lesson/'+encodeURIComponent(l.id),points:l.points});
   for(const c of manifest.challenges||[])metadata.set(id+'|challenge:'+c.id,{title:c.title,meta:'Challenge · '+c.difficulty,url:'#/course/'+id+'/challenge/'+encodeURIComponent(c.id),points:c.points});
   for(const p of manifest.projects||[])metadata.set(id+'|project:'+p.id,{title:p.title,meta:'Project',url:'#/course/'+id+'/project/'+p.id,points:p.points});
  }));
  if(location.hash!==route||!history.isConnected)return;
  history.innerHTML=submissions.length?'<table class="data"><thead><tr><th>Work</th><th>Submitted</th><th>Score</th></tr></thead><tbody>'+submissions.map(r=>{
   const m=metadata.get(r.course_id+'|'+r.activity_id),title=m?.title||r.activity_id.split('/').at(-1).replace(/^(lesson|challenge|project):/,'').replace(/-/g,' '),score=recordedScore(r.grade),date=new Date(r.submitted_at),stamp=date.toLocaleString(undefined,{month:'short',day:'numeric',year:'numeric',hour:'numeric',minute:'2-digit'});
   return '<tr><td>'+(m?.url?'<a class="grade-work-title" href="'+esc(m.url)+'">'+esc(title)+'</a>':'<span class="grade-work-title">'+esc(title)+'</span>')+'<span class="grade-work-meta">'+esc(m?.meta||catalog.find(c=>c.id===r.course_id)?.title||'Submitted work')+'</span></td><td><time datetime="'+esc(r.submitted_at)+'">'+esc(stamp)+'</time></td><td title="'+esc(gradeLabel(r.grade))+'"><span class="'+(score&&score.points===score.possible?'score-full':'')+'">'+(score?esc(score.points)+' <span class="fine">/ '+esc(score.possible)+'</span>':['queued','running'].includes(r.grade?.status)?'Grading…':r.grade?.status==='error'?'Needs review':'–'+(m?.points?' <span class="fine">/ '+esc(m.points)+'</span>':''))+'</span></td></tr>';
  }).join('')+'</tbody></table>':'<p class="fine">No submitted work yet.</p>';
 }catch{if(history.isConnected)history.textContent='Grades could not load. Refresh to try again.'}
}
