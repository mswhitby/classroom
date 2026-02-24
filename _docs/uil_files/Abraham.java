import java.io.*;
import static java.lang.System.*;
import java.lang.*;
import java.util.*;
import java.math.*;
import java.text.*;
public class Abraham {
	
	public void run() throws Exception{
		Scanner file = new Scanner(new File("abraham.dat"));
		int times = file.nextInt();
		file.nextLine();
		int abe = 0, other = 0;
		while(times-- > 0) {
			String s = file.nextLine().trim();
			if(s.equals("Abraham"))
				abe++;
			else
				other++;
		}
		System.out.println(abe);
		if(abe > other)
			System.out.println("Honest Abe");
		else
			System.out.println("Better find a hobby");
	}
	
	public static void main(String[]args)throws Exception{
		new Abraham().run();
	}
}
