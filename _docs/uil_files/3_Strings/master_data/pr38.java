//© A+ Computer Science 
//www.apluscompsci.com  

import java.util.*;
import java.io.*;
import static java.lang.System.*;

public class pr38
{
   public static void main (String[] args) throws IOException
   {
      Scanner file = new Scanner(new File("pr38.dat"));
      int times = file.nextInt();
      file.nextLine();
      for(int z = 0; z < times; z++)
      {
      	String s = file.next();
      	char a = s.charAt(0);
      	int n = file.nextInt();	
      	for(int i = 0; i < n; i++)  
       		out.print((char)('A' + (a - 'A' + i) % 26 ));
       	out.println();
      }	
   }
}

