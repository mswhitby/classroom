# Conditional Execution — Lesson 4: Build: Event Ticket Classifier

**New skill:** Conditionals and Boolean logic together  
**Previously learned:** Unit 04 — comparisons and Boolean logic

## Why this matters

A student event app classifies each ticket request using more than one condition.

## Study this example

```python
def category(age, vip):
    if vip:
        return 'Priority'
    elif age < 13:
        return 'Junior'
    else:
        return 'General'
```

Priority comes first, so it applies even if the guest is also younger than 13. The order of the checks communicates the intended rule.

Before moving on, predict the result of the program or function. Then run it and compare.

## Check your understanding

Why does `category(10, True)` return 'Priority'?

## Common mistake

Do not test the age band before the VIP condition if priority must take precedence.

## Practice

Complete `classify_ticket(age, has_pass)` to return `'Member'` if `has_pass` is true, otherwise `'Youth'` if `age` is **under 18**, otherwise `'Guest'`. Return a string in every case.

### Public example 1

**Input**

```python
classify_ticket(15, True)
```

**Output**

```python
'Member'
```

### Public example 2

**Input**

```python
classify_ticket(15, False)
```

**Output**

```python
'Youth'
```

### Public example 3

**Input**

```python
classify_ticket(18, False)
```

**Output**

```python
'Guest'
```

### Public example 4

**Input**

```python
classify_ticket(30, True)
```

**Output**

```python
'Member'
```

**[Open the Python starter](../practice/04-build-ride-classifier/main.py)**

<details>
<summary>Hint 1</summary>

Check the pass before classifying by age.

</details>

<details>
<summary>Hint 2</summary>

An age of 18 belongs to the Guest branch.

</details>

<details>
<summary>Hint 3</summary>

Use if / elif / else to select one exact label.

</details>

## Reflection

Explain why your solution works and describe one boundary case you tried.
