export function validateCourse(course){
 if(course?.schemaVersion!==1||course.id!=='game-programming'||!Array.isArray(course.units)||!course.units.length)throw Error('Unsupported course content.');
 const seen=new Set(),activities=new Set();
 for(const unit of course.units){
  if(!unit.id||!Array.isArray(unit.lessons)||!unit.lessons.length)throw Error('A unit has no lessons.');
  for(const lesson of unit.lessons){
   if(seen.has(lesson.id)||!lesson.id||!lesson.title||!Array.isArray(lesson.sections)||!Array.isArray(lesson.unityTask))throw Error('Invalid lesson.');
   if(!Array.isArray(lesson.prerequisites)||lesson.prerequisites.some(id=>!seen.has(id)))throw Error('A lesson requires an untaught prerequisite.');
   seen.add(lesson.id);
   const e=lesson.exercise;if(!e?.id||activities.has(e.id)||!e.starter||!Array.isArray(e.examples)||!e.examples.length)throw Error('Invalid C# exercise.');if(!/^[A-Z][A-Za-z0-9]*$/.test(e.functionName||'')||!e.signature.includes(e.functionName+'(')||e.examples.some(c=>!c.call.startsWith(e.functionName+'(')))throw Error('Exercise function names disagree.');activities.add(e.id);
  }
  const quiz=unit.quiz;if(!quiz?.id||activities.has(quiz.id)||!Array.isArray(quiz.questions)||!quiz.questions.length)throw Error('Invalid checkpoint.');activities.add(quiz.id);
  const questions=new Set();for(const q of quiz.questions){if(questions.has(q.id)||!q.prompt||!Array.isArray(q.choices)||q.choices.length<2||!Number.isInteger(q.answer)||q.answer<0||q.answer>=q.choices.length||!q.explanation)throw Error('Invalid checkpoint question.');questions.add(q.id)}
 }
 return course;
}
export function scoreQuiz(questions,answers){
 if(questions.some(q=>!Number.isInteger(answers[q.id])||answers[q.id]<0||answers[q.id]>=q.choices.length))return null;
 const correct=questions.filter(q=>answers[q.id]===q.answer).length;return {correct,total:questions.length,percent:Math.round(correct/questions.length*100)};
}
export function progressKey(courseId,activityId){return `${courseId}:${activityId}`}
