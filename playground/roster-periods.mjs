// Class-period filters include both verified Sheet periods and teacher-created sections.
// A student without a Sheet match can still appear in the section they joined.
const periodNumber=value=>{
 const raw=String(value??'').trim();
 if(!/^\d{1,2}$/.test(raw))return null;
 return String(Number(raw));
};
export function periodFromSectionName(name){
 const match=String(name??'').match(/\bperiod\s*#?\s*(\d{1,2})\b/i);
 return match?periodNumber(match[1]):null;
}
export function rosterPeriodsForStudent(sheetPeriods=[],memberships=[]){
 const periods=[
  ...(Array.isArray(sheetPeriods)?sheetPeriods:[]).map(periodNumber),
  ...(Array.isArray(memberships)?memberships:[])
   .filter(m=>m.status==='approved'||m.status==='pending')
   .map(m=>periodFromSectionName(m.name))
 ];
 return [...new Set(periods.filter(Boolean))].sort((a,b)=>Number(a)-Number(b));
}
export function availableRosterPeriods(sections=[],sheetEntries=[],people=[]){
 const periods=[
  ...sections.map(section=>periodFromSectionName(section.name)),
  ...sheetEntries.flatMap(entry=>Array.isArray(entry.periods)?entry.periods.map(periodNumber):[]),
  ...people.flatMap(p=>(p.memberships||[]).map(m=>periodFromSectionName(m.name)))
 ];
 return [...new Set(periods.filter(Boolean))].sort((a,b)=>Number(a)-Number(b));
}
