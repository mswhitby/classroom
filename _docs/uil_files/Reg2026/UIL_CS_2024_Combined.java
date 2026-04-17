/*
 * UIL Computer Science 2024
 * Combined Solutions: District & Region Packets
 *
 * Problems included:
 *   1.  Ariel      - Train scheduling (District)
 *   2.  Christie   - Sum-of-squares digits (District)
 *   3.  Clarabelle - Palindrome substrings (Region)
 *   4.  Emerson    - Grid pathfinding with portals (Region)
 *   5.  Garold     - Ultimate Tic-Tac-Toe (District)
 *   6.  Harmony    - Password strength scorer (Region)
 *   7.  Jimothy    - BST traversals (Region)
 *   8.  Melina     - Coin change combinations (Region)
 *   9.  Remy       - Web log analysis (Region)
 *  10.  Riley      - Spiral matrix averages (Region)
 *  11.  Saim       - Turn-based battle sim (Region)
 *  12.  Sasha      - Trapping rain water (Region)
 *  13.  Wesley     - Maze traversal with alternating rules (Region)
 *
 * To run a specific problem, compile this file and invoke:
 *   java UIL_CS_2024_Combined <ProblemName>
 * e.g.:
 *   java UIL_CS_2024_Combined Ariel
 */

import java.io.*;
import static java.lang.System.*;
import java.lang.*;
import java.util.*;
import java.math.*;
import java.text.*;

public class UIL_CS_2024_Combined {

    public static void main(String[] args) throws Exception {
        if (args.length == 0) {
            System.out.println("Usage: java UIL_CS_2024_Combined <ProblemName>");
            System.out.println("Available: Ariel, Christie, Clarabelle, Emerson, Garold,");
            System.out.println("           Harmony, Jimothy, Melina, Remy, Riley, Saim, Sasha, Wesley");
            return;
        }
        switch (args[0]) {
            case "Ariel":      new ArielSolution().run();      break;
            case "Christie":   ChristieSolution.run();         break;
            case "Clarabelle": ClarabelSolution.run();         break;
            case "Emerson":    new EmersonSolution().run();    break;
            case "Garold":     new GaroldSolution().run();     break;
            case "Harmony":    HarmonySolution.run();          break;
            case "Jimothy":    new JimothySolution().run();    break;
            case "Melina":     new MelinaSolution().run();     break;
            case "Remy":       RemySolution.run();             break;
            case "Riley":      RileySolution.run();            break;
            case "Saim":       new SaimSolution().run();       break;
            case "Sasha":      new SashaSolution().run();      break;
            case "Wesley":     new WesleySolution().run();     break;
            default:
                System.out.println("Unknown problem: " + args[0]);
        }
    }

    // =========================================================================
    // 1. ARIEL  (District)
    // =========================================================================
    static class ArielSolution {
        public int tr(String h) {
            String[] s = h.split(":");
            int n = Integer.parseInt(s[0]) * 12;
            n += Integer.parseInt(s[1]) / 5;
            return n;
        }

        public void run() throws Exception {
            Scanner file = new Scanner(new File("ariel.dat"));
            int times = file.nextInt();
            file.nextLine();
            while (times-- > 0) {
                String[] arr = file.nextLine().trim().split("\\s+");
                String[] dep = file.nextLine().trim().split("\\s+");
                int[] trains = new int[288];
                for (int y = 0; y < arr.length; y++) {
                    int st  = tr(arr[y]);
                    int end = tr(dep[y]);
                    if (end < st) {
                        for (int x = end; x < st - 1; x++) trains[x]--;
                        st  = 0;
                        end = 288;
                    }
                    for (int x = st; x < end; x++) trains[x]++;
                }
                System.out.println(max(trains));
            }
        }

        public int max(int[] arr) {
            int max = Integer.MIN_VALUE;
            for (int i : arr) max = Math.max(i, max);
            return max;
        }
    }

