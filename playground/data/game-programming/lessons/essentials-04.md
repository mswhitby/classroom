# Scripts, methods, and a tiny game loop

## Read the method contract

public static int CalculateTravelDistance(int score, int bonus) names a method, its inputs, and its returned type. The body between braces holds statements. A call such as CalculateTravelDistance(10, 5) supplies arguments. A return sends the result back; `Console.WriteLine` prints it. This console wrapper does not inherit `MonoBehaviour`.

## Understand Unity execution

A Unity behavior typically inherits `MonoBehaviour` and is attached to a `GameObject`. Start runs once before that script’s first Update when it becomes enabled; Update runs each rendered frame while the behavior is active. Debug.Log writes to Unity’s Console. `Console.WriteLine` is for these standalone exercises. Do not paste the whole console Program into a Unity **component**.

## Find the first useful error

Read the first compiler error and its line number. A missing semicolon, wrong capitalization, or mismatched return type prevents compilation. A program can also compile but return the wrong value; try another input and explain the calculation. Fix one issue at a time.

## Connect time to distance

A speed of 6 units per second covers 3 units during 0.5 seconds. Multiplying speed by elapsed seconds makes the intended distance depend on elapsed time rather than on a count of frames. In a Unity Update method, Time.deltaTime supplies the elapsed seconds for the frame.

## Try tracing this example

```csharp
float speed = 6f;
float elapsedSeconds = 0.5f;
`Console.WriteLine`(speed * elapsedSeconds); // 3
```

Before running it, predict which value changes. Then run a small test and explain what happened in your own words.
