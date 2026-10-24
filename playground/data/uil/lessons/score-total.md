# Add the team scores

A team wants a quick total of its practice scores. For this browser drill, the supplied values arrive in `args`, the array passed to `main`.

```java
int score = Integer.parseInt(args[0]);
```

That example reads the first argument. Your program must handle **all** arguments, including an empty array.

## Your task

Convert each argument to an integer, add the values, and print the total. With no arguments, print `0`. Each score is between -1000 and 1000, and there are at most 100 scores.

### Example arguments

```text
6 12 -2
```

### Expected output

```text
16
```

Choose a descriptive helper name such as `calculateTotal` if you split the work into methods. In a contest problem you may read values from a data file instead; the accumulation logic stays the same.