    // =========================================================================
    // 2. CHRISTIE  (District)
    // =========================================================================
    static class ChristieSolution {
        public static void run() throws IOException {
            Scanner Sf = new Scanner(new File("christie.dat"));
            int T = Sf.nextInt();
            for (int i = 1; i <= T; i++) {
                int A = Sf.nextInt();
                int B = Sf.nextInt();
                int Count = 0;
                for (int x = A; x <= B; x++) {
                    String St = "" + x;
                    int Sum = 0;
                    for (int y = 0; y < St.length(); y++) {
                        int Digit = Integer.parseInt(St.substring(y, y + 1));
                        Sum += Digit * Digit;
                    }
                    boolean cool = false;
                    for (int q = 1; q <= 1000000; q++)
                        if (q * q == Sum) cool = true;
                    if (cool) {
                        System.out.print(x + " ");
                        Count++;
                    }
                }
                if (Count == 0) System.out.println("NONE");
                else            System.out.println("");
            }
        }
    }

    // =========================================================================
    // 3. CLARABELLE  (Region)
    // =========================================================================
    static class ClarabelSolution {
        public static void run() throws IOException {
            Scanner Sf = new Scanner(new File("clarabelle.dat"));
            int T = Sf.nextInt();
            Sf.nextLine();
            for (int i = 1; i <= T; i++) {
                String Word = Sf.next();
                ArrayList<String> List = new ArrayList<>();
                for (int x = 0; x <= Word.length() - 3; x++)
                    List.add(Word.substring(x, x + 3));
                TreeSet<String> Bunch = new TreeSet<>();
                for (String Bob : List) {
                    String Maybe = new StringBuffer(Bob).reverse().toString();
                    if (Maybe.equals(Bob)) Bunch.add(Bob);
                }
                if (Bunch.size() == 0) {
                    System.out.println("NONE");
                } else {
                    String Answer = "";
                    for (String Helper : Bunch) Answer = Answer + " " + Helper;
                    System.out.println(Answer.trim());
                }
            }
        }
    }

    // =========================================================================
    // 4. EMERSON  (Region)
    // =========================================================================
    static class EmersonSolution {
        int[][][] smat;
        char[][]  mat;

        public void run() throws Exception {
            Scanner file = new Scanner(new File("emerson.dat"));
            int times = file.nextInt();
            file.nextLine();
            while (times-- > 0) {
                int rr = file.nextInt(), cc = file.nextInt(), p = file.nextInt();
                int sr = -1, sc = -1, er = -1, ec = -1;
                file.nextLine();
                smat = new int[p + 1][rr][cc];
                mat  = new char[rr][cc];
                for (int r = 0; r < rr; r++) {
                    for (int i = 0; i <= p; i++) Arrays.fill(smat[i][r], Integer.MAX_VALUE);
                    mat[r] = file.nextLine().trim().toCharArray();
                    for (int c = 0; c < cc; c++) {
                        if (mat[r][c] == 'S') { sr = r; sc = c; }
                        if (mat[r][c] == 'E') { er = r; ec = c; }
                    }
                }
                for (int r = 0; r < rr; r++) {
                    for (int c = 0; c < cc; c++) {
                        if (mat[r][c] == '<') {
                            if (c + 1 < cc && !("<>^v").contains("" + mat[r][c + 1])) mat[r][c + 1] = '#';
                            if (c + 2 < cc && !("<>^v").contains("" + mat[r][c + 2])) mat[r][c + 2] = '#';
                            mat[r][c] = '#';
                        }
                        if (mat[r][c] == '^') {
                            if (r + 1 < rr && !("<>^v").contains("" + mat[r + 1][c])) mat[r + 1][c] = '#';
                            if (r + 2 < rr && !("<>^v").contains("" + mat[r + 2][c])) mat[r + 2][c] = '#';
                            mat[r][c] = '#';
                        }
                        if (mat[r][c] == '>') {
                            if (c - 1 >= 0 && !("<>^v").contains("" + mat[r][c - 1])) mat[r][c - 1] = '#';
                            if (c - 2 >= 0 && !("<>^v").contains("" + mat[r][c - 2])) mat[r][c - 2] = '#';
                            mat[r][c] = '#';
                        }
                        if (mat[r][c] == 'v') {
                            if (r - 1 >= 0 && !("<>^v").contains("" + mat[r - 1][c])) mat[r - 1][c] = '#';
                            if (r - 2 >= 0 && !("<>^v").contains("" + mat[r - 2][c])) mat[r - 2][c] = '#';
                            mat[r][c] = '#';
                        }
                    }
                }
                solve(sr, sc, p, 0);
                int min = Integer.MAX_VALUE;
                for (int[][] s : smat) min = Math.min(s[er][ec], min);
                System.out.println(min == Integer.MAX_VALUE ? -1 : min);
            }
        }

