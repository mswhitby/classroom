// Private, browser-only Google Sheets bridge for the teacher directory.
// Reads only period, first name, last name, and GitHub username columns.
// No roster rows or Google tokens are stored or sent to Supabase.
const SCOPE='https://www.googleapis.com/auth/spreadsheets.readonly';
const CLIENT_KEY='playground:google-sheets-client-id';

export function parseSheetLink(text){
 let u;
 try{u=new URL(String(text||'').trim())}catch{throw Error('Paste a full Google Sheets link.')}
 if(u.protocol!=='https:'||u.hostname!=='docs.google.com')throw Error('Use a Google Sheets URL from docs.google.com.');
 const match=u.pathname.match(/^\/spreadsheets\/d\/([a-zA-Z0-9_-]+)(?:\/|$)/);
 if(!match)throw Error('This URL does not contain a spreadsheet ID.');
 const hash=new URLSearchParams(u.hash.replace(/^#/,''));const rawGid=u.searchParams.get('gid')||hash.get('gid');
 if(rawGid!==null&&!/^\d+$/.test(rawGid))throw Error('Invalid sheet tab (gid).');
 return {id:match[1],gid:rawGid===null?null:Number(rawGid)};
}
export const normalizeGithub=value=>{
 const text=String(value||'').trim();
 const match=text.match(/^https?:\/\/(?:www\.)?github\.com\/([^/?#\s]+)\/?$/i);
 return (match?match[1]:text).replace(/^@/,'').trim().toLowerCase();
};
const normalizeHeader=value=>String(value||'').replace(/\s+/g,' ').trim().toLowerCase();
export function parseSheetColumns(headers,columns){
 const keys=['class period','first name','last name','github username'];
 const indices=keys.map(key=>headers.findIndex(h=>normalizeHeader(h)===key));
 if(indices.some(i=>i<0))throw Error('The Sheet must have Class Period, First Name, Last Name and GitHub Username headers.');
 const [period,first,last,github]=columns;
 const length=Math.max(period?.length||0,first?.length||0,last?.length||0,github?.length||0);
 const results=[];
 for(let i=0;i<length;i++){
  const handle=normalizeGithub(github?.[i]);
  if(!handle)continue;
  results.push({github:handle,period:String(period?.[i]||'').trim(),name:[first?.[i],last?.[i]].map(s=>String(s||'').trim()).filter(Boolean).join(' '),row:i+2});
 }
 return results;
}
function colName(index){let n=index+1,out='';while(n){n--;out=String.fromCharCode(65+n%26)+out;n=Math.floor(n/26)}return out}
function clientIdValid(value){return /^\d+-[a-z0-9_-]+\.apps\.googleusercontent\.com$/i.test(String(value||'').trim())}
async function json(url,token){
 const response=await fetch(url,{headers:{Authorization:'Bearer '+token},cache:'no-store'});
 if(!response.ok){
  if(response.status===401)throw Error('Google session expired. Connect Google again.');
  if(response.status===403)throw Error('Google denied access. Check that the signed-in Google account can open this Sheet and that the Sheets API is enabled.');
  if(response.status===404)throw Error('Google could not find this spreadsheet or tab.');
  throw Error('Google Sheets request failed ('+response.status+').');
 }
 return response.json();
}
export async function readPrivateSheet(url,token){
 const parsed=parseSheetLink(url),root='https://sheets.googleapis.com/v4/spreadsheets/'+encodeURIComponent(parsed.id);
 const meta=await json(root+'?fields=sheets(properties(sheetId,title))',token);
 const tabs=meta.sheets||[];
 const tab=parsed.gid===null?tabs[0]:tabs.find(s=>s.properties.sheetId===parsed.gid);
 if(!tab)throw Error('The selected sheet tab was not found. Open the right tab and copy its URL again.');
 const title=tab.properties.title,quoted="'"+title.replace(/'/g,"''")+"'";
 const head=await json(root+'/values/'+encodeURIComponent(quoted+'!1:1'),token);
 const headers=head.values?.[0]||[];
 const keys=['class period','first name','last name','github username'];
 const indices=keys.map(k=>headers.findIndex(h=>normalizeHeader(h)===k));
 if(indices.some(i=>i<0))throw Error('Expected headers are missing on the selected tab: '+keys.filter((k,i)=>indices[i]<0).join(', ')+'.');
 const params=new URLSearchParams({majorDimension:'COLUMNS'});
 for(const i of indices){const col=colName(i);params.append('ranges',quoted+'!'+col+'2:'+col)}
 const body=await json(root+'/values:batchGet?'+params.toString(),token);
 const columns=(body.valueRanges||[]).map(v=>v.values?.[0]||[]);
 return {rows:parseSheetColumns(headers,columns),title};
}
let gisPromise;
function loadGoogleIdentity(){
 if(globalThis.google?.accounts?.oauth2)return Promise.resolve();
 if(gisPromise)return gisPromise;
 gisPromise=new Promise((resolve,reject)=>{
  const el=document.createElement('script');
  el.src='https://accounts.google.com/gsi/client';el.async=true;
  el.onload=()=>globalThis.google?.accounts?.oauth2?resolve():reject(Error('Google sign-in did not load.'));
  el.onerror=()=>reject(Error('Google sign-in is blocked or unavailable on this network.'));
  document.head.append(el);
 }).catch(e=>{gisPromise=null;throw e});
 return gisPromise;
}
function storageRead(){try{return localStorage.getItem(CLIENT_KEY)||''}catch{return ''}}
function storageWrite(value){try{localStorage.setItem(CLIENT_KEY,value)}catch{}}
export function mountGoogleSheetRoster(container,{onRows=()=>{}}={}){
 let disposed=false,token=null;
 container.innerHTML='<h2>Match students from your Google Sheet</h2>'+
  '<p>Paste the private Google Sheet link here. Google may request read-only permission to your spreadsheets broadly; this dashboard reads only four columns of the particular Sheet link you paste (name, class period, and GitHub username). No student rows are uploaded to Supabase.</p>'+
  '<label for="sheet-url">Google Sheet link</label><input id="sheet-url" type="url" placeholder="https://docs.google.com/spreadsheets/d/..." autocomplete="off">'+
  '<button id="sheet-connect" type="button">Connect Google & load sheet</button>'+
  '<p id="sheet-status" role="status"></p>'+
  '<details id="sheet-setup"><summary>One-time Google authorization setup</summary>'+
  '<p>A Google Cloud Web OAuth client is required for private spreadsheets. Enable the Google Sheets API, add <code>https://www.mswhitby.com</code> as an authorized JavaScript origin, and enter the public OAuth client ID below. This is not a secret. The sheet stays private.</p>'+
  '<label for="sheet-client-id">Google OAuth client ID</label><input id="sheet-client-id" type="text" autocomplete="off" placeholder="12345-abc.apps.googleusercontent.com">'+
  '<button id="sheet-save-client" class="secondary" type="button">Save browser configuration</button></details>';
 const $=id=>container.querySelector('#'+id),status=message=>{$('sheet-status').textContent=message};
 $('sheet-client-id').value=storageRead();
 $('sheet-save-client').onclick=()=>{
  const clientId=$('sheet-client-id').value.trim();
  if(!clientIdValid(clientId)){status('Enter a valid Google Cloud Web OAuth client ID.');return}
  storageWrite(clientId);status('Google OAuth client ID saved on this browser. Paste the Sheet link above.');
 };
 loadGoogleIdentity().catch(e=>{if(!disposed)status(e.message)});
 $('sheet-connect').onclick=()=>{
  const url=$('sheet-url').value.trim();
  try{parseSheetLink(url)}catch(e){status(e.message);return}
  const clientId=$('sheet-client-id').value.trim()||storageRead();
  if(!clientIdValid(clientId)){status('One-time setup required: expand Google authorization setup and enter your Web OAuth client ID.');$('sheet-setup').open=true;return}
  if(!globalThis.google?.accounts?.oauth2){status('Google sign-in is not ready. Check whether Google is blocked on this network.');return}
  storageWrite(clientId);
  $('sheet-connect').disabled=true;status('Opening Google authorization…');
  try{
   const client=globalThis.google.accounts.oauth2.initTokenClient({
    client_id:clientId,scope:SCOPE,
    callback:async response=>{
     if(disposed)return;
     if(response.error||!response.access_token){status('Google authorization was not completed.');$('sheet-connect').disabled=false;return}
     token=response.access_token;
     try{
      status('Reading selected columns from your private Sheet…');
      const result=await readPrivateSheet(url,token);
      if(disposed)return;
      onRows(result.rows);
      status('Matched sheet loaded: '+result.title+' · '+result.rows.length+' rows with GitHub usernames. No student records were sent to Supabase.');
     }catch(e){if(!disposed)status(e.message)}
     finally{if(!disposed)$('sheet-connect').disabled=false}
    },
    error_callback:()=>{if(!disposed){status('Google authorization popup was closed or blocked.');$('sheet-connect').disabled=false}}
   });
   client.requestAccessToken({prompt:'consent'});
  }catch(e){status(e.message||'Could not launch Google authorization.');$('sheet-connect').disabled=false}
 };
 return {dispose(){disposed=true;token=null;onRows([])}};
}
