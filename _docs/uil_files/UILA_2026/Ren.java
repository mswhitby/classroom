import java.util.*;
import java.io.*;

public class Ren {
    String fn;
    String ln;
    int score;

    public Ren(String fn, String ln, int score) {
        this.fn = fn;
        this.ln = ln;
        this.score = score;
    }

    public static void main(String[] args)throws IOException {
        Scanner scan = new Scanner(new File("ren.dat"));
        List<Ren> list = new ArrayList<>();
        while(scan.hasNext()){
            String fn = scan.next();
            String ln = scan.next();
            int right = scan.nextInt();
            int wrong = scan.nextInt();
            int score = 6*right - 2*wrong;
            list.add(new Ren(fn,ln,score));

        }
        Comparator<Ren> comp1 = (a,b)->b.score- a.score;
        Comparator<Ren> comp2 = (a,b)->a.ln.toLowerCase().compareTo(b.ln.toLowerCase());
        list.sort(comp1.thenComparing(comp2));
        System.out.println("-".repeat(30));
        System.out.printf("%7s%23s\n","Name","Score");
        int index = 1;
        for(int i = 0; i<6; i++){
            String str = index++ +"."+list.get(i).ln+", "+list.get(i).fn;
            int len = str.length();
            //len = 30-len;
            int sp = 30 -len - (list.get(i).score+"").length();
            str = str + " ".repeat(sp)+list.get(i).score;
            System.out.println(str);
        }



    }
}