        public void solve(int r, int c, int p, int s) {
            if (r < 0 || c < 0 || r >= mat.length || c >= mat[r].length
                    || mat[r][c] == '#' || smat[p][r][c] <= s) return;
            smat[p][r][c] = s;
            if (p != 0) {
                solve(r + 2, c,     p - 1, s);
                solve(r + 1, c + 1, p - 1, s);
                solve(r + 1, c - 1, p - 1, s);
                solve(r - 2, c,     p - 1, s);
                solve(r,     c + 2, p - 1, s);
                solve(r - 1, c + 1, p - 1, s);
                solve(r - 1, c - 1, p - 1, s);
                solve(r,     c - 2, p - 1, s);
            }
            solve(r + 1, c, p, s + 1);
            solve(r - 1, c, p, s + 1);
            solve(r, c + 1, p, s + 1);
            solve(r, c - 1, p, s + 1);
        }
    }

    // =========================================================================
    // 5. GAROLD  (District)
    // =========================================================================
    static class GaroldSolution {
        char[][] sboard;
        char[][] boards;

        public void run() throws Exception {
            Scanner file = new Scanner(new File("garold.dat"));
            int times = file.nextInt();
            file.nextLine();
            while (times-- > 0) {
                sboard = new char[3][3];
                boards = new char[9][9];
                for (int y = 0; y < 9; y++) boards[y] = file.nextLine().trim().toCharArray();
                for (int y = 0; y < 3; y++)
                    for (int x = 0; x < 3; x++)
                        sboard[y][x] = bsolve(get(y * 3, x * 3));
                char c = bsolve(sboard);
                System.out.println(c == '.' ? "Cat's Game." : "Player " + c + " Won.");
                for (int r = 0; r < 3; r++) System.out.println(sboard[r]);
            }
        }

        public char[][] get(int rr, int cc) {
            char[][] ch = new char[3][3];
            for (int r = 0; r < 3; r++)
                for (int c = 0; c < 3; c++)
                    ch[r][c] = boards[rr + r][cc + c];
            return ch;
        }

        public char bsolve(char[][] mat) {
            if (matches(mat[0][0], mat[1][0], mat[2][0])) return mat[0][0];
            if (matches(mat[0][1], mat[1][1], mat[2][1])) return mat[0][1];
            if (matches(mat[0][2], mat[1][2], mat[2][2])) return mat[0][2];
            if (matches(mat[0][0], mat[0][1], mat[0][2])) return mat[0][0];
            if (matches(mat[1][0], mat[1][1], mat[1][2])) return mat[1][0];
            if (matches(mat[2][0], mat[2][1], mat[2][2])) return mat[2][0];
            if (matches(mat[0][0], mat[1][1], mat[2][2])) return mat[0][0];
            if (matches(mat[2][0], mat[1][1], mat[0][2])) return mat[1][1];
            return '.';
        }

