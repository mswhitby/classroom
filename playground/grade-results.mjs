export const difficultyRank=value=>({'very easy':0,easy:1,medium:2,hard:3,'very hard':4}[String(value).toLowerCase()]??99);
export function latestSubmissions(rows){const seen=new Set();return [...rows].filter(r=>!r.activity_id.startsWith('review:')).sort((a,b)=>Date.parse(b.submitted_at)-Date.parse(a.submitted_at)).filter(r=>{const key=r.course_id+'|'+r.activity_id;if(seen.has(key))return false;seen.add(key);return true})}
export function recordedScore(grade){return grade?.status==='graded'&&['grader_tests','published_tests','teacher'].includes(grade.scope)&&Number.isFinite(grade.points)&&Number.isFinite(grade.possible)&&grade.possible>0&&grade.points>=0&&grade.points<=grade.possible?{points:grade.points,possible:grade.possible}:null}
export function gradeLabel(grade){const score=recordedScore(grade);return score?score.points+' / '+score.possible:grade?.status==='queued'||grade?.status==='running'?'Grading…':grade?.status==='error'?'Grading needs review':'Not graded'}
export async function submissionGrade(client,id){
 const {data,error}=await client.from('playground_grades').select('submission_id,status,points,possible,scope,passed_cases,total_cases,graded_at').eq('submission_id',id).maybeSingle();
 if(error){if(['42P01','PGRST205'].includes(error.code))return {status:'unavailable'};throw error}return data||{status:'unavailable'};
}
export async function assessedHistory(client,rows){
 if(!rows.length)return rows;
 const grades=new Map();
 for(let i=0;i<rows.length;i+=100){const {data,error}=await client.from('playground_grades').select('submission_id,status,points,possible,scope,passed_cases,total_cases,graded_at').in('submission_id',rows.slice(i,i+100).map(r=>r.id));if(error){if(['42P01','PGRST205'].includes(error.code))return rows.map(r=>({...r,grade:{status:'unavailable'}}));throw error}for(const g of data||[])grades.set(g.submission_id,g)}
 return rows.map(r=>({...r,grade:grades.get(r.id)||{status:'unavailable'}}));
}
