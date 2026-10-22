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
    "call": "solution([[0,0,1],[1,0,0],[0,0,0]], (0,0), (2,2))",
    "expected": "4"
   },
   {
    "call": "solution([[0,1],[1,0]], (0,0), (1,1))",
    "expected": "-1"
   },
   {
    "call": "solution([[0]], (0,0), (0,0))",
    "expected": "0"
   }
  ],
  "starter": "def solution(grid, start, target):\n    # Write your code here.\n    pass\n",
  "skills": null
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
    "call": "solution(['  Alpha  ', '', 'beta', 'ALPHA', 'Gamma'], 'and')",
    "expected": "'Alpha, beta, and Gamma'"
   },
   {
    "call": "solution(['oak', 'pine'], 'or')",
    "expected": "'oak or pine'"
   },
   {
    "call": "solution(['  '], 'and')",
    "expected": "''"
   }
  ],
  "starter": "def solution(labels, separator):\n    # Write your code here.\n    pass\n",
  "skills": null
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
    "call": "solution([19, 23, 21])",
    "expected": "19"
   },
   {
    "call": "solution([-2, 4, 0])",
    "expected": "-2"
   }
  ],
  "starter": "def solution(readings):\n    lowest = 0\n    for reading in readings:\n        if reading < lowest:\n            lowest = reading\n    return lowest\n",
  "skills": null
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
    "call": "solution(49)",
    "expected": "50"
   },
   {
    "call": "solution(-1)",
    "expected": "0"
   }
  ],
  "starter": "def solution(num):\n    # Write your code here.\n    pass\n",
  "skills": null
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
    "call": "solution(6, 11)",
    "expected": "16"
   },
   {
    "call": "solution(3, 3)",
    "expected": "5"
   }
  ],
  "starter": "def solution(side1, side2):\n    # Write your code here.\n    pass\n",
  "skills": null
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
    "call": "solution(256, 240, 16)",
    "expected": "True"
   },
   {
    "call": "solution(256, 240, 20)",
    "expected": "False"
   }
  ],
  "starter": "def solution(capacity, used, size):\n    # Write your code here.\n    pass\n",
  "skills": null
 }
]);
