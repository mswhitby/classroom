window.CS1_CHALLENGES = (window.CS1_CHALLENGES || []).concat([
  {
    "id": "co-op-lobby-notification",
    "title": "Co-op Lobby Notification",
    "difficulty": "Very Easy",
    "points": 5,
    "topics": [
      "Strings"
    ],
    "week": "2026-10-26",
    "hasSkills": false,
    "scenario": "A multiplayer game displays a notification when another player joins. The username should appear exactly as entered so friends can recognize one another.",
    "parameters": "- `username` is a nonempty string containing letters, digits, hyphens, or underscores.",
    "behavior": "Return the exact text `Player NAME entered the lobby.` with NAME replaced by the supplied username. Include the final period.",
    "examples": [
      {
        "call": "create_lobby_notification('fox-9')",
        "expected": "'Player fox-9 entered the lobby.'"
      },
      {
        "call": "create_lobby_notification('NeoCoder')",
        "expected": "'Player NeoCoder entered the lobby.'"
      }
    ],
    "starter": "def create_lobby_notification(username):\n    # Write your code here.\n    pass\n",
    "skills": null,
    "functionName": "create_lobby_notification"
  },
  {
    "id": "command-palette-matcher",
    "title": "Command Palette Matcher",
    "difficulty": "Easy",
    "points": 10,
    "topics": [
      "Strings",
      "Lists"
    ],
    "week": "2026-10-26",
    "hasSkills": false,
    "scenario": "A programming editor offers a command palette to help users find actions such as opening a file or running tests. Commands matching the letters typed should appear in predictable alphabetical order.",
    "parameters": "- `suggestions`: a list of command strings.\n- `typed`: a string, which may be empty.\nA command matches if its text begins with `typed`, ignoring uppercase and lowercase differences.",
    "behavior": "Find all matches, sort them alphabetically ignoring case, and return the first **four**. Preserve each matching command's original spelling and capitalization. When two entries are equal ignoring case, preserve their original order. An empty search matches all commands. Return an empty list if there are no matches.",
    "examples": [
      {
        "call": "match_commands(['Open Settings', 'Run Tests', 'open Folder', 'Open File'], 'op')",
        "expected": "['Open File', 'open Folder', 'Open Settings']"
      },
      {
        "call": "match_commands(['Run', 'Reset'], 'save')",
        "expected": "[]"
      }
    ],
    "starter": "def match_commands(suggestions, typed):\n    # Write your code here.\n    pass\n",
    "skills": null,
    "functionName": "match_commands"
  },
  {
    "id": "cube-volume-debugger",
    "title": "3D Object Volume Bug",
    "difficulty": "Very Easy",
    "points": 5,
    "topics": [
      "Debugging",
      "Arithmetic"
    ],
    "week": "2026-10-26",
    "hasSkills": false,
    "scenario": "A game designer needs the volume of a cube-shaped obstacle. The existing Python code has a typo that prevents it from running. Identify the syntax error and repair it.",
    "parameters": "`a` is an integer representing the length of a cube's edge. Edge lengths are nonnegative because physical cubes cannot have negative dimensions.",
    "behavior": "Return `a` cubed: `a * a * a`. Keep the starter function and do not print the result.",
    "examples": [
      {
        "call": "calculate_cube_volume(4)",
        "expected": "64"
      },
      {
        "call": "calculate_cube_volume(0)",
        "expected": "0"
      }
    ],
    "starter": "def calculate_cube_volume(a):\n  retunr a ** 3\n",
    "skills": null,
    "functionName": "calculate_cube_volume"
  },
  {
    "id": "feature-switch-inverter",
    "title": "Feature Switch Inverter",
    "difficulty": "Easy",
    "points": 10,
    "topics": [
      "Booleans"
    ],
    "week": "2026-10-26",
    "hasSkills": false,
    "scenario": "An app developer is testing the on/off switch for an accessibility setting. When the user presses the switch, the setting should move to the opposite state.",
    "parameters": "- `arg` is always a boolean: `True` (enabled) or `False` (disabled).",
    "behavior": "Return the opposite boolean value. The output must be `True` or `False`, not text or an integer.",
    "examples": [
      {
        "call": "invert_feature_switch(False)",
        "expected": "True"
      },
      {
        "call": "invert_feature_switch(True)",
        "expected": "False"
      }
    ],
    "starter": "def invert_feature_switch(arg):\n    # Write your code here.\n    pass\n",
    "skills": null,
    "functionName": "invert_feature_switch"
  },
  {
    "id": "fence-material-estimator",
    "title": "Fence Material Estimator",
    "difficulty": "Very Easy",
    "points": 5,
    "topics": [
      "Arithmetic"
    ],
    "week": "2026-10-26",
    "hasSkills": false,
    "scenario": "A gardening club wants to install edging around a rectangular bed. Before buying materials, students must calculate the total distance around its four sides.",
    "parameters": "- `length`: a positive integer representing the garden's length.\n- `width`: a positive integer representing its width.\n\nBoth measurements use the same unit.",
    "behavior": "Return the perimeter as an integer. Remember to include both lengths and both widths.",
    "examples": [
      {
        "call": "calculate_fence_perimeter(9, 4)",
        "expected": "26"
      },
      {
        "call": "calculate_fence_perimeter(2, 13)",
        "expected": "30"
      }
    ],
    "starter": "def calculate_fence_perimeter(length, width):\n    # Write your code here.\n    pass\n",
    "skills": null,
    "functionName": "calculate_fence_perimeter"
  },
  {
    "id": "focus-timer-debugger",
    "title": "Focus Timer Debugger",
    "difficulty": "Easy",
    "points": 10,
    "topics": [
      "Debugging",
      "Arithmetic"
    ],
    "week": "2026-10-26",
    "hasSkills": false,
    "scenario": "A study timer records time spent on different assignments. Its current code adds every task's minutes even when a student wants to see only active work. Repair the logic so the optional setting has the intended effect.",
    "parameters": "- `tasks`: a list of dictionaries containing `minutes` (a nonnegative integer) and `paused` (a boolean).\n- `include_paused`: an optional boolean parameter. Its default value is `True`.",
    "behavior": "If `include_paused` is `True`, include every task. If it is `False`, skip tasks marked `paused=True`. Return the total number of minutes as an integer. An empty task list returns 0.",
    "examples": [
      {
        "call": "total_focus_minutes([{'minutes': 14, 'paused': False}, {'minutes': 7, 'paused': True}], False)",
        "expected": "14"
      },
      {
        "call": "total_focus_minutes([{'minutes': 14, 'paused': False}, {'minutes': 7, 'paused': True}])",
        "expected": "21"
      },
      {
        "call": "total_focus_minutes([], False)",
        "expected": "0"
      }
    ],
    "starter": "def total_focus_minutes(tasks, include_paused=True):\n    total = 0\n    for task in tasks:\n        total += task[\"minutes\"]\n    return total\n",
    "skills": null,
    "functionName": "total_focus_minutes"
  }
]);
