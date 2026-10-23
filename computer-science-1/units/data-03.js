window.CS1_UNITS=(window.CS1_UNITS||[]).concat([
  {
    "id": "03-functions-and-parameters/01-functions-return",
    "unit": 3,
    "unitName": "Functions, Parameters & Return Values",
    "lesson": 1,
    "slug": "01-functions-return",
    "title": "Returning an answer",
    "concept": "Function definitions and return  ",
    "summary": "A function packages instructions into a reusable operation. A function can give a result back with `return`.",
    "mode": "function",
    "starter": "def increment_number(number):\n    # Return the number that comes immediately after this one.\n    pass\n",
    "cases": [
      {
        "call": "increment_number(4)",
        "expected": "5"
      },
      {
        "call": "increment_number(-1)",
        "expected": "0"
      },
      {
        "call": "increment_number(99)",
        "expected": "100"
      }
    ],
    "points": 5,
    "hints": [
      "The input arrives in a parameter called `number`.",
      "Use addition with the value given to you.",
      "The grader needs `return`, not `print`."
    ],
    "markdown": "03-functions-and-parameters/lessons/01-functions-return.md",
    "functionName": "increment_number"
  },
  {
    "id": "03-functions-and-parameters/02-parameters",
    "unit": 3,
    "unitName": "Functions, Parameters & Return Values",
    "lesson": 2,
    "slug": "02-parameters",
    "title": "Working with two inputs",
    "concept": "Parameters and arguments  ",
    "summary": "Functions can have more than one parameter. An argument is the actual value supplied for a parameter when a function is called.",
    "mode": "function",
    "starter": "def calculate_pay(hours, rate):\n    # Compute pay from the two given parameters.\n    pass\n",
    "cases": [
      {
        "call": "calculate_pay(3, 12)",
        "expected": "36"
      },
      {
        "call": "calculate_pay(0, 14)",
        "expected": "0"
      },
      {
        "call": "calculate_pay(2, 7.5)",
        "expected": "15.0"
      }
    ],
    "points": 5,
    "hints": [
      "Look at which parameter is hours and which is rate.",
      "A multiplication expression produces the total pay.",
      "Return the numeric answer."
    ],
    "markdown": "03-functions-and-parameters/lessons/02-parameters.md",
    "functionName": "calculate_pay"
  },
  {
    "id": "03-functions-and-parameters/03-strings-from-functions",
    "unit": 3,
    "unitName": "Functions, Parameters & Return Values",
    "lesson": 3,
    "slug": "03-strings-from-functions",
    "title": "Return a string",
    "concept": "String expressions and return types  ",
    "summary": "Functions don't have to return numbers. A function can construct and return a message using text and its inputs.",
    "mode": "function",
    "starter": "def create_greeting(username):\n    # Build a welcome string using the argument.\n    pass\n",
    "cases": [
      {
        "call": "create_greeting('Riley')",
        "expected": "'Welcome, Riley!'"
      },
      {
        "call": "create_greeting('Kai')",
        "expected": "'Welcome, Kai!'"
      },
      {
        "call": "create_greeting('')",
        "expected": "'Welcome, !'"
      }
    ],
    "points": 10,
    "hints": [
      "You can join smaller strings with `+`.",
      "Use the parameter between the greeting and the exclamation mark.",
      "The result should be a string returned by the function."
    ],
    "markdown": "03-functions-and-parameters/lessons/03-strings-from-functions.md",
    "functionName": "create_greeting"
  },
  {
    "id": "03-functions-and-parameters/04-build-area-tool",
    "unit": 3,
    "unitName": "Functions, Parameters & Return Values",
    "lesson": 4,
    "slug": "04-build-area-tool",
    "title": "Rectangle Area Tool",
    "concept": "Reusable functions and expressions  ",
    "summary": "A classroom design app needs a reusable calculation rather than manually recalculating the area of every rectangle.",
    "mode": "function",
    "starter": "def calculate_rectangle_area(width, height):\n    # Return the area based on the supplied dimensions.\n    pass\n",
    "cases": [
      {
        "call": "calculate_rectangle_area(5, 3)",
        "expected": "15"
      },
      {
        "call": "calculate_rectangle_area(0, 10)",
        "expected": "0"
      },
      {
        "call": "calculate_rectangle_area(2.5, 4)",
        "expected": "10.0"
      }
    ],
    "points": 15,
    "hints": [
      "Area is width multiplied by height.",
      "Don't display output with `print()`.",
      "Return the calculated value directly or save it to a variable before returning."
    ],
    "markdown": "03-functions-and-parameters/lessons/04-build-area-tool.md",
    "functionName": "calculate_rectangle_area"
  }
]);