        public boolean matches(char c1, char c2, char c3) {
            return c1 == c2 && c2 == c3 && c2 != '.';
        }
    }

    // =========================================================================
    // 6. HARMONY  (Region)
    // =========================================================================
    static class HarmonySolution {
        public static void run() throws FileNotFoundException {
            Scanner data = new Scanner(new File("harmony.dat"));
            String letters  = data.nextLine();
            String specials = data.nextLine();
            ArrayList<String> passwords = new ArrayList<>();
            for (int i = 1; i <= 10; i++) {
                String[] words = data.nextLine().split(",");
                for (int j = 0; j < 10; j++) passwords.add(words[j]);
            }
            while (data.hasNext()) {
                String pw     = data.next();
                String rating = "UNACCEPTABLE";
                int score = 0;
                if (pw.length() >= 8 && passwords.indexOf(pw) == -1) {
                    int count = pw.length();
                    int cats = 0, bonus = 0, penalty = 0;
                    boolean lcase = false, ucase = false, digit = false, spec = false;
                    char prevcat = '?', prevchar = ' ';
                    for (int i = 0; i < count; i++) {
                        char c = pw.charAt(i);
                        if (Character.isLowerCase(c)) {
                            if (!lcase) { lcase = true; cats++; }
                            score += letters.indexOf(Character.toUpperCase(pw.charAt(i))) < 13 ? 1 : 3;
                            bonus += i > 0 && prevcat != 'L' ? 3 : 0;
                            prevcat = 'L';
                        } else if (Character.isUpperCase(c)) {
                            if (!ucase) { ucase = true; cats++; }
                            score += letters.indexOf(pw.charAt(i)) < 13 ? 1 : 3;
                            bonus += i > 0 && prevcat != 'U' ? 3 : 0;
                            prevcat = 'U';
                        } else if (Character.isDigit(c)) {
                            if (!digit) { digit = true; cats++; }
                            score += 3;
                            bonus += i > 0 && prevcat != 'D' ? 3 : 0;
                            prevcat = 'D';
                        } else if (specials.indexOf(pw.charAt(i)) != -1) {
                            if (!spec) { spec = true; cats++; }
                            score += 5;
                            bonus += i > 0 && prevcat != 'S' ? 3 : 0;
                            prevcat = 'S';
                        } else {
                            System.out.println("ILLEGAL CHAR encountered in data!!");
                        }
                        if (c == prevchar) penalty += 2;
                        prevchar = c;
                    }
                    if (cats < 3) {
                        score = bonus = penalty = 0;
                    } else {
                        if (cats == 4)      bonus += 5;
                        if (count > 10)     bonus += (count - 10) * 3;
                    }
                    score += bonus;
                    score -= penalty;
                    if      (score <= 0)  rating = "UNACCEPTABLE";
                    else if (score <= 20) rating = "WEAK";
                    else if (score <= 35) rating = "FAIR";
                    else if (score <= 50) rating = "GOOD";
                    else                  rating = "STRONG";
                }
                System.out.println(pw + ":" + score + ":" + rating);
            }
            data.close();
        }
    }

    // =========================================================================
    // 7. JIMOTHY  (Region)
    // =========================================================================
    static class JimothySolution {
        public void run() throws Exception {
            Scanner file = new Scanner(new File("jimothy.dat"));
            int times = file.nextInt(), num = 1;
            file.nextLine();
            while (times-- > 0) {
                String[] lis = file.nextLine().trim().split("\\s+");
                JNode root = new JNode(lis[0]);
                for (int y = 1; y < lis.length; y++) root.add(new JNode(lis[y]));
                System.out.println("TEST CASE #" + num++ + ":");
                System.out.print("PRE-ORDER TRAVERSAL: ");   System.out.println(pre(root).trim());
                System.out.print("IN-ORDER TRAVERSAL: ");    System.out.println(in(root).trim());
                System.out.print("POST-ORDER TRAVERSAL: ");  System.out.println(post(root).trim());
                System.out.print("REVERSE-ORDER TRAVERSAL: ");System.out.println(rev(root).trim());
            }
        }

