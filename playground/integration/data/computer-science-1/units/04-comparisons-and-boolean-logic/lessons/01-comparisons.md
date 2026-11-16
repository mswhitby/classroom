# Comparisons & Boolean Logic — Lesson 1: Ask Python a question

**New skill:** Comparison operators and Boolean values  
**Previously learned:** Unit 03 — parameters and return values

## Why this matters

A comparison is a question that evaluates to a Boolean value: `True` or `False`.

## Study this example

```python
print(7 > 3)
print(4 == 4)
print(2 != 2)
```

`>` asks whether one value is larger. `==` checks equality. `!=` checks inequality. The result is a Boolean, not the string `'True'`.

Before moving on, trace each line of the example by hand. Predict the result before running it in the browser.

## Check your understanding

Predict `5 >= 5` and `5 > 5`.

## Common mistake

Use `==` for comparison and `=` for assignment.

## Practice: Ask Python a question

Complete `has_required_points(current, required)` to return `True` if the current score is at least the required score, or `False` otherwise.

**Example 1 — Input**

```python
has_required_points(8, 5)
```

**Output**

```python
True
```

**Example 2 — Input**

```python
has_required_points(5, 5)
```

**Output**

```python
True
```

**Example 3 — Input**

```python
has_required_points(4, 5)
```

**Output**

```python
False
```

**Starter file:** [`main.py`](../practice/01-comparisons/main.py)

Use **Run** to experiment and **Check** to compare against published examples. A passing public example does not automatically establish mastery.

<details>
<summary>Hint 1 — Identify the key concept</summary>

Which operator means greater than **or equal to**?

</details>

<details>
<summary>Hint 2 — Find an approach</summary>

A comparison already produces `True` or `False`.

</details>

<details>
<summary>Hint 3 — Check your answer</summary>

Return the result of the comparison.

</details>

## Reflection

Write a short explanation of **why** your code works. What input or change would make it behave differently?
