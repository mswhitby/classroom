import {JOURNAL_COURSES,journalActivity} from './journal-model.mjs';

export function validatePrompts(data) {
 if(data?.schemaVersion!==1||!Array.isArray(data.prompts))throw Error('Journal prompt file is invalid.');
 const seen=new Set();
 for(const prompt of data.prompts){
  if(!JOURNAL_COURSES.includes(prompt.course)||typeof prompt.week!=='string')throw Error('Prompt course or week is invalid.');
  journalActivity(prompt.week);
  if(typeof prompt.id!=='string'||!prompt.id.trim()||!Number.isInteger(prompt.revision)||prompt.revision<1||typeof prompt.title!=='string'||!prompt.title.trim()||typeof prompt.body!=='string'||!prompt.body.trim()||prompt.body.length>12000)throw Error('Prompt needs an id, revision, title, and directions.');
  const key=prompt.course+':'+prompt.week;
  if(seen.has(key))throw Error('Only one prompt can be published for a course and week.');
  seen.add(key);
 }
 return data.prompts;
}
export function findPrompt(data,course,week) {
 return validatePrompts(data).find(prompt=>prompt.course===course&&prompt.week===week)||null;
}
export function attachPrompt(snapshot,prompt) {
 const checked=findPrompt({schemaVersion:1,prompts:prompt?[prompt]:[]},snapshot.course_id,snapshot.activity_id.slice(8));
 if(!checked)throw Error('Your teacher has not published a prompt for this course and week yet. You can keep drafting.');
 const files={...snapshot.files,'journal-prompt.json':JSON.stringify({id:checked.id,revision:checked.revision,course:checked.course,week:checked.week,title:checked.title,body:checked.body},null,2)};
 if(new TextEncoder().encode(JSON.stringify(files)).length>280000)throw Error('Your journal and prompt are too large to submit. Shorten your response.');
 return {...snapshot,files};
}