        boolean isLeaf(JNode n) { return n.left == null && n.right == null; }

        String pre(JNode n) {
            if (isLeaf(n))      return n.val + " ";
            if (n.left == null) return n.val + " " + pre(n.right);
            if (n.right == null)return n.val + " " + pre(n.left);
            return n.val + " " + pre(n.left) + pre(n.right);
        }

        String in(JNode n) {
            if (isLeaf(n))      return n.val + " ";
            if (n.left == null) return n.val + " " + in(n.right);
            if (n.right == null)return in(n.left) + n.val + " ";
            return in(n.left) + n.val + " " + in(n.right);
        }

        String post(JNode n) {
            if (isLeaf(n))      return n.val + " ";
            if (n.left == null) return post(n.right) + n.val + " ";
            if (n.right == null)return post(n.left) + n.val + " ";
            return post(n.left) + post(n.right) + n.val + " ";
        }

        String rev(JNode n) {
            if (isLeaf(n))      return n.val + " ";
            if (n.right == null)return n.val + " " + rev(n.left);
            if (n.left == null) return rev(n.right) + n.val + " ";
            return rev(n.right) + n.val + " " + rev(n.left);
        }
    }

    static class JNode {
        JNode left, right, parent;
        String val;
        int depth;

        JNode(String s) { val = s; }

        int add(JNode n) {
            n.depth++;
            if (val.compareTo(n.val) < 0) {
                if (right == null) { right = n; return n.depth; }
                else return right.add(n);
            } else {
                if (left == null) { left = n; return n.depth; }
                else return left.add(n);
            }
        }
    }

    // =========================================================================
    // 8. MELINA  (Region)
    // =========================================================================
    static class MelinaSolution {
        public void run() throws Exception {
            Scanner file = new Scanner(new File("melina.dat"));
            int times = file.nextInt();
            file.nextLine();
            while (times-- > 0) {
                double amt   = file.nextDouble();
                double total = file.nextDouble();
                file.nextLine();
                String[] st = file.nextLine().trim().split(" ");
                int[] coins = new int[st.length];
                for (int y = 0; y < coins.length; y++) coins[y] = (int)(Double.parseDouble(st[y]) * 100);
                int sum = (int)(100 * (amt - total));
                System.out.println(solve(coins, sum));
            }
        }

        long solve(int[] coins, int sum) {
            long[] dp = new long[sum + 1];
            dp[0] = 1;
            for (int coin : coins)
                for (int j = coin; j <= sum; j++)
                    dp[j] += dp[j - coin];
            return dp[sum];
        }
    }

    // =========================================================================
    // 9. REMY  (Region)
    // =========================================================================
    static class RemySolution {
        public static void run() throws IOException {
            Scanner input = new Scanner(new File("remy.dat"));
            int reqCount = 0;
            Map<String, Integer> ipCounts  = new HashMap<>();
            int errCount = 0;
            Map<String, Integer> urlCounts = new HashMap<>();
            while (input.hasNext()) {
                String[] line = input.nextLine().split(" ");
                reqCount++;
                String ip = line[2];
                ipCounts.put(ip, ipCounts.getOrDefault(ip, 0) + 1);
                if (line[5].charAt(0) == '4' || line[5].charAt(0) == '5') errCount++;
                String url = line[4];
                urlCounts.put(url, urlCounts.getOrDefault(url, 0) + 1);
            }
            int maxCount = 0;
            String topIp = "";
            for (String i : ipCounts.keySet())
                if (ipCounts.get(i) > maxCount) { maxCount = ipCounts.get(i); topIp = i; }
            maxCount = 0;
            String topUrl = "";
            for (String i : urlCounts.keySet())
                if (urlCounts.get(i) > maxCount) { maxCount = urlCounts.get(i); topUrl = i; }
            System.out.println("Total requests: " + reqCount);
            System.out.println("Unique IP addresses: " + ipCounts.size());
            System.out.println("Most frequent IP address: " + topIp + " (" + ipCounts.get(topIp) + " requests)");
            System.out.println("Error rate: " + String.format("%.2f", (100.0 * errCount / reqCount)) + "%");
            System.out.println("Most requested URL: " + topUrl + " (" + urlCounts.get(topUrl) + " requests)");
        }
    }

