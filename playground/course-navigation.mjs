const base=id=>'#/course/'+encodeURIComponent(id);
export const unitHref=(course,id)=>base(course)+'/unit/'+encodeURIComponent(id);
export function courseUnits(id,m){
 if(m.weeks)return m.weeks.map((w,i)=>({id:w.id,number:i+1,title:w.title,label:'Week',lessons:w.sessions.map((l,j)=>({...l,number:j+1,url:base(id)+'/lesson/'+encodeURIComponent(l.id)}))}));
 if(m.units)return m.units.map(u=>({...u,label:'Unit',lessons:u.lessons.map((l,i)=>({...l,number:i+1,url:base(id)+'/lesson/'+encodeURIComponent(l.id)}))}));
 if(id==='computer-science-1')return [...new Set(m.lessons.map(l=>l.unit))].map(n=>({id:String(n),number:n,label:'Unit',title:m.lessons.find(l=>l.unit===n).unitName,lessons:m.lessons.filter(l=>l.unit===n).map((l,i)=>({...l,number:i+1,url:base(id)+'/lesson/'+encodeURIComponent(l.id)}))}));
 return [{id:'lessons',number:1,label:'Unit',title:id==='uil'?'Java programming':'Web foundations',lessons:(m.lessons||[]).map((l,i)=>({...l,number:i+1,url:base(id)+'/lesson/'+encodeURIComponent(l.id)}))}];
}
export function visibleCourses(catalog,{signedIn=false,isTeacher=false,memberships=[],sections=[]}={}){
 const active=catalog.filter(c=>c.status!=='planned');if(!signedIn)return active;
 const ids=new Set((isTeacher?sections:memberships.filter(m=>m.status==='approved')).map(m=>m.course_id));return active.filter(c=>ids.has(c.id));
}
// Share the teacher section request between the home page and course menu.
const requests=new WeakMap();
export async function accountCourses(catalog,account){
 if(!account?.signedIn)return visibleCourses(catalog);
 const service=account.classroom,context=service?.context||{};let sections=[];
 if(context.is_teacher&&service){if(!requests.has(service))requests.set(service,service.rpc('playground_teacher_classes').catch(()=>{requests.delete(service);return []}));sections=await requests.get(service)}
 return visibleCourses(catalog,{signedIn:true,isTeacher:context.is_teacher,memberships:context.memberships||[],sections});
}
export function forgetCourseSections(account){if(account?.classroom)requests.delete(account.classroom)}
