# Steer with inputs and frame time

## Connect to Player Control

Follow the Player Control mission in Unity Learn. Keep using the input approach shown by your assigned project: input APIs differ between project versions and input-system settings. The logic here accepts an already-read input value so the calculation remains the same.

## Use a signed input

An input of -1 means full movement in one direction, 0 means no movement, and 1 means full movement in the other. A value such as 0.5 represents partial input. Compute input * speed * elapsedSeconds, then add that displacement to the current position. Use float values and keep the f suffix on literal arguments.

## Predict before you test

If x is 5, input is -1, speed is 4, and time is 0.5, displacement is -2 and the next position is 3. This method models horizontal movement only. It does not set a `Transform` or apply a Rigidbody force.

## Try tracing this example

```csharp
float x = 5f;
float displacement = -1f * 4f * 0.5f;
`Console.WriteLine`(x + displacement); // 3
```

Before running it, predict which value changes. Then run a small test and explain what happened in your own words.
