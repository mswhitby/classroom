// Low-stakes browser practice only. No account or classroom writes.
export function numericValue(raw){
 const s=String(raw??'').trim().replace(/−/g,'-').replace(/^\$/,'').replace(/%$/,'').replace(/,/g,'').trim();
 if(!s)return null;
 const number='[+-]?(?:\\d+(?:\\.\\d*)?|\\.\\d+)';
 if(new RegExp('^'+number+'$').test(s)){const n=Number(s);return Number.isFinite(n)?n:null}
 const f=s.match(new RegExp('^('+number+')\\s*/\\s*('+number+')$'));
 if(f&&Number(f[2])!==0){const n=Number(f[1])/Number(f[2]);return Number.isFinite(n)?n:null}
 return null;
}
function line(raw){
 const s=String(raw).toLowerCase().replace(/[\s*]/g,'').replace(/−/g,'-');
 if(!s.startsWith('y='))return null;
 const terms=s.slice(2).match(/[+-]?[^+-]+/g);if(!terms||terms.join('')!==s.slice(2))return null;
 let m=0,b=0,xTerms=0;
 for(const term of terms){
  if(term.endsWith('x')){xTerms++;const v=term.slice(0,-1);const n=v===''||v==='+'?1:v==='-'?-1:numericValue(v);if(n===null)return null;m+=n}
  else {const n=numericValue(term);if(n===null)return null;b+=n}
 }
 return xTerms===1?{m,b}:null;
}
export function checkAnswer(item,key,raw){
 if(String(raw??'').trim()==='')return null;
 if(item.response_type==='multiple_choice')return raw===key.answer;
 if(key.validation?.kind==='line'){const l=line(raw);return !!l&&l.m===key.validation.m&&l.b===key.validation.b}
 if(typeof key.answer==='number'){const n=numericValue(raw);return n!==null&&Math.abs(n-key.answer)<1e-8}
 return String(raw).trim().toLowerCase()===String(key.answer).toLowerCase();
}
export function scoreResponses(items,keys,answers){
 const rows=items.map(item=>({id:item.id,skill:item.skill_id,correct:checkAnswer(item,keys[item.id],answers[item.id])}));
 if(rows.some(r=>r.correct===null))return null;
 return {correct:rows.filter(r=>r.correct).length,total:rows.length,rows};
}
export function recordAttempt(record,groupId,score,answers,timestamp=new Date().toISOString()){
 const copy=structuredClone(record),before=copy.attempts[groupId];
 const attempt={correct:score.correct,total:score.total,rows:score.rows.map(r=>({...r})),answers:Object.fromEntries(score.rows.map(r=>[r.id,String(answers[r.id]??'')])),checkedAt:timestamp};
 copy.attempts[groupId]={first:before?.first||attempt,latest:attempt,count:(before?.count||0)+1};
 return copy;
}
export function readDemo(storage){
 try{const r=JSON.parse(storage.getItem('playground:tsi-demo:v1'));if(r?.schemaVersion===1&&r.answers&&r.attempts&&r.reflections&&typeof r.answers==='object'&&!Array.isArray(r.answers)&&typeof r.attempts==='object'&&!Array.isArray(r.attempts)&&typeof r.reflections==='object')return r}catch{}
 return {schemaVersion:1,answers:{},attempts:{},reflections:{}};
}
