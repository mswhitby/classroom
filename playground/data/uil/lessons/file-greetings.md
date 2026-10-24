# Read names from a file

The second problem in a UIL packet uses basic file input. Practice this one in your **Java 26 IDE**.

## Input file: greetings.dat

```text
3
Ari
Sam
Jo
```

The first line is the number of names. Each following line contains one name. Print a greeting for each name:

```text
Hello, Ari!
Hello, Sam!
Hello, Jo!
```

## Connect a Scanner to a File

```java
import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class FileGreetings {
    public static void main(String[] args) throws FileNotFoundException {
        try (Scanner input = new Scanner(new File("greetings.dat"))) {
            int count = input.nextInt();
            input.nextLine();
            // Read count names and print each greeting.
        }
    }
}
```

`nextInt()` reads the count but leaves the line ending behind. The first `nextLine()` consumes the rest of that line. Your loop can then read the names.

Save both files in the working directory used by your IDE. Compile and run `FileGreetings.java`, then compare your output with the example. Try a file with one name and a file with zero names, too.

Browser practice does not support this file-reading activity. Download the starter and data using the buttons beside this lesson.
