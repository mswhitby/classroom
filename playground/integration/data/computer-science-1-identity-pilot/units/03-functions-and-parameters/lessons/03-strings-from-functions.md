# Functions, Parameters & Return Values — Lesson 3: Return a string

**New skill:** String expressions and return types  
**Previously learned:** Unit 02 — data types, variables, expressions

## Why this matters

Functions don't have to return numbers. A function can construct and return a message using text and its inputs.

## Study this example

```python
def tag(name):
    return 'Hi, ' + name

print(tag('Sam'))
```

The `+` operator concatenates strings when both sides are text. The returned value has type `str`.

Before moving on, trace each line of the example by hand. Predict the result before running it in the browser.

## Check your understanding

Why do you need the space after the comma in `'Hi, '`?

## Common mistake

`return 'Hi, name'` returns the literal word name, not the parameter's value.

## Practice: Return a string

Complete `create_greeting(username)` to return `Welcome, <username>!` with the actual username inserted. Preserve the exact punctuation.

**Example 1 — Input**

```python
create_greeting('Riley')
```

**Output**

```python
'Welcome, Riley!'
```

**Example 2 — Input**

```python
create_greeting('Kai')
```

**Output**

```python
'Welcome, Kai!'
```

**Example 3 — Input**

```python
create_greeting('')
```

**Output**

```python
'Welcome, !'
```

**Starter file:** [`main.py`](../practice/03-strings-from-functions/main.py)

Use **Run** to experiment and **Check** to compare against published examples. A passing public example does not automatically establish mastery.

<details>
<summary>Hint 1 — Identify the key concept</summary>

You can join smaller strings with `+`.

</details>

<details>
<summary>Hint 2 — Find an approach</summary>

Use the parameter between the greeting and the exclamation mark.

</details>

<details>
<summary>Hint 3 — Check your answer</summary>

The result should be a string returned by the function.

</details>

## Reflection

Write a short explanation of **why** your code works. What input or change would make it behave differently?
