# Read, trace, explain

Written competition rewards careful reasoning. Before running a snippet, predict what it does and write down why.

## Start with a trace

Use a small table with one row per change. Keep **the value of an expression** separate from **the new value of a variable**.

```java
int score = 4;
int total = score++ + ++score;
```

The left operand contributes `4`, then `score` becomes `5`. The right operand increments it to `6` and contributes `6`. That makes `total` equal to `10`.

## Build a weekly routine

1. Work a few number-base, Boolean, and Java tracing questions without an IDE.
2. Explain each answer before checking it.
3. For a mistake, identify the rule you missed and write a smaller example.
4. Revisit the same idea a few days later with different values.

The first practice set has **38 multiple-choice questions and two discrete-answer questions**. Its first 15 positions follow UIL’s published topic sequence. It samples the broader list; it is not complete coverage. Questions and explanations are original practice material, not an official UIL test.

## Keep expanding your toolkit

Study classes, inheritance, collections, recursion, sorting, searching, complexity, trees, graphs, Boolean algebra, notation, grammars, state machines, and concurrency. Then add the remaining topics in the official list, including advanced data structures, geometry, randomized algorithms, functional programming, design patterns, and digital logic.

Dynamic programming belongs in programming preparation; UIL’s topic list excludes it from the written test.

## Official resources

- [UIL Computer Science](https://www.uiltexas.org/academics/stem/computer-science)
- [2026–2027 Java topic list](https://www.uiltexas.org/files/academics/UILCS-JavaTopicList2627.pdf)

Use school-authorized copies of licensed preparation materials separately. This public repository contains no A+ material.
