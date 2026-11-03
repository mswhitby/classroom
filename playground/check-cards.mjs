const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
// Display only the actual runner results; never infer a pass from presentation.
export function renderCheckCards(host,rows){
 const count=rows.filter(r=>r.passed).length;
 host.innerHTML=`<p class="check-summary">Checks <strong>${count} of ${rows.length} passing</strong></p><div class="check-cards">${rows.map((r,i)=>`<article class="check-card ${r.passed?'passed':'needs-revision'}"><header><code>${esc(r.call||'Example '+(i+1))}</code><span aria-label="${r.passed?'Passed':'Needs revision'}">${r.passed?'✓':'✗'}</span></header><dl><dt>Expected</dt><dd><pre>${esc(r.expected)}</pre></dd><dt>${r.error?'Error':'Received'}</dt><dd><pre>${esc(r.error||r.received)}</pre></dd></dl></article>`).join('')}</div>`;
}
