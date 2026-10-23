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
    "mode": "function",
    "starter": "def classify_temperature(temperature):\n    message = 'Normal'\n    # Change the message when the temperature is below 10.\n    return message\n",
    "cases": [
      {
        "call": "classify_temperature(5)",
        "expected": "'Cold alert'"
      },
      {
        "call": "classify_temperature(10)",
        "expected": "'Normal'"
      },
      {
        "call": "classify_temperature(-4)",
        "expected": "'Cold alert'"
      }
    ],
    "points": 5,
    "hints": [
      "Choose the comparison for below 10.",
      "Only update `message` when your condition is true.",
      "Keep `return message` after the conditional block."
    ],
    "markdown": "05-conditional-execution/lessons/01-first-if.md",
    "functionName": "classify_temperature"
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
    "mode": "function",
    "starter": "def classify_pass_status(points):\n    # Decide between the two exact messages.\n    pass\n",
    "cases": [
      {
        "call": "classify_pass_status(70)",
        "expected": "'Pass'"
      },
      {
        "call": "classify_pass_status(69)",
        "expected": "'Retry'"
      },
      {
        "call": "classify_pass_status(100)",
        "expected": "'Pass'"
      }
    ],
    "points": 5,
    "hints": [
      "Which comparison includes 70?",
      "Write one branch for meeting the threshold and one for failing it.",
      "Return the exact capitalized word requested."
    ],
    "markdown": "05-conditional-execution/lessons/02-if-else.md",
    "functionName": "classify_pass_status"
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
    "mode": "function",
    "starter": "def classify_score(score):\n    # Choose exactly one award band.\n    pass\n",
    "cases": [
      {
        "call": "classify_score(92)",
        "expected": "'Gold'"
      },
      {
        "call": "classify_score(70)",
        "expected": "'Silver'"
      },
      {
        "call": "classify_score(69)",
        "expected": "'Bronze'"
      },
      {
        "call": "classify_score(90)",
        "expected": "'Gold'"
      }
    ],
    "points": 10,
    "hints": [
      "Check the highest threshold first.",
      "After scores of 90+ are handled, what does >= 70 mean?",
      "Use `else` for every remaining score."
    ],
    "markdown": "05-conditional-execution/lessons/03-elif-bands.md",
    "functionName": "classify_score"
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
    "mode": "function",
    "starter": "def classify_ticket(age, has_pass):\n    # A valid pass takes priority over age bands.\n    pass\n",
    "cases": [
      {
        "call": "classify_ticket(15, True)",
        "expected": "'Member'"
      },
      {
        "call": "classify_ticket(15, False)",
        "expected": "'Youth'"
      },
      {
        "call": "classify_ticket(18, False)",
        "expected": "'Guest'"
      },
      {
        "call": "classify_ticket(30, True)",
        "expected": "'Member'"
      }
    ],
    "points": 15,
    "hints": [
      "Check the pass before classifying by age.",
      "An age of 18 belongs to the Guest branch.",
      "Use if / elif / else to select one exact label."
    ],
    "markdown": "05-conditional-execution/lessons/04-build-ride-classifier.md",
    "functionName": "classify_ticket"
  }
]);
