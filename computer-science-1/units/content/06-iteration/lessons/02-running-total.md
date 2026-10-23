# Iteration & Accumulation — Lesson 2: Add values as you go

**New skill:** Accumulator variable  
**Previously learned:** Unit 05 — conditional execution

## Why this matters

A running total begins at a starting value and changes every time a loop visits another item.

## Study this example

```python
total = 0
for number in range(1, 4):
    total += number
print(total)
```

First total is 0. The loop adds 1, then 2, then 3, producing 6. `+=` is shorthand for assigning the previous value plus a new amount.

Before moving on, predict the result of the program or function. Then run it and compare.

## Check your understanding

What happens if the starting total is 10 instead of 0?

## Common mistake

Initialize the accumulator **before** the loop. Inside the loop would reset it on every iteration.

## Practice

Complete `sum_to_limit(limit)` to return the **sum of every integer from 1 through limit, inclusive**. `limit` is a nonnegative integer.

### Public example 1

**Input**

```python
sum_to_limit(4)
```

**Output**

```python
10
```

### Public example 2

**Input**

```python
sum_to_limit(0)
```

**Output**

```python
0
```

### Public example 3

**Input**

```python
sum_to_limit(1)
```

**Output**

```python
1
```

### Public example 4

**Input**

```python
sum_to_limit(8)
```

**Output**

```python
36
```

**[Open the Python starter](../practice/02-running-total/main.py)**

<details>
<summary>Hint 1</summary>

Start a total variable at zero.

</details>

<details>
<summary>Hint 2</summary>

Remember the endpoint rule for `range()`.

</details>

<details>
<summary>Hint 3</summary>

Update the total on each iteration and return it at the end.

</details>

## Reflection

Explain why your solution works and describe one boundary case you tried.
