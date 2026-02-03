import java.util.*;
import java.io.*;
public class Kiran {
    String name;
    int kills;
    int deaths;
    double ratio;
    public Kiran(String name, int kills, int deaths){
        this.name = name;
        this.kills = kills;
        this.deaths = deaths;
        if(deaths == 0)
            this.ratio = kills;
        else this.ratio = 1.0*kills/deaths;
    }
    public static void main(String[] args) throws IOException{
        Scanner scan = new Scanner(new File("kiran.dat"));
        String dashes = "-".repeat(48);
        while ((scan.hasNextLine())){
            String team = scan.nextLine();
            int num = Integer.parseInt(scan.nextLine());
            Kiran[] arr = new Kiran[num];
            for(int i = 0; i<num; i++) {
                arr[i] = new Kiran(scan.next(), scan.nextInt(), scan.nextInt());
            }
            findMVP(arr);
            System.out.println("TEAM REPORT: "+ team);
            System.out.println(dashes);
            System.out.printf("Player         K     D     Ratio\n");
            for(int i = 0; i<num; i++){
                System.out.printf("%-15s%-6s%-6s%-8.2f\n", arr[i].name, arr[i].kills,arr[i].deaths, arr[i].ratio);
            }
            System.out.println(dashes);
            int teamTot = Arrays.stream(arr).mapToInt(Kiran::getKills).sum();
            System.out.println("Total Team Kills: "+teamTot);
            System.out.println();
                if(scan.hasNextLine()) {
                    scan.nextLine();
                //System.out.println();
                }
            }







        }
        static void findMVP(Kiran[] arr){
        double rat = -5;
        int index = 0;
        for(int i = 0; i<arr.length; i++){
           if(arr[i].ratio>rat){
               rat = arr[i].ratio;
               index = i;
           }


        }
        arr[index].name=arr[index].name +" (MVP)";

        }
        int getKills() {
            return kills;
        }

        }



