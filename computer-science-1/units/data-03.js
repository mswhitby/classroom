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
    "explanation": "`def` starts a function definition. Its indented body runs when called. `return` gives a value to the caller. A function with no explicit return produces `None`.",
    "exampleCode": "def double(n):\n    return n * 2\n\nprint(double(4))",
    "pitfall": "Printing a value is not the same as returning it.",
    "reflection": "How does `double(7)` differ from printing the number 14 inside the function?",
    "mission": "Complete `increment_number(number)` so it returns `number + 1`, without printing the answer.",
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
    "explanation": "When called with `(3, 5)`, `width` is 3 and `height` is 5. The expression calculates the perimeter and returns 16.",
    "exampleCode": "def perimeter(width, height):\n    return 2 * (width + height)\n\nprint(perimeter(3, 5))",
    "pitfall": "Don't swap parameters accidentally when their positions have different meanings.",
    "reflection": "What would the example return for width 2 and height 4?",
    "mission": "Complete `calculate_pay(hours, rate)` to return the total pay calculated by multiplying hours by the hourly rate.",
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
    "explanation": "The `+` operator concatenates strings when both sides are text. The returned value has type `str`.",
    "exampleCode": "def tag(name):\n    return 'Hi, ' + name\n\nprint(tag('Sam'))",
    "pitfall": "`return 'Hi, name'` returns the literal word name, not the parameter's value.",
    "reflection": "Why do you need the space after the comma in `'Hi, '`?",
    "mission": "Complete `create_greeting(username)` to return `Welcome, <username>!` with the actual username inserted. Preserve the exact punctuation.",
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
    "explanation": "The caller provides a value, and the function returns a result. One function works for many different input values.",
    "exampleCode": "def square_area(side):\n    return side * side\n\nprint(square_area(5))",
    "pitfall": "Do not hardcode the sample result; the checker will use additional arguments.",
    "reflection": "Which parts of the function are general enough to work with a different square size?",
    "mission": "Complete `calculate_rectangle_area(width, height)` to return the area of a rectangle (`width * height`). It must work with positive and zero dimensions.",
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
