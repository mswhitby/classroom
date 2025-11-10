import java.io.*;
import java.util.*;


public class Jordan {
    public static void main(String[] args)throws IOException {
        Scanner scan = new Scanner(new File("jordan.dat"));
        int n = scan.nextInt();
        while(n-->0){
            // bring in inputs need long
            long begin = Long.parseLong(scan.next(),17);
            long end = Long.parseLong(scan.next(),17);
            long goal = Long.parseLong(scan.next(),17);
            int index = 2;//we know the answer will be greater than the second element
            long val = end+begin;
            //plan is to keep finding a new interval until goal == val or goal < val
            while(2*goal>=val){
                if(goal==val) {
                    System.out.println(Long.toString(index+1));
                   break; //OK ugly but it works, probably better to ajdust the while condition
                }
                else if (goal<val){
                    System.out.println(Long.toString(end,17).toUpperCase()+" "+Long.toString(val,17).toUpperCase());
                    break;
                    }
                //make the next interval with the coveted swap op
                long temp = val;
                val =val+end;
                end = temp;
                index++;
            }

            }
        }
}
