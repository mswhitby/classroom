import java.io.*;
import static java.lang.System.*;
import java.lang.*;
import java.util.*;
import java.math.*;
import java.text.*;
public class Venue {
	
	public void run() throws Exception{
		Scanner file = new Scanner(new File("venue.dat"));
		int times = file.nextInt(), hours = file.nextInt();
		file.nextLine();
		while(times-- > 0) {
			String n = file.next();
			double price = file.nextDouble() / file.nextInt() / file.nextInt() / hours;
			file.nextLine();
			out.printf("%s %.6f%n",n,price);
		}
	}
	
	public static void main(String[]args)throws Exception{
		new Venue().run();
	}
}
