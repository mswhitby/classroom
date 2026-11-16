# Values, Variables & Expressions — Lesson 3: Numbers aren't always text

**New skill:** String, int, float, conversion  
**Previously learned:** Unit 01 — output, execution, and debugging

## Why this matters

Python gives values different types. Strings hold text; integers hold whole numbers; floats hold decimal numbers.

## Study this example

```python
count = 6
rate = 2.5
print(type(count).__name__)
print(type(rate).__name__)
print(int('8') + count)
```

`type()` identifies a value's type, and `.__name__` provides its readable name. `int('8')` turns a numeric string into an integer so arithmetic works.

Before moving on, trace each line of the example by hand. Predict the result before running it in the browser.

## Check your understanding

What happens if you try `'8' + 6` without conversion?

## Common mistake

`'5' + '2'` joins strings into `'52'`, rather than adding them to get 7.

## Practice: Numbers aren't always text

Set `quantity = 8` as an integer and `price = 2.5` as a float. Print the type name of `quantity` on the first line and the type name of `price` on the second. The output must be exactly `int` then `float`.

**Expected console output**

```text
int
float
```

**Starter file:** [`main.py`](../practice/03-types-and-conversion/main.py)

Use **Run** to experiment and **Check** to compare against published examples. A passing public example does not automatically establish mastery.

<details>
<summary>Hint 1 — Identify the key concept</summary>

Review `type(value).__name__` in the example.

</details>

<details>
<summary>Hint 2 — Find an approach</summary>

You need two print statements, in the correct order.

</details>

<details>
<summary>Hint 3 — Check your answer</summary>

Do not put quotation marks around the number 8.

</details>

## Reflection

Write a short explanation of **why** your code works. What input or change would make it behave differently?
