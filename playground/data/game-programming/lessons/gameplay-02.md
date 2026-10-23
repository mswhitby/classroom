# Collisions, lives, and debugging a rule

## Know which event you are expecting

A Collider defines a shape. For typical 3D trigger events, colliders are involved, one is set as a trigger, and at least one object has an appropriate Rigidbody; layer settings and object state also affect whether events occur. A trigger detects overlap without physically blocking the other object. 2D physics uses its own components and callbacks.

## Update lives once for one event

Our exercise receives hit as an already-detected event. Start with nonnegative lives. If hit is true and lives > 0, return lives - 1; otherwise return lives unchanged. Combine conditions with &&. This is a pure rule: it does not configure physics or detect a collision.

## Separate a rule from its side effects

After receiving the new life count, Unity code could update UI and end the game when the count is zero. Keep these actions separate from the calculation. When a life disappears twice, inspect how many times the event handler ran before changing the subtraction.

## Complete the small prototype

Finish the Basic Gameplay practice assigned by your teacher. Demonstrate a moving player, a spawned prefab, an event that updates state, and a meaningful boundary. Explain a bug you found and how your test reveals that it is fixed.

## Try tracing this example

```csharp
if (hit && lives > 0)
{
    return lives - 1;
}
return lives;
```

Before running it, predict which value changes. Then run a small test and explain what happened in your own words.
