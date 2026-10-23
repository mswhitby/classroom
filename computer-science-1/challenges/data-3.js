window.CS1_CHALLENGES = (window.CS1_CHALLENGES || []).concat([
  {
    "id": "high-score-streak",
    "title": "High Score Streak",
    "difficulty": "Easy",
    "points": 10,
    "topics": [
      "Loops",
      "Lists"
    ],
    "week": "2026-10-26",
    "hasSkills": false,
    "scenario": "A game awards bonus points for consecutive rounds that meet a score target. A round that falls below the target resets the streak.",
    "parameters": "- `scores`: a list of nonnegative integers, in chronological order.\n- `target`: a nonnegative integer representing the minimum score required for a round to count.",
    "behavior": "Return the **length of the longest consecutive streak** where every score is greater than or equal to `target`. Count consecutive qualifying rounds, not the total number of qualifying rounds. Return 0 for an empty list or if no rounds qualify.",
    "examples": [
      {
        "call": "longest_high_score_streak([12, 20, 18, 7, 21, 21, 21], 18)",
        "expected": "3"
      },
      {
        "call": "longest_high_score_streak([2, 3, 4], 10)",
        "expected": "0"
      }
    ],
    "starter": "def longest_high_score_streak(scores, target):\n    # Write your code here.\n    pass\n",
    "skills": null,
    "functionName": "longest_high_score_streak"
  },
  {
    "id": "installer-download-meter",
    "title": "Installer Download Meter",
    "difficulty": "Easy",
    "points": 10,
    "topics": [
      "Strings",
      "Arithmetic"
    ],
    "week": "2026-10-26",
    "hasSkills": false,
    "scenario": "A software installer shows its progress in a text-only terminal. The meter has ten sections, so each filled section represents another 10% completed.",
    "parameters": "- `percent` is an integer from 0 to 100, inclusive, always in increments of 10.",
    "behavior": "Create a ten-character meter with `#` for each finished section and `.` for each remaining section. Surround the meter with `|` characters. Add a single space, the percentage, and `%`. Return the entire string.",
    "examples": [
      {
        "call": "format_download_progress(30)",
        "expected": "'|###.......| 30%'"
      },
      {
        "call": "format_download_progress(0)",
        "expected": "'|..........| 0%'"
      },
      {
        "call": "format_download_progress(100)",
        "expected": "'|##########| 100%'"
      }
    ],
    "starter": "def format_download_progress(percent):\n    # Write your code here.\n    pass\n",
    "skills": null,
    "functionName": "format_download_progress"
  },
  {
    "id": "lab-procedure-formatter",
    "title": "Lab Procedure Formatter",
    "difficulty": "Easy",
    "points": 10,
    "topics": [
      "Loops",
      "Lists",
      "Strings"
    ],
    "week": "2026-10-26",
    "hasSkills": false,
    "scenario": "A digital lab guide stores safety instructions as plain text. To make the guide easier to follow, the app adds a numbered label to each instruction before showing it on a screen.",
    "parameters": "- `steps` is a list of strings in the order they should be completed.",
    "behavior": "Return a **new list** of strings. Prefix each instruction with `Step N: ` where N begins at 1 and increases by one. Preserve the original instruction text and order. Return an empty list for an empty input.",
    "examples": [
      {
        "call": "format_lab_steps(['Charge drone', 'Connect controller'])",
        "expected": "['Step 1: Charge drone', 'Step 2: Connect controller']"
      },
      {
        "call": "format_lab_steps([])",
        "expected": "[]"
      }
    ],
    "starter": "def format_lab_steps(steps):\n    # Write your code here.\n    pass\n",
    "skills": null,
    "functionName": "format_lab_steps"
  },
  {
    "id": "login-session-audit",
    "title": "Login Session Audit",
    "difficulty": "Hard",
    "points": 25,
    "topics": [
      "Dictionaries",
      "State machines"
    ],
    "week": "2026-10-26",
    "hasSkills": false,
    "scenario": "An app stores a stream of login and logout events. Multiple people can be logged in at the same time, and the same person may return later. The analyst needs to reconstruct completed sessions to calculate active time.",
    "parameters": "- `events` is a list of dictionaries with the keys `user`, `action`, and `minute`\n- `user` (a nonempty string), \n- `action` (`'login'` or `'logout'`) \n- `minute` (a nonnegative integer). Events are in nondecreasing time order; ties are allowed. For any one user, logins and logouts alternate. No logout occurs without a matching earlier login.",
    "behavior": "Return a dictionary mapping each user with **at least one completed session** to their total completed active minutes. A session lasts `logout minute - login minute`; add multiple sessions by the same user. Ignore an unmatched final login. A session lasting zero minutes still counts. Return an empty dictionary if no sessions have completed.",
    "examples": [
      {
        "call": "audit_login_sessions(\n    [\n        {'user':'ava','action':'login','minute':3},\n        {'user':'leo','action':'login','minute':4},\n        {'user':'leo','action':'logout','minute':9},\n        {'user':'ava','action':'logout','minute':11}\n    ]\n)",
        "expected": "{'ava': 8, 'leo': 5}"
      },
      {
        "call": "audit_login_sessions([{'user':'sky','action':'login','minute':2}])",
        "expected": "{}"
      }
    ],
    "starter": "def audit_login_sessions(events):\n    # Write your code here.\n    pass\n",
    "skills": null,
    "functionName": "audit_login_sessions"
  },
  {
    "id": "missing-library-badge",
    "title": "Missing Library Badge",
    "difficulty": "Easy",
    "points": 10,
    "topics": [
      "Lists",
      "Arithmetic"
    ],
    "week": "2026-10-26",
    "hasSkills": false,
    "scenario": "A school gives visitors badges numbered consecutively from 1. During inventory, a librarian has a shuffled list of the returned badges and discovers that exactly one badge is missing.",
    "parameters": "- `badges`: a list containing each badge number except one, in any order and without duplicates.\n- `total`: a positive integer representing the largest badge number.\n\nBadge numbers run from 1 through `total`.",
    "behavior": "Return the missing badge number as an integer. For a single-badge collection, the list is empty, and the missing number is 1.",
    "examples": [
      {
        "call": "find_missing_badge([4, 2, 1, 6, 3], 6)",
        "expected": "5"
      },
      {
        "call": "find_missing_badge([3, 2], 3)",
        "expected": "1"
      },
      {
        "call": "find_missing_badge([], 1)",
        "expected": "1"
      }
    ],
    "starter": "def find_missing_badge(badges, total):\n    # Write your code here.\n    pass\n",
    "skills": null,
    "functionName": "find_missing_badge"
  },
  {
    "id": "mood-music-label",
    "title": "Mood-to-Music Label",
    "difficulty": "Very Easy",
    "points": 5,
    "topics": [
      "Strings"
    ],
    "week": "2026-10-26",
    "hasSkills": true,
    "scenario": "A music app automatically names listening sessions. People sometimes type moods with extra spaces or inconsistent capitalization. Clean the input so every session title looks consistent.",
    "parameters": "- `mood` is a string containing at least one letter after whitespace is removed. It may contain multiple words.",
    "behavior": "Remove outer whitespace, capitalize the first letter of every word, and append ` Session`. Return the resulting string.\n\n**Need a refresher?** [Review the optional skills guide](skills.md) for examples, fundamental explanations, and hints.",
    "examples": [
      {
        "call": "create_music_label('  rainy day  ')",
        "expected": "'Rainy Day Session'"
      },
      {
        "call": "create_music_label('CODING')",
        "expected": "'Coding Session'"
      }
    ],
    "starter": "def create_music_label(mood):\n    # Write your code here.\n    pass\n",
    "skills": "# Skills Guide: Mood-to-Music Label\n\n**Optional refresher — not the solution to this challenge.** The examples use a different app feature, so you can learn the Python operations and apply them yourself. Return to [Mood-to-Music Label](README.md) when ready.\n\n## What you'll practice\n\n| Skill | What it does |\n|---|---|\n| Function parameter | Receives data from the caller |\n| String | Stores text between quotes |\n| `.strip()` | Removes whitespace from the beginning and end |\n| `.title()` | Capitalizes words for display |\n| `+` | Joins strings together |\n| `return` | Sends the result back to the caller |\n\n## 1. Parameters and strings\n\nA **parameter** is a variable listed in a function definition. Its value comes from the **argument** supplied when calling the function.\n\n```python\ndef greet(person):\n    return 'Hello, ' + person\n\ngreet('Alex')  # 'Hello, Alex'\n```\n\nStrings are text values. Quotation marks are part of Python's syntax, but they are not characters inside the resulting message.\n\n## 2. Remove extra spaces from the ends\n\n`.strip()` removes spaces and other whitespace from **both ends** of a string.\n\n```python\nlabel = '   science fair   '\nclean = label.strip()\nprint(clean)  # science fair\n```\n\nThis does **not** remove the space between `science` and `fair`, and it does not automatically remove repeated spaces **inside** the string.\n\n## 3. Make words display consistently\n\n`.title()` makes the first letter of each word uppercase and the remaining letters lowercase.\n\n```python\nprint('ROBOTICS lab'.title())  # Robotics Lab\nprint('weekend PROJECT'.title())  # Weekend Project\n```\n\nRemember: a string method returns a new string. To use the transformed result, assign or return it.\n\n## 4. Combine strings\n\nThe `+` operator joins strings in order. Spaces have to be included explicitly where they belong.\n\n```python\ntopic = 'Robotics'\nheading = topic + ' Workshop'\nprint(heading)  # Robotics Workshop\n```\n\n`' Workshop'` begins with a space. Without that space, the result would be `'RoboticsWorkshop'`.\n\n## 5. Worked example — Label a school workshop\n\n**Different task:** A school app creates display labels for workshop topics. The user may type a topic with extra outer spaces or unusual capitalization. The app should display a neatly capitalized topic followed by ` Workshop`.\n\n```python\ndef workshop_label(topic):\n    cleaned_topic = topic.strip()\n    display_topic = cleaned_topic.title()\n    result = display_topic + ' Workshop'\n    return result\n```\n\n**Input**\n\n```python\nworkshop_label('   ROBOTICS lab  ')\n```\n\n**Output**\n\n```python\n'Robotics Lab Workshop'\n```\n\n### Follow each value\n\n| Step | Value |\n|---|---|\n| Original parameter | `'   ROBOTICS lab  '` |\n| After `.strip()` | `'ROBOTICS lab'` |\n| After `.title()` | `'Robotics Lab'` |\n| After adding suffix | `'Robotics Lab Workshop'` |\n\nThe challenge you were assigned is about naming music sessions, not school workshops. Choose the operations that meet its stated requirements.\n\n## Common mistakes to watch for\n\n- **Using `.strip()` without saving its result:** strings are immutable; the original variable isn't updated automatically.\n- **Using `.upper()` for a title:** it makes *every* letter uppercase.\n- **Putting the suffix in the wrong place:** a prefix appears before text; a suffix appears after it.\n- **Forgetting the separating space:** the required output must match exactly.\n- **Printing instead of returning:** the grader checks the value the function returns, not what it prints.\n- **Returning an unquoted name:** text values must be strings.\n\n## Check your understanding\n\n1. What does `'  CODE  '.strip()` return?\n2. What does `'PYTHON basics'.title()` return?\n3. What does `'Game' + ' Night'` return?\n\n<details>\n<summary>Reveal the practice answers</summary>\n\n1. `'CODE'`\n2. `'Python Basics'`\n3. `'Game Night'`\n\n</details>\n\n## Hints for Mood-to-Music Label\n\nTry the challenge before opening hints.\n\n<details>\n<summary>Hint 1 — What does the input need first?</summary>\n\nConsider whether the text can have spaces at the very beginning or end. Which string method addresses that?\n\n</details>\n\n<details>\n<summary>Hint 2 — How should each word look?</summary>\n\nCompare `.upper()`, `.lower()`, and `.title()`. Which one matches the examples in the challenge?\n\n</details>\n\n<details>\n<summary>Hint 3 — What must the function give back?</summary>\n\nThink about where the fixed suffix belongs, how to include the separating space, and why `return` is needed instead of `print`.\n\n</details>\n",
    "functionName": "create_music_label"
  }
]);
