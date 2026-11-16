# Conditional Execution — Lesson 1: Make a choice with if

**New skill:** If statements and indentation  
**Previously learned:** Unit 04 — comparisons and Boolean logic

## Why this matters

Programs can make a choice based on a Boolean expression. Python executes the indented body of an if statement only when its condition is true.

## Study this example

```python
def warning(battery):
    message = 'Ready'
    if battery < 20:
        message = 'Charge needed'
    return message
```

For `warning(15)` the condition is true, so the message changes. For `warning(90)` Python skips the indented assignment and returns 'Ready'. The colon and indentation are required.

Before moving on, predict the result of the program or function. Then run it and compare.

## Check your understanding

What would `warning(20)` return? What does the indentation tell Python?

## Common mistake

The colon after if and the indentation underneath it are part of Python syntax.

## Practice

Complete `classify_temperature(temperature)` so it returns `'Cold alert'` for temperatures **below 10**, and `'Normal'` otherwise.

### Public example 1

**Input**

```python
classify_temperature(5)
```

**Output**

```python
'Cold alert'
```

### Public example 2

**Input**

```python
classify_temperature(10)
```

**Output**

```python
'Normal'
```

### Public example 3

**Input**

```python
classify_temperature(-4)
```

**Output**

```python
'Cold alert'
```

**[Open the Python starter](../practice/01-first-if/main.py)**

<details>
<summary>Hint 1</summary>

Choose the comparison for below 10.

</details>

<details>
<summary>Hint 2</summary>

Only update `message` when your condition is true.

</details>

<details>
<summary>Hint 3</summary>

Keep `return message` after the conditional block.

</details>

## Reflection

Explain why your solution works and describe one boundary case you tried.
