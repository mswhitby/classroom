import java.io.*;
import static java.lang.System.*;
import java.lang.*;
import java.util.*;
import java.math.*;
import java.text.*;
public class Rahul {
	
	public void run() throws Exception{
		Scanner file = new Scanner(new File("Rahul.dat"));
		int times = file.nextInt();
		file.nextLine();
		while(times-- > 0) {
			String[] st = file.nextLine().trim().split(" ");
			int[] i = new int[st.length];
			for(int j = 0; j < i.length; j++) 
				i[j] = Integer.parseInt(st[j]);
			int m = maxZigZag(i, i.length);
			System.out.println(m);
		}
	}
	
	static int maxZigZag(int[] seq, int n){
        if (n == 0) 
            return 0;
        int lastSign = 0, length = 1;
        for (int i = 1; i < n; ++i) {
            int Sign = signum(seq[i] - seq[i - 1]);
            if (Sign != 0 && Sign != lastSign){
                lastSign = Sign;
                length++;
            }
        }
        return length;
    }
	
	static int signum(int n)
    {
        if (n != 0) 
            return n > 0 ? 1 : -1;
        else 
            return 0;
    }
	
	public static void main(String[]args)throws Exception{
		new Rahul().run();
	}
}
