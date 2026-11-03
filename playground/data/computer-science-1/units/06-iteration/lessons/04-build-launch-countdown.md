# Iteration & Accumulation — Lesson 4: Build: Launch Countdown

**New skill:** Loops, conditions, strings and return values  
**Previously learned:** Unit 05 — conditional execution

## Why this matters

A robotics launch controller needs to report every countdown number and then announce launch.

## Study this example

```python
def count_up(stop):
    message = ''
    for n in range(1, stop + 1):
        message += str(n) + '\n'
    return message + 'Done'
```

Here `str(n)` turns a number into text. The newline `\n` separates lines within one returned string. The final message is added after the loop finishes.

Before moving on, predict the result of the program or function. Then run it and compare.

## Check your understanding

Why is `str(n)` necessary before joining it to a string with `+`?

## Common mistake

Building and returning one string is different from printing multiple separate lines.

## Practice

Complete `create_countdown(start)` to **return one string** containing a countdown from `start` to `1`, each on its own line, followed by `Launch!`. `start` is a positive integer. Example for 3: `3\n2\n1\nLaunch!`.

### Public example 1

**Input**

```python
create_countdown(3)
```

**Output**

```python
'3\n2\n1\nLaunch!'
```

### Public example 2

**Input**

```python
create_countdown(1)
```

**Output**

```python
'1\nLaunch!'
```

### Public example 3

**Input**

```python
create_countdown(5)
```

**Output**

```python
'5\n4\n3\n2\n1\nLaunch!'
```

**[Open the Python starter](../practice/04-build-launch-countdown/main.py)**

<details>
<summary>Hint 1</summary>

You'll need a loop that visits numbers in reverse order.

</details>

<details>
<summary>Hint 2</summary>

Use `str()` to turn each number into text before appending.

</details>

<details>
<summary>Hint 3</summary>

Use `\n` between lines and add `Launch!` only once at the end.

</details>

## Reflection

Explain why your solution works and describe one boundary case you tried.
