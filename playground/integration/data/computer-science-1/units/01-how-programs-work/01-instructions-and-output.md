# Lesson 01 — Instructions and Output

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
