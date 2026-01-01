import java.io.*;
import static java.lang.System.*;
import java.lang.*;
import java.util.*;
import java.math.*;
import java.text.*;
public class Honeymoon {
	
	public void run() throws Exception{
		Scanner file = new Scanner(new File("honeymoon.dat"));
		int times = file.nextInt();
		file.nextLine();
		while(times-- > 0) {
			String[] c = file.nextLine().trim().split(" "), d = file.nextLine().trim().split(" ");
			int[] days = new int[d.length], costs = new int[4];
			for(int y = 0; y < 4; y++)
				costs[y] = Integer.parseInt(c[y]);
			for(int y = 0; y < d.length; y++)
				days[y] = Integer.parseInt(d[y]);
			System.out.println(solve(days, costs));
		}
	}
	
	public static void main(String[]args)throws Exception{
		new Honeymoon().run();
	}
	
	public int solve(int[] days, int[] costs) {
        int n = days.length;
        int left5 = 0, left10 = 0, left30 = 0;
        int[] dp = new int[n];
        for (int right = 0; right < n; ++right) {
            while (days[right] - days[left5] >= 5) left5++;
            while (days[right] - days[left10] >= 10) left10++;
            while (days[right] - days[left30] >= 30) left30++;
            int cost1 = (right > 0 ? dp[right - 1] : 0) + costs[0];
            int cost5 = (left5 > 0 ? dp[left5 - 1] : 0) + costs[1];
            int cost10 = (left10 > 0 ? dp[left10 - 1] : 0) + costs[2];
            int cost30 = (left30 > 0 ? dp[left30 - 1] : 0) + costs[3];
            dp[right] = Math.min(Math.min(cost1, Math.min(cost10, cost5)), cost30);
        }
        return dp[n - 1];
    }
}
