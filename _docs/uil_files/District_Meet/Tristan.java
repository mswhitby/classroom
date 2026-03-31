import java.io.*;
import static java.lang.System.*;
import java.lang.*;
import java.util.*;
import java.math.*;
import java.text.*;
public class Tristan {
	
	public void run() throws Exception{
		Scanner file = new Scanner(new File("tristan.dat"));
		int times = file.nextInt();
		file.nextLine();
		while(times-- > 0) {
			String[] arr = file.nextLine().trim().split(" ");
			int[] costs = new int[arr.length];
			for(int i = 0; i < arr.length; i++)
				costs[i] = file.nextInt();
			file.nextLine();
			out.println(minCost(arr, costs));
		}
	}
	
    public static int minCost(String[] arr, int[] cost) {
        int n = arr.length;
        int dp0 = 0;
        int dp1 = cost[0];
        for (int i = 1; i < n; i++) {
            int cur0 = Integer.MAX_VALUE;
            int cur1 = Integer.MAX_VALUE;
            if (arr[i].compareTo(arr[i - 1]) >= 0) 
                cur0 = Math.min(cur0, dp0);
            String revPrev = new StringBuilder(arr[i - 1]).reverse().toString();
            if (arr[i].compareTo(revPrev) >= 0) 
                cur0 = Math.min(cur0, dp1);
            String revCurr = new StringBuilder(arr[i]).reverse().toString();
            if (revCurr.compareTo(arr[i - 1]) >= 0 && dp0 != Integer.MAX_VALUE) 
                cur1 = Math.min(cur1, dp0 + cost[i]);
            if (revCurr.compareTo(revPrev) >= 0 && dp1 != Integer.MAX_VALUE) 
                cur1 = Math.min(cur1, dp1 + cost[i]);
            dp0 = cur0;
            dp1 = cur1;
        }
        int res = Math.min(dp0, dp1);
        //return res;
        return (res == Integer.MAX_VALUE) ? -1 : res;
    }
	
	public static void main(String[]args)throws Exception{
		new Tristan().run();
	}
}
