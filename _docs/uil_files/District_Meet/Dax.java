import java.io.FileWriter;
import java.io.PrintWriter;

import static java.lang.System.out;

public class Dax {
    public static void main(String[] args) {
        try {
            PrintWriter out = new PrintWriter(new FileWriter("dax_student.out"));
            out.println("                                    888");
            out.println("                                    888");
            out.println("                                    888");
            out.println("88888b.d88b.  8888b. 888d888 .d8888b88888b.");
            out.println("888 \"888 \"88b    \"88b888P\"  d88P\"   888 \"88b");
            out.println("888  888  888.d888888888    888     888  888");
            out.println("888  888  888888  888888    Y88b.   888  888");
            out.println("888  888  888\"Y888888888     \"Y8888P888  888");

            out.close();
        }
        catch (Exception e) {
            out.println("Something went wrong");
        }
    }
}
