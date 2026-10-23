window.CS1_CHALLENGES = (window.CS1_CHALLENGES || []).concat([
  {
    "id": "robot-maze-navigator",
    "title": "Robot Maze Navigator",
    "difficulty": "Hard",
    "points": 25,
    "topics": [
      "Grid algorithms",
      "Lists"
    ],
    "week": "2026-10-26",
    "hasSkills": false,
    "scenario": "A classroom robot moves across a grid with obstacles. To conserve battery power, it must take as few moves as possible to reach a charging station. It might need to explore more than one direction to find the shortest route.",
    "parameters": "- `grid`: a nonempty rectangular list of lists containing `0` (open) or `1` (wall). The grid has at most 12 rows and 12 columns.\n- `start`: a `(row, column)` tuple identifying a valid open starting cell.\n- `target`: a `(row, column)` tuple identifying a valid open destination cell.",
    "behavior": "Return the **minimum number of moves** from `start` to `target`, or `-1` when no route exists. Each move goes one cell up, down, left, or right into an open cell. Diagonal moves and moving through walls are forbidden. Return 0 if `start == target`.",
    "examples": [
      {
        "call": "navigate_robot_maze([[0,0,1],[1,0,0],[0,0,0]], (0,0), (2,2))",
        "expected": "4"
      },
      {
        "call": "navigate_robot_maze([[0,1],[1,0]], (0,0), (1,1))",
        "expected": "-1"
      },
      {
        "call": "navigate_robot_maze([[0]], (0,0), (0,0))",
        "expected": "0"
      }
    ],
    "starter": "def navigate_robot_maze(grid, start, target):\n    # Write your code here.\n    pass\n",
    "skills": null,
    "functionName": "navigate_robot_maze"
  },
  {
    "id": "screen-reader-announcement",
    "title": "Screen Reader Announcement Composer",
    "difficulty": "Hard",
    "points": 25,
    "topics": [
      "Strings",
      "Lists"
    ],
    "week": "2026-10-26",
    "hasSkills": false,
    "scenario": "An accessibility app reads selected items aloud. Imported labels may contain leading spaces, empty entries, or the same label repeated with different capitalization. Prepare a clean announcement that sounds natural.",
    "parameters": "- `labels`: a list of strings, possibly empty or containing surrounding whitespace.\n- `separator`: a nonempty single word such as `and` or `or`.",
    "behavior": "Process labels in their original order. Strip spaces at both ends of each label, discard empty labels, and remove duplicates **ignoring case**, keeping the first spelling and its place in the list. If no labels remain, return `''`; with one, return that label; with two, join them with a space, the separator, and another space. With three or more, join earlier labels using `, ` and place `, separator ` before the last (Oxford comma).",
    "examples": [
      {
        "call": "compose_announcement(['  Alpha  ', '', 'beta', 'ALPHA', 'Gamma'], 'and')",
        "expected": "'Alpha, beta, and Gamma'"
      },
      {
        "call": "compose_announcement(['oak', 'pine'], 'or')",
        "expected": "'oak or pine'"
      },
      {
        "call": "compose_announcement(['  '], 'and')",
        "expected": "''"
      }
    ],
    "starter": "def compose_announcement(labels, separator):\n    # Write your code here.\n    pass\n",
    "skills": null,
    "functionName": "compose_announcement"
  },
  {
    "id": "thermostat-sensor-debugger",
    "title": "Thermostat Sensor Debugger",
    "difficulty": "Very Easy",
    "points": 5,
    "topics": [
      "Debugging",
      "Loops"
    ],
    "week": "2026-10-26",
    "hasSkills": false,
    "scenario": "A classroom thermostat collects temperature readings. The existing code starts its lowest value at zero, causing incorrect results when all temperatures are positive. Find and repair the logic error.",
    "parameters": "`readings` is a nonempty list of integers, which may be positive, negative, or zero.",
    "behavior": "Return the smallest integer in the list. Keep the provided function signature.",
    "examples": [
      {
        "call": "find_lowest_temperature([19, 23, 21])",
        "expected": "19"
      },
      {
        "call": "find_lowest_temperature([-2, 4, 0])",
        "expected": "-2"
      }
    ],
    "starter": "def find_lowest_temperature(readings):\n    lowest = 0\n    for reading in readings:\n        if reading < lowest:\n            lowest = reading\n    return lowest\n",
    "skills": null,
    "functionName": "find_lowest_temperature"
  },
  {
    "id": "ticket-queue-counter",
    "title": "Ticket Queue Counter",
    "difficulty": "Very Easy",
    "points": 5,
    "topics": [
      "Arithmetic"
    ],
    "week": "2026-10-26",
    "hasSkills": false,
    "scenario": "An event kiosk assigns numbered tickets to visitors. After processing one ticket, the screen must display the number of the next ticket in line.",
    "parameters": "- `num` is an integer. Tests may use negative numbers or zero.",
    "behavior": "Return the integer that comes immediately after `num`.",
    "examples": [
      {
        "call": "count_ticket_queue(49)",
        "expected": "50"
      },
      {
        "call": "count_ticket_queue(-1)",
        "expected": "0"
      }
    ],
    "starter": "def count_ticket_queue(num):\n    # Write your code here.\n    pass\n",
    "skills": null,
    "functionName": "count_ticket_queue"
  },
  {
    "id": "triangle-frame-check",
    "title": "Triangle Frame Safety Check",
    "difficulty": "Very Easy",
    "points": 5,
    "topics": [
      "Arithmetic"
    ],
    "week": "2026-10-26",
    "hasSkills": false,
    "scenario": "A robotics team is building a triangular brace with two fixed bars. They need to know the longest integer length the third bar could have while still forming a triangle.",
    "parameters": "- `side1`: a positive integer for the first bar's length in centimeters.\n- `side2`: a positive integer for the second bar's length in centimeters.",
    "behavior": "Return the largest possible positive integer length for the third side. No side can equal or exceed the sum of the other two.",
    "examples": [
      {
        "call": "is_triangle_safe(6, 11)",
        "expected": "16"
      },
      {
        "call": "is_triangle_safe(3, 3)",
        "expected": "5"
      }
    ],
    "starter": "def is_triangle_safe(side1, side2):\n    # Write your code here.\n    pass\n",
    "skills": null,
    "functionName": "is_triangle_safe"
  },
  {
    "id": "upload-space-check",
    "title": "Upload Space Gatekeeper",
    "difficulty": "Very Easy",
    "points": 5,
    "topics": [
      "Arithmetic",
      "Booleans"
    ],
    "week": "2026-10-26",
    "hasSkills": false,
    "scenario": "A student is saving a project backup to a storage drive. Before transferring the file, the application checks available space to avoid a failed upload.",
    "parameters": "- `capacity`: a nonnegative integer for the drive's total space in megabytes.\n- `used`: a nonnegative integer for space already occupied in megabytes.\n- `size`: a nonnegative integer for the new file size in megabytes.\n\n`used` does not exceed `capacity`.",
    "behavior": "Return `True` if the file fits without exceeding the drive's capacity, or `False` otherwise. Filling the last available megabyte is allowed.",
    "examples": [
      {
        "call": "has_upload_space(256, 240, 16)",
        "expected": "True"
      },
      {
        "call": "has_upload_space(256, 240, 20)",
        "expected": "False"
      }
    ],
    "starter": "def has_upload_space(capacity, used, size):\n    # Write your code here.\n    pass\n",
    "skills": null,
    "functionName": "has_upload_space"
  }
]);
