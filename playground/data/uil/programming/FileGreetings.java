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
