window.CS1_LESSONS = [
{
 id:"01-first-message", title:"Instructions and output", label:"Instructions & output",
 summary:"Tell a computer what to display using a simple Python instruction.",
 exercise:"First Message",prompt:"Write Python code that displays the welcome message exactly as shown.",
 expected:"Welcome to Computer Science I",
 starter:"# Use print() to display the exact welcome message.\n# Your program should display one line.\n",
 file:"01-instructions-and-output.md",
 text:`<p>A <strong>program</strong> is a set of instructions that a computer follows. Python carries out the instructions you actually write.</p>
 <h3>Your first instruction</h3><pre>print("Hello, Python!")</pre>
 <p><code>print()</code> displays information. Text inside quotation marks is a <strong>string</strong>. The quotation marks are not displayed.</p>
 <div class="note">Try replacing the text between the quotation marks. Run your program again and observe what changes.</div>
 <h3>Vocabulary</h3><p><strong>Source code</strong> is written instructions. <strong>Output</strong> is information a program displays. <strong>Syntax</strong> is the set of rules for writing valid code.</p>
 <h3>Common mistake</h3><p>Text needs matching quotation marks, and <code>print()</code> needs parentheses.</p>`,
 hints:["Which Python function displays a message?","Place the exact words in matching quotation marks.","Check spacing and capitalization. The checker looks at the output, not at your preferred wording."]
},
{
 id:"02-startup-sequence",title:"Sequence and tracing",label:"Sequence & tracing",
 summary:"Learn how the order of instructions changes the result.",
 exercise:"Startup Sequence",prompt:"The starter code contains the right messages but in the wrong order. Rearrange the instructions.",
 expected:"Booting...\nChecking sensors...\nReady.",
 starter:"# These lines are correct, but they are in the wrong order.\n# Rearrange them so the robot reports its startup steps correctly.\nprint(\"Checking sensors...\")\nprint(\"Ready.\")\nprint(\"Booting...\")\n",
 file:"02-sequence-and-tracing.md",
 text:`<p>Python usually runs instructions <strong>top to bottom</strong>. Changing their order changes what happens.</p>
 <pre>print("First")\nprint("Second")\nprint("Third")</pre>
 <p>Here the output contains three separate lines, in exactly that order. A <strong>trace</strong> means following the code line by line and predicting its result.</p>
 <h3>Try predicting output</h3><pre>print("Check battery")\nprint("Start motor")</pre>
 <div class="note">Even when every message is spelled correctly, the overall result can be wrong if the statements are in the wrong order.</div>`,
 hints:["Look at the first line of the expected output.","Move existing statements; do not rewrite their messages.","Check the result line by line, including punctuation."]
},
{
 id:"03-fix-the-messages",title:"Comments and debugging",label:"Comments & debugging",
 summary:"Read an error message, repair the instructions, and try again.",
 exercise:"Fix the Messages",prompt:"The starter contains syntax errors. Correct them to display the two required messages.",
 expected:"Debugging in progress\nProblem solved",
 starter:"# This program has syntax errors. Find and repair them.\nprint(\"Debugging in progress\"\nprint('Problem solved\")\n",
 file:"03-comments-and-debugging.md",
 text:`<p>A <strong>comment</strong> begins with <code>#</code>. Python ignores comments when running a program.</p>
 <pre># Describe what the program is doing\nprint("Systems ready")</pre>
 <h3>Syntax errors</h3><p>A syntax error means Python cannot understand the structure of your code:</p><pre>print("Starting..."</pre>
 <p>The closing parenthesis is missing. Python reports an error instead of running that instruction normally.</p>
 <h3>Logic errors</h3><p>Sometimes code runs but does the wrong thing—for example, displaying two steps in the wrong order. That's a <strong>logic error</strong>.</p>
 <div class="note"><strong>Debugging routine:</strong> Read the error → inspect the code → change one thing → run again.</div>`,
 hints:["Run the starter first. What type of error appears?","Match every opening parenthesis with a closing one.","Match each opening quotation mark with the same kind of closing quote, then try again."]
},
{
 id:"04-robotics-status",title:"Cumulative mini-project",label:"Build: Robotics status",
 summary:"Combine printing, sequence, and comments in a program you write yourself.",
 exercise:"Robotics Status",prompt:"Write a three-line robotics startup display. Include a comment explaining what your program does.",
 expected:"Wagner Robotics\nSystem online\nReady to launch",
 starter:"# Write a three-line robotics status display.\n# Include a comment explaining the purpose of your program.\n",
 file:"04-mini-project.md",
 text:`<p>You've practiced output, execution order, comments, and debugging. Now combine the skills in a short program written independently.</p>
 <h3>Your mission</h3><p>A robotics team wants a startup display that prints three messages exactly as specified in the challenge.</p>
 <ul><li>Write your own Python statements.</li><li>Include a short comment describing the program's purpose.</li><li>Match spelling, capitalization, and order.</li><li>No variables, loops, or custom functions are needed.</li></ul>
 <div class="note"><strong>Reflect:</strong> Why does the order of instructions matter in robotics or other real-world software?</div>`,
 hints:["Remember how Python moves from one line to the next.","The earlier lessons showed how to display text on separate lines.","Include one comment explaining the purpose of your script."]
}
];