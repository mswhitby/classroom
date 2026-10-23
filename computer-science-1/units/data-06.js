window.CS1_UNITS=(window.CS1_UNITS||[]).concat([
  {
    "id": "06-iteration/01-for-ranges",
    "unit": 6,
    "unitName": "Iteration & Accumulation",
    "lesson": 1,
    "slug": "01-for-ranges",
    "title": "Repeat an instruction",
    "concept": "For loops and ranges  ",
    "summary": "A loop makes Python repeat an instruction without copying the same line over and over. `range()` produces a sequence of integer values.",
    "mode": "script",
    "starter": "# Use one loop to print the integers 1 through 4.\n",
    "cases": [
      {
        "expected": "1\n2\n3\n4"
      }
    ],
    "points": 5,
    "hints": [
      "`range()` controls how many loop iterations occur.",
      "The ending argument is not included.",
      "Place a single print call inside the loop."
    ],
    "markdown": "06-iteration/lessons/01-for-ranges.md"
  },
  {
    "id": "06-iteration/02-running-total",
    "unit": 6,
    "unitName": "Iteration & Accumulation",
    "lesson": 2,
    "slug": "02-running-total",
    "title": "Add values as you go",
    "concept": "Accumulator variable  ",
    "summary": "A running total begins at a starting value and changes every time a loop visits another item.",
    "mode": "function",
    "starter": "def sum_to_limit(limit):\n    # Add every integer from 1 up to and including limit.\n    pass\n",
    "cases": [
      {
        "call": "sum_to_limit(4)",
        "expected": "10"
      },
      {
        "call": "sum_to_limit(0)",
        "expected": "0"
      },
      {
        "call": "sum_to_limit(1)",
        "expected": "1"
      },
      {
        "call": "sum_to_limit(8)",
        "expected": "36"
      }
    ],
    "points": 5,
    "hints": [
      "Start a total variable at zero.",
      "Remember the endpoint rule for `range()`.",
      "Update the total on each iteration and return it at the end."
    ],
    "markdown": "06-iteration/lessons/02-running-total.md",
    "functionName": "sum_to_limit"
  },
  {
    "id": "06-iteration/03-count-matches",
    "unit": 6,
    "unitName": "Iteration & Accumulation",
    "lesson": 3,
    "slug": "03-count-matches",
    "title": "Count matches in a range",
    "concept": "Counters, modulo, and conditional loops  ",
    "summary": "You can combine an if statement with a loop to count how many numbers meet a rule.",
    "mode": "function",
    "starter": "def count_multiples_of_three(limit):\n    # Count numbers in the range that are divisible by 3.\n    pass\n",
    "cases": [
      {
        "call": "count_multiples_of_three(10)",
        "expected": "3"
      },
      {
        "call": "count_multiples_of_three(3)",
        "expected": "1"
      },
      {
        "call": "count_multiples_of_three(2)",
        "expected": "0"
      },
      {
        "call": "count_multiples_of_three(15)",
        "expected": "5"
      }
    ],
    "points": 10,
    "hints": [
      "Which operator checks if division has no remainder?",
      "Visit each integer in the inclusive interval.",
      "Only increase the counter for numbers divisible by 3."
    ],
    "markdown": "06-iteration/lessons/03-count-matches.md",
    "functionName": "count_multiples_of_three"
  },
  {
    "id": "06-iteration/04-build-launch-countdown",
    "unit": 6,
    "unitName": "Iteration & Accumulation",
    "lesson": 4,
    "slug": "04-build-launch-countdown",
    "title": "Launch Countdown",
    "concept": "Loops, conditions, strings and return values  ",
    "summary": "A robotics launch controller needs to report every countdown number and then announce launch.",
    "mode": "function",
    "starter": "def create_countdown(start):\n    # Build and return a countdown string.\n    pass\n",
    "cases": [
      {
        "call": "create_countdown(3)",
        "expected": "'3\\n2\\n1\\nLaunch!'"
      },
      {
        "call": "create_countdown(1)",
        "expected": "'1\\nLaunch!'"
      },
      {
        "call": "create_countdown(5)",
        "expected": "'5\\n4\\n3\\n2\\n1\\nLaunch!'"
      }
    ],
    "points": 15,
    "hints": [
      "You'll need a loop that visits numbers in reverse order.",
      "Use `str()` to turn each number into text before appending.",
      "Use `\\n` between lines and add `Launch!` only once at the end."
    ],
    "markdown": "06-iteration/lessons/04-build-launch-countdown.md",
    "functionName": "create_countdown"
  }
]);
