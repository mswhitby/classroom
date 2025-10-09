# Timothy.java

## Brief Explanation

This Java program reads integers from a file named `timothy.dat`, counts the frequency of each integer using a `TreeMap` with descending order, and outputs each unique integer. If an integer appears more than once, it prints the integer followed by the count minus one (i.e., the number of duplicates). Otherwise, it just prints the integer.

## Key Features
- **Input Handling**: Uses `Scanner` to read from the file `timothy.dat`.
- **Frequency Tracking**: Employs a `TreeMap` sorted in descending order for keys.
- **Output Logic**: Prints keys with duplicate counts or single occurrences.
- **Error Handling**: Throws `IOException` for file operations.

## File Contents

```java
import java.io.*;
import java.util.*;

public class Timothy {
    public static void main(String[] args) throws IOException{
        Scanner scan = new Scanner(new File("timothy.dat"));
        Map<Integer, Integer> map = new TreeMap<>((Integer a,Integer b)->Integer.valueOf(b)-Integer.valueOf(a));//. this will be our frequency map with our bespoke ordering
        while(scan.hasNextInt()){
            map.merge(scan.nextInt(),1,Integer::sum); //pretty nice, thanks Gemini!

        }
        for(Map.Entry<Integer,Integer> ent: map.entrySet()){
            if(ent.getValue()>1)
                System.out.println(ent.getKey()+" "+(ent.getValue()-1));
            else {
                System.out.println(ent.getKey());
            }
        }
    }
}
```
