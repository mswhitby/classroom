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
  "explanation": "Assignment uses a single equals sign. Python uses the current value when it reaches each print statement. Renaming the player changes later output, not previous output.",
  "exampleCode": "player = 'Nova'\nprint('Player:', player)\nplayer = 'Atlas'\nprint('Player:', player)",
  "pitfall": "Text values require quotation marks, but variable names do not.",
  "reflection": "What does the second print statement show? Why?",
  "mission": "Create a variable named `player` storing the text `Nova`. Display exactly `Player: Nova` using the variable and `print()`.",
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
  "explanation": "`*` multiplies. `//` gives a whole-number quotient; `%` gives a remainder. The result of 30 × 4 is 120. You can keep numbers in variables and compute when needed.",
  "exampleCode": "minutes = 30\nsessions = 4\nprint(minutes * sessions)\nprint(15 // 4)\nprint(15 % 4)",
  "pitfall": "Quoted numbers such as `'12'` are strings, not integers.",
  "reflection": "Predict `7 * 6`, `17 // 5`, and `17 % 5` before running.",
  "mission": "A robotics club runs `3` sessions lasting `45` minutes each. Use variables named `sessions` and `minutes` to calculate and print the **total number of minutes**: `135`.",
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
  "explanation": "`type()` identifies a value's type, and `.__name__` provides its readable name. `int('8')` turns a numeric string into an integer so arithmetic works.",
  "exampleCode": "count = 6\nrate = 2.5\nprint(type(count).__name__)\nprint(type(rate).__name__)\nprint(int('8') + count)",
  "pitfall": "`'5' + '2'` joins strings into `'52'`, rather than adding them to get 7.",
  "reflection": "What happens if you try `'8' + 6` without conversion?",
  "mission": "Set `quantity = 8` as an integer and `price = 2.5` as a float. Print the type name of `quantity` on the first line and the type name of `price` on the second. The output must be exactly `int` then `float`.",
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
  "explanation": "The variable `subtotal` captures a calculated value, making the code clearer and easier to change. Notice that print separates the label and number with a space.",
  "exampleCode": "items = 2\ncost_each = 7\nsubtotal = items * cost_each\nprint('Subtotal:', subtotal)",
  "pitfall": "Do not hardcode the answer when you can calculate from the given variables.",
  "reflection": "If `items` becomes 5, which line must change?",
  "mission": "A club sells `4` passes at `$12` each. Define variables `passes` and `price`, calculate the total, and display exactly `Total: 48`.",
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
