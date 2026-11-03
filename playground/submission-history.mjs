export const submissionKey=(course,activity)=>course+'|'+activity;
export function submittedActivities(rows){return new Set(rows.filter(r=>r.id&&r.submitted_at&&r.course_id&&r.activity_id).map(r=>submissionKey(r.course_id,r.activity_id)))}
export async function loadSubmissionHistory(client,userId){
 if(!userId)return [];
 const rows=[];
 for(let start=0;;start+=200){
  const {data,error}=await client.from('playground_submissions').select('id,course_id,activity_id,submitted_at').eq('user_id',userId).order('submitted_at',{ascending:false}).order('id',{ascending:false}).range(start,start+199);
  if(error)throw error;rows.push(...data);if(data.length<200)return rows;
 }
}