    // =========================================================================
    // 10. RILEY  (Region)
    // =========================================================================
    static class RileySolution {
        public static void run() throws FileNotFoundException {
            Scanner data = new Scanner(new File("riley.dat"));
            int T = data.nextInt();
            for (int t = 1; t <= T; t++) {
                int R = data.nextInt(), C = data.nextInt();
                int[][] grid = new int[R][C];
                for (int r = 0; r < R; r++)
                    for (int c = 0; c < C; c++)
                        grid[r][c] = data.nextInt();
                int top = 0, bottom = R - 1, left = 0, right = C - 1;
                while (top <= bottom && left <= right) {
                    float sum = 0;
                    int count = 0, r, c;
                    r = top;
                    for (c = left; c <= right; c++) { sum += grid[r][c]; count++; }
                    top++;
                    c = right;
                    for (r = top; r <= bottom; r++) { sum += grid[r][c]; count++; }
                    right--;
                    r = bottom;
                    for (c = right; c >= left && bottom >= top; c--) { sum += grid[r][c]; count++; }
                    bottom--;
                    c = left;
                    for (r = bottom; r >= top && left <= right; r--) { sum += grid[r][c]; count++; }
                    left++;
                    if (count > 0) System.out.printf("%4.2f ", sum / count);
                }
                System.out.println();
            }
            data.close();
        }
    }

    // =========================================================================
    // 11. SAIM  (Region)
    // =========================================================================
    static class SaimSolution {
        public void run() throws Exception {
            Scanner file = new Scanner(new File("saim.dat"));
            int times = file.nextInt();
            int[] h  = {1000, 1500, 800, 1000};
            int[] rt = {100, 100, 120, 80};
            int[] rb = {200, 260, 220, 150};
            int[] lb = {40, 20, 50, 80};
            int[] record = new int[3];
            file.nextLine();
            while (times-- > 0) {
                int you = file.next().charAt(0) - 'A';
                int saim = file.next().charAt(0) - 'A';
                int ym = 1, sm = 1;
                int rounds = file.nextInt();
                file.nextLine();
                String[] sty = null, sts = null;
                if (rounds != 0) {
                    sty = file.nextLine().trim().split("\\s+");
                    sts = file.nextLine().trim().split("\\s+");
                }
                int yh = h[you], sh = h[saim];
                boolean done = false;
                for (int i = 0; i < rounds; i++) {
                    ym = 1;
                    switch (sty[i]) {
                        case "RT": sh -= sm * rt[you]; break;
                        case "RB": sh -= sm * rb[you]; ym = 2; break;
                        case "LB": yh += lb[you]; break;
                        case "LT": ym = 0; break;
                    }
                    if (sh <= 0) { record[0]++; System.out.println("You"); done = true; break; }
                    sm = 1;
                    switch (sts[i]) {
                        case "RT": yh -= ym * rt[saim]; break;
                        case "RB": yh -= ym * rb[saim]; sm = 2; break;
                        case "LB": sh += lb[saim]; break;
                        case "LT": sm = 0; break;
                    }
                    if (yh <= 0) { record[2]++; System.out.println("Saim"); done = true; break; }
                }
                if (!done) { record[1]++; System.out.println("Draw"); }
            }
            System.out.println(record[0] + "-" + record[1] + "-" + record[2]);
        }
    }

