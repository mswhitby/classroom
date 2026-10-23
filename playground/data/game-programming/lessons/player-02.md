# Keep a player inside the arena

## A **condition** is a question

The expressions x < min and x > max produce bool values. Use an if statement followed by a condition in parentheses and a body in braces. Return immediately when a condition identifies the required answer. == compares equality; = assigns a value.

## Clamp means stop at the edge

Clamping a position returns min when x is below min, max when x is above max, and x otherwise. At exactly min or max the value is already valid. Assume min <= max. This differs from wrapping to the other side or freezing before movement is calculated.

## Test the boundaries

Try below, inside, above, and exactly on an edge. Passing a normal input is not enough to show that boundary logic is correct. This lesson adds if statements to the numeric work already taught; no arrays or loops are required.

## Try tracing this example

```csharp
if (temperature < 0f)
{
    return 0f;
}
return temperature;
```

Before running it, predict which value changes. Then run a small test and explain what happened in your own words.
