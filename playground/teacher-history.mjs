// Teacher-facing metadata only. The backend never returns students' live drafts.
export function centralWeekStart(instant=new Date()){
 const values=Object.fromEntries(new Intl.DateTimeFormat('en-US',{
  timeZone:'America/Chicago',year:'numeric',month:'2-digit',day:'2-digit'
 }).formatToParts(new Date(instant)).filter(p=>p.type!=='literal').map(p=>[p.type,Number(p.value)]));
 const day=new Date(Date.UTC(values.year,values.month-1,values.day));
 day.setUTCDate(day.getUTCDate()-(day.getUTCDay()+6)%7);
 return day.toISOString().slice(0,10);
}
export function groupStudentAssignments(history){
 const groups=new Map();
 const get=(id,kind)=>{if(!groups.has(id))groups.set(id,{activity_id:id,activity_kind:kind||'assignment',status:'started',completed:false,submissions:[],checks:0,last_date:null,best_points:null,best_possible:null,graded_count:0});return groups.get(id)};
 const newer=(a,b)=>Date.parse(a||0)>Date.parse(b||0)?a:b;
 for(const p of history?.practice||[]){
  const g=get(p.activity_id,p.activity_kind);
  if(!g.activity_kind||g.activity_kind==='assignment')g.activity_kind=p.activity_kind;
  if(p.status==='completed')g.completed=true;
  else if(p.status==='needs_revision'&&!g.completed)g.status='needs_revision';
  g.last_date=newer(p.updated_at,g.last_date);
 }
 for(const sub of history?.submissions||[]){
  const g=get(sub.activity_id,sub.activity_kind);
  g.submissions.push(sub);
  g.last_date=newer(sub.submitted_at,g.last_date);
  if(sub.grade_status==='graded'&&Number.isFinite(Number(sub.points))&&Number.isFinite(Number(sub.possible))&&Number(sub.possible)>0){
   g.graded_count++;
   if(g.best_points===null||Number(sub.points)>g.best_points){
    g.best_points=Number(sub.points);g.best_possible=Number(sub.possible);
   }
  }
 }
 for(const item of history?.checks||[]){
  const g=get(item.activity_id);g.checks=Number(item.checks)||0;
  g.last_date=newer(item.last_check,g.last_date);
 }
 for(const g of groups.values()){
  g.status=g.graded_count?'graded':g.completed?'completed':g.submissions.length?'submitted':g.status;
  g.submissions.sort((a,b)=>Date.parse(b.submitted_at)-Date.parse(a.submitted_at));
 }
 return [...groups.values()].sort((a,b)=>Date.parse(b.last_date||0)-Date.parse(a.last_date||0)||a.activity_id.localeCompare(b.activity_id));
}
export function weeklyStudentRows(roster,weeklyData,week){
 const amounts=new Map((weeklyData?.weeks||[]).filter(r=>r.week_start===week).map(r=>[r.user_id,{points:Number(r.points)||0,assignments:Number(r.assignments)||0}]));
 return roster.map(person=>({...person,earned:amounts.get(person.user_id)?.points??0,
  earned_assignments:amounts.get(person.user_id)?.assignments??0}))
  .sort((a,b)=>b.earned-a.earned||a.display_name.localeCompare(b.display_name));
}
export function availableWeeks(weeklyData,today=new Date()){
 return [...new Set([centralWeekStart(today),...(weeklyData?.weeks||[]).map(x=>x.week_start).filter(x=>/^\d{4}-\d{2}-\d{2}$/.test(x))])].sort().reverse();
}
export function weekLabel(iso){
 const date=new Date(iso+'T12:00:00Z');
 if(!Number.isFinite(date.getTime()))return iso;
 const end=new Date(date);end.setUTCDate(end.getUTCDate()+6);
 const format=d=>d.toLocaleDateString('en-US',{timeZone:'UTC',month:'short',day:'numeric'});
 return format(date)+' – '+format(end)+', '+end.getUTCFullYear();
}
