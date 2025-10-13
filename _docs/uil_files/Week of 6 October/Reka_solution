import java.io.*;
import java.util.*;
import java.util.regex.*;

public class Reka {
    public static void main(String[] args) throws IOException {
        Scanner scan = new Scanner(new File("reka.dat"));
        int T = scan.nextInt();
        assert 1 <= T && T <= 50;

        for (int caseNum = 1; caseNum <= T; caseNum++) {
            System.out.printf("Case #%d: %s\n", caseNum, solve(scan));
        }
    }

    private static String solve(Scanner scan) {
        long L = scan.nextLong();
        int c = scan.nextInt();

        assert 1 <= L && L <= 1e18;
        assert 0 <= c && c <= 200;
        assert c <= L;

        long pairs = (L + 1) / 2;

        Map<Long, Character> map = new HashMap<>();
        for (int i = 0; i < c; i++) {
            long idx = scan.nextLong();
            String s = scan.next();
            assert Pattern.matches("^[a-z]$", s);

            map.put(idx, s.charAt(0));
            pairs--;
        }

        for (Map.Entry<Long, Character> entry : map.entrySet()) {
            long other = L + 1 - entry.getKey();
            if (other == entry.getKey()) {
                // In the middle, nothing to do
            } else if (entry.getKey() < other && map.containsKey(other)) {
                // We have a matching pair of indices. Ensure the characters are equal. If not, no solution.
                if (entry.getValue() != map.get(other)) {
                    return "0";
                }

                // We overcounted the number of pairs
                pairs++;
            }
        }

        long exp = pairs;

        final long MOD = 1_000_000_000;

        // answer is 26^pairs
        long ans = 1;
        long base = 26L;
        while (exp > 0) {
            if (exp % 2 == 1) {
                ans = ans * base % MOD;
            }

            base = base * base % MOD;
            exp /= 2;
        }

        if (pairs >= 7) {
            // This is the tricky part of this problem: need leading
            // 0s, but only if the answer is >= 10^9
            return String.format("%09d", ans);
        } else {
            return Long.toString(ans);
        }
    }
}
