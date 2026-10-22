window.CS1_CHALLENGES = (window.CS1_CHALLENGES || []).concat([
 {
  "id": "app-event-type-tally",
  "title": "App Event Type Tally",
  "difficulty": "Easy",
  "points": 10,
  "topics": [
   "Dictionaries",
   "Loops",
   "Strings"
  ],
  "week": "2026-10-26",
  "hasSkills": true,
  "scenario": "Developers record simple app interactions to learn how people navigate their software. Different devices sometimes capitalize the same event differently, but each event should contribute to the correct count.",
  "parameters": "`events` is a list of strings. Every entry is a capitalization variant of `click`, `view`, or `submit`.",
  "behavior": "Return a dictionary with **exactly** the keys `click`, `view`, and `submit`. Count the occurrences of each event without regard to case. Include an event key with a count of 0 if it never occurs.\n\n**Need a refresher?** [Review the optional skills guide](skills.md) for examples, fundamental explanations, and hints.",
  "examples": [
   {
    "call": "solution(['CLICK', 'view', 'Click', 'submit'])",
    "expected": "{'click': 2, 'view': 1, 'submit': 1}"
   },
   {
    "call": "solution([])",
    "expected": "{'click': 0, 'view': 0, 'submit': 0}"
   }
  ],
  "starter": "def solution(events):\n    event_dict = {\n        'click': 0,\n        'view': 0,\n        'submit': 0,\n    }\n    # Write your code here.\n    pass\n",
  "skills": "# Skills Guide: App Event Type Tally\n\n**Optional refresher — not a completed challenge solution.** Learn the fundamental skills with a different example, then return to [App Event Type Tally](README.md).\n\n## What you'll practice\n\n| Skill | What it does |\n|---|---|\n| List | Stores a sequence of events |\n| `for` loop | Visits each event once |\n| Dictionary | Stores a count associated with each category |\n| `.lower()` | Normalizes capitalization |\n| `+= 1` | Increases a counter |\n| `return` | Gives the finished dictionary back |\n\n## 1. Lists and loops\n\nAn application can record a sequence of activities in a **list**:\n\n```python\nactivities = ['Walk', 'Read', 'WALK']\nfor activity in activities:\n    print(activity)\n```\n\nThe loop runs once for each entry. `activity` holds **one string at a time**, not the whole list.\n\n## 2. Dictionary keys and values\n\nA **dictionary** connects keys with values. A key might be a category name; its value might be the number of times that category has occurred.\n\n```python\ntotals = {\n    'water': 0,\n    'juice': 0,\n}\ntotals['water'] += 1\ntotals['water'] += 1\nprint(totals)\n```\n\n**Output**\n\n```python\n{'water': 2, 'juice': 0}\n```\n\n`totals['water'] += 1` is shorthand for `totals['water'] = totals['water'] + 1`. The counts begin at zero because nothing has been counted yet.\n\n## 3. Normalizing capitalization\n\nDictionary keys are case-sensitive: `'Water'` and `'water'` are different strings. Normalize the spelling **before** using it as a dictionary key.\n\n```python\ndrink = 'WATER'\nnormalized = drink.lower()\nprint(normalized)  # 'water'\n```\n\n`.lower()` returns a **new string**. It doesn't change the original string automatically.\n\n## 4. Worked example — Count drink choices\n\n**Different task:** A school club counts water and juice requests, regardless of capitalization. The result must contain both keys, even when one drink wasn't requested.\n\n```python\ndef count_drinks(orders):\n    totals = {\n        'water': 0,\n        'juice': 0,\n    }\n    for drink in orders:\n        category = drink.lower()\n        totals[category] += 1\n    return totals\n```\n\n**Input**\n\n```python\ncount_drinks(['WATER', 'juice', 'Water'])\n```\n\n**Output**\n\n```python\n{'water': 2, 'juice': 1}\n```\n\n### Trace the dictionary\n\n| Current input | Normalized key | Water count | Juice count |\n|---|---|---:|---:|\n| Before loop | — | 0 | 0 |\n| `'WATER'` | `'water'` | 1 | 0 |\n| `'juice'` | `'juice'` | 1 | 1 |\n| `'Water'` | `'water'` | 2 | 1 |\n\nThis example depends on the input being limited to the known choices. The exercise in your README also tells you exactly which categories to expect.\n\n## Understanding the provided starter code\n\nThe App Event Type Tally starter already creates a dictionary with the required categories and zero counts. You do **not** need to invent another data structure just to store those totals.\n\nYour job is to decide how to process the input list, update the appropriate values, and give the finished result back. The dictionary's existing keys and zero values are intentional.\n\n## Common mistakes to watch for\n\n- **Using the input text as-is:** `'CLICK'` and `'click'` are different dictionary keys unless normalized.\n- **Replacing a count instead of incrementing it:** assigning `1` every time loses earlier events.\n- **Starting with missing keys:** the expected dictionary includes categories that have a count of zero.\n- **Changing the dictionary but never returning it:** without an explicit `return`, Python returns `None`.\n- **Returning just a number:** the challenge expects a dictionary with all category keys.\n- **Assuming an empty list needs special treatment:** think about what your already initialized counters contain when no loop iterations occur.\n\n## Check your understanding\n\n1. What value does `{'water': 0, 'juice': 0}['juice']` produce?\n2. What is `'JuIcE'.lower()`?\n3. If you run `totals['water'] += 1` three times, starting from zero, what value is stored?\n\n<details>\n<summary>Reveal the practice answers</summary>\n\n1. `0`\n2. `'juice'`\n3. `3`\n\n</details>\n\n## Hints for App Event Type Tally\n\nTry your own approach first; open the hints only if necessary.\n\n<details>\n<summary>Hint 1 — What does the starter already do?</summary>\n\nNotice that the dictionary is created with every required key and a starting count. What work is still missing between creating it and returning the result?\n\n</details>\n\n<details>\n<summary>Hint 2 — How do you handle capitalization?</summary>\n\nBefore using an event name as a dictionary key, consider making its capitalization consistent.\n\n</details>\n\n<details>\n<summary>Hint 3 — How do you count repeats?</summary>\n\nLook at the counter example above. Each occurrence should increase the matching category's value without affecting the other categories.\n\n</details>\n"
 },
 {
  "id": "assignment-deadline-queue",
  "title": "Assignment Deadline Queue",
  "difficulty": "Easy",
  "points": 10,
  "topics": [
   "Dictionaries",
   "Conditionals",
   "Lists"
  ],
  "week": "2026-10-26",
  "hasSkills": false,
  "scenario": "A class project board reminds students which unfinished tasks require attention. Some tasks are overdue, while others were completed or are not yet due.",
  "parameters": "- `tasks`: a list of dictionaries describing the assignments.\n  - `title`: a string naming the assignment.\n  - `due`: an integer day number for the deadline.\n  - `complete`: a boolean indicating whether it is finished.\n- `today`: an integer day number on the same scale as `due`.",
  "behavior": "Return a list of titles for tasks with `complete=False` and `due` **strictly earlier** than `today`. Keep their original order. A task due today isn't overdue. Return an empty list if none qualify.",
  "examples": [
   {
    "call": "solution(\n    [\n        {'title': 'Storyboard', 'due': 10, 'complete': False},\n        {'title': 'Sprites', 'due': 11, 'complete': False},\n        {'title': 'Menu', 'due': 8, 'complete': True}\n    ],\n    11\n)",
    "expected": "['Storyboard']"
   },
   {
    "call": "solution([], 12)",
    "expected": "[]"
   }
  ],
  "starter": "def solution(tasks, today):\n    # Write your code here.\n    pass\n",
  "skills": null
 },
 {
  "id": "beacon-checkpoint-scanner",
  "title": "Beacon Checkpoint Scanner",
  "difficulty": "Hard",
  "points": 25,
  "topics": [
   "Loops",
   "Arithmetic",
   "Lists"
  ],
  "week": "2026-10-26",
  "hasSkills": true,
  "scenario": "In a research simulation, checkpoints have positive integer IDs. A checkpoint `n` is synchronized when `(2 ** n + 1)` is evenly divisible by `(2 * n + 1)`. This mathematical property is called the Curzon condition. You have been given the task of identifying all integers in a specified range that meet the Curzon condition.",
  "parameters": "- `start`: the first positive integer checkpoint ID to examine.\n- `end`: the last positive integer checkpoint ID to examine.\n\nBoth endpoints are included, and `1 <= start <= end <= 200`.",
  "behavior": "Return an ascending **list of all checkpoint IDs** from `start` to `end` that meet the condition. A checkpoint qualifies when the division remainder is zero. Return an empty list if none qualify.\n\n**Need a refresher?** [Review the optional skills guide](skills.md) for examples, fundamental explanations, and hints.",
  "examples": [
   {
    "call": "solution(1, 6)",
    "expected": "[1, 2, 5, 6]"
   },
   {
    "call": "solution(7, 10)",
    "expected": "[9]"
   },
   {
    "call": "solution(3, 4)",
    "expected": "[]"
   }
  ],
  "starter": "def solution(start, end):\n    # Write your code here.\n    pass\n",
  "skills": "# Skills Guide: Beacon Checkpoint Scanner\n\n**Optional refresher — not the solution to the challenge.** This guide uses a different number-selection task to show the building blocks. Read only the sections you need, then return to [the challenge](README.md).\n\n## What you'll practice\n\n| Skill | Why it matters |\n|---|---|\n| `for` loop | Repeat a check for several numbers |\n| `range()` | Generate the numbers between two boundaries |\n| Arithmetic operators | Calculate expressions with a changing number |\n| Modulo (`%`) | Test whether division leaves a remainder |\n| List and `.append()` | Collect results that pass a test |\n| `return` | Give a completed list back to the caller |\n\n## 1. Repeating a task with a loop\n\nA loop runs the same indented block once for every value in a sequence. The variable `number` changes each time.\n\n```python\nfor number in range(3, 7):\n    print(number)\n```\n\n**Output**\n\n```text\n3\n4\n5\n6\n```\n\n`range(3, 7)` includes **3** but not **7**. To include a last value stored in `last`, you can use `range(first, last + 1)`. This is called an **inclusive range**.\n\n## 2. Arithmetic and divisibility\n\n| Operator | Meaning | Example |\n|---|---|---|\n| `+` | Add | `4 + 3` is `7` |\n| `**` | Raise to a power | `2 ** 3` is `8` |\n| `%` | Remainder after division | `14 % 4` is `2` |\n| `==` | Compare for equality | `14 % 2 == 0` is `True` |\n\nUse `==` to **compare** values; `=` is for assigning a value to a variable.\n\n```python\nprint(12 % 4)       # 0: divisible by 4\nprint(13 % 4)       # 1: not divisible by 4\nprint(12 % 4 == 0)  # True\n```\n\nTry the calculations by hand: if you can divide a number by another number with no remainder, the first number is **divisible** by the second.\n\n## 3. Keeping qualifying results in a list\n\nStart with an empty list. `.append()` adds one item at the end.\n\n```python\nlocker_numbers = []\nlocker_numbers.append(4)\nlocker_numbers.append(8)\nprint(locker_numbers)\n```\n\n**Output**\n\n```python\n[4, 8]\n```\n\nNotice that `locker_numbers` is a **list**, not the string `\"4, 8\"`. The type of the value you return matters.\n\n## 4. Worked example — Find numbered lockers\n\n**Different task:** A hallway has lockers numbered from `first` to `last`. Return all locker numbers that are multiples of **4**. This uses the same Python fundamentals, but it does not test the Curzon condition.\n\n```python\ndef lockers_to_check(first, last):\n    selected = []\n    for locker in range(first, last + 1):\n        if locker % 4 == 0:\n            selected.append(locker)\n    return selected\n```\n\n**Input**\n\n```python\nlockers_to_check(2, 10)\n```\n\n**Output**\n\n```python\n[4, 8]\n```\n\n### Walk through the loop\n\n| Current locker | `locker % 4` | Add to list? | List afterward |\n|---:|---:|---|---|\n| 2 | 2 | No | `[]` |\n| 3 | 3 | No | `[]` |\n| 4 | 0 | Yes | `[4]` |\n| 5–7 | Not zero | No | `[4]` |\n| 8 | 0 | Yes | `[4, 8]` |\n| 9–10 | Not zero | No | `[4, 8]` |\n\nThe important pattern is **examine → evaluate → keep or skip**. Your challenge uses a different mathematical condition, so you'll need to work out the check yourself.\n\n## Common mistakes to watch for\n\n- **Leaving out the last number:** `range(first, last)` stops just before `last`.\n- **Using `/` instead of `%`:** `/` computes a quotient; `%` gives the remainder.\n- **Using `=` inside an `if` condition:** use `==` when asking whether two values are equal.\n- **Creating the list inside the loop:** that would erase previously collected values each time.\n- **Printing instead of returning:** `print(results)` displays a value, but the grader needs `return results`.\n- **Returning one number instead of a list:** even one match belongs inside a list, such as `[8]`.\n\n## Check your understanding\n\n1. What values does `range(5, 9)` produce?\n2. What is `17 % 5`?\n3. What does `lockers_to_check(9, 11)` return?\n\n<details>\n<summary>Reveal the practice answers</summary>\n\n1. `5, 6, 7, 8`\n2. `2`\n3. `[]` — none of 9, 10, or 11 is divisible by 4.\n\n</details>\n\n## Hints for Beacon Checkpoint Scanner\n\nTry the challenge independently first. Open only the next hint if you're stuck.\n\n<details>\n<summary>Hint 1 — Which values need to be examined?</summary>\n\nYou have two boundaries. Which Python construct will visit each integer once, including the final boundary?\n\n</details>\n\n<details>\n<summary>Hint 2 — How do you recognize a qualifying ID?</summary>\n\nEach candidate number must be substituted into **two mathematical expressions**. Use what you know about divisibility and the remainder operator to test the result.\n\n</details>\n\n<details>\n<summary>Hint 3 — How do you build the result?</summary>\n\nMake one list before the loop. Add a checkpoint ID to it only when it passes the test. What should be returned when no IDs qualify?\n\n</details>\n"
 },
 {
  "id": "bot-spammer",
  "title": "Bot Spammer",
  "difficulty": "Very Easy",
  "points": 5,
  "topics": [
   "Booleans",
   "Conditionals"
  ],
  "week": "2026-10-26",
  "hasSkills": false,
  "scenario": "You are creating a bot that posts comments to a social-media thread. Too many requests can overload the site or get an account muted. Your code implements **rate limiting**, a rule that restricts how often software may attempt an action.",
  "parameters": "- `passed` (**boolean**): whether the **previous** attempt succeeded.\n- `attempt` (**positive integer**): the number of the attempt about to be made, beginning at 1.\n- `limit` (**nonnegative integer**): the highest permitted attempt number.",
  "behavior": "Return `True` only when the previous attempt **did not pass** AND the **current attempt is not over the limit**. The final permitted attempt is allowed; return `False` otherwise.",
  "examples": [
   {
    "call": "solution(False, 2, 3)",
    "expected": "True"
   },
   {
    "call": "solution(False, 3, 3)",
    "expected": "True"
   },
   {
    "call": "solution(False, 4, 3)",
    "expected": "False"
   },
   {
    "call": "solution(True, 2, 3)",
    "expected": "False"
   }
  ],
  "starter": "def solution(passed, attempt, limit):\n    # Write your code here.\n    pass\n",
  "skills": null
 },
 {
  "id": "classroom-charging-queue",
  "title": "Classroom Charging Queue",
  "difficulty": "Easy",
  "points": 10,
  "topics": [
   "Dictionaries",
   "Lists",
   "Conditionals"
  ],
  "week": "2026-10-26",
  "hasSkills": false,
  "scenario": "Before a robotics lab, the teacher checks the classroom charging cart. Some devices have enough battery to get through the lesson; others should be charged first.",
  "parameters": "- `devices` is a list of dictionaries with two keys: `name` (a string) and `battery` (an integer percentage from 0 to 100). Device names are unique.",
  "behavior": "Return a list of names of devices with battery levels **25 or below**, keeping the original device order. A device at exactly 25% should be included. Return an empty list when none qualify.",
  "examples": [
   {
    "call": "solution(\n    [\n        {'name': 'Tablet A', 'battery': 25},\n        {'name': 'Robot B', 'battery': 83},\n        {'name': 'Tablet C', 'battery': 4}\n    ]\n)",
    "expected": "['Tablet A', 'Tablet C']"
   },
   {
    "call": "solution([])",
    "expected": "[]"
   }
  ],
  "starter": "def solution(devices):\n    # Write your code here.\n    pass\n",
  "skills": null
 },
 {
  "id": "classroom-topic-tag",
  "title": "Classroom Topic Tag",
  "difficulty": "Easy",
  "points": 10,
  "topics": [
   "Strings"
  ],
  "week": "2026-10-26",
  "hasSkills": false,
  "scenario": "A class discussion platform turns topics into searchable hashtags. Students might enter extra spaces and capital letters, so the app must standardize the text before posting.",
  "parameters": "`word` contains at least one letter, possibly multiple words and extra whitespace. It contains no punctuation.",
  "behavior": "Remove extra whitespace. Capitalize the first letter of each word and make all remaining letters lowercase. Join the words without spaces, and prefix the result with `#` to create a **PascalCase hashtag**.",
  "examples": [
   {
    "call": "solution('  Game   Design  ')",
    "expected": "'#GameDesign'"
   },
   {
    "call": "solution('Robotics')",
    "expected": "'#Robotics'"
   }
  ],
  "starter": "def solution(word):\n    # Write your code here.\n    pass\n",
  "skills": null
 }
]);
