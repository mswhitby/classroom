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
    "mode": "function",
    "starter": "def has_required_points(current, required):\n    # Return whether current meets or exceeds required.\n    pass\n",
    "cases": [
      {
        "call": "has_required_points(8, 5)",
        "expected": "True"
      },
      {
        "call": "has_required_points(5, 5)",
        "expected": "True"
      },
      {
        "call": "has_required_points(4, 5)",
        "expected": "False"
      }
    ],
    "points": 5,
    "hints": [
      "Which operator means greater than **or equal to**?",
      "A comparison already produces `True` or `False`.",
      "Return the result of the comparison."
    ],
    "markdown": "04-comparisons-and-boolean-logic/lessons/01-comparisons.md",
    "functionName": "has_required_points"
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
    "mode": "function",
    "starter": "def codes_match(expected_code, entered_code):\n    # Compare both strings without changing them.\n    pass\n",
    "cases": [
      {
        "call": "codes_match('AB7', 'AB7')",
        "expected": "True"
      },
      {
        "call": "codes_match('AB7', 'ab7')",
        "expected": "False"
      },
      {
        "call": "codes_match('', '')",
        "expected": "True"
      }
    ],
    "points": 5,
    "hints": [
      "String comparison is case-sensitive by default.",
      "Use the equality operator.",
      "Return a Boolean, not a text message."
    ],
    "markdown": "04-comparisons-and-boolean-logic/lessons/02-equality.md",
    "functionName": "codes_match"
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
    "mode": "function",
    "starter": "def can_send_notification(online, muted):\n    # Combine both Boolean inputs.\n    pass\n",
    "cases": [
      {
        "call": "can_send_notification(True, False)",
        "expected": "True"
      },
      {
        "call": "can_send_notification(True, True)",
        "expected": "False"
      },
      {
        "call": "can_send_notification(False, False)",
        "expected": "False"
      }
    ],
    "points": 10,
    "hints": [
      "Both online and not muted must be true.",
      "`not` reverses the muted flag.",
      "Combine the conditions with `and`."
    ],
    "markdown": "04-comparisons-and-boolean-logic/lessons/03-and-or-not.md",
    "functionName": "can_send_notification"
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
    "mode": "function",
    "starter": "def can_enter_event(has_pass, age):\n    # Allow a valid pass OR meeting the age requirement.\n    pass\n",
    "cases": [
      {
        "call": "can_enter_event(True, 12)",
        "expected": "True"
      },
      {
        "call": "can_enter_event(False, 18)",
        "expected": "True"
      },
      {
        "call": "can_enter_event(False, 17)",
        "expected": "False"
      },
      {
        "call": "can_enter_event(False, 35)",
        "expected": "True"
      }
    ],
    "points": 15,
    "hints": [
      "Identify the two ways a person can qualify.",
      "Age must be compared to 18, including 18 itself.",
      "Join the two qualification conditions using `or`."
    ],
    "markdown": "04-comparisons-and-boolean-logic/lessons/04-build-entry-check.md",
    "functionName": "can_enter_event"
  }
]);
