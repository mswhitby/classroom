# Strings & Text Processing — Lesson 3: Clean messy text

**New skill:** strip, lower, replace  
**Previously learned:** Units 01–06

## Why this matters

Searching and tagging work better when extra spaces and inconsistent capitalization are removed.

## Step 1 — Explore working Python

Read the program below. Before running it, write down the result you expect.

```python
tag = '  Coding Club  '
print(tag.strip())
print(tag.strip().lower())
print(tag.strip().lower().replace(' ', '-'))
```

## Step 2 — Trace the code

1. `.strip()` removes leading and trailing spaces.
2. `.lower()` makes letter case consistent.
3. `.replace(' ', '-')` changes internal spaces into hyphens. Apply the operations in order.

## Step 3 — Check your understanding

What does `'  Game Design  '.strip().lower()` produce? What remains between the words?

## Step 4 — Watch for this mistake

`.strip()` does not remove spaces between words, and string methods return new strings.

## Practice: Clean messy text

Complete `normalize_tag(tag)` to remove surrounding whitespace, lowercase letters, and replace every internal space with a hyphen.

**Function contract:** `normalize_tag(tag)`  
**Starter file:** [`main.py`](../../practice/03-clean-up-input/main.py)

Work in the editor, using **Run** to explore and **Check** to compare against the published examples. Your submitted code, not the public check, determines the recorded score.

<details>
<summary>Hint 1 — Start</summary>

Begin with `.strip()`.

</details>

<details>
<summary>Hint 2 — Build</summary>

Chain `.lower()` after removing outside spaces.

</details>

<details>
<summary>Hint 3 — Test</summary>

Use `.replace(' ', '-')` for internal spaces.

</details>

## Reflect

In 3–5 sentences, explain the algorithm you chose, one test case you predicted, and how you would detect an incorrect answer.

## Optional reading

For another perspective on this skill, see *How to Think Like a Computer Scientist* ([interactive textbook](https://runestone.academy/ns/books/published/thinkcspy/index.html/)). This Playground lesson, worked example, and exercise are original; no textbook passages were reproduced.
