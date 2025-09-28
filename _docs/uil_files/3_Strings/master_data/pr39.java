//© A+ Computer Science 
//www.apluscompsci.com  

import java.util.*;
import java.io.*;
import static java.lang.System.*;

public class pr39
{
   public static void main (String[] args) throws IOException
   {
      Scanner file = new Scanner(new File("pr39.dat"));
      int times = file.nextInt();
      file.nextLine();
      for(int z = 0; z < times; z++) 
      {
      	String s = file.nextLine().trim();
      	String a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";
      	for(int i = 0; i < s.length()-1; i++) 
      		if(a.indexOf(s.charAt(i)) >= 0) 
      			out.print(s.charAt(i));
      	out.println();
      }	
   }
}

