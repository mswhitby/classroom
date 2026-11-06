window.CS1_UNITS=(window.CS1_UNITS||[]).concat([
  {
    "id": "07-strings-and-text/01-index-and-length",
    "unit": 7,
    "unitName": "Strings & Text Processing",
    "lesson": 1,
    "slug": "01-index-and-length",
    "title": "Read characters by position",
    "concept": "String indexing and length",
    "summary": "A string is an ordered sequence of characters. Positions start at zero, and negative indexes count from the end.",
    "mode": "function",
    "starter": "def edge_letters(text):\n    # Return the first and last characters, in that order.\n    pass\n",
    "cases": [
      {
        "call": "edge_letters('robot')",
        "expected": "'rt'"
      },
      {
        "call": "edge_letters('AA')",
        "expected": "'AA'"
      },
      {
        "call": "edge_letters('Python')",
        "expected": "'Pn'"
      },
      {
        "call": "edge_letters('Z9')",
        "expected": "'Z9'"
      }
    ],
    "points": 5,
    "hints": [
      "Access the first character with index 0.",
      "A negative index can select the final character.",
      "Join the two selected characters with `+`."
    ],
    "markdown": "07-strings-and-text/lessons/01-index-and-length.md",
    "functionName": "edge_letters"
  },
  {
    "id": "07-strings-and-text/02-slices-and-substrings",
    "unit": 7,
    "unitName": "Strings & Text Processing",
    "lesson": 2,
    "slug": "02-slices-and-substrings",
    "title": "Take a slice of a string",
    "concept": "Slicing, bounds and uppercasing",
    "summary": "A slice extracts part of a string without modifying it; the ending position is excluded.",
    "mode": "function",
    "starter": "def short_code(text):\n    # Take three characters and return their uppercase version.\n    pass\n",
    "cases": [
      {
        "call": "short_code('computer')",
        "expected": "'COM'"
      },
      {
        "call": "short_code('app')",
        "expected": "'APP'"
      },
      {
        "call": "short_code('robotics')",
        "expected": "'ROB'"
      },
      {
        "call": "short_code('XyZ987')",
        "expected": "'XYZ'"
      }
    ],
    "points": 5,
    "hints": [
      "Use a slice that starts at the beginning.",
      "Remember that the stop index is excluded.",
      "Call the string method `.upper()` on the slice."
    ],
    "markdown": "07-strings-and-text/lessons/02-slices-and-substrings.md",
    "functionName": "short_code"
  },
  {
    "id": "07-strings-and-text/03-clean-up-input",
    "unit": 7,
    "unitName": "Strings & Text Processing",
    "lesson": 3,
    "slug": "03-clean-up-input",
    "title": "Clean messy text",
    "concept": "strip, lower, replace",
    "summary": "String methods can normalize inconsistent user input without requiring the user to type perfectly.",
    "mode": "function",
    "starter": "def normalize_tag(tag):\n    # Normalize the input into a lowercase hyphenated tag.\n    pass\n",
    "cases": [
      {
        "call": "normalize_tag('  Coding Club  ')",
        "expected": "'coding-club'"
      },
      {
        "call": "normalize_tag('Python')",
        "expected": "'python'"
      },
      {
        "call": "normalize_tag('  A B C ')",
        "expected": "'a-b-c'"
      },
      {
        "call": "normalize_tag('Game Design')",
        "expected": "'game-design'"
      }
    ],
    "points": 10,
    "hints": [
      "Begin with `.strip()`.",
      "Chain `.lower()` after removing outside spaces.",
      "Use `.replace(' ', '-')` for internal spaces."
    ],
    "markdown": "07-strings-and-text/lessons/03-clean-up-input.md",
    "functionName": "normalize_tag"
  },
  {
    "id": "07-strings-and-text/04-build-a-badge",
    "unit": 7,
    "unitName": "Strings & Text Processing",
    "lesson": 4,
    "slug": "04-build-a-badge",
    "title": "Build a digital name badge",
    "concept": "Formatting and multiple parameters",
    "summary": "A function can combine several cleaned input strings into a single, precisely formatted message.",
    "mode": "function",
    "starter": "def format_badge(name, role):\n    # Format two pieces of text as one badge label.\n    pass\n",
    "cases": [
      {
        "call": "format_badge('  nova  ', ' student ')",
        "expected": "'Nova | STUDENT'"
      },
      {
        "call": "format_badge('lee', 'helper')",
        "expected": "'Lee | HELPER'"
      },
      {
        "call": "format_badge('  alex kim ', 'team lead ')",
        "expected": "'Alex Kim | TEAM LEAD'"
      },
      {
        "call": "format_badge('JORDAN', ' staff')",
        "expected": "'Jordan | STAFF'"
      }
    ],
    "points": 15,
    "hints": [
      "Use `.strip().title()` for the name.",
      "Use `.strip().upper()` for the role.",
      "Return the formatted string instead of printing it."
    ],
    "markdown": "07-strings-and-text/lessons/04-build-a-badge.md",
    "functionName": "format_badge"
  }
]);
