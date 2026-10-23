# GameObjects, components, and changing values

## Objects are built from components

A `GameObject` is a container. Its components provide behavior: `Transform` stores position, rotation, and scale; a Renderer displays geometry; a Collider defines a collision shape; a Rigidbody participates in physics simulation. A Collider alone does not make an object fall under gravity. A script can also be a **component**.

## Choose a type for the job

Use int for whole-number counts, float for decimal game quantities, bool for true or false, and string for text. Write a float literal with f, such as 2.5f. Assignment uses = and updates a variable. A method’s declared return type must match the value returned.

## Move a coordinate in code

Addition can update a coordinate: float nextX = x + distance;. x and distance are parameters supplied when the method is called. Their values can change for each call; use the parameters instead of hard-coding an example answer. In Unity the `Transform` has three axes; this exercise isolates one axis as a number.

## Try tracing this example

```csharp
float x = 2f;
x = x + 1.5f;
`Console.WriteLine`(x); // 3.5
```

Before running it, predict which value changes. Then run a small test and explain what happened in your own words.
