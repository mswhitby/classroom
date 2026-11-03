# Functions, Parameters & Return Values — Lesson 1: Returning an answer

**New skill:** Function definitions and return  
**Previously learned:** Unit 02 — data types, variables, expressions

## Why this matters

A function packages instructions into a reusable operation. A function can give a result back with `return`.

## Study this example

```python
def double(n):
    return n * 2

print(double(4))
```

`def` starts a function definition. Its indented body runs when called. `return` gives a value to the caller. A function with no explicit return produces `None`.

Before moving on, trace each line of the example by hand. Predict the result before running it in the browser.

## Check your understanding

How does `double(7)` differ from printing the number 14 inside the function?

## Common mistake

Printing a value is not the same as returning it.

## Practice: Returning an answer

Complete `increment_number(number)` so it returns `number + 1`, without printing the answer.

**Example 1 — Input**

```python
increment_number(4)
```

**Output**

```python
5
```

**Example 2 — Input**

```python
increment_number(-1)
```

**Output**

```python
0
```

**Example 3 — Input**

```python
increment_number(99)
```

**Output**

```python
100
```

**Starter file:** [`main.py`](../practice/01-functions-return/main.py)

Use **Run** to experiment and **Check** to compare against published examples. A passing public example does not automatically establish mastery.

<details>
<summary>Hint 1 — Identify the key concept</summary>

The input arrives in a parameter called `number`.

</details>

<details>
<summary>Hint 2 — Find an approach</summary>

Use addition with the value given to you.

</details>

<details>
<summary>Hint 3 — Check your answer</summary>

The grader needs `return`, not `print`.

</details>

## Reflection

Write a short explanation of **why** your code works. What input or change would make it behave differently?
