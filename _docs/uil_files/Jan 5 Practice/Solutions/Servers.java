import java.io.*;
import static java.lang.System.*;
import java.lang.*;
import java.util.*;
import java.math.*;
import java.text.*;
public class Servers {
	
	public void run() throws Exception{
//		for(int y = 0; y < 100; y++) {
//			for(int x = 0; x < 100; x++)
//				System.out.print((int)(1 + Math.random() * 100) + (x == 99? "": " "));
//			System.out.println();
//		}
		Scanner file = new Scanner(new File("servers.dat"));
		int times = file.nextInt();
		file.nextLine();
		while(times-- > 0) {
			int r = file.nextInt(), c = file.nextInt();
			file.nextLine();
			int[][] mat = new int[r][c];
			for(int rr = 0; rr < r; rr++) {
				String[] line = file.nextLine().trim().split(" ");
				for(int cc = 0; cc < c; cc++)
					mat[rr][cc] = Integer.parseInt(line[cc]);
			}
			System.out.println(solve(mat));
		}
	}
	
	public static void main(String[]args)throws Exception{
		new Servers().run();
	}
	
	public int solve(int[][] grid) {
        int m = grid.length;
        int n = grid[0].length;        
        for (int i = 1; i < m; i++) {
            grid[i][0] += grid[i-1][0];
        }        
        for (int j = 1; j < n; j++) {
            grid[0][j] += grid[0][j-1];
        }       
        for (int i = 1; i < m; i++) {
            for (int j = 1; j < n; j++) {
                grid[i][j] += Math.min(grid[i-1][j], grid[i][j-1]);
            }
        }
        return grid[m-1][n-1];
    }
}
