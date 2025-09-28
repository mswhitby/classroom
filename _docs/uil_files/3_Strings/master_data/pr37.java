//© A+ Computer Science 
//www.apluscompsci.com

import java.util.*;
import java.io.*;
import static java.lang.System.*;

public class pr37
{
   public static void main (String[] args) throws IOException
   {
      Scanner file = new Scanner(new File("pr37.dat"));
      int times = file.nextInt();
      file.nextLine();
      String vowels = "AEIOU";
      for(int z = 0; z < times; z++) 
      {
      	Scanner chop = new Scanner(file.nextLine());				
      	while(chop.hasNext())
      	{
      		String s = chop.next();
       		if(vowels.indexOf(s.charAt(0)) < 0)      // not a vowel
      			out.print(s.substring(1) + s.substring(0,1) + "AY ");
				else										// is a vowel
					out.print(s + "YAY ");
      	}      	
      	out.println();
      }	
   }
}

