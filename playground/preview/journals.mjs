import { COURSES } from './classroom-model.mjs?v=student-1';
import { JOURNAL_COURSES, journalWeeks, journalDraftKey, journalActivity, journalSnapshot } from './journal-model.mjs';

const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const weekLabel = week => new Date(week + 'T18:00:00Z').toLocaleDateString('en-US', {timeZone:'America/Chicago',month:'long',day:'numeric',year:'numeric'});
const wordCount = text => text.trim().split(/\s+/).filter(Boolean).length;

/** Private, course-scoped weekly journals. No image uploads or automated grading. */
export function journalsPage(main, account, courseArg, weekArg) {
  document.title = 'Weekly Journals | Ms. Whitby\'s Playground';
  if (!account.signedIn) {
    main.innerHTML = '<div class="journal-screen"><div class="eyebrow">Weekly Journals</div><h1>Write and submit your journal</h1><section class="panel"><p>Sign in to save your writing across computers and submit it privately to your teacher.</p><button class="btn btn-primary" type="button" id="journal-signin">Sign in with GitHub</button></section></div>';
    main.querySelector('#journal-signin').onclick = () => account.signIn();
    return;
  }
  const approved = account.classroom?.context?.memberships?.filter(m => m.status === 'approved' && JOURNAL_COURSES.includes(m.course_id)) || [];
  const courses = [...new Set(approved.map(m => m.course_id))];
  if (!courses.length) {
    main.innerHTML = '<div class="journal-screen"><div class="eyebrow">Weekly Journals</div><h1>Join your class first</h1><section class="panel"><p>Your journals are only sent to a teacher when you are enrolled in an approved Playground class.</p><a class="btn btn-primary" href="#/classes">Manage my classes</a></section></div>';
    return;
  }
  const course = courses.includes(courseArg) ? courseArg : courses[0];
  const weeks = journalWeeks();
  const week = weeks.includes(weekArg) ? weekArg : weeks[0];
  const responseKey = journalDraftKey(course, week, 'response');
  const detailsKey = journalDraftKey(course, week, 'details');
  const storage = account.storage;
  let details = {};
  try { details = JSON.parse(storage.getItem(detailsKey) || '{}') || {}; } catch { /* use defaults */ }
  const courseOptions = courses.map(id => `<option value="${esc(id)}" ${course === id ? 'selected' : ''}>${esc(COURSES[id] || id)}</option>`).join('');
  const weekOptions = weeks.map(value => `<option value="${value}" ${week === value ? 'selected' : ''}>Week of ${esc(weekLabel(value))}</option>`).join('');
  main.innerHTML = `<div class="journal-screen">
    <div class="eyebrow">Your classes · Written work</div><div class="journal-heading"><div><h1>Weekly Journals</h1><p>Essays, reflections, and logic puzzles—submit one journal for each course and week.</p></div><a href="#/progress" class="btn">My submissions</a></div>
    <section class="journal-card journal-selection" aria-label="Choose a journal">
      <label>Class <select id="journal-course">${courseOptions}</select></label>
      <label>Journal week <select id="journal-week">${weekOptions}</select></label>
    </section>
    <section class="journal-card journal-editor-card"><div class="journal-section-heading"><div><span class="eyebrow">${esc(COURSES[course] || course)}</span><h2>Journal · Week of ${esc(weekLabel(week))}</h2></div><span class="journal-status-pill">Not yet submitted</span></div>
      <p class="journal-instructions">Follow the journal prompt your teacher provided in class. Explain your thinking in your own words. Logic puzzles should include your reasoning and final answer. You may use plain text, numbered steps, Markdown lists, and code blocks.</p>
      <form id="journal-form">
        <label for="journal-type">Response type</label><select id="journal-type" required><option value="">Choose a response type</option><option value="essay">Essay or written reflection</option><option value="logic-puzzle">Logic puzzle or reasoning task</option></select>
        <label for="journal-response">Your response</label><textarea id="journal-response" rows="15" maxlength="100000" placeholder="Write your journal here. For a logic puzzle, show the steps you used and state your final answer." required spellcheck="true"></textarea>
        <div class="journal-writing-meta"><span id="journal-word-count">0 words</span><span id="journal-draft-status" role="status">Drafts save automatically.</span></div>
        <div class="journal-integrity"><label for="journal-ai-use">AI-use declaration</label><p class="fine">Follow your teacher's rules for original work. Any AI-generated material must be clearly identified and may not earn credit under your class policy.</p><select id="journal-ai-use" required><option value="">Choose one</option><option value="none">I did not use AI-generated content</option><option value="disclosed">I used AI and will identify how below</option></select><label for="journal-ai-details">AI-use details (required if AI was used)</label><textarea id="journal-ai-details" rows="2" maxlength="2000" placeholder="Describe which parts involved AI assistance, or leave blank if none."></textarea></div>
        <div class="journal-actions"><button type="button" class="btn" id="journal-save">Save draft</button><button type="submit" class="btn btn-primary" id="journal-submit">Try demo submission</button></div>
        <p class="journal-submit-status" id="journal-submit-status" role="status"></p>
      </form>
      <p class="fine journal-note">Visual preview only. Responses stay in this browser tab and simulated submissions are never sent to teachers or stored in your Playground account.</p>
    </section>
  </div>`;
  const $ = id => main.querySelector('#' + id);
  const type = $('journal-type'), response = $('journal-response'), aiUse = $('journal-ai-use'), aiDetails = $('journal-ai-details');
  const draftStatus = $('journal-draft-status'), submitStatus = $('journal-submit-status');
  response.value = storage.getItem(responseKey) || '';
  type.value = ['essay','logic-puzzle'].includes(details.type) ? details.type : '';
  aiUse.value = ['none','disclosed'].includes(details.aiUse) ? details.aiUse : '';
  aiDetails.value = typeof details.aiDetails === 'string' ? details.aiDetails : '';
  const updateWordCount = () => { $('journal-word-count').textContent = `${wordCount(response.value)} words`; };
  const updateDisclosure = () => { aiDetails.disabled = aiUse.value !== 'disclosed'; };
  const markDraft = () => { draftStatus.textContent = account.pending ? 'Saved on this device · syncing…' : 'Saved on this device'; };
  const saveResponse = () => { storage.setItem(responseKey, response.value); updateWordCount(); markDraft(); };
  const saveDetails = () => { storage.setItem(detailsKey, JSON.stringify({ type: type.value, aiUse: aiUse.value, aiDetails: aiDetails.value })); updateDisclosure(); markDraft(); };
  updateWordCount(); updateDisclosure();
  response.addEventListener('input', saveResponse);
  for (const control of [type, aiUse, aiDetails]) control.addEventListener('input', saveDetails);
  $('journal-course').onchange = event => { location.hash = '#/journals/' + encodeURIComponent(event.target.value) + '/' + week; };
  $('journal-week').onchange = event => { location.hash = '#/journals/' + encodeURIComponent(course) + '/' + event.target.value; };
  $('journal-save').onclick = async () => {
    saveResponse(); saveDetails();
    draftStatus.textContent = 'Saving your draft…';
    await account.flush();
    draftStatus.textContent = account.pending ? 'Saved on this device; cloud sync is pending.' : 'Demo draft saved for this preview tab.';
  };
  $('journal-form').onsubmit = async event => {
    event.preventDefault();
    saveResponse(); saveDetails();
    let snapshot;
    try { snapshot = journalSnapshot({ course, week, response: response.value, type: type.value, aiUse: aiUse.value, aiDetails: aiDetails.value }); }
    catch (error) { submitStatus.textContent = error.message; return; }
    if (!confirm('Try a demo submission? Nothing will be sent to a teacher.')) return;
    const button = $('journal-submit');
    button.disabled = true; submitStatus.textContent = 'Submitting your journal…';
    try {
      const receipt = await account.submitJournal(snapshot);
      if (location.hash !== '#/journals/' + course + '/' + week && location.hash !== '#/journals') return;
      const when = new Date(receipt.submitted_at).toLocaleString();
      submitStatus.textContent = 'Demo submitted · ' + when + ' · Receipt ' + receipt.id;
      main.querySelector('.journal-status-pill').textContent = 'Submitted';
      main.querySelector('.journal-status-pill').classList.add('submitted');
      document.dispatchEvent(new CustomEvent('playground-submitted', { detail: { ...receipt, course_id: course, activity_id: journalActivity(week) } }));
    } catch (error) { submitStatus.textContent = error.message || 'Could not submit. Your saved draft is still available.'; }
    finally { if (button.isConnected) button.disabled = false; }
  };
  account.submissionHistory().then(rows => {
    if (!main.isConnected || !main.querySelector('.journal-status-pill')) return;
    if (rows.some(row => row.course_id === course && row.activity_id === journalActivity(week))) {
      const badge = main.querySelector('.journal-status-pill'); badge.textContent = 'Submitted'; badge.classList.add('submitted');
    }
  }).catch(() => { /* Draft remains usable even if history is offline. */ });
}
