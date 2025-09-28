//© A+ Computer Science 
//www.apluscompsci.com  

import java.util.*;
import java.io.*;
import static java.lang.System.*;

public class pr33
{
   public static void main (String[] args) throws IOException
   {
      Scanner file = new Scanner(new File("pr33.dat"));
      int times = file.nextInt();
      file.nextLine();
      for(int z = 0; z < times; z++)
      {
      	String s = file.nextLine();
      	String temp = ""; 
      	for(int i = 0; i < s.length(); i++)
      		if(s.charAt(i) != ' ' && temp.indexOf(s.charAt(i)) < 0 )		
      			temp += s.charAt(i);
      	out.println(temp);
      }	
   }
}

