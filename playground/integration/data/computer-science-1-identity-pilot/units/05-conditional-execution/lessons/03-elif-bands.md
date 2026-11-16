# Conditional Execution — Lesson 3: More than two outcomes

**New skill:** Elif chains and mutually exclusive ranges  
**Previously learned:** Unit 04 — comparisons and Boolean logic

## Why this matters

Use `elif` to check another condition after the first fails. In a chain, Python selects the first true branch.

## Study this example

```python
def light(status):
    if status >= 80:
        return 'Green'
    elif status >= 40:
        return 'Yellow'
    else:
        return 'Red'
```

A value of 90 chooses the first branch. A value of 60 skips the first but matches the second. A value of 20 reaches else.

Before moving on, predict the result of the program or function. Then run it and compare.

## Check your understanding

Why does `light(95)` return 'Green' rather than 'Yellow' even though 95 is also >= 40?

## Common mistake

Always order comparisons with overlapping ranges carefully; earlier matching branches win.

## Practice

Complete `classify_score(score)` to return `'Gold'` for **90 or above**, `'Silver'` for **70 through 89**, and `'Bronze'` for anything below 70.

### Public example 1

**Input**

```python
classify_score(92)
```

**Output**

```python
'Gold'
```

### Public example 2

**Input**

```python
classify_score(70)
```

**Output**

```python
'Silver'
```

### Public example 3

**Input**

```python
classify_score(69)
```

**Output**

```python
'Bronze'
```

### Public example 4

**Input**

```python
classify_score(90)
```

**Output**

```python
'Gold'
```

**[Open the Python starter](../practice/03-elif-bands/main.py)**

<details>
<summary>Hint 1</summary>

Check the highest threshold first.

</details>

<details>
<summary>Hint 2</summary>

After scores of 90+ are handled, what does >= 70 mean?

</details>

<details>
<summary>Hint 3</summary>

Use `else` for every remaining score.

</details>

## Reflection

Explain why your solution works and describe one boundary case you tried.
