// Only an explicit Submit work action calls this service. Draft/check sync never does.
export class SubmissionService {
 constructor(client,userId){this.client=client;this.userId=userId;this.pending=new Map()}
 async submit(snapshot){
  if(!this.userId)throw Error('Sign in before submitting work.');
  const {course_id,activity_id,activity_kind,files}=snapshot;
  if(!course_id||!activity_id||!activity_kind||!files||typeof files!=='object'||Array.isArray(files)||Object.values(files).some(v=>typeof v!=='string'))throw Error('Choose an activity before submitting.');
  if(new TextEncoder().encode(JSON.stringify(files)).length>280000)throw Error('This hand-in is too large. Download your code and ask your teacher how to submit it.');
  const key=JSON.stringify({course_id,activity_id,activity_kind,files});
  let row=this.pending.get(key);if(!row){row={id:crypto.randomUUID(),user_id:this.userId,course_id,activity_id,activity_kind,content_version:'1',files:JSON.parse(JSON.stringify(files))};this.pending.set(key,row)}
  const result=await this.client.from('playground_submissions').insert(row).select('id,submitted_at').single();
  let receipt=result.data;
  if(result.error?.code==='23505'){
   const existing=await this.client.from('playground_submissions').select('id,submitted_at').eq('id',row.id).eq('user_id',this.userId).single();if(existing.error)throw existing.error;receipt=existing.data;
  }else if(result.error){
   if(['42P01','PGRST205'].includes(result.error.code))throw Error('Submission storage needs its setup update. Your code is still a draft; nothing has been submitted.');
   throw Error('Submission was not confirmed. Keep this page open and choose Submit work again when connected.');
  }
  if(!receipt?.id||!receipt?.submitted_at)throw Error('Submission was not confirmed. Please retry.');
  this.pending.delete(key);return receipt;
 }
}
export function mountSubmission({anchor,course_id,activity_id,activity_kind,getFiles,submit,signedIn,signIn}){
 if(!anchor)return;
 const parent=anchor.parentElement;parent.querySelector('.submission-actions')?.remove();
 const box=document.createElement('div');box.className='submission-actions';
 const note=document.createElement('p');note.textContent='Drafts save automatically. Run tests your draft. Submit hands in a separate copy.';
 const button=document.createElement('button');button.type='button';button.textContent='Submit';button.className='btn btn-primary';
 const status=document.createElement('p');status.setAttribute('role','status');
 let busy=false;
 button.onclick=async()=>{
  if(busy)return;
  if(!signedIn()){status.textContent='Sign in before submitting. Your draft is still saved.';await signIn();return}
  // Capture before the confirmation: later edits cannot change this hand-in.
  const snapshot={course_id,activity_id,activity_kind,files:getFiles()};
  if(!confirm('Submit the current version of '+activity_id+'? This saves a separate hand-in. You can keep editing your draft afterward.'))return;
  busy=true;button.disabled=true;status.textContent='Submitting this version…';
  try{const receipt=await submit(snapshot);status.textContent='Submitted '+new Date(receipt.submitted_at).toLocaleString()+'. Receipt '+receipt.id+'. Later edits and checks do not change this hand-in.'}
  catch(error){status.textContent=error.message||'Submission was not confirmed. Your draft is still saved.'}
  finally{busy=false;button.disabled=false}
 };
 box.append(note);
 if(!signedIn()){
  const alert=document.createElement('p');alert.className='sign-in-alert';alert.setAttribute('role','alert');alert.textContent='You must be signed in with GitHub to submit your work.';
  const login=document.createElement('button');login.type='button';login.className='btn btn-outline-primary';login.textContent='Sign in with GitHub';login.onclick=signIn;
  button.disabled=true;box.append(alert,login);
 }
 box.append(button,status);parent.append(box);
}
