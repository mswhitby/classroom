import java.io.File;
import java.io.FileWriter;
import java.io.PrintWriter;
import java.util.Scanner;
import static java.lang.System.out;

public class Astra {

    public static void main(String[] args) {
        try {
 //           PrintWriter out = new PrintWriter(new FileWriter("astra_student.out"));

            Scanner infile = new Scanner(new File("astra.dat"));

            while (infile.hasNext()) {

                String groupName = infile.next();

                if (!infile.hasNextInt()) break;
                int numStudents = infile.nextInt();

                infile.nextLine();

                double groupTotalCost = 0.0;
                boolean isDiscounted = (numStudents >= 5);

                out.printf("GROUP ORDER: %s%n", groupName);
                out.println("------------------------------------------");

                for (int i = 1; i <= numStudents; i++) {

                    int gradeLevel = infile.nextInt();
                    String ticketType = infile.next().toUpperCase();

                    double price = 0.0;

                    if (gradeLevel == 12) {
                        if (ticketType.equals("VIP")) price = 55.00;
                        else price = 40.00;
                    } else if (gradeLevel == 11) {
                        if (ticketType.equals("VIP")) price = 60.00;
                        else price = 45.00;
                    } else { // Grades 9 and 10
                        if (ticketType.equals("VIP")) price = 65.00;
                        else price = 50.00;
                    }

                    if (isDiscounted) {
                        price = price * 0.90; // 10% off
                    }

                    groupTotalCost += price;

                    String desc = String.format("Student #%d (Grade %d, %s)", i, gradeLevel, ticketType);
                    out.printf("%-32s : $ %6.2f%n", desc, price);
                }

                out.println("------------------------------------------");
                out.printf("%-32s : $ %6.2f%n", "Group Total" + (isDiscounted ? " (Disc. Applied)" : ""), groupTotalCost);
                out.println("\n"); // Extra spacing between groups
            }

            infile.close();
  //          out.close();

        } catch (Exception e) {
            out.println("Something went wrong.");
        }

    }
}
