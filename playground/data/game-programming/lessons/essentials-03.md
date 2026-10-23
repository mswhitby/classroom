# Prefab instances and scoring arithmetic

## Asset versus instance

A prefab asset is a reusable template in the Project window. Dragging it into a scene creates an instance in the Hierarchy. An instance can have overrides; editing one instance does not automatically change every other copy. Apply overrides deliberately when you intend to update the asset.

## Explain the scoring formula

Multiplication happens before addition in score + coins * pointsPerCoin. The three int parameters let the same method score many situations. The method returns the new total; returning a value is different from displaying it. Main prints the returned value for testing.

## Try tracing this example

```csharp
int score = 10;
int earned = 3 * 5;
`Console.WriteLine`(score + earned); // 25
```

Before running it, predict which value changes. Then run a small test and explain what happened in your own words.
