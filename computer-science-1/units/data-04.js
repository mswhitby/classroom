window.CS1_UNITS=(window.CS1_UNITS||[]).concat([
 {
  "id": "04-comparisons-and-boolean-logic/01-comparisons",
  "unit": 4,
  "unitName": "Comparisons & Boolean Logic",
  "lesson": 1,
  "slug": "01-comparisons",
  "title": "Ask Python a question",
  "concept": "Comparison operators and Boolean values  ",
  "summary": "A comparison is a question that evaluates to a Boolean value: `True` or `False`.",
  "explanation": "`>` asks whether one value is larger. `==` checks equality. `!=` checks inequality. The result is a Boolean, not the string `'True'`.",
  "exampleCode": "print(7 > 3)\nprint(4 == 4)\nprint(2 != 2)",
  "pitfall": "Use `==` for comparison and `=` for assignment.",
  "reflection": "Predict `5 >= 5` and `5 > 5`.",
  "mission": "Complete `solution(current, required)` to return `True` if the current score is at least the required score, or `False` otherwise.",
  "mode": "function",
  "starter": "def solution(current, required):\n    # Return whether current meets or exceeds required.\n    pass\n",
  "cases": [
   {
    "call": "solution(8, 5)",
    "expected": "True"
   },
   {
    "call": "solution(5, 5)",
    "expected": "True"
   },
   {
    "call": "solution(4, 5)",
    "expected": "False"
   }
  ],
  "points": 5,
  "hints": [
   "Which operator means greater than **or equal to**?",
   "A comparison already produces `True` or `False`.",
   "Return the result of the comparison."
  ],
  "markdown": "04-comparisons-and-boolean-logic/lessons/01-comparisons.md"
 },
 {
  "id": "04-comparisons-and-boolean-logic/02-equality",
  "unit": 4,
  "unitName": "Comparisons & Boolean Logic",
  "lesson": 2,
  "slug": "02-equality",
  "title": "Exact matches matter",
  "concept": "Equality and inequality  ",
  "summary": "Some actions should only happen when two values match exactly.",
  "explanation": "String equality is case-sensitive. `'UP'` equals `'UP'`, but it does not equal `'up'`.",
  "exampleCode": "entered = 'UP'\ncorrect = 'UP'\nprint(entered == correct)\nprint(entered != 'up')",
  "pitfall": "Avoid confusing assignment (`=`) and equality (`==`).",
  "reflection": "Would a string password match if its capitalization changes?",
  "mission": "Complete `solution(expected_code, entered_code)` so it returns a Boolean indicating whether the two strings match exactly.",
  "mode": "function",
  "starter": "def solution(expected_code, entered_code):\n    # Compare both strings without changing them.\n    pass\n",
  "cases": [
   {
    "call": "solution('AB7', 'AB7')",
    "expected": "True"
   },
   {
    "call": "solution('AB7', 'ab7')",
    "expected": "False"
   },
   {
    "call": "solution('', '')",
    "expected": "True"
   }
  ],
  "points": 5,
  "hints": [
   "String comparison is case-sensitive by default.",
   "Use the equality operator.",
   "Return a Boolean, not a text message."
  ],
  "markdown": "04-comparisons-and-boolean-logic/lessons/02-equality.md"
 },
 {
  "id": "04-comparisons-and-boolean-logic/03-and-or-not",
  "unit": 4,
  "unitName": "Comparisons & Boolean Logic",
  "lesson": 3,
  "slug": "03-and-or-not",
  "title": "Combine conditions",
  "concept": "Logical operators  ",
  "summary": "Real decisions often require more than one condition. Python combines Boolean expressions with `and`, `or`, and `not`.",
  "explanation": "`and` requires both sides to be true. `or` requires at least one side true. `not` reverses a Boolean.",
  "exampleCode": "has_pass = True\nis_late = False\nprint(has_pass and not is_late)\nprint(has_pass or is_late)",
  "pitfall": "Use lowercase keywords `and`, `or`, `not`, but capitalized Boolean values `True` and `False`.",
  "reflection": "Would `False or True` be true? What about `True and False`?",
  "mission": "Complete `solution(online, muted)` to return `True` only when the player is online **and not muted**.",
  "mode": "function",
  "starter": "def solution(online, muted):\n    # Combine both Boolean inputs.\n    pass\n",
  "cases": [
   {
    "call": "solution(True, False)",
    "expected": "True"
   },
   {
    "call": "solution(True, True)",
    "expected": "False"
   },
   {
    "call": "solution(False, False)",
    "expected": "False"
   }
  ],
  "points": 10,
  "hints": [
   "Both online and not muted must be true.",
   "`not` reverses the muted flag.",
   "Combine the conditions with `and`."
  ],
  "markdown": "04-comparisons-and-boolean-logic/lessons/03-and-or-not.md"
 },
 {
  "id": "04-comparisons-and-boolean-logic/04-build-entry-check",
  "unit": 4,
  "unitName": "Comparisons & Boolean Logic",
  "lesson": 4,
  "slug": "04-build-entry-check",
  "title": "Entry Check",
  "concept": "Combining comparisons and logical operators  ",
  "summary": "An event app can decide whether a person qualifies based on a pass or an age threshold.",
  "explanation": "The comparison `age >= 13` returns a Boolean. `and` combines that with the second Boolean parameter.",
  "exampleCode": "def can_watch(age, has_ticket):\n    return age >= 13 and has_ticket",
  "pitfall": "Be explicit about whether the rule requires both conditions or only one.",
  "reflection": "Does the sample function allow a twelve-year-old with a ticket?",
  "mission": "Complete `solution(has_pass, age)` so entry is allowed (`True`) if the person has a pass **or** is at least `18` years old. Otherwise return `False`.",
  "mode": "function",
  "starter": "def solution(has_pass, age):\n    # Allow a valid pass OR meeting the age requirement.\n    pass\n",
  "cases": [
   {
    "call": "solution(True, 12)",
    "expected": "True"
   },
   {
    "call": "solution(False, 18)",
    "expected": "True"
   },
   {
    "call": "solution(False, 17)",
    "expected": "False"
   },
   {
    "call": "solution(False, 35)",
    "expected": "True"
   }
  ],
  "points": 15,
  "hints": [
   "Identify the two ways a person can qualify.",
   "Age must be compared to 18, including 18 itself.",
   "Join the two qualification conditions using `or`."
  ],
  "markdown": "04-comparisons-and-boolean-logic/lessons/04-build-entry-check.md"
 }
]);
