import java.io.*;
import static java.lang.System.*;
import java.lang.*;
import java.util.*;
import java.math.*;
import java.text.*;
public class Rounds {
	
	char[][] mat;
	int[][][] smat;
	int[] tables, rtables;
	String ck;
	Deque<Integer> qu;
	
	public void run() throws Exception{
		Scanner file = new Scanner(new File("rounds.dat"));
		int times = file.nextInt();
		file.nextLine();
		while(times-- > 0) {
			int r = file.nextInt(), c = file.nextInt(), e = file.nextInt(), sr = -1, sc = -1, rt = 0;
			file.nextLine();
			mat = new char[r][c];
			tables = new int[e];
			ck = file.nextLine().replaceAll("\\s+","");
			for(int y = 0; y < e; y++) {
				String[] st = file.nextLine().trim().split("\\|");
				String[] req = st[0].trim().split(",");
				String[] non = st[1].trim().split(",");
				if(req.length != 0 && !st[0].isEmpty()) {
					ck = (y + 1) + ck;
					for(String s:req)
						tables[y] += Integer.parseInt(s);
					rt++;
				}
				for(String s:non)
					tables[y] += Integer.parseInt(s);
			}
			rtables = new int[rt];
			rt = 0;
			//System.out.println(ck);
			smat = new int[1 << ck.length()][r][c];
			for(int rr = 0; rr < r; rr++) {
				mat[rr] = file.nextLine().trim().toCharArray();
				for(int d = 0; d < smat.length; d++)
					Arrays.fill(smat[d][rr], Integer.MAX_VALUE);
				for(int cc = 0; cc < c; cc++) {
					if(mat[rr][cc] == 'S') {
						sr = rr;
						sc = cc;
						mat[rr][cc] = '.';
					}
					if((Character.isUpperCase(mat[rr][cc]) || Character.isDigit(mat[rr][cc])) && ck.contains(""+mat[rr][cc])) {
						//System.out.println(mat[rr][cc]+" "+ck.indexOf(mat[rr][cc]));
						//System.out.println(mat[rr][cc]);
						if(Character.isDigit(mat[rr][cc])) 
							rtables[rt++] = tables[mat[rr][cc] - '1'];
						mat[rr][cc] = (char)ck.indexOf(mat[rr][cc]);
					}
				}
			}
//			System.out.println(ck);
//			for(char[] kckkc:mat)
//				System.out.println(kckkc);
			//System.out.println(Arrays.toString(tables));
			solver(sr, sc);
//			for(int[][] m:smat)
//				System.out.println(Arrays.deepToString(m));
			System.out.printf("%.2f%n",smat[smat.length - 1][sr][sc]/60.0);
		}
	}
	
	public void solver(int r, int c) {
		qu = new LinkedList<Integer>();
		qu.add(0);
		qu.add(r);
		qu.add(c);
		qu.add(0);
		while(!qu.isEmpty()) {
			solve(qu.poll(), qu.poll(), qu.poll(), qu.poll());
		}
	}
	
	public void solve(int d, int r, int c, int t) {
		if(d < 0 || r < 0 || c < 0 || d >= smat.length || r >= mat.length || c >= mat[r].length
				|| mat[r][c] == '#' || smat[d][r][c] <= t) return;
		smat[d][r][c] = t;
		if(mat[r][c] < ck.length()) {
			d |= 1 << mat[r][c];
			smat[d][r][c] = t;
			if(Character.isDigit(ck.charAt(mat[r][c]))) {
				t += rtables[mat[r][c]] + 10;
			}
			else 				
				t += 120;
		}
		else {
			if(Character.isUpperCase(mat[r][c]))
				t += 40;
			else if(Character.isDigit(mat[r][c]))
				t += tables[(mat[r][c] - '1')];
			else if(mat[r][c] == '$')
				t += 45;
			else
				t += 10;
		}
		solvea(d, r + 1, c, t);
		solvea(d, r - 1, c, t);
		solvea(d, r, c + 1, t);
		solvea(d, r, c - 1, t);
	}
	
	public void solvea(int d, int r, int c, int t) {
		qu.add(d);
		qu.add(r);
		qu.add(c);
		qu.add(t);
	}
	
	public static void main(String[]args)throws Exception{
		new Rounds().run();
	}
}
