import java.util.*;
import java.io.*;
//example of Dijkstra's Algorithm
public class George {


    public static void main(String[] args) throws IOException {
        Scanner scan = new Scanner(new File("george.dat"));
        int n = scan.nextInt();
        while (n-- > 0) {
            int roads = scan.nextInt();
            int weight = scan.nextInt();
            String start = scan.next();
            String goal = scan.next();
            Map<String, Integer> map = new HashMap<>();
            int[][] arr = new int[roads * 2][roads * 2];
            int index = 0;
            for (int i = 0; i < roads; i++) {
                String s1 = scan.next();
                String s2 = scan.next();

                int d = scan.nextInt();
                int w = scan.nextInt();
                if (w >= weight) {
                    // System.out.println(     s1 +" "+s2+" "+d+" "+w);
                    if (!map.containsKey(s1)) map.put(s1, index++);
                    if (!map.containsKey(s2)) map.put(s2, index++);
                    arr[map.get(s1)][map.get(s2)] = d;
                    arr[map.get(s2)][map.get(s1)] = d;


                }
            }
            if (map.containsKey(goal) && map.containsKey(start)) {
                int ans = solve(map, arr, map.get(start), map.get(goal));
                System.out.println("Shortest distance: " + ans);
            } else System.out.println("No way possible");


        }

    }

    static int solve(Map<String, Integer> map, int[][] arr, int s, int g) {
        int num = map.size();
        // System.out.println(map);
        int[] distance = new int[num];
        Arrays.fill(distance, Integer.MAX_VALUE);
        distance[s] = 0;
        boolean[] visited = new boolean[num];
        int index = s;
        while (index != -1) {
            index = find(visited, distance);
            //System.out.println("index "+index );
            if (index == -1) break;
            visited[index] = true;
            int test = -1;
            for (int j = 0; j < num; j++) {
                if (j != index && arr[index][j] != 0) {
                    test = arr[index][j] + distance[index];
                    if (test < distance[j]) distance[j] = test;
                }
            }


        }

        return distance[g];

    }

    static int find(boolean[] visited, int[] distance) {
        int ans = -1;
        int val = Integer.MAX_VALUE;
        for (int i = 0; i < visited.length; i++) {
            if (!visited[i] && distance[i] < val) {
                ans = i;
                val = distance[i];

            }
        }
//System.out.println("distance: "+Arrays.toString(distance));
        return ans;
    }
}
