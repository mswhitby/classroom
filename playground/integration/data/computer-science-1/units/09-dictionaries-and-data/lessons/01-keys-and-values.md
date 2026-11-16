# Dictionaries & Data — Lesson 1: Look up information by key

**New skill:** Dictionary lookup and get  
**Previously learned:** Units 01–08

## Why this matters

Apps use lookup tables for labels, inventory prices, and configuration values.

## Step 1 — Explore working Python

Read the program below. Before running it, write down the result you expect.

```python
prices = {'pen': 2, 'notebook': 5}
print(prices['pen'])
print(prices.get('eraser', 0))
```

## Step 2 — Trace the code

1. Identify a key and its value in each key-value pair.
2. Use square brackets when the key is known to exist.
3. Use `.get(key, default)` to handle a key that may be missing.

## Step 3 — Check your understanding

What does `{'a': 3}.get('b', 0)` return, and why?

## Step 4 — Watch for this mistake

A missing key causes `KeyError` with square brackets, but `.get()` can supply a default.

## Practice: Look up information by key

Complete `price_for(prices, item)` to return the item's numeric price, or 0 if the item is not in the dictionary.

**Function contract:** `price_for(prices, item)`  
**Starter file:** [`main.py`](../../practice/01-keys-and-values/main.py)

Work in the editor, using **Run** to explore and **Check** to compare against the published examples. Your submitted code, not the public check, determines the recorded score.

<details>
<summary>Hint 1 — Start</summary>

Use `.get()` on the dictionary.

</details>

<details>
<summary>Hint 2 — Build</summary>

Pass `item` as the key.

</details>

<details>
<summary>Hint 3 — Test</summary>

Use zero as the fallback value.

</details>

## Reflect

In 3–5 sentences, explain the algorithm you chose, one test case you predicted, and how you would detect an incorrect answer.

## Optional reading

For another perspective on this skill, see *How to Think Like a Computer Scientist* ([interactive textbook](https://runestone.academy/ns/books/published/thinkcspy/index.html/)). This Playground lesson, worked example, and exercise are original; no textbook passages were reproduced.
