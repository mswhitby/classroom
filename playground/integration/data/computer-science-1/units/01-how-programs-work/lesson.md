# Unit 01 — How Programs Work: Complete Lesson

This version combines the four instructional pages in one continuous reading document. For practice links and grading information, visit [the unit overview](README.md).

## Part 1: Lesson 01 — Instructions and Output

## What is a program?

A **program** is a set of instructions a computer follows. A **programming language** gives us a precise way to write those instructions. Python is one such language.

A computer does not infer your intentions. It follows the instructions you actually write. Even a small spelling or punctuation mistake can change what happens.

## Your first Python instruction

```python
print("Hello, Python!")
```

**Output**

```text
Hello, Python!
```

`print()` displays information. The parentheses hold the value to display, and the quotation marks tell Python that the contents are text (a **string**). The quotation marks are not printed.

Try changing the text and running again:

```python
print("I can make a computer display my message.")
```

You can use either single quotes or double quotes around a string as long as the opening and closing quote match.

```python
print('Welcome')
print("Welcome")
```

## Vocabulary

- **Python interpreter:** software that executes Python instructions.
- **Source code:** the instructions written by a programmer.
- **String:** a piece of text surrounded by matching quotation marks.
- **Output:** information a program displays or produces.
- **Syntax:** rules for writing valid instructions.

## Practice: First Message

Write a program that displays exactly:

```text
Welcome to Computer Science I
```

Use `print()`. Matching capitalization and spacing matter. Open [the starter file](practice/01-first-message/main.py) or choose **First Message** in the browser app.

## Stop and think

1. Why is `print(Hello)` different from `print("Hello")`?
2. What happens if you forget a closing parenthesis?
3. How could you verify that your program did what you intended?


---

## Part 2: Lesson 02 — Sequence and Tracing

## Computers follow an order

Python usually executes instructions **top to bottom**, one line at a time.

```python
print("First")
print("Second")
print("Third")
```

**Output**

```text
First
Second
Third
```

Reversing two lines changes the result.

A **trace** is a record of what a program does, step by step. Before running a program, try predicting its output.

| Line executed | Output added |
|---|---|
| `print("Checking battery")` | `Checking battery` |
| `print("Starting motor")` | `Starting motor` |

`print()` normally ends with a new line, so each call displays its message on a separate line.

## Practice: Startup Sequence

A robot should display these three messages in the following order:

```text
Booting...
Checking sensors...
Ready.
```

The starter code contains the right messages but in the wrong order. Move the instructions into the correct sequence. [View starter](practice/02-startup-sequence/main.py).

## Stop and think

- Can all three messages be correct while the overall output is wrong?
- Why should a programmer test the **order** of output as well as the words themselves?


---

## Part 3: Lesson 03 — Comments and Debugging

## Comments explain code

A comment starts with `#`. Python ignores the comment when running the program.

```python
# Explain what this program is doing.
print("Systems ready")
```

**Output**

```text
Systems ready
```

Comments can make code more understandable, but they do not fix incorrect instructions.

## Not all bugs are the same

A **syntax error** means Python cannot understand the code's structure. For example:

```python
print("Starting..."
```

Python reports an error because the parentheses are unbalanced.

A **logic error** means the program runs but produces the wrong behavior:

```python
print("Task finished")
print("Task started")
```

Both instructions are valid. Their order might be incorrect for the intended task.

## A debugging habit

1. Read the expected behavior.
2. Run the program and look closely at the error or output.
3. Change one thing you believe is wrong.
4. Run again and compare.

## Practice: Fix the Messages

The starter has punctuation mistakes that prevent the program from running. Correct them so the program displays exactly:

```text
Debugging in progress
Problem solved
```

[View starter](practice/03-fix-the-messages/main.py).

## Stop and think

- Does a program that runs without errors always produce the correct output?
- How can an error message help narrow down where a mistake happened?


---

## Part 4: Lesson 04 — Cumulative Mini-Project: Robotics Status

You've practiced producing output, arranging instructions, and debugging syntax. Now combine these skills without a step-by-step code template.

## Scenario

A student robotics team is preparing a display for a demonstration. When the status program starts, it should display exactly these three lines, in order:

```text
Wagner Robotics
System online
Ready to launch
```

## Your task

In [`practice/04-robotics-status/main.py`](practice/04-robotics-status/main.py), write your own Python instructions.

Requirements:

- Use the Python skills from this unit.
- Include a short comment stating the purpose of the program.
- Display the messages in the required order.
- Match capitalization, spelling, punctuation, and spaces.
- No keyboard input, variables, loops, or custom functions are required.

## Before checking

Read your script from the top down and **predict** its output. Then run it and compare what appears.

If your code produces an error, use the debugging routine from Lesson 03.

## Reflection

In one or two sentences, explain why precise instructions matter when writing a program for a real robot, mobile app, or website.

