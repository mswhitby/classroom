# Comparisons & Boolean Logic — Lesson 4: Build: Entry Check

**New skill:** Combining comparisons and logical operators  
**Previously learned:** Unit 03 — parameters and return values

## Why this matters

An event app can decide whether a person qualifies based on a pass or an age threshold.

## Study this example

```python
def can_watch(age, has_ticket):
    return age >= 13 and has_ticket
```

The comparison `age >= 13` returns a Boolean. `and` combines that with the second Boolean parameter.

Before moving on, trace each line of the example by hand. Predict the result before running it in the browser.

## Check your understanding

Does the sample function allow a twelve-year-old with a ticket?

## Common mistake

Be explicit about whether the rule requires both conditions or only one.

## Practice: Build: Entry Check

Complete `can_enter_event(has_pass, age)` so entry is allowed (`True`) if the person has a pass **or** is at least `18` years old. Otherwise return `False`.

**Example 1 — Input**

```python
can_enter_event(True, 12)
```

**Output**

```python
True
```

**Example 2 — Input**

```python
can_enter_event(False, 18)
```

**Output**

```python
True
```

**Example 3 — Input**

```python
can_enter_event(False, 17)
```

**Output**

```python
False
```

**Example 4 — Input**

```python
can_enter_event(False, 35)
```

**Output**

```python
True
```

**Starter file:** [`main.py`](../practice/04-build-entry-check/main.py)

Use **Run** to experiment and **Check** to compare against published examples. A passing public example does not automatically establish mastery.

<details>
<summary>Hint 1 — Identify the key concept</summary>

Identify the two ways a person can qualify.

</details>

<details>
<summary>Hint 2 — Find an approach</summary>

Age must be compared to 18, including 18 itself.

</details>

<details>
<summary>Hint 3 — Check your answer</summary>

Join the two qualification conditions using `or`.

</details>

## Reflection

Write a short explanation of **why** your code works. What input or change would make it behave differently?
