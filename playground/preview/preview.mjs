import {journalsPage} from './journals.mjs';
const main=document.getElementById('main');
const storage=new Map(),submitted=[];
const courses=['computer-science-1','game-programming','mobile-app-dev','uil','capstone'];
const account={
 signedIn:true,
 classroom:{context:{memberships:courses.map(course_id=>({course_id,status:'approved',name:'Sample class'}))}},
 storage:{getItem:key=>storage.get(key)??null,setItem:(key,value)=>storage.set(key,String(value))},
 pending:0, flush:async()=>{},
 signIn:()=>{},
 async submissionHistory(){return [...submitted];},
 async submitJournal(snapshot){
  const receipt={id:'DEMO-'+String(submitted.length+1).padStart(3,'0'),submitted_at:new Date().toISOString()};
  submitted.unshift({...snapshot,...receipt});
  return receipt;
 }
};
function showHistory(){
 const section=document.createElement('section'); section.className='preview-history';
 const back=document.createElement('a');back.className='btn';back.href='#/journals';back.textContent='← Back to journals';
 const title=document.createElement('h1');title.textContent='Demo submissions';
 const note=document.createElement('p');note.textContent='These are simulated hand-ins created during this preview. They are not saved to your account or delivered to anyone.';
 section.append(back,title,note);
 if(!submitted.length){const empty=document.createElement('p');empty.textContent='No demo submissions yet. Try submitting an essay or logic puzzle.';section.append(empty);}
 for(const row of submitted){
  const card=document.createElement('article');card.className='journal-card';
  const h=document.createElement('h3');h.textContent=row.course_id+' · '+row.activity_id;
  const date=document.createElement('p');date.textContent='Demo submitted '+new Date(row.submitted_at).toLocaleString();
  const pre=document.createElement('pre');pre.textContent=row.files['journal.md']??'';
  card.append(h,date,pre);section.append(card);
 }
 main.replaceChildren(section);
 document.title='Demo submissions | Ms. Whitby\'s Playground';
}
function render(){
 const tokens=location.hash.replace(/^#\/?/,'').split('/').filter(Boolean);
 if(tokens[0]==='progress'){showHistory();return;}
 if(tokens[0]!=='journals'){history.replaceState(null,'',location.pathname+'#/journals');}
 journalsPage(main,account,tokens[1],tokens[2]);
}
document.getElementById('preview-theme').addEventListener('click',event=>{
 const light=document.documentElement.dataset.theme==='light';
 document.documentElement.dataset.theme=light?'dark':'light';
 event.currentTarget.textContent=light?'☀ Light mode':'☾ Dark mode';
 event.currentTarget.setAttribute('aria-label',light?'Switch to light mode':'Switch to dark mode');
});
window.addEventListener('hashchange',render);
render();
