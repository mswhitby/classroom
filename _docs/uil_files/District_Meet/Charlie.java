import java.io.*;
import static java.lang.System.*;
import java.lang.*;
import java.util.*;
import java.math.*;
import java.text.*;
public class Charlie {
	
	public void run() throws Exception{
		Scanner file = new Scanner(new File("charlie.dat"));
		int times = file.nextInt();
		file.nextLine();
		while(times-- > 0) {
			String s = file.next();
			int m = file.nextInt();
			ArrayList<Character> a = new ArrayList<>();
			for(char c:s.toCharArray())
				a.add(c);
			Collections.rotate(a, m);
			out.println(a.toString().replaceAll("[\\[\\], ]+",""));
		}
	}
	
	public static void main(String[]args)throws Exception{
		new Charlie().run();
	}
}
