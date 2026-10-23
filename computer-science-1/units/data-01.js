window.CS1_UNITS=(window.CS1_UNITS||[]).concat([
  {
    "id": "01-how-programs-work/01-first-message",
    "unit": 1,
    "unitName": "How Programs Work",
    "lesson": 1,
    "slug": "01-first-message",
    "title": "Instructions and output",
    "concept": "Output and strings",
    "summary": "Tell a computer what to display using a simple Python instruction.",
    "mode": "script",
    "starter": "# Use print() to display the exact welcome message.\n# Your program should display one line.\n",
    "cases": [
      {
        "expected": "Welcome to Computer Science I"
      }
    ],
    "points": 5,
    "hints": [
      "Which Python function displays a message?",
      "Place the exact words in matching quotation marks.",
      "Check spacing and capitalization. The checker looks at the output, not at your preferred wording."
    ],
    "markdown": "01-how-programs-work/01-instructions-and-output.md",
    "existingPassKey": "cs1:unit01:pass:01-first-message",
    "existingDraftKey": "cs1:unit01:draft:01-first-message"
  },
  {
    "id": "01-how-programs-work/02-startup-sequence",
    "unit": 1,
    "unitName": "How Programs Work",
    "lesson": 2,
    "slug": "02-startup-sequence",
    "title": "Sequence and tracing",
    "concept": "Program sequence",
    "summary": "Learn how the order of instructions changes the result.",
    "mode": "script",
    "starter": "# These lines are correct, but they are in the wrong order.\n# Rearrange them so the robot reports its startup steps correctly.\nprint(\"Checking sensors...\")\nprint(\"Ready.\")\nprint(\"Booting...\")\n",
    "cases": [
      {
        "expected": "Booting...\nChecking sensors...\nReady."
      }
    ],
    "points": 5,
    "hints": [
      "Look at the first line of the expected output.",
      "Move existing statements; do not rewrite their messages.",
      "Check the result line by line, including punctuation."
    ],
    "markdown": "01-how-programs-work/02-sequence-and-tracing.md",
    "existingPassKey": "cs1:unit01:pass:02-startup-sequence",
    "existingDraftKey": "cs1:unit01:draft:02-startup-sequence"
  },
  {
    "id": "01-how-programs-work/03-fix-the-messages",
    "unit": 1,
    "unitName": "How Programs Work",
    "lesson": 3,
    "slug": "03-fix-the-messages",
    "title": "Comments and debugging",
    "concept": "Comments and debugging",
    "summary": "Read an error message, repair the instructions, and try again.",
    "mode": "script",
    "starter": "# This program has syntax errors. Find and repair them.\nprint(\"Debugging in progress\"\nprint('Problem solved\")\n",
    "cases": [
      {
        "expected": "Debugging in progress\nProblem solved"
      }
    ],
    "points": 5,
    "hints": [
      "Run the starter first. What type of error appears?",
      "Match every opening parenthesis with a closing one.",
      "Match each opening quotation mark with the same kind of closing quote, then try again."
    ],
    "markdown": "01-how-programs-work/03-comments-and-debugging.md",
    "existingPassKey": "cs1:unit01:pass:03-fix-the-messages",
    "existingDraftKey": "cs1:unit01:draft:03-fix-the-messages"
  },
  {
    "id": "01-how-programs-work/04-robotics-status",
    "unit": 1,
    "unitName": "How Programs Work",
    "lesson": 4,
    "slug": "04-robotics-status",
    "title": "Cumulative mini-project",
    "concept": "Cumulative project",
    "summary": "Combine printing, sequence, and comments in a program you write yourself.",
    "mode": "script",
    "starter": "# Write a three-line robotics status display.\n# Include a comment explaining the purpose of your program.\n",
    "cases": [
      {
        "expected": "Wagner Robotics\nSystem online\nReady to launch"
      }
    ],
    "points": 5,
    "hints": [
      "Remember how Python moves from one line to the next.",
      "The earlier lessons showed how to display text on separate lines.",
      "Include one comment explaining the purpose of your script."
    ],
    "markdown": "01-how-programs-work/04-mini-project.md",
    "existingPassKey": "cs1:unit01:pass:04-robotics-status",
    "existingDraftKey": "cs1:unit01:draft:04-robotics-status"
  }
]);
