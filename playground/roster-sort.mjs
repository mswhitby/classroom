// Shared, deterministic teacher-directory and section-roster sorting.
// Prefer actual first/last columns from the approved Sheet over splitting a name.
const collator=new Intl.Collator(undefined,{numeric:true,sensitivity:'base'});
export const rosterSortOptions=[['last','Last name'],['first','First name'],['github','GitHub username']];
export function splitDisplayName(value){
 const parts=String(value||'').trim().split(/\s+/).filter(Boolean);
 return {first:parts.slice(0,-1).join(' ')||parts[0]||'',last:parts.length>1?parts.at(-1):''};
}
export function sortRoster(rows,mode='last',fields=value=>value){
 const kind=['first','last','github'].includes(mode)?mode:'last';
 const by=value=>{
  const person=fields(value)||{};
  const name=String(person.name||'').trim();
  const parsed=splitDisplayName(name);
  return {
   first:String(person.first||parsed.first||'').trim(),
   last:String(person.last||parsed.last||'').trim(),
   github:String(person.github||'').trim()
  };
 };
 return [...rows].sort((a,b)=>{
  const x=by(a),y=by(b);
  const primary=collator.compare(x[kind],y[kind]);
  if(primary)return primary;
  return collator.compare(x.last,y.last)||collator.compare(x.first,y.first)||collator.compare(x.github,y.github);
 });
}
