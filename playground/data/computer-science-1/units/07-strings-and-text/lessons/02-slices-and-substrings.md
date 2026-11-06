# Strings & Text Processing — Lesson 2: Take a slice of a string

**New skill:** Slicing, bounds and uppercasing  
**Previously learned:** Units 01–06

## Why this matters

Apps create short category tags, previews, and IDs from longer names.

## Step 1 — Explore working Python

Read the program below. Before running it, write down the result you expect.

```python
word = 'playground'
print(word[:4])
print(word[4:])
print(word[:4].upper())
```

## Step 2 — Trace the code

1. Read `word[:4]` as characters from the beginning up to, but not including, index 4.
2. Change the ending index and compare the outputs.
3. Apply `.upper()` to a slice to create an uppercase code.

## Step 3 — Check your understanding

Predict `'coding'[1:4]`. Which letters does Python include?

## Step 4 — Watch for this mistake

A slice uses an exclusive end position. `[:3]` takes three characters, not four.

## Practice: Take a slice of a string

Complete `short_code(text)` to return the first three characters of `text` in uppercase. Inputs contain at least three characters.

**Function contract:** `short_code(text)`  
**Starter file:** [`main.py`](../../practice/02-slices-and-substrings/main.py)

Work in the editor, using **Run** to explore and **Check** to compare against the published examples. Your submitted code, not the public check, determines the recorded score.

<details>
<summary>Hint 1 — Start</summary>

Use a slice that starts at the beginning.

</details>

<details>
<summary>Hint 2 — Build</summary>

Remember that the stop index is excluded.

</details>

<details>
<summary>Hint 3 — Test</summary>

Call the string method `.upper()` on the slice.

</details>

## Reflect

In 3–5 sentences, explain the algorithm you chose, one test case you predicted, and how you would detect an incorrect answer.

## Optional reading

For another perspective on this skill, see *How to Think Like a Computer Scientist* ([interactive textbook](https://runestone.academy/ns/books/published/thinkcspy/index.html/)). This Playground lesson, worked example, and exercise are original; no textbook passages were reproduced.
