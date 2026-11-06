import {diagnosticAttempt} from './diagnostic-model.mjs';
const KEY='playground:math-diagnostic:v1', ROOT='#/course/tsi-math';
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

export async function diagnosticPage(main, signal) {
  const response=await fetch('data/tsi-math/content/diagnostic-v1.json',{signal});
  if(!response.ok)throw Error('Diagnostic unavailable');
  const data=await response.json();
  if(signal.aborted)return;
  let record=null;
  try {const saved=JSON.parse(localStorage.getItem(KEY));if(saved?.version===data.version&&saved.first?.result?.domains&&saved.latest?.result?.domains)record=saved;}catch{}
  document.title='Math starting point | Ms. Whitby’s Playground';
  main.innerHTML=`<div class="breadcrumbs"><a href="${ROOT}">TSI Math</a> / Math starting point</div><h1>${esc(data.title)}</h1><p>Try these 24 questions independently, about 25–35 minutes. Use paper for your work. Choose “Not sure” when needed. Try without a calculator; tell your teacher about any tools or accommodations you use.</p><p>This classroom diagnostic suggests prep by skill. It does not predict an official TSI score or certify readiness. Your first result and latest retry stay separate. Results stay in this browser; download them to share with your teacher.</p><form id="math-diagnostic">${data.domains.map(d=>`<section class="panel"><h2>${esc(d.title)}</h2>${data.items.filter(q=>q.domain===d.id).map(q=>`<div class="tsi-question"><label for="${q.id}">${esc(q.prompt)}</label><input id="${q.id}" name="${q.id}" type="text" maxlength="80" autocomplete="off"><label><input type="checkbox" data-skip="${q.id}"> Not sure yet</label></div>`).join('')}</section>`).join('')}<button type="submit">Find my prep plan</button><p id="diagnostic-status" role="status"></p></form><section id="diagnostic-results" tabindex="-1" aria-label="Your prep plan"></section>`;
  const form=main.querySelector('form'),status=main.querySelector('#diagnostic-status'),results=main.querySelector('#diagnostic-results');
  function draw(){
    if(!record)return;
    const first=record.first.result,latest=record.latest.result;
    results.innerHTML=`<h2>Your prep plan</h2><p>First attempt: ${first.correct}/${first.total}. Latest: ${latest.correct}/${latest.total}. Use the skill groups below to choose a starting point with your teacher.</p>${latest.domains.map(d=>`<article class="panel"><h3>${esc(d.title)} · ${esc(d.placement)}</h3><p>${d.correct}/${d.total} correct; ${d.skipped} marked not sure. First attempt: ${first.domains.find(f=>f.id===d.id)?.correct??'—'}/${d.total}.</p><p>${esc(d.prep)}</p><p><strong>Start here:</strong> ${esc(d.example)}</p>${d.lesson?`<a href="${ROOT}/lesson/${esc(d.lesson)}">Open the available prep lesson →</a>`:'<p>Ask your teacher for guided practice in this skill; a full Playground lesson is not published yet.</p>'}<p>${d.correct>=3?'Try two unfamiliar problems and explain your work to your teacher before moving on.':'Work through the example, practice with your teacher, then retry with fresh problems.'}</p></article>`).join('')}<details><summary>Review the latest answers and explanations</summary>${data.items.map(q=>`<p><strong>${esc(q.prompt)}</strong><br>Your response: ${esc(record.latest.answers[q.id])}. ${esc(q.explanation)}</p>`).join('')}</details><button id="diagnostic-download" type="button">Download results for my teacher</button>`;
    results.querySelector('button').onclick=()=>{const url=URL.createObjectURL(new Blob([JSON.stringify(record,null,2)],{type:'application/json'}));const a=document.createElement('a');a.href=url;a.download='math-starting-point.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000)};
  }
  form.querySelectorAll('[data-skip]').forEach(box=>box.onchange=()=>{const input=form.elements.namedItem(box.dataset.skip);input.disabled=box.checked;});
  form.onsubmit=event=>{
    event.preventDefault();
    const answers=Object.fromEntries(data.items.map(q=>[q.id,form.querySelector(`[data-skip="${q.id}"]`).checked?'skip':form.elements.namedItem(q.id).value]));
    try{record=diagnosticAttempt(record,data,answers);draw();results.focus();status.textContent='Plan ready.';try{localStorage.setItem(KEY,JSON.stringify(record));}catch{status.textContent='Plan ready. Saving is unavailable; download your results before leaving.'}}catch(error){status.textContent=error.message;}
  };
  draw();
}
