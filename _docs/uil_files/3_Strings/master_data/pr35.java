//© A+ Computer Science 
//www.apluscompsci.com  

import java.util.*;
import java.io.*;
import static java.lang.System.*;

public class pr35
{
   public static void main (String[] args) throws IOException
   {
      Scanner file = new Scanner(new File("pr35.dat"));
      int times = file.nextInt();
      file.nextLine();
      for(int z = 0; z < times; z++) 
      {
      	StringBuffer s = new StringBuffer(file.nextLine().trim());
      	int indexStart, indexEnd = 0;
      	indexStart = s.indexOf("/*");  
      	if(indexStart >= 0) {
      		indexEnd = s.indexOf("*/")+2;  
      		s.delete(indexStart,indexEnd);
      	}
      	out.println(s);
      }	
   }
}

