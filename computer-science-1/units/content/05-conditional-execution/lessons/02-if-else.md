# Conditional Execution — Lesson 2: Two possible paths

**New skill:** If and else  
**Previously learned:** Unit 04 — comparisons and Boolean logic

## Why this matters

An `if`/`else` structure guarantees that exactly one of two branches runs.

## Study this example

```python
def can_start(energy):
    if energy >= 50:
        return 'Start'
    else:
        return 'Recharge'
```

When the comparison is true, the first branch returns. Otherwise, the else branch returns. Both return values are strings.

Before moving on, predict the result of the program or function. Then run it and compare.

## Check your understanding

What does `can_start(50)` return, and why?

## Common mistake

Avoid returning a Boolean when the prompt explicitly requires a string.

## Practice

Complete `classify_pass_status(points)` so it returns `'Pass'` for scores at least **70**, and `'Retry'` otherwise.

### Public example 1

**Input**

```python
classify_pass_status(70)
```

**Output**

```python
'Pass'
```

### Public example 2

**Input**

```python
classify_pass_status(69)
```

**Output**

```python
'Retry'
```

### Public example 3

**Input**

```python
classify_pass_status(100)
```

**Output**

```python
'Pass'
```

**[Open the Python starter](../practice/02-if-else/main.py)**

<details>
<summary>Hint 1</summary>

Which comparison includes 70?

</details>

<details>
<summary>Hint 2</summary>

Write one branch for meeting the threshold and one for failing it.

</details>

<details>
<summary>Hint 3</summary>

Return the exact capitalized word requested.

</details>

## Reflection

Explain why your solution works and describe one boundary case you tried.
