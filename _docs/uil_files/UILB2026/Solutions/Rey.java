import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

public class Rey {

    public static void main(String[] args) {

        File file = new File("rey.dat");

        try {
            Scanner scan = new Scanner(file);

            while (scan.hasNext()) {
                String teacher = scan.next();

                if (!scan.hasNextInt()) break;
                int count = scan.nextInt();

                System.out.println("INVOICE FOR: " + teacher);
                System.out.println("---------------------------");

                double totalDue = 0.0;

                for (int i = 0; i < count; i++) {
                    String type = scan.next(); // "Hoodie" or "TShirt"
                    String size = scan.next(); // "S", "M", "XL", etc.

                    double price = 0.0;

                    // 1. Determine Base Price
                    if (type.equalsIgnoreCase("Hoodie")) {
                        price = 30.00;
                    } else if (type.equalsIgnoreCase("TShirt")) {
                        price = 15.00;
                    }

                    // 2. Determine Surcharge
                    if (size.equals("XL") || size.equals("XXL")) {
                        price += 2.50;
                    }

                    totalDue += price;

                    // Format: "Hoodie (XL)"
                    String itemDesc = type + " (" + size + ")";

                    // Print line item
                    System.out.printf("%-16s $ %6.2f%n", itemDesc, price);
                }

                System.out.println("---------------------------");
                System.out.printf("%-16s $ %6.2f%n", "Total Due:", totalDue);
                System.out.println();
            }
            scan.close();

        } catch (FileNotFoundException e) {
            System.out.println("File not found.");
        }
    }

}