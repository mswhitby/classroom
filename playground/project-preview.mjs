import {previewConsoleBridge} from './console-drawer.mjs?v=console-2';

// Run checks against the rendered page and its actual submit behavior.
export function projectCheckSource(step){
 if(!['structure','style','interaction','test'].includes(step))throw Error('Unknown project step.');
 return `(async()=>{
 const results=[];
 const record=(label,pass)=>results.push({label,pass:!!pass});
 const form=document.querySelector('#club-signup');
 const name=document.querySelector('#member-name'),email=document.querySelector('#member-email'),interest=document.querySelector('#member-interest'),message=document.querySelector('#signup-message');
 if(${JSON.stringify(step)}==='structure'||${JSON.stringify(step)}==='test'){
  const announcements=[...document.querySelectorAll('#announcements .announcement')];
  record('Two announcements have headings and useful details.',announcements.length>=2&&announcements.every(a=>a.querySelector('h3')?.textContent.trim()&&a.querySelector('p')?.textContent.trim()));
  record('The page has a main area and linked announcement/signup sections.',document.querySelector('main #announcements')&&document.querySelector('main #signup')&&document.querySelector('a[href="#announcements"]')&&document.querySelector('a[href="#signup"]'));
  record('Name, email, and interest fields belong to the form and have visible labels.',form&&[name,email,interest].every(field=>field?.form===form&&[...field.labels].some(l=>l.textContent.trim())));
  record('Required fields, email type, and a submit button are present.',name?.required&&email?.required&&email.type==='email'&&interest?.required&&form?.querySelector('button[type="submit"],input[type="submit"]'));
 }
 if(${JSON.stringify(step)}==='style'||${JSON.stringify(step)}==='test'){
  const shell=document.querySelector('.page-shell'),grid=document.querySelector('.club-grid'),card=document.querySelector('.announcement');
  const shellStyle=shell&&getComputedStyle(shell),gridStyle=grid&&getComputedStyle(grid),cardStyle=card&&getComputedStyle(card);
  record('The page has a maximum width and padding.',shellStyle&&shellStyle.maxWidth!=='none'&&parseFloat(shellStyle.paddingLeft)>0);
  record('The sections use a grid with space between them.',gridStyle&&gridStyle.display==='grid'&&parseFloat(gridStyle.rowGap)>0);
  record('Announcement cards have padding and a visible border.',cardStyle&&parseFloat(cardStyle.paddingTop)>0&&parseFloat(cardStyle.borderTopWidth)>0&&cardStyle.borderTopStyle!=='none');
  record('The current preview fits without sideways scrolling.',document.documentElement.scrollWidth<=innerWidth+1);
 }
 if(${JSON.stringify(step)}==='interaction'||${JSON.stringify(step)}==='test'){
  const options=interest?[...interest.options].filter(o=>o.value&&!o.disabled):[];
  if(!form||!name||!email||!interest||!message||options.length<2){
   record('Keep the form, all three fields, two interest choices, and the status paragraph.',false);
  }else{
   form.reset();
   record('An empty signup is rejected.',!form.checkValidity());
   name.value='Alex';email.value='not-an-email';interest.value=options[0].value;
   record('An invalid email is rejected.',!form.checkValidity());
   email.value='alex@example.com';interest.value='';
   record('An interest must be chosen.',!form.checkValidity());
   const submit=async(firstName,option)=>{
    name.value=firstName;email.value='alex@example.com';interest.value=option.value;
    let prevented=false;
    // Listen at document level, after the student's form listener.
    const observe=event=>{if(event.target===form){prevented=event.defaultPrevented;event.preventDefault()}};
    document.addEventListener('submit',observe);
    try{if(form.checkValidity())form.requestSubmit();await new Promise(r=>setTimeout(r,60));}
    finally{document.removeEventListener('submit',observe)}
    const text=message.textContent.toLowerCase();
    record('A signup for '+firstName+' stays on the page and names the selected interest.',prevented&&text.includes(firstName.toLowerCase())&&text.includes(option.text.toLowerCase()));
   };
   await submit('Alex',options[0]);await submit('Jo',options[1]);
   record('The confirmation can be announced without moving focus.',message.getAttribute('role')==='status'||['polite','assertive'].includes(message.getAttribute('aria-live')));
  }
 }
 send('project-checks',{results});
})().catch(error=>send('error',{text:error.name+': '+error.message}));`;
}

export function buildProjectPreview(source,{token,step,check=false}={}){
 if(!token)throw Error('A preview ID is required.');
 const bridge='<meta http-equiv="Content-Security-Policy" content="form-action &apos;none&apos;">'+'<script>'+previewConsoleBridge(token).replace(/<\/script/gi,'<\\/script')+'<\/script>';
 // Install error forwarding before any student script, including scripts in the head.
 const documentSource=String(source).replace(/^\s*<!doctype[^>]*>/i,'');
 const finish='<script>setTimeout(()=>{send("ready");'+(check?projectCheckSource(step):'')+'},50);<\/script>';
 const withBridge=/<head(?:\s[^>]*)?>/i.test(documentSource)?documentSource.replace(/<head(?:\s[^>]*)?>/i,head=>head+bridge):bridge+documentSource;
 return '<!doctype html>'+withBridge+finish;
}
