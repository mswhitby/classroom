'''
import java.io.*;
import java.util.*;

public class Deborah {
    static void dfs(Map<String, List<String>> tree, Map<String, Integer> map, String str, int depth){
    map.put(str,depth);// we store the depth of str
         for(String s: tree.get(str))
        dfs(tree, map,s,depth+1);

    }

    // alt version without recursion
    static void findDepth(Map<String, List<String>> tree, Map<String, Integer> map, String str){
    Stack<String> stack = new Stack<>();
    stack.push(str+" "+0);
    while(!stack.isEmpty()){
        String check = stack.pop();
        String toAdd = check.substring(0,check.indexOf(" "));
        int depth = Integer.parseInt(check.substring(check.indexOf(" ")+1));
       map.put(toAdd,depth);
       for(String s: tree.get(check.substring(0,check.indexOf(" ")))){
           stack.push(s+" "+(depth+1));

       }
    }
    }

    public static void main(String[] args)throws  IOException {
        Scanner scan = new Scanner(new File("deborah.dat"));
        int noSets = scan.nextInt();
        while(noSets-->0){
            Map<String, Integer> depths = new HashMap<>();//this will store the depths of each file/folder
            Map<String, List<String>> tree = new HashMap<>();// this maps a folder to the things in it
            List<String> inFolder = new ArrayList<>();  //these are the items that are in a folder.  The ones
            //not in the folder have depth 0.
            Set<String> favs = new HashSet<>();// this stores the favorites
            int noEntries = scan.nextInt();
            // scan.nextLine();
            for(int i = 0; i<noEntries; i++){
                String  entry = scan.next();
                int fav =scan.nextInt();
                int members = scan.nextInt();
                //System.out.println(Arrays.toString(arr));
                if(fav ==1)  // we found a favorite
                    favs.add(entry);
                // the code below links a folder with an array list containing its immediate contents
                tree.put(entry,new ArrayList<>());
                for(int j = 0; j<members; j++) {
                    String toAdd = scan.next();
                    tree.get(entry).add(toAdd);
                    inFolder.add(toAdd);

                }


            }
            // now using dfs we populate depths
            for(String str: tree.keySet()){
                if(!inFolder.contains(str))  //start with folders/files with depth 0
                    dfs(tree,depths, str,0);
            }
            //now not using a dfs we populate depths--key code in teh program
           /* for(String str: tree.keySet()){
                if(!inFolder.contains(str))  //start with folders/files with depth 0
                    findDepth(tree,depths, str);
            }
            */

            // this code just finds the item with the highest depth etc.
            int ans = -1;
            String sAns = "";
            for(String s: favs){
                int check = depths.get(s);
                if(check>ans){
                    ans = check;
                    sAns =s;
                }
                else if(check==ans)
                    sAns = sAns.compareTo(s)<0? sAns: s;


            }

        System.out.printf("%s (%d)\n",sAns,ans);









        }

    }
}
'''
