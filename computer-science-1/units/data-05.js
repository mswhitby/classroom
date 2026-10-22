window.CS1_UNITS=(window.CS1_UNITS||[]).concat([
 {
  "id": "05-conditional-execution/01-first-if",
  "unit": 5,
  "unitName": "Conditional Execution",
  "lesson": 1,
  "slug": "01-first-if",
  "title": "Make a choice with if",
  "concept": "If statements and indentation  ",
  "summary": "Programs can make a choice based on a Boolean expression. Python executes the indented body of an if statement only when its condition is true.",
  "explanation": "For `warning(15)` the condition is true, so the message changes. For `warning(90)` Python skips the indented assignment and returns 'Ready'. The colon and indentation are required.",
  "exampleCode": "def warning(battery):\n    message = 'Ready'\n    if battery < 20:\n        message = 'Charge needed'\n    return message",
  "pitfall": "The colon after if and the indentation underneath it are part of Python syntax.",
  "reflection": "What would `warning(20)` return? What does the indentation tell Python?",
  "mission": "Complete `solution(temperature)` so it returns `'Cold alert'` for temperatures **below 10**, and `'Normal'` otherwise.",
  "mode": "function",
  "starter": "def solution(temperature):\n    message = 'Normal'\n    # Change the message when the temperature is below 10.\n    return message\n",
  "cases": [
   {
    "call": "solution(5)",
    "expected": "'Cold alert'"
   },
   {
    "call": "solution(10)",
    "expected": "'Normal'"
   },
   {
    "call": "solution(-4)",
    "expected": "'Cold alert'"
   }
  ],
  "points": 5,
  "hints": [
   "Choose the comparison for below 10.",
   "Only update `message` when your condition is true.",
   "Keep `return message` after the conditional block."
  ],
  "markdown": "05-conditional-execution/lessons/01-first-if.md"
 },
 {
  "id": "05-conditional-execution/02-if-else",
  "unit": 5,
  "unitName": "Conditional Execution",
  "lesson": 2,
  "slug": "02-if-else",
  "title": "Two possible paths",
  "concept": "If and else  ",
  "summary": "An `if`/`else` structure guarantees that exactly one of two branches runs.",
  "explanation": "When the comparison is true, the first branch returns. Otherwise, the else branch returns. Both return values are strings.",
  "exampleCode": "def can_start(energy):\n    if energy >= 50:\n        return 'Start'\n    else:\n        return 'Recharge'",
  "pitfall": "Avoid returning a Boolean when the prompt explicitly requires a string.",
  "reflection": "What does `can_start(50)` return, and why?",
  "mission": "Complete `solution(points)` so it returns `'Pass'` for scores at least **70**, and `'Retry'` otherwise.",
  "mode": "function",
  "starter": "def solution(points):\n    # Decide between the two exact messages.\n    pass\n",
  "cases": [
   {
    "call": "solution(70)",
    "expected": "'Pass'"
   },
   {
    "call": "solution(69)",
    "expected": "'Retry'"
   },
   {
    "call": "solution(100)",
    "expected": "'Pass'"
   }
  ],
  "points": 5,
  "hints": [
   "Which comparison includes 70?",
   "Write one branch for meeting the threshold and one for failing it.",
   "Return the exact capitalized word requested."
  ],
  "markdown": "05-conditional-execution/lessons/02-if-else.md"
 },
 {
  "id": "05-conditional-execution/03-elif-bands",
  "unit": 5,
  "unitName": "Conditional Execution",
  "lesson": 3,
  "slug": "03-elif-bands",
  "title": "More than two outcomes",
  "concept": "Elif chains and mutually exclusive ranges  ",
  "summary": "Use `elif` to check another condition after the first fails. In a chain, Python selects the first true branch.",
  "explanation": "A value of 90 chooses the first branch. A value of 60 skips the first but matches the second. A value of 20 reaches else.",
  "exampleCode": "def light(status):\n    if status >= 80:\n        return 'Green'\n    elif status >= 40:\n        return 'Yellow'\n    else:\n        return 'Red'",
  "pitfall": "Always order comparisons with overlapping ranges carefully; earlier matching branches win.",
  "reflection": "Why does `light(95)` return 'Green' rather than 'Yellow' even though 95 is also >= 40?",
  "mission": "Complete `solution(score)` to return `'Gold'` for **90 or above**, `'Silver'` for **70 through 89**, and `'Bronze'` for anything below 70.",
  "mode": "function",
  "starter": "def solution(score):\n    # Choose exactly one award band.\n    pass\n",
  "cases": [
   {
    "call": "solution(92)",
    "expected": "'Gold'"
   },
   {
    "call": "solution(70)",
    "expected": "'Silver'"
   },
   {
    "call": "solution(69)",
    "expected": "'Bronze'"
   },
   {
    "call": "solution(90)",
    "expected": "'Gold'"
   }
  ],
  "points": 10,
  "hints": [
   "Check the highest threshold first.",
   "After scores of 90+ are handled, what does >= 70 mean?",
   "Use `else` for every remaining score."
  ],
  "markdown": "05-conditional-execution/lessons/03-elif-bands.md"
 },
 {
  "id": "05-conditional-execution/04-build-ride-classifier",
  "unit": 5,
  "unitName": "Conditional Execution",
  "lesson": 4,
  "slug": "04-build-ride-classifier",
  "title": "Event Ticket Classifier",
  "concept": "Conditionals and Boolean logic together  ",
  "summary": "A student event app classifies each ticket request using more than one condition.",
  "explanation": "Priority comes first, so it applies even if the guest is also younger than 13. The order of the checks communicates the intended rule.",
  "exampleCode": "def category(age, vip):\n    if vip:\n        return 'Priority'\n    elif age < 13:\n        return 'Junior'\n    else:\n        return 'General'",
  "pitfall": "Do not test the age band before the VIP condition if priority must take precedence.",
  "reflection": "Why does `category(10, True)` return 'Priority'?",
  "mission": "Complete `solution(age, has_pass)` to return `'Member'` if `has_pass` is true, otherwise `'Youth'` if `age` is **under 18**, otherwise `'Guest'`. Return a string in every case.",
  "mode": "function",
  "starter": "def solution(age, has_pass):\n    # A valid pass takes priority over age bands.\n    pass\n",
  "cases": [
   {
    "call": "solution(15, True)",
    "expected": "'Member'"
   },
   {
    "call": "solution(15, False)",
    "expected": "'Youth'"
   },
   {
    "call": "solution(18, False)",
    "expected": "'Guest'"
   },
   {
    "call": "solution(30, True)",
    "expected": "'Member'"
   }
  ],
  "points": 15,
  "hints": [
   "Check the pass before classifying by age.",
   "An age of 18 belongs to the Guest branch.",
   "Use if / elif / else to select one exact label."
  ],
  "markdown": "05-conditional-execution/lessons/04-build-ride-classifier.md"
 }
]);
