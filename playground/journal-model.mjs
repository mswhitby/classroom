// Weekly journal helpers. One course/week is one assignment; repeated hand-ins are retained.
export const JOURNAL_COURSES = Object.freeze([
  'computer-science-1', 'game-programming', 'mobile-app-dev', 'uil', 'capstone',
]);
export const JOURNAL_TYPES = Object.freeze(['essay', 'logic-puzzle']);
const ISO_DAY = /^\d{4}-\d{2}-\d{2}$/;
const dateParts = new Intl.DateTimeFormat('en-US', {
  timeZone: 'America/Chicago', year: 'numeric', month: '2-digit', day: '2-digit',
});

export function centralWeekStart(at = new Date()) {
  const parts = Object.fromEntries(dateParts.formatToParts(at).filter(p => p.type !== 'literal').map(p => [p.type, p.value]));
  const day = new Date(Date.UTC(Number(parts.year), Number(parts.month) - 1, Number(parts.day)));
  day.setUTCDate(day.getUTCDate() - (day.getUTCDay() + 6) % 7);
  return day.toISOString().slice(0, 10);
}

export function journalWeeks(at = new Date(), count = 8) {
  const [year, month, day] = centralWeekStart(at).split('-').map(Number);
  const first = new Date(Date.UTC(year, month - 1, day));
  return Array.from({ length: Math.min(16, Math.max(1, count)) }, (_, i) => {
    const d = new Date(first);
    d.setUTCDate(d.getUTCDate() - i * 7);
    return d.toISOString().slice(0, 10);
  });
}

export function journalActivity(week) {
  if (!ISO_DAY.test(week) || centralWeekStart(new Date(week + 'T18:00:00Z')) !== week) {
    throw Error('Choose a valid Monday for your journal.');
  }
  return 'journal:' + week;
}

export function journalDraftKey(course, week, field = 'response') {
  if (!JOURNAL_COURSES.includes(course) || !['response', 'details'].includes(field)) {
    throw Error('Choose a valid course and journal field.');
  }
  return `playground:journal:${course}:${journalActivity(week).slice(8)}:${field}`;
}

export function journalSnapshot({ course, week, response, type, aiUse, aiDetails = '' }) {
  if (!JOURNAL_COURSES.includes(course)) throw Error('Choose an available course.');
  const activity_id = journalActivity(week);
  const text = String(response || '').trim();
  if (text.length < 10) throw Error('Write your response and explain your thinking before submitting.');
  if (!JOURNAL_TYPES.includes(type)) throw Error('Select essay or logic puzzle.');
  if (!['none', 'disclosed'].includes(aiUse)) throw Error('Complete the AI-use declaration.');
  if (aiUse === 'disclosed' && String(aiDetails).trim().length < 5) {
    throw Error('Describe any AI use so your teacher can review your work against class policy.');
  }
  const files = {
    'journal.md': text,
    'journal-info.json': JSON.stringify({ response_type: type, ai_use: aiUse, ai_details: String(aiDetails || '').trim(), week }, null, 2),
  };
  if (new TextEncoder().encode(JSON.stringify(files)).length > 280000) {
    throw Error('Your journal is too large to submit. Shorten it or contact your teacher.');
  }
  // Existing append-only submission system accepts self-report; no automated code grading.
  return { course_id: course, activity_id, activity_kind: 'self-report', files };
}
