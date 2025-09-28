//© A+ Computer Science 
//www.apluscompsci.com  

import java.util.*;
import java.io.*;
import static java.lang.System.*;

public class pr31
{
   public static void main (String[] args) throws IOException
   {
      Scanner file = new Scanner(new File("pr31.dat"));
      int times = file.nextInt();
      file.nextLine();
      for(int z = 0; z < times; z++) 
      {
      	String s = file.nextLine(); 
      	char ch = s.charAt(0);
      	int count = 1;
      	for(int i = 1; i < s.length(); i++)
      		if(s.charAt(i) == ch)			// looks at one character
      			count++;
      	out.println(ch + ": " + count);
      }	
   }
}

