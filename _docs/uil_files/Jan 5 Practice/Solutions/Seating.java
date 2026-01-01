import java.io.*;
import static java.lang.System.*;
import java.lang.*;
import java.util.*;
import java.math.*;
import java.text.*;
public class Seating {
	
	int max;
	ArrayList<String> al;
	
	public void run() throws Exception{
		Scanner file = new Scanner(new File("seating.dat"));
		int times = file.nextInt();
		file.nextLine();
		while(times-- > 0) {
			int m = file.nextInt();
			file.nextLine();
			int[][] con = new int[m][m];
			for(int i = 0; i < m; i++) {
				for(int j = 0; j < m; j++)
					con[i][j] = file.nextInt();
				file.nextLine();
			}
			//System.out.println(Arrays.deepToString(con));
			al = new ArrayList<String>();
			max = Integer.MIN_VALUE;
			int[] cur = new int[m];
			Arrays.fill(cur, -1);
			permute(cur, "", 0, m, con);
			System.out.println(max+" "+al.size()/m);
			//System.out.println(al);
		}
	}
	
	void permute(int[] cur, String curr, int c, int m, int[][] con) {
		if(c == m) {
			int num = score(cur, con);
			if(num > max) {
				max = num;
				al.clear();
			}
			if(num == max)
				al.add(curr.trim());
		}
		for(int y = 0; y < m; y++)
			if(!curr.contains(""+y)) {
				cur[c] = y;
				permute(cur, curr + " " + y, c + 1, m, con);
				cur[c] = -1;
			}
	}
	
	int score(int[] i, int[][] con) {
		int m = i.length;
		int sc = con[i[0]][i[m - 1]] + con[i[m - 1]][i[0]];
		for(int y = 1; y < m; y++)
			sc += con[i[y]][i[y - 1]] + con[i[y - 1]][i[y]];
		return sc;
	}
	
	public static void main(String[]args)throws Exception{
		new Seating().run();
	}
}
