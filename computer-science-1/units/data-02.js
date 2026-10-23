window.CS1_UNITS=(window.CS1_UNITS||[]).concat([
  {
    "id": "02-values-and-variables/01-meet-variables",
    "unit": 2,
    "unitName": "Values, Variables & Expressions",
    "lesson": 1,
    "slug": "01-meet-variables",
    "title": "Names for changing information",
    "concept": "Variables and assignment  ",
    "summary": "Programs often need to remember data rather than typing it repeatedly. A variable is a name for a value.",
    "mode": "script",
    "starter": "# Name the player with a variable, then display the required message.\n",
    "cases": [
      {
        "expected": "Player: Nova"
      }
    ],
    "points": 5,
    "hints": [
      "How do you store text in a variable?",
      "`print()` can accept a label and a variable separated by a comma.",
      "Check the space after the colon in the displayed output."
    ],
    "markdown": "02-values-and-variables/lessons/01-meet-variables.md"
  },
  {
    "id": "02-values-and-variables/02-numbers-and-operations",
    "unit": 2,
    "unitName": "Values, Variables & Expressions",
    "lesson": 2,
    "slug": "02-numbers-and-operations",
    "title": "Calculate with numbers",
    "concept": "Integer arithmetic  ",
    "summary": "Unlike strings, integers support calculations. Python evaluates arithmetic expressions before producing output.",
    "mode": "script",
    "starter": "# How many minutes are spent in three sessions?\nsessions = 3\nminutes = 45\n# Calculate and print the total.\n",
    "cases": [
      {
        "expected": "135"
      }
    ],
    "points": 5,
    "hints": [
      "Identify the operation that combines repeated equal durations.",
      "Use the two existing variables rather than printing 135 directly.",
      "`print()` should display the numeric result."
    ],
    "markdown": "02-values-and-variables/lessons/02-numbers-and-operations.md"
  },
  {
    "id": "02-values-and-variables/03-types-and-conversion",
    "unit": 2,
    "unitName": "Values, Variables & Expressions",
    "lesson": 3,
    "slug": "03-types-and-conversion",
    "title": "Numbers aren't always text",
    "concept": "String, int, float, conversion  ",
    "summary": "Python gives values different types. Strings hold text; integers hold whole numbers; floats hold decimal numbers.",
    "mode": "script",
    "starter": "# Give the two variables their correct numeric types.\nquantity = 8\nprice = 2.5\n# Display each type name on its own line.\n",
    "cases": [
      {
        "expected": "int\nfloat"
      }
    ],
    "points": 10,
    "hints": [
      "Review `type(value).__name__` in the example.",
      "You need two print statements, in the correct order.",
      "Do not put quotation marks around the number 8."
    ],
    "markdown": "02-values-and-variables/lessons/03-types-and-conversion.md"
  },
  {
    "id": "02-values-and-variables/04-build-a-price-calculator",
    "unit": 2,
    "unitName": "Values, Variables & Expressions",
    "lesson": 4,
    "slug": "04-build-a-price-calculator",
    "title": "Ticket Cost",
    "concept": "Variables and expressions together  ",
    "summary": "Real programs calculate new information using values they've stored. This mini-project applies your variable and arithmetic skills.",
    "mode": "script",
    "starter": "# Build a small price calculator with variables.\npasses = 4\nprice = 12\n# Compute the result and print the labeled total.\n",
    "cases": [
      {
        "expected": "Total: 48"
      }
    ],
    "points": 15,
    "hints": [
      "Multiply the number of passes by the price.",
      "You can store the calculation in a `total` variable.",
      "Print a label and the computed value in a single statement."
    ],
    "markdown": "02-values-and-variables/lessons/04-build-a-price-calculator.md"
  }
]);
