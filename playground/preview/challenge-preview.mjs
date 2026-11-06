import {PythonRunner} from '../python-runner.mjs';
import {JavaRunner} from '../java-runner.mjs';
import {CSharpRunner} from '../csharp-runner.mjs';
const main=document.getElementById('main');
const $=id=>document.getElementById(id);
const escaped=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const fields={
'temperature-alert':{python:['degrees: int','str','temperature_alert'],javascript:['degrees','','temperatureAlert'],java:['int degrees','String','temperatureAlert'],csharp:['int degrees','string','TemperatureAlert'],types:['int']},
'count-matches':{python:['events: list[int], target: int','int','count_matches'],javascript:['events, target','','countMatches'],java:['int[] events, int target','int','countMatches'],csharp:['int[] events, int target','int','CountMatches'],types:['int[]','int']},
'sum-positives':{python:['numbers: list[int]','int','sum_positives'],javascript:['numbers','','sumPositives'],java:['int[] numbers','int','sumPositives'],csharp:['int[] numbers','int','SumPositives'],types:['int[]']},
'score-line':{python:['name: str, points: int','str','score_line'],javascript:['name, points','','scoreLine'],java:['String name, int points','String','scoreLine'],csharp:['string name, int points','string','ScoreLine'],types:['String','int']},
'attendance-percent':{python:['present: int, total: int','int','attendance_percent'],javascript:['present, total','','attendancePercent'],java:['int present, int total','int','attendancePercent'],csharp:['int present, int total','int','AttendancePercent'],types:['int','int']},
'longest-win-streak':{python:['wins: list[bool]','int','longest_win_streak'],javascript:['wins','','longestWinStreak'],java:['boolean[] wins','int','longestWinStreak'],csharp:['bool[] wins','int','LongestWinStreak'],types:['boolean[]']},
'confidence-total':{python:['correct: list[bool], weights: list[int]','int','confidence_total'],javascript:['correct, weights','','confidenceTotal'],java:['boolean[] correct, int[] weights','int','confidenceTotal'],csharp:['bool[] correct, int[] weights','int','ConfidenceTotal'],types:['boolean[]','int[]']},
'second-largest-distinct':{python:['numbers: list[int]','int | None','second_largest_distinct'],javascript:['numbers','','secondLargestDistinct'],java:['int[] numbers','Integer','secondLargestDistinct'],csharp:['int[] numbers','int?','SecondLargestDistinct'],types:['int[]']},
'target-pairs':{python:['numbers: list[int], target: int','int','target_pairs'],javascript:['numbers, target','','targetPairs'],java:['int[] numbers, int target','int','targetPairs'],csharp:['int[] numbers, int target','int','TargetPairs'],types:['int[]','int']},
'competition-ranks':{python:['scores: list[int]','list[int]','competition_ranks'],javascript:['scores','','competitionRanks'],java:['int[] scores','int[]','competitionRanks'],csharp:['int[] scores','int[]','CompetitionRanks'],types:['int[]']}
};
const languages={python:'Python',javascript:'JavaScript',java:'Java',csharp:'C#'};
const filenames={python:'main.py',javascript:'main.js',java:'Solution.java',csharp:'Solution.cs'};
let catalog=[],selection,language='python',runner,operation=0;
const drafts=new Map(),receipts=[];
function starter(id,lang){
 const [args,ret,fn]=fields[id][lang];
 if(lang==='python')return 'def '+fn+'('+args+') -> '+ret+':\n    # Implement the function and return a value.\n    raise NotImplementedError("Your code here")\n';
 if(lang==='javascript')return 'export function '+fn+'('+args+') {\n  // Implement the function and return a value.\n  throw new Error("Your code here");\n}\n';
 if(lang==='java')return 'public class Solution {\n    public static '+ret+' '+fn+'('+args+') {\n        // Implement the function and return a value.\n        throw new UnsupportedOperationException("Your code here");\n    }\n}\n';
 return 'using System;\n\npublic static class Solution {\n    public static '+ret+' '+fn+'('+args+') {\n        // Implement the function and return a value.\n        throw new NotImplementedException("Your code here");\n    }\n}\n';
}
function showMarkdown(text){
 const lines=String(text||'').split('\n');let inside=false;
 return lines.map(line=>{
  if(line.startsWith('```')){inside=!inside;return inside?'<pre><code>':'</code></pre>'}
  if(inside)return escaped(line)+'\n';
  if(/^# /.test(line))return '<h1>'+escaped(line.slice(2))+'</h1>';
  if(/^## /.test(line))return '<h2>'+escaped(line.slice(3))+'</h2>';
  if(/^\*\*Example \d+\*\*/.test(line))return '<h3>'+escaped(line.replaceAll('*',''))+'</h3>';
  if(/^[-] /.test(line))return '<p>• '+escaped(line.slice(2))+'</p>';
  if(!line.trim())return '';
  return '<p>'+escaped(line).replace(/`([^`]+)`/g,'<code>$1</code>').replace(/\*\*([^*]+)\*\*/g,'<strong>$1</strong>')+'</p>';
 }).join('');
}
function getSelected(){return catalog.find(c=>c.id===selection)}
function saveDraft(){const editor=$('challenge-editor');if(editor)drafts.set(selection+'|'+language,editor.value)}
function showCases(results,cases){
 const box=$('challenge-feedback');box.replaceChildren();
 for(let i=0;i<cases.length;i++){const r=results[i]||{ok:false,error:'No result returned'};
  const el=document.createElement('div');el.className='challenge-test '+(r.ok?'pass':'fail');
  el.textContent=(r.ok?'✓':'✗')+' Example '+(i+1)+': '+(r.ok?'Passed':r.error||'Returned '+(r.received??'no value')+' instead of '+JSON.stringify(cases[i].expected));box.append(el);
 }
}
function renderList(){
 const needle=$('challenge-search').value.toLowerCase(),diff=$('challenge-difficulty').value;
 $('challenge-items').innerHTML=catalog.filter(c=>(!diff||c.difficulty===diff)&&[c.title,c.summary,...c.tags].join(' ').toLowerCase().includes(needle))
 .map(c=>'<button type="button" data-id="'+escaped(c.id)+'" aria-current="'+(selection===c.id?'true':'false')+'"><strong>'+escaped(c.title)+'</strong><small>'+escaped(c.difficulty)+' · '+c.points+' pts</small></button>').join('');
 for(const item of $('challenge-items').querySelectorAll('button'))item.onclick=()=>{saveDraft();selection=item.dataset.id;render()};
}
function render(){
 const c=getSelected();if(!c)return;
 document.title=c.title+' | Challenge Preview';
 renderList();
 $('challenge-title').textContent=c.title;$('challenge-summary').textContent=c.summary;
 $('challenge-badges').innerHTML='<span>'+escaped(c.difficulty)+'</span><span>'+c.points+' points</span>'+c.tags.map(t=>'<span>'+escaped(t)+'</span>').join('');
 $('challenge-problem').innerHTML=showMarkdown(c.description);
 $('challenge-language').value=language;$('challenge-file').textContent=filenames[language];
 $('challenge-editor').value=drafts.get(selection+'|'+language)??starter(selection,language);
 $('challenge-console').textContent='Ready. Run tries the first published example; Check tries all published examples.';
 $('challenge-feedback').replaceChildren();$('challenge-submit-status').textContent='';
}
function quote(value,type){
 if(value===null)return 'null';
 if(type==='int[]')return 'new int[]{'+value.join(',')+'}';
 if(type==='boolean[]')return 'new boolean[]{'+value.map(v=>v?'true':'false').join(',')+'}';
 if(type==='String')return JSON.stringify(value);
 return String(value);
}
function csQuote(value,type){
 if(type==='int[]')return 'new int[]{'+value.join(',')+'}';
 if(type==='boolean[]')return 'new bool[]{'+value.map(v=>v?'true':'false').join(',')+'}';
 if(type==='String')return JSON.stringify(value);
 if(value===null)return 'null';
 return String(value);
}
function pythonHarness(source,cases,fn){
 return ['import contextlib,io,json','__scope={"__name__":"student"}','__cases=json.loads('+JSON.stringify(JSON.stringify(cases))+')','__results=[]',
 'try:',
 ' with contextlib.redirect_stdout(io.StringIO()): exec(compile('+JSON.stringify(source)+',"main.py","exec"),__scope)',
 ' for __case in __cases:',
 '  try:',
 '   with contextlib.redirect_stdout(io.StringIO()): __actual=__scope['+JSON.stringify(fn)+'](*__case["input"])',
 '   __expected=__case["expected"]',
 '   __results.append({"ok":type(__actual) is type(__expected) and __actual==__expected,"received":repr(__actual)[:250]})',
 '  except BaseException as e: __results.append({"ok":False,"error":type(e).__name__+": "+str(e)[:180]})',
 'except BaseException as e:',
 ' __results=[{"ok":False,"error":type(e).__name__+": "+str(e)[:180]} for _ in __cases]',
 'print("PREVIEW_CASES="+json.dumps(__results))'].join('\n');
}
async function runPython(source,cases,fn){
 const r=new PythonRunner({onStatus:s=>$('challenge-console').textContent=s,runTimeout:10000});runner=r;
 try{const answer=await r.run(pythonHarness(source,cases,fn));const line=String(answer.output||'').split('\n').find(l=>l.startsWith('PREVIEW_CASES='));if(!line)throw Error(answer.error||'Python did not return check results.');return JSON.parse(line.slice(14))}
 finally{r.dispose();if(runner===r)runner=null}
}
async function runJs(source,cases,fn){
 return await new Promise((resolve,reject)=>{
  const frame=document.createElement('iframe'),token=crypto.randomUUID();frame.sandbox='allow-scripts';frame.hidden=true;frame.src='./challenge-js-sandbox.html';
  let timer;
  const cleanup=()=>{clearTimeout(timer);window.removeEventListener('message',onMessage);frame.remove()};
  const onMessage=event=>{
   if(event.source!==frame.contentWindow)return;
   if(event.data?.kind==='challenge-ready'){frame.contentWindow.postMessage({kind:'challenge-evaluate',token,source,fn,cases},'*')}
   if(event.data?.kind==='challenge-evaluated'&&event.data.token===token){cleanup();resolve(event.data.results)}
  };
  timer=setTimeout(()=>{cleanup();reject(Error('JavaScript timed out after 6 seconds. Check for an infinite loop.'))},6000);
  window.addEventListener('message',onMessage);document.body.append(frame);
 });
}
async function runJava(source,cases,id){
 const fn=fields[id].java[2],types=fields[id].types,ret=fields[id].java[1];
 const lines=cases.map((c,i)=>{
  const args=c.input.map((v,j)=>quote(v,types[j])).join(',');
  const expected=quote(c.expected,ret==='int[]'?'int[]':ret==='String'?'String':'int');
  return 'try { Object actual = Solution.'+fn+'('+args+'); Object expected = '+expected+'; System.out.println("PREVIEW_CASE:'+(i)+':"+(java.util.Objects.deepEquals(actual,expected)?"1":"0")+":"+String.valueOf(actual)); } catch (Throwable e) { System.out.println("PREVIEW_CASE:'+(i)+':0:ERROR "+e.getClass().getSimpleName()); }';
 }).join('\n');
 const wrapped=source+'\nclass PreviewDriver { public static void main(String[] args) {\n'+lines+'\n}}';
 const r=new JavaRunner(s=>$('challenge-console').textContent=s);runner=r;
 try{const out=await r.run(wrapped,[]);if(!out.success)throw Error(out.diagnostics||out.stderr||'Java could not compile or run.');return parseRows(out.stdout,cases.length)}
 finally{r.dispose();if(runner===r)runner=null}
}
async function runCsharp(source,cases,id){
 const fn=fields[id].csharp[2],types=fields[id].types,rows=cases.map((c,i)=>{
  const args=c.input.map((v,j)=>csQuote(v,types[j])).join(',');
  const type=fields[id].csharp[1],ret=type==='int[]'?'int[]':type;
  const expected=csQuote(c.expected,type==='int[]'?'int[]':type==='string'?'String':'int');
  return 'try { object actual=Solution.'+fn+'('+args+'); object expected='+expected+'; bool ok=System.Collections.StructuralComparisons.StructuralEqualityComparer.Equals(actual,expected); Console.WriteLine("PREVIEW_CASE:'+(i)+':"+(ok?"1":"0")+":"+Convert.ToString(actual)); } catch(Exception e) { Console.WriteLine("PREVIEW_CASE:'+(i)+':0:ERROR "+e.GetType().Name); }';
 }).join('\n');
 const checks='using System;\npublic static class __PlaygroundChecks { public static void Main(string[] args) {\n'+rows+'\n}}';
 const r=new CSharpRunner({onStatus:s=>$('challenge-console').textContent=s});runner=r;
 try{const out=await r.run(source,checks);if(!out.success)throw Error(out.diagnostics||out.stderr||'C# execution failed.');return parseRows(out.stdout,cases.length)}
 finally{r.dispose();if(runner===r)runner=null}
}
function parseRows(out,total){
 const lines=String(out||'').split(/\r?\n/).filter(v=>v.startsWith('PREVIEW_CASE:'));
 const cases=Array(total).fill(null);
 for(const line of lines){const found=/^PREVIEW_CASE:(\d+):([01]):(.*)$/.exec(line);if(found&&Number(found[1])<total)cases[Number(found[1])]={ok:found[2]==='1',received:found[3]}}
 if(cases.some(v=>!v))throw Error('The runtime did not complete all published examples.');
 return cases;
}
async function execute(all){
 const c=getSelected(),source=$('challenge-editor').value,cases=all?c.examples:c.examples.slice(0,1),fn=fields[c.id][language][2],start=++operation;
 saveDraft();for(const b of document.querySelectorAll('.challenge-actions button'))b.disabled=true;
 $('challenge-console').textContent='Running '+languages[language]+'…';$('challenge-feedback').replaceChildren();
 try{
  const out=language==='python'?await runPython(source,cases,fn):language==='javascript'?await runJs(source,cases,fn):language==='java'?await runJava(source,cases,c.id):await runCsharp(source,cases,c.id);
  if(start!==operation)return;
  showCases(out,cases);
  const passed=out.filter(r=>r.ok).length;
  $('challenge-console').textContent=(all?'Check':'Run')+' complete · '+passed+'/'+cases.length+' published examples passed.\nThis is practice feedback, not a verified grade.';
 }catch(e){if(start===operation)$('challenge-console').textContent='Could not run: '+(e?.message||e)}
 finally{for(const b of document.querySelectorAll('.challenge-actions button'))b.disabled=false}
}
async function init(){
 const [cat,examples,problems]=await Promise.all(['./challenges-catalog.json','./challenges-examples.json','./challenges-problems.json'].map(async u=>{const r=await fetch(u,{cache:'no-cache'});if(!r.ok)throw Error('Public challenge data unavailable: '+u);return r.json()}));
 catalog=cat.challenges.map(c=>({...c,examples:examples.challenges.find(x=>x.id===c.id)?.examples||[],description:problems.problems.find(x=>x.id===c.id)?.markdown||c.summary})).sort((a,b)=>a.title.localeCompare(b.title));
 selection=catalog[0].id;
 main.innerHTML='<div class="challenge-preview"><div class="challenge-head"><div><div class="eyebrow">One challenge bank · Four languages</div><h1>Shared Challenges</h1><p>Choose any language. Solve once, learn everywhere.</p></div><a class="btn" href="./#/journals">Weekly journals preview</a></div><div class="challenge-grid"><aside class="challenge-list"><label for="challenge-search">Search challenges</label><input id="challenge-search" placeholder="Search skills or titles"><label for="challenge-difficulty">Difficulty</label><select id="challenge-difficulty"><option value="">All difficulties</option><option>Very Easy</option><option>Easy</option><option>Medium</option><option>Hard</option></select><div class="challenge-items" id="challenge-items"></div></aside><article class="challenge-panel"><div class="eyebrow">Challenge · Practice</div><h2 id="challenge-title"></h2><p id="challenge-summary"></p><div id="challenge-badges" class="challenge-badges"></div><section id="challenge-problem" class="challenge-problem"></section><section class="challenge-work"><div class="challenge-toolbar"><label for="challenge-language">Programming language<select id="challenge-language"><option value="python">Python</option><option value="javascript">JavaScript</option><option value="java">Java</option><option value="csharp">C#</option></select></label><strong id="challenge-file">main.py</strong></div><textarea id="challenge-editor" spellcheck="false" aria-label="Code editor"></textarea><div class="challenge-actions"><button class="btn" id="challenge-run" type="button">Run</button><button class="btn btn-primary" id="challenge-check" type="button">Check examples</button><button class="btn" id="challenge-reset" type="button">Reset</button><button class="btn" id="challenge-submit" type="button">Try demo submission</button></div><h3>Console</h3><pre class="challenge-console" id="challenge-console" role="status"></pre><div class="challenge-feedback" id="challenge-feedback"></div><p class="challenge-submit-status" id="challenge-submit-status" role="status"></p><p class="challenge-note">Only published examples run in this preview. Real submissions and secure hidden grading are separate. Code stays in this tab; no account or teacher receives it.</p></section></article></div><section class="challenge-submissions"><h2>Demo submission history</h2><ol id="challenge-history"><li>No submissions yet.</li></ol></section></div>';
 $('challenge-search').oninput=renderList;$('challenge-difficulty').onchange=renderList;
 $('challenge-language').onchange=e=>{saveDraft();language=e.target.value;render()};
 $('challenge-editor').addEventListener('input',saveDraft);
 $('challenge-run').onclick=()=>execute(false);$('challenge-check').onclick=()=>execute(true);
 $('challenge-reset').onclick=()=>{if(confirm('Reset this language to its starter code?')){drafts.delete(selection+'|'+language);render()}};
 $('challenge-submit').onclick=()=>{
  saveDraft();const c=getSelected();
  if(!confirm('Save a demo hand-in in this preview tab? This does not submit real work.'))return;
  receipts.unshift({title:c.title,language:languages[language],code:$('challenge-editor').value,when:new Date().toLocaleString()});
  $('challenge-history').innerHTML=receipts.map(x=>'<li>'+escaped(x.title)+' · '+escaped(x.language)+' · '+escaped(x.when)+'</li>').join('');
  $('challenge-submit-status').textContent='Demo submitted. This sample copy exists only while this tab is open.';
 };
 render();
}
$('preview-theme').onclick=()=>{
 const light=document.documentElement.dataset.theme==='light';document.documentElement.dataset.theme=light?'dark':'light';
 $('preview-theme').textContent=light?'☀ Light mode':'☾ Dark mode';
};
init().catch(e=>{main.textContent='Could not open challenge preview: '+e.message});
