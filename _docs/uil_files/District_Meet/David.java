import java.io.*;
import static java.lang.System.*;
import java.lang.*;
import java.util.*;
import java.math.*;
import java.text.*;
public class David {
	
	public void run() throws Exception{
		Scanner file = new Scanner(new File("david.dat"));
		int times = file.nextInt();
		file.nextLine();
		while(times-- > 0) {
			System.out.println(romanToInt(file.nextLine().trim()));
		}
	}
	
	private static final Map<Character,
    Integer> roman = new HashMap<Character, Integer>() {{
	put('I', 1);
	put('V', 5);
	put('X', 10);
	put('L', 50);
	put('C', 100);
	put('D', 500);
	put('M', 1000);
	}};
	
	private int romanToInt(String s){
		int sum = 0;
		int n = s.length();
		for(int i = 0; i < n; i++){        
	    if (i != n - 1 && roman.get(s.charAt(i)) < roman.get(s.charAt(i + 1))){
	        sum += roman.get(s.charAt(i + 1)) - roman.get(s.charAt(i));
	        i++;
	    } 
	    else
	        sum += roman.get(s.charAt(i));
		}
		return sum;
	}
	
	public static void main(String[]args)throws Exception{
		new David().run();
	}
}
