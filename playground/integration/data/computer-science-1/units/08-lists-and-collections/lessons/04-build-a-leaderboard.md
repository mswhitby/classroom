# Lists & Collections — Lesson 4: Build a score leaderboard

**New skill:** Sorted lists, reverse order and preserving data  
**Previously learned:** Units 01–07

## Why this matters

Sorting is useful for game rankings, robotics competitions, and class progress views.

## Step 1 — Explore working Python

Read the program below. Before running it, write down the result you expect.

```python
scores = [12, 28, 19]
ranked = sorted(scores, reverse=True)
print(ranked)
print(scores)
```

## Step 2 — Trace the code

1. Use `sorted()` to create a new ordered list.
2. Set `reverse=True` to put larger values first.
3. Use a slice to select only the two top results.

## Step 3 — Check your understanding

What are the first two values of `sorted([7, 9, 9, 3], reverse=True)`?

## Step 4 — Watch for this mistake

`.sort()` changes a list in place and returns `None`; `sorted()` creates a new list.

## Practice: Build a score leaderboard

Complete `top_two(scores)` to return the two highest scores in descending order. Duplicates count. There will be at least two scores.

**Function contract:** `top_two(scores)`  
**Starter file:** [`main.py`](../../practice/04-build-a-leaderboard/main.py)

Work in the editor, using **Run** to explore and **Check** to compare against the published examples. Your submitted code, not the public check, determines the recorded score.

<details>
<summary>Hint 1 — Start</summary>

Make a descending copy with `sorted()`.

</details>

<details>
<summary>Hint 2 — Build</summary>

Use `reverse=True` rather than manually swapping values.

</details>

<details>
<summary>Hint 3 — Test</summary>

Return a slice containing the first two items.

</details>

## Reflect

In 3–5 sentences, explain the algorithm you chose, one test case you predicted, and how you would detect an incorrect answer.

## Optional reading

For another perspective on this skill, see *How to Think Like a Computer Scientist* ([interactive textbook](https://runestone.academy/ns/books/published/thinkcspy/index.html/)). This Playground lesson, worked example, and exercise are original; no textbook passages were reproduced.
