# Lesson 03 — Comments and Debugging

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
