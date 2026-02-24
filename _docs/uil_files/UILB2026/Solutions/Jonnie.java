import java.io.*;
import static java.lang.System.*;
import java.lang.*;
import java.util.*;
import java.math.*;
import java.text.*;
public class Jonnie {
	
	int val(String s) {
		int num = 0;
		for(char c:s.toCharArray())
			switch(c) {
			case 'A':num += 1;break;
			case 'B':num += 3;break;
			case 'C':num += 3;break;
			case 'D':num += 2;break;
			case 'E':num += 1;break;
			case 'F':num += 4;break;
			case 'G':num += 2;break;
			case 'H':num += 4;break;
			case 'I':num += 1;break;
			case 'J':num += 8;break;
			case 'K':num += 5;break;
			case 'L':num += 1;break;
			case 'M':num += 3;break;
			case 'N':num += 1;break;
			case 'O':num += 1;break;
			case 'P':num += 3;break;
			case 'Q':num += 10;break;
			case 'R':num += 1;break;
			case 'S':num += 1;break;
			case 'T':num += 1;break;
			case 'U':num += 1;break;
			case 'V':num += 4;break;
			case 'W':num += 4;break;
			case 'X':num += 8;break;
			case 'Y':num += 4;break;
			case 'Z':num += 10;break;
			}
		return num;
	}
	
	public void run() throws Exception{
		Scanner file = new Scanner(new File("jonnie.dat"));
		int times = file.nextInt(), players = file.nextInt(), words = file.nextInt(), curr = 0;
		file.nextLine();
		TreeMap<String, Integer> tm = new TreeMap<String, Integer>();
		TreeSet<Character> played = new TreeSet<Character>();
		int[] scores = new int[players];
		while(words-- > 0) {
			String s = file.next();
			tm.put(s, val(s));
		}
		file.nextLine();
		char[] lets = file.nextLine().trim().toCharArray();
		int max = 0;
		String m = null;
		for(String s:tm.keySet()) 
			if(poss(arrToList(s.toCharArray()), arrToList(lets), played) && tm.get(s) > max) {
				max = tm.get(s);
				m = s;
			}
		for(char c:m.toCharArray())
			played.add(c);
		System.out.println(m+" "+max);
		scores[curr++] = max;
		curr %= players;
		while(times-- > 1) {
			lets = file.nextLine().trim().toCharArray();
			max = 0;
			m = null;
			//System.out.println(let+" "+played);
			for(String s:tm.keySet()) 
				if(poss(arrToList(s.toCharArray()), arrToList(lets), played) && tm.get(s) > max) {
					//System.out.println(let+" "+played);
					max = tm.get(s);
					m = s;
				}
			if(m!=null) {
				for(char c:m.toCharArray())
					played.add(c);
				System.out.println(m+" "+max);
			}
			else
				System.out.println("NO POSSIBLE WORDS");
			scores[curr++] += max;
			curr %= players;
		}
		//System.out.println(Arrays.toString(scores));
		int win = 0;
		for(int i = 0; i < players; i++)
			if(scores[win] < scores[i]) 
				win = i;
		System.out.println("Player "+(win + 1)+" won with a score of "+scores[win]);
	}
	
	public ArrayList<Character> arrToList(char[] ch){
		ArrayList<Character> c = new ArrayList<Character>();
		for(char k:ch)
			c.add(k);
		return c;
	}
	
	public boolean poss(ArrayList<Character> s, ArrayList<Character> ch, TreeSet<Character> p) {
			for(int i = 0; i < s.size(); i++) {
				char c = s.get(i);
				if(ch.contains(c)) {
					ch.remove((Character)c);
					s.remove(i);
					i--;
				}
			}
			//System.out.println(s+" "+ch);
			if(s.size() > 1)return false;
			else if(s.size() == 0)return true;
			else {
				//System.out.println("skdjsdj");
				return p.contains(s.get(0));
			}
	}
	
	public static void main(String[]args)throws Exception{
		new Jonnie().run();
	}
}
