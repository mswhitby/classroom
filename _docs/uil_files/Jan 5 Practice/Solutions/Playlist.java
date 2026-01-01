import java.io.*;
import static java.lang.System.*;
import java.lang.*;
import java.util.*;
import java.math.*;
import java.text.*;
public class Playlist {
	
	public void run() throws Exception{
		Scanner file = new Scanner(new File("playlist.dat"));
		int n = file.nextInt(), m = file.nextInt(), max = n;
		file.nextLine();
		ArrayList<Song> pl = new ArrayList<Song>();
		ArrayList<String> na = new ArrayList<String>();
		ArrayList<String> ge = new ArrayList<String>();
		ArrayList<String> ar = new ArrayList<String>();
		while(n-- > 0)
			pl.add(new Song(file.next().replaceAll(":",""), file.next(), file.nextLine().trim()));
		while(m-- > 0) {
			int c = file.nextInt();
			file.nextLine();
			while(c-- > 0) {
				String[] str = file.nextLine().trim().split(" ");
				switch(str[0]) {
				case "ROTATE": 
					int num = Integer.parseInt(str[1]);
					Collections.rotate(pl, num);
					break;
				case "ADD": 
					if(na.contains(str[1]) || ar.contains(str[2]) || ge.contains(str[3]))break;
					pl.add(0, new Song(str[1], str[2], str[3]));
					while(pl.size() > max)
						pl.remove(pl.size() - 1);
					break;
				case "BANN":
					na.add(str[1]);
				case "REMOVEN": 
					for(int y = 0; y < pl.size(); y++)
						if(pl.get(y).name.equals(str[1])) {
							pl.remove(y);
							break;
						}
					break;
				case "BANG":
					ge.add(str[1]);
				case "REMOVEG":
					for(int y = 0; y < pl.size(); y++)
						if(pl.get(y).genre.equals(str[1])) 
							pl.remove(y);
					break;
				case "BANA":
					ar.add(str[1]);
				case "REMOVEA":
					for(int y = 0; y < pl.size(); y++)
						if(pl.get(y).artist.equals(str[1])) 
							pl.remove(y);
					break;
				}
			}
			System.out.println(pl.toString().replace("[","").replace("]",""));
		}
	}
	
	public static void main(String[]args)throws Exception{
		new Playlist().run();
	}
}
class Song{
	String name, artist, genre;
	
	public Song(String n, String a, String g) {
		name = n;
		artist = a;
		genre = g;
	}
	
	public String toString() {
		return name;
	}
}
