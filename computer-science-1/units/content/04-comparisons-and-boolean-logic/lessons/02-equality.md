# Comparisons & Boolean Logic — Lesson 2: Exact matches matter

**New skill:** Equality and inequality  
**Previously learned:** Unit 03 — parameters and return values

## Why this matters

Some actions should only happen when two values match exactly.

## Study this example

```python
entered = 'UP'
correct = 'UP'
print(entered == correct)
print(entered != 'up')
```

String equality is case-sensitive. `'UP'` equals `'UP'`, but it does not equal `'up'`.

Before moving on, trace each line of the example by hand. Predict the result before running it in the browser.

## Check your understanding

Would a string password match if its capitalization changes?

## Common mistake

Avoid confusing assignment (`=`) and equality (`==`).

## Practice: Exact matches matter

Complete `codes_match(expected_code, entered_code)` so it returns a Boolean indicating whether the two strings match exactly.

**Example 1 — Input**

```python
codes_match('AB7', 'AB7')
```

**Output**

```python
True
```

**Example 2 — Input**

```python
codes_match('AB7', 'ab7')
```

**Output**

```python
False
```

**Example 3 — Input**

```python
codes_match('', '')
```

**Output**

```python
True
```

**Starter file:** [`main.py`](../practice/02-equality/main.py)

Use **Run** to experiment and **Check** to compare against published examples. A passing public example does not automatically establish mastery.

<details>
<summary>Hint 1 — Identify the key concept</summary>

String comparison is case-sensitive by default.

</details>

<details>
<summary>Hint 2 — Find an approach</summary>

Use the equality operator.

</details>

<details>
<summary>Hint 3 — Check your answer</summary>

Return a Boolean, not a text message.

</details>

## Reflection

Write a short explanation of **why** your code works. What input or change would make it behave differently?
