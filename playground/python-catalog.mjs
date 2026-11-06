// A published activity ID belongs to student history, not the current menu order.
// Archive content by status, never by deleting/replacing its record.
export const isArchived=item=>item?.status==='archived'||item?.archived===true;
export const currentLessons=course=>(course?.lessons||[]).filter(l=>!isArchived(l));
export const currentChallenges=course=>(course?.challenges||[]).filter(c=>!isArchived(c));
export const activePythonActivity=(course,kind,id)=>{
 const all=kind==='challenge'?course?.challenges:course?.lessons;
 return (all||[]).find(item=>item.id===id)||null;
};
