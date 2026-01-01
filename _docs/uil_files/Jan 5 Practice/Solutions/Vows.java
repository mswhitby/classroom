import java.io.*;
import static java.lang.System.*;
import java.lang.*;
import java.util.*;
import java.math.*;
import java.text.*;
public class Vows {
	
	public void run() throws Exception{
		Scanner file = new Scanner(new File("vows.dat"));
		ArrayList<String> r = new ArrayList<>();
		while(file.hasNext())
		{			
			String s = file.nextLine();
			//System.out.println(s);
			r.add(s);
		}
		for( int i = 0; i < r.size()-1; i++ )
			System.out.println(r.get(i).replaceAll("BLANK",r.get(r.size()-1)));
	}
	
	public static void main(String[]args)throws Exception{
		new Vows().run();
	}
}
