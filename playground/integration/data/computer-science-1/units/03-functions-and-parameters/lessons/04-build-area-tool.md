# Functions, Parameters & Return Values — Lesson 4: Build: Rectangle Area Tool

**New skill:** Reusable functions and expressions  
**Previously learned:** Unit 02 — data types, variables, expressions

## Why this matters

A classroom design app needs a reusable calculation rather than manually recalculating the area of every rectangle.

## Study this example

```python
def square_area(side):
    return side * side

print(square_area(5))
```

The caller provides a value, and the function returns a result. One function works for many different input values.

Before moving on, trace each line of the example by hand. Predict the result before running it in the browser.

## Check your understanding

Which parts of the function are general enough to work with a different square size?

## Common mistake

Do not hardcode the sample result; the checker will use additional arguments.

## Practice: Build: Rectangle Area Tool

Complete `calculate_rectangle_area(width, height)` to return the area of a rectangle (`width * height`). It must work with positive and zero dimensions.

**Example 1 — Input**

```python
calculate_rectangle_area(5, 3)
```

**Output**

```python
15
```

**Example 2 — Input**

```python
calculate_rectangle_area(0, 10)
```

**Output**

```python
0
```

**Example 3 — Input**

```python
calculate_rectangle_area(2.5, 4)
```

**Output**

```python
10.0
```

**Starter file:** [`main.py`](../practice/04-build-area-tool/main.py)

Use **Run** to experiment and **Check** to compare against published examples. A passing public example does not automatically establish mastery.

<details>
<summary>Hint 1 — Identify the key concept</summary>

Area is width multiplied by height.

</details>

<details>
<summary>Hint 2 — Find an approach</summary>

Don't display output with `print()`.

</details>

<details>
<summary>Hint 3 — Check your answer</summary>

Return the calculated value directly or save it to a variable before returning.

</details>

## Reflection

Write a short explanation of **why** your code works. What input or change would make it behave differently?