    // =========================================================================
    // 12. SASHA  (Region)
    // =========================================================================
    static class SashaSolution {
        public void run() throws IOException {
            BufferedReader file = new BufferedReader(new FileReader("sasha.dat"));
            PrintWriter out = new PrintWriter(System.out);
            int numTimes = Integer.parseInt(file.readLine());
            while (numTimes-- > 0) {
                int m = Integer.parseInt(file.readLine());
                int[] h = Arrays.asList(file.readLine().split(" ")).stream()
                        .map(Integer::parseInt).mapToInt(Integer::intValue).toArray();
                int[] maxLeft  = new int[m];
                int[] maxRight = new int[m];
                int[] volume   = new int[m];
                maxLeft[0] = maxRight[m - 1] = 0;
                for (int i = 1; i < m; i++)
                    maxLeft[i] = maxLeft[i - 1] > h[i - 1] ? maxLeft[i - 1] : h[i - 1];
                for (int i = m - 2; i > 0; i--)
                    maxRight[i] = maxRight[i + 1] > h[i + 1] ? maxRight[i + 1] : h[i + 1];
                for (int i = 0; i < m; i++) {
                    int pv = (Math.min(maxRight[i], maxLeft[i])) - h[i];
                    volume[i] = Math.max(pv, 0);
                }
                long[] buckets = new long[m / 2];
                int index = -1, total = 0;
                for (int i = 1; i < m; i++) {
                    if (volume[i - 1] == 0 && volume[i] != 0) {
                        buckets[++index] = volume[i];
                        total += volume[i];
                    } else if (volume[i] != 0) {
                        buckets[index] += volume[i];
                        total += volume[i];
                    }
                }
                if (index == -1) {
                    out.println("Dry as a Bone...");
                } else {
                    for (int i = 0; i <= index; i++) out.print(buckets[i] + " ");
                    out.println(total);
                }
            }
            file.close();
            out.close();
        }
    }

    // =========================================================================
    // 13. WESLEY  (Region)
    // =========================================================================
    static class WesleySolution {
        char[][]    mat;
        boolean[][][] smat;

        public void run() throws Exception {
            Scanner file = new Scanner(new File("wesley.dat"));
            int times = file.nextInt();
            file.nextLine();
            while (times-- > 0) {
                int rr = file.nextInt(), cc = file.nextInt();
                int sr = -1, sc = -1, er = -1, ec = -1;
                mat  = new char[rr][cc];
                smat = new boolean[5][rr][cc];
                file.nextLine();
                for (int r = 0; r < rr; r++) {
                    mat[r] = file.nextLine().trim().toCharArray();
                    for (int c = 0; c < cc; c++) {
                        if (mat[r][c] == 'E') { er = r; ec = c; }
                        if (mat[r][c] == 'S') { sr = r; sc = c; }
                    }
                }
                if (er == -1) { System.out.println("Guess I won't be home in time for dinner."); continue; }
                solve(0, sr, sc);
                System.out.println(check(er, ec)
                        ? "The Great Escape."
                        : "Guess I won't be home in time for dinner.");
            }
        }

        void solve(int d, int r, int c) {
            if (r < 0 || c < 0 || r >= mat.length || c >= mat[r].length
                    || wstr(d).contains("" + mat[r][c]) || smat[d][r][c]) return;
            smat[d][r][c] = true;
            d = (d + 1) % 5;
            solve(d, r + 1, c); solve(d, r - 1, c);
            solve(d, r, c + 1); solve(d, r, c - 1);
        }

        String wstr(int d) {
            if (d == 0) return "#53";
            if (d == 1) return "$";
            if (d == 2) return "#15";
            if (d == 3) return ".SE";
            if (d == 4) return "#13";
            return "153#.SE";
        }

        boolean check(int r, int c) {
            return smat[0][r][c] || smat[1][r][c] || smat[2][r][c] || smat[3][r][c] || smat[4][r][c];
        }
    }
}
