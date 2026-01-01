import java.io.*;
import static java.lang.System.*;
import java.lang.*;
import java.util.*;
import java.math.*;
import java.text.*;
public class RSVPS {
	
	public void run() throws Exception{
		Scanner file = new Scanner(new File("rsvps.dat"));
		int times = file.nextInt(), yes = 0, no = 0;
		file.nextLine();
		while(times-- > 0) {
			String f = file.next();
			int num = file.nextInt();
			String dec = file.nextLine().trim();
			if(dec.equals("Yes"))
				yes += num;
			else
				no += num;
		}
		System.out.printf("%d %d %.2f%%%n",yes,no,(yes * 100.0)/(yes + no));
	}
	
	public static void main(String[]args)throws Exception{
		new RSVPS().run();
	}
}
