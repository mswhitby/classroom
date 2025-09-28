//© A+ Computer Science 
//www.apluscompsci.com  

import java.util.*;
import java.io.*;
import static java.lang.System.*;

public class pr32
{
   public static void main (String[] args) throws IOException
   {
      Scanner file = new Scanner(new File("pr32.dat"));
      while(file.hasNextInt()) 
      {
      	int num = file.nextInt();
      	out.print("0");
       	for(int i = 1; i <= num; i++)
      		if(i % 10 == 0)	
      			out.print("0");
      		else if (i % 5 == 0)	
      			out.print("5");
      		else
      			out.print("-");
      	out.println();
      }	
   }
}

