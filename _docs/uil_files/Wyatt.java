import java.io.*;
import java.util.*;

public class Wyatt {
    static int[][] moves = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};// this are the possible moves left and right

    public static void main(String[] args) throws IOException {
        Scanner scan = new Scanner(new File("wyatt.dat"));
        int n = scan.nextInt();
        while (n-- > 0) {
            int rows = scan.nextInt();
            int cols = scan.nextInt();
            scan.nextLine();
            char[][] arr = new char[rows][cols]; // this is our maze
            for (int i = 0; i < rows; i++) {
                arr[i] = scan.nextLine().toCharArray();
                // System.out.println(Arrays.toString(arr[i])+rows+" "+ cols);
            }
            //now find start
            int startX = -1;
            int startY = -1;
            loop:
            for (int i = 0; i < arr.length; i++)
                for (int j = 0; j < arr.length; j++) {
                    if (arr[i][j] == 'T') {
                        startX = i;
                        startY = j;
                        break loop;
                    }
                }

            // System.out.println("start:"+ startX+ " "+ startY);
            boolean ans = solve(arr, startX, startY); // this is the BFS
            System.out.println(ans ? "PHForestry" : "No Can Do");

        }
    }

    //BFS for finding if there is a path to P
    static boolean solve(char[][] arr, int x, int y) {
        boolean[][] visited = new boolean[arr.length][arr[0].length]; //holds true if we have visited a square
        visited[x][y] = true; //we have been to the start and it is not the goal
        Queue<int[]> queue = new LinkedList<>(); // Key data structure for a BFS , the int[] will store the row and col of a square
        queue.offer(new int[]{x, y});
        while (!queue.isEmpty()) {
            int[] temp = queue.poll(); //pull the last sqare on the path from the queue
            // now we will consider all legal moves from temp
            for (int i = 0; i < 4; i++) {
                int row = moves[i][0] + temp[0];
                int col = moves[i][1] + temp[1];
                //System.out.println(row +" "+ col);

                if (row >= 0 && col >= 0 && row < arr.length && col < arr[0].length && !visited[row][col] && (arr[row][col] == '.' || arr[row][col] == 'P')) {
                    //System.out.println(row +" "+ col);
                    if (arr[row][col] == 'P') // are we done?
                        return true;
                    //if not we add {row,col} to the queue
                    visited[row][col] = true;
                    int[] ar1 = {row, col};

                    queue.offer(ar1);
                }
            }


        }
        //queue is empty, we have failed to get to P
        return false;


    }
}
