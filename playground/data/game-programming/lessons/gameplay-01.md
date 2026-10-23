# Gate an action with game state

## Connect to Basic Gameplay

Follow the Basic Gameplay mission after Player Control. It introduces projectiles, prefab spawning, and collision decisions. A prefab is a template; Instantiate creates an instance at runtime. The C# exercise isolates the decision about whether spawning is allowed.

## Combine conditions

Use && when both conditions must be true, || when either is enough, and ! to reverse a bool. remaining <= 0f includes exactly zero. A rule can be written as a bool expression and returned directly. Parentheses make the intended grouping clear.

## Keep one rule in one method

A shot is allowed only when the fire button is pressed, the game is not over, and remaining cooldown is zero or below. The method returns permission; it does not spawn a projectile or reset the timer. Keeping the decision separate makes it easier to test.

## Try tracing this example

```csharp
bool canMove = hasControl && !isPaused;
return canMove;
```

Before running it, predict which value changes. Then run a small test and explain what happened in your own words.
