# Functions, Parameters & Return Values — Lesson 2: Working with two inputs

**New skill:** Parameters and arguments  
**Previously learned:** Unit 02 — data types, variables, expressions

## Why this matters

Functions can have more than one parameter. An argument is the actual value supplied for a parameter when a function is called.

## Study this example

```python
def perimeter(width, height):
    return 2 * (width + height)

print(perimeter(3, 5))
```

When called with `(3, 5)`, `width` is 3 and `height` is 5. The expression calculates the perimeter and returns 16.

Before moving on, trace each line of the example by hand. Predict the result before running it in the browser.

## Check your understanding

What would the example return for width 2 and height 4?

## Common mistake

Don't swap parameters accidentally when their positions have different meanings.

## Practice: Working with two inputs

Complete `calculate_pay(hours, rate)` to return the total pay calculated by multiplying hours by the hourly rate.

**Example 1 — Input**

```python
calculate_pay(3, 12)
```

**Output**

```python
36
```

**Example 2 — Input**

```python
calculate_pay(0, 14)
```

**Output**

```python
0
```

**Example 3 — Input**

```python
calculate_pay(2, 7.5)
```

**Output**

```python
15.0
```

**Starter file:** [`main.py`](../practice/02-parameters/main.py)

Use **Run** to experiment and **Check** to compare against published examples. A passing public example does not automatically establish mastery.

<details>
<summary>Hint 1 — Identify the key concept</summary>

Look at which parameter is hours and which is rate.

</details>

<details>
<summary>Hint 2 — Find an approach</summary>

A multiplication expression produces the total pay.

</details>

<details>
<summary>Hint 3 — Check your answer</summary>

Return the numeric answer.

</details>

## Reflection

Write a short explanation of **why** your code works. What input or change would make it behave differently?
