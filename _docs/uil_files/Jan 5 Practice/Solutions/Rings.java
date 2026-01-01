import java.io.*;
import static java.lang.System.*;
import java.lang.*;
import java.util.*;
import java.math.*;
import java.text.*;
public class Rings {
	
	public void run() throws Exception{
		Scanner file = new Scanner(new File("rings.dat"));
		while(file.hasNext())
		{
			
			String s = file.nextLine();
			System.out.println(s);
		}
	}
	
	public static void main(String[]args)throws Exception{
		new Rings().run();
	}
}
