# Strings & Text Processing — Lesson 4: Build a digital name badge

**New skill:** Formatting and multiple parameters  
**Previously learned:** Units 01–06

## Why this matters

The same formatting rules can serve an event sign-in screen, classroom app, or simple roster.

## Step 1 — Explore working Python

Read the program below. Before running it, write down the result you expect.

```python
name = '  nOVA  '
role = ' student '
clean_name = name.strip().title()
clean_role = role.strip().upper()
print(clean_name + ' | ' + clean_role)
```

## Step 2 — Trace the code

1. Normalize each input separately, so each rule is easy to test.
2. Use `.title()` for the display name and `.upper()` for the role.
3. Combine the results with the exact separator `' | '`.

## Step 3 — Check your understanding

Predict the output when the name is `'  aLEX KIM '` and the role is `'helper'`.

## Step 4 — Watch for this mistake

Output punctuation and spaces are part of the function contract. Do not add extra quotation marks around the result.

## Practice: Build a digital name badge

Complete `format_badge(name, role)` to return the trimmed name in title case, then ` | `, then the trimmed role in uppercase.

**Function contract:** `format_badge(name, role)`  
**Starter file:** [`main.py`](../../practice/04-build-a-badge/main.py)

Work in the editor, using **Run** to explore and **Check** to compare against the published examples. Your submitted code, not the public check, determines the recorded score.

<details>
<summary>Hint 1 — Start</summary>

Use `.strip().title()` for the name.

</details>

<details>
<summary>Hint 2 — Build</summary>

Use `.strip().upper()` for the role.

</details>

<details>
<summary>Hint 3 — Test</summary>

Return the formatted string instead of printing it.

</details>

## Reflect

In 3–5 sentences, explain the algorithm you chose, one test case you predicted, and how you would detect an incorrect answer.

## Optional reading

For another perspective on this skill, see *How to Think Like a Computer Scientist* ([interactive textbook](https://runestone.academy/ns/books/published/thinkcspy/index.html/)). This Playground lesson, worked example, and exercise are original; no textbook passages were reproduced.
