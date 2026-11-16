# Lists & Collections — Lesson 3: Keep values that meet a rule

**New skill:** For loops, if statements, accumulators  
**Previously learned:** Units 01–07

## Why this matters

Apps filter notifications, positive readings, and completed tasks using the same pattern.

## Step 1 — Explore working Python

Read the program below. Before running it, write down the result you expect.

```python
numbers = [-2, 7, 0, 4]
positive = []
for number in numbers:
    if number > 0:
        positive.append(number)
print(positive)
```

## Step 2 — Trace the code

1. Start with an empty result list.
2. Visit each input value using a `for` loop.
3. Append a value only when its condition is true.

## Step 3 — Check your understanding

For `[-1, 0, 2]`, which values pass `number > 0`?

## Step 4 — Watch for this mistake

`.append()` changes an existing list. Calling it does not return the updated list.

## Practice: Keep values that meet a rule

Complete `positive_values(numbers)` to return a new list containing only numbers greater than zero, in their original order.

**Function contract:** `positive_values(numbers)`  
**Starter file:** [`main.py`](../../practice/03-filter-a-list/main.py)

Work in the editor, using **Run** to explore and **Check** to compare against the published examples. Your submitted code, not the public check, determines the recorded score.

<details>
<summary>Hint 1 — Start</summary>

Begin with an empty list.

</details>

<details>
<summary>Hint 2 — Build</summary>

Use a `for` loop over the input list.

</details>

<details>
<summary>Hint 3 — Test</summary>

Append only when the value is strictly greater than zero.

</details>

## Reflect

In 3–5 sentences, explain the algorithm you chose, one test case you predicted, and how you would detect an incorrect answer.

## Optional reading

For another perspective on this skill, see *How to Think Like a Computer Scientist* ([interactive textbook](https://runestone.academy/ns/books/published/thinkcspy/index.html/)). This Playground lesson, worked example, and exercise are original; no textbook passages were reproduced.
