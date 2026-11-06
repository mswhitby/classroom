window.CS1_UNITS=(window.CS1_UNITS||[]).concat([
  {
    "id": "09-dictionaries-and-data/01-keys-and-values",
    "unit": 9,
    "unitName": "Dictionaries & Data",
    "lesson": 1,
    "slug": "01-keys-and-values",
    "title": "Look up information by key",
    "concept": "Dictionary lookup and get",
    "summary": "Dictionaries connect unique keys with values, letting a program retrieve information by name.",
    "mode": "function",
    "starter": "def price_for(prices, item):\n    # Look up a price with a safe default.\n    pass\n",
    "cases": [
      {
        "call": "price_for({'pen': 2, 'book': 5}, 'book')",
        "expected": "5"
      },
      {
        "call": "price_for({'pen': 2}, 'eraser')",
        "expected": "0"
      },
      {
        "call": "price_for({}, 'missing')",
        "expected": "0"
      },
      {
        "call": "price_for({'x': 0, 'y': 7}, 'x')",
        "expected": "0"
      }
    ],
    "points": 5,
    "hints": [
      "Use `.get()` on the dictionary.",
      "Pass `item` as the key.",
      "Use zero as the fallback value."
    ],
    "markdown": "09-dictionaries-and-data/lessons/01-keys-and-values.md",
    "functionName": "price_for"
  },
  {
    "id": "09-dictionaries-and-data/02-count-with-dictionaries",
    "unit": 9,
    "unitName": "Dictionaries & Data",
    "lesson": 2,
    "slug": "02-count-with-dictionaries",
    "title": "Count repeated events",
    "concept": "Frequency tables and dictionary updates",
    "summary": "A frequency table records how many times each event appears.",
    "mode": "function",
    "starter": "def event_counts(events):\n    # Count how many times each label occurs.\n    pass\n",
    "cases": [
      {
        "call": "event_counts(['run', 'jump', 'run'])",
        "expected": "{'run': 2, 'jump': 1}"
      },
      {
        "call": "event_counts([])",
        "expected": "{}"
      },
      {
        "call": "event_counts(['a', 'a', 'a'])",
        "expected": "{'a': 3}"
      },
      {
        "call": "event_counts(['x', 'y'])",
        "expected": "{'x': 1, 'y': 1}"
      }
    ],
    "points": 10,
    "hints": [
      "Create an empty dictionary for the counts.",
      "Loop over each event label.",
      "Assign `counts[event] = counts.get(event, 0) + 1`."
    ],
    "markdown": "09-dictionaries-and-data/lessons/02-count-with-dictionaries.md",
    "functionName": "event_counts"
  },
  {
    "id": "09-dictionaries-and-data/03-records-and-fields",
    "unit": 9,
    "unitName": "Dictionaries & Data",
    "lesson": 3,
    "slug": "03-records-and-fields",
    "title": "Read a collection of records",
    "concept": "Lists of dictionaries, fields and comparison",
    "summary": "A list of dictionaries can represent several records with the same field names.",
    "mode": "function",
    "starter": "def best_student(records):\n    # Compare record scores, keeping the first in a tie.\n    pass\n",
    "cases": [
      {
        "call": "best_student([{'name': 'Kai', 'score': 11}, {'name': 'Lee', 'score': 15}])",
        "expected": "'Lee'"
      },
      {
        "call": "best_student([{'name': 'A', 'score': 5}, {'name': 'B', 'score': 5}])",
        "expected": "'A'"
      },
      {
        "call": "best_student([{'name': 'Solo', 'score': -2}])",
        "expected": "'Solo'"
      },
      {
        "call": "best_student([{'name': 'A', 'score': -5}, {'name': 'B', 'score': -1}])",
        "expected": "'B'"
      }
    ],
    "points": 10,
    "hints": [
      "Start with the first record as your best.",
      "Compare the `score` fields, not the names.",
      "Use `>` rather than `>=` to preserve the first name in a tie."
    ],
    "markdown": "09-dictionaries-and-data/lessons/03-records-and-fields.md",
    "functionName": "best_student"
  },
  {
    "id": "09-dictionaries-and-data/04-inventory-calculator",
    "unit": 9,
    "unitName": "Dictionaries & Data",
    "lesson": 4,
    "slug": "04-inventory-calculator",
    "title": "Calculate an inventory order",
    "concept": "Dictionary items, nested lookup, accumulators",
    "summary": "A short program can combine quantities and prices from separate dictionaries to calculate a total.",
    "mode": "function",
    "starter": "def order_total(quantities, prices):\n    # Multiply each quantity by its price and total the order.\n    pass\n",
    "cases": [
      {
        "call": "order_total({'pen': 3, 'notebook': 2}, {'pen': 2, 'notebook': 5})",
        "expected": "16"
      },
      {
        "call": "order_total({'pen': 2, 'unknown': 4}, {'pen': 3})",
        "expected": "6"
      },
      {
        "call": "order_total({}, {'x': 10})",
        "expected": "0"
      },
      {
        "call": "order_total({'badge': 5}, {'badge': 0})",
        "expected": "0"
      }
    ],
    "points": 15,
    "hints": [
      "Start a numeric total at zero.",
      "Loop over `quantities.items()`.",
      "Multiply each count by `prices.get(item, 0)` before adding it."
    ],
    "markdown": "09-dictionaries-and-data/lessons/04-inventory-calculator.md",
    "functionName": "order_total"
  }
]);
