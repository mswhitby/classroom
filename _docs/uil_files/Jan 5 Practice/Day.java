import java.io.*;
import static java.lang.System.*;
import java.lang.*;
import java.util.*;
import java.math.*;
import java.text.*;
public class Day {
	
	public void run() throws Exception{
		Scanner file = new Scanner(new File("day.dat"));
		int times = file.nextInt();
		file.nextLine();
		while(times-- > 0) {
			int num = file.nextInt();
			file.nextLine();
			int[][]events = new int[num][3];
			for(int x = 0; x < 3; x++) {
				for(int y = 0; y < num; y++) 
					events[y][x] = file.nextInt();
				file.nextLine();
			}
			System.out.println(solve(events));
		}
	}
	
	static int binSearch(int i, int[][] events) {
        int end = events[i][1];
        int ans = events.length;
        int s = i + 1, e = events.length - 1;
        while (s <= e) {
            int mid = s + (e - s) / 2;
            if (events[mid][0] >= end) {
                ans = mid;
                e = mid - 1;
            }
            else {
                s = mid + 1;
            }
        }
        return ans;
    }

    static int recur(int i, int[][] events, int[] memo) {
        if (i == events.length)
            return 0;
        if (memo[i] != -1)
            return memo[i];
        int next = binSearch(i, events);
        int take = events[i][2] + recur(next, events, memo);
        int noTake = recur(i + 1, events, memo);
        return memo[i] = Math.max(take, noTake);
    }

    static int solve(int[][] events) {
        int n = events.length;
        Arrays.sort(events, (a, b) -> {
            if (a[0] == b[0])
                return Integer.compare(a[1], b[1]);
            return Integer.compare(a[0], b[0]);
        });
        int[] memo = new int[n];
        Arrays.fill(memo, -1);
        return recur(0, events, memo);
    }
	
	public static void main(String[]args)throws Exception{
		new Day().run();
	}
}
