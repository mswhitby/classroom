//© A+ Computer Science 
//www.apluscompsci.com  

import java.util.*;
import java.io.*;
import static java.lang.System.*;

public class pr36
{
   public static void main (String[] args) throws IOException
   {
      Scanner file = new Scanner(new File("pr36.dat"));
      int times = file.nextInt();
      file.nextLine();
      for(int z = 0; z < times; z++) 
      {
      	String code = file.nextLine();			// code key
      	String s = file.nextLine();				// line to decode
      	for(int i = 0; i < s.length(); i++) {
       		if(s.charAt(i) >= 'A' && s.charAt(i) <= 'Z')  // check range
      			out.print((char)('A' + code.indexOf(s.charAt(i)))); 
			else
				out.print(s.charAt(i));
      	}
      	out.println();
      }	
   }
}

