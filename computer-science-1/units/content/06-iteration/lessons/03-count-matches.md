# Iteration & Accumulation — Lesson 3: Count matches in a range

**New skill:** Counters, modulo, and conditional loops  
**Previously learned:** Unit 05 — conditional execution

## Why this matters

You can combine an if statement with a loop to count how many numbers meet a rule.

## Study this example

```python
count = 0
for n in range(1, 7):
    if n % 2 == 0:
        count += 1
print(count)
```

The modulo operator `%` gives the remainder. Values divisible by 2 have a remainder of 0; among 1 through 6, there are three even numbers.

Before moving on, predict the result of the program or function. Then run it and compare.

## Check your understanding

How many even numbers are there from 1 through 9?

## Common mistake

Increment the count only if a number satisfies the condition, not on every loop iteration.

## Practice

Complete `count_multiples_of_three(limit)` to return how many positive integers from **1 through limit, inclusive** are divisible by **3**. `limit` is a nonnegative integer.

### Public example 1

**Input**

```python
count_multiples_of_three(10)
```

**Output**

```python
3
```

### Public example 2

**Input**

```python
count_multiples_of_three(3)
```

**Output**

```python
1
```

### Public example 3

**Input**

```python
count_multiples_of_three(2)
```

**Output**

```python
0
```

### Public example 4

**Input**

```python
count_multiples_of_three(15)
```

**Output**

```python
5
```

**[Open the Python starter](../practice/03-count-matches/main.py)**

<details>
<summary>Hint 1</summary>

Which operator checks if division has no remainder?

</details>

<details>
<summary>Hint 2</summary>

Visit each integer in the inclusive interval.

</details>

<details>
<summary>Hint 3</summary>

Only increase the counter for numbers divisible by 3.

</details>

## Reflection

Explain why your solution works and describe one boundary case you tried.
