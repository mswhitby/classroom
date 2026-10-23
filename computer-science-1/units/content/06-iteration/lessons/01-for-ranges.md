# Iteration & Accumulation — Lesson 1: Repeat an instruction

**New skill:** For loops and ranges  
**Previously learned:** Unit 05 — conditional execution

## Why this matters

A loop makes Python repeat an instruction without copying the same line over and over. `range()` produces a sequence of integer values.

## Study this example

```python
for checkpoint in range(1, 5):
    print(checkpoint)
```

The displayed values are 1, 2, 3, 4. The final argument of `range()` is exclusive. The body must be indented.

Before moving on, predict the result of the program or function. Then run it and compare.

## Check your understanding

What values are produced by `range(2, 6)`?

## Common mistake

`range(1, 5)` does not include 5. Use `range(1, 6)` when you need to include 5.

## Practice

Use a loop with `range()` to display the integers **1, 2, 3, 4** on separate lines. Do not use four individual print statements.

**Expected console output**

```text
1
2
3
4
```

**[Open the Python starter](../practice/01-for-ranges/main.py)**

<details>
<summary>Hint 1</summary>

`range()` controls how many loop iterations occur.

</details>

<details>
<summary>Hint 2</summary>

The ending argument is not included.

</details>

<details>
<summary>Hint 3</summary>

Place a single print call inside the loop.

</details>

## Reflection

Explain why your solution works and describe one boundary case you tried.
