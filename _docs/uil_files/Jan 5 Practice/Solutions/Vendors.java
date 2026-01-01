import java.io.*;
import static java.lang.System.*;
import java.lang.*;
import java.util.*;
import java.math.*;
import java.text.*;
public class Vendors {
	
	public void run() throws Exception{
		Scanner file = new Scanner(new File("vendors.dat"));
		int times = file.nextInt();
		file.nextLine();
		while(times-- > 0) {
			String item = file.next();
			int m = file.nextInt();
			String date = file.next();
			double mp = file.nextDouble();
			ArrayList<Vendor> v = new ArrayList<Vendor>();
			while(m-- > 0) {
				String n = file.next();
				double p = file.nextDouble(), a = file.nextDouble();
				String[] d = file.nextLine().trim().split(" ");
				boolean b = p <= mp;
				for(String s:d)
					b &= !date.equals(s);
				if(b)v.add(new Vendor(n, p, a));
			}
			Collections.sort(v);
			System.out.println(item+":");
			if(v.isEmpty()) {
				System.out.println("No Viable Options.");
				continue;
			}
			for(int y = 0; y < v.size() && y < 5; y++)
				System.out.println((y + 1)+": "+v.get(y).toString());
		}
	}
	
	public static void main(String[]args)throws Exception{
		new Vendors().run();
	}
}
class Vendor implements Comparable<Vendor>{
	String name;
	double price, arr;
	
	public Vendor(String n, double p, double a) {
		name = n;
		price = p;
		arr = a;
	}
	
	public int compareTo(Vendor v) {
		if(arr != v.arr)return Double.compare(v.arr, arr);
		if(price != v.price)return Double.compare(price, v.price);
		return name.compareTo(v.name);
	}
	
	public String toString() {
		return String.format("%s %.2f %.1f", name, price, arr);
	}
}