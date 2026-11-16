# Comparisons & Boolean Logic — Lesson 3: Combine conditions

**New skill:** Logical operators  
**Previously learned:** Unit 03 — parameters and return values

## Why this matters

Real decisions often require more than one condition. Python combines Boolean expressions with `and`, `or`, and `not`.

## Study this example

```python
has_pass = True
is_late = False
print(has_pass and not is_late)
print(has_pass or is_late)
```

`and` requires both sides to be true. `or` requires at least one side true. `not` reverses a Boolean.

Before moving on, trace each line of the example by hand. Predict the result before running it in the browser.

## Check your understanding

Would `False or True` be true? What about `True and False`?

## Common mistake

Use lowercase keywords `and`, `or`, `not`, but capitalized Boolean values `True` and `False`.

## Practice: Combine conditions

Complete `can_send_notification(online, muted)` to return `True` only when the player is online **and not muted**.

**Example 1 — Input**

```python
can_send_notification(True, False)
```

**Output**

```python
True
```

**Example 2 — Input**

```python
can_send_notification(True, True)
```

**Output**

```python
False
```

**Example 3 — Input**

```python
can_send_notification(False, False)
```

**Output**

```python
False
```

**Starter file:** [`main.py`](../practice/03-and-or-not/main.py)

Use **Run** to experiment and **Check** to compare against published examples. A passing public example does not automatically establish mastery.

<details>
<summary>Hint 1 — Identify the key concept</summary>

Both online and not muted must be true.

</details>

<details>
<summary>Hint 2 — Find an approach</summary>

`not` reverses the muted flag.

</details>

<details>
<summary>Hint 3 — Check your answer</summary>

Combine the conditions with `and`.

</details>

## Reflection

Write a short explanation of **why** your code works. What input or change would make it behave differently?
