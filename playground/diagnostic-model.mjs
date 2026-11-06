import {numericValue} from './tsi-model.mjs';

// Instructional grouping only. Four questions cannot establish mastery or a TSIA2 score.
export function placeMath(data, answers) {
  const domains = data.domains.map(domain => {
    const items = data.items.filter(item => item.domain === domain.id);
    let correct = 0, skipped = 0;
    const rows = items.map(item => {
      const raw = answers[item.id];
      if (raw !== 'skip' && (raw == null || String(raw).trim() === '')) throw Error('Answer or choose Not sure for every question.');
      const unknown = raw === 'skip';
      if (unknown) skipped++;
      const pass = !unknown && numericValue(raw) !== null && Math.abs(numericValue(raw) - item.answer) < 1e-8;
      if (pass) correct++;
      return {id:item.id, correct:pass, skipped:unknown};
    });
    return {...domain, correct, skipped, total:items.length, rows,
      placement: skipped === items.length ? 'Needs a teacher check' : correct >= 3 ? 'Try a deeper check' : 'Start with guided prep'};
  });
  return {version:data.version, domains, correct:domains.reduce((n,d)=>n+d.correct,0), total:data.items.length};
}

export function diagnosticAttempt(before, data, answers, at = new Date().toISOString()) {
  const result = placeMath(data, answers);
  const attempt = {at, answers:{...answers}, result};
  return {version:data.version, first:before?.version === data.version ? before.first || attempt : attempt, latest:attempt};
}
