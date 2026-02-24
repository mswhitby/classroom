import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.util.StringTokenizer;

public class Noco {
    public static void main(String[] args) throws IOException {
        new Noco().run();
    }

    private void run() throws IOException {
        BufferedReader file = new BufferedReader(new FileReader("noco.dat"));
        PrintWriter out = new PrintWriter(new BufferedWriter(new OutputStreamWriter(System.out)));

        solve(file, out);

        file.close();
        out.close();
    }

    public void solve(BufferedReader file, PrintWriter out) throws IOException {
        int T = Integer.parseInt(file.readLine());
        for (int t = 0; t < T; t++) {
            StringTokenizer st = new StringTokenizer(file.readLine());
            int n = Integer.parseInt(st.nextToken());
            int m = Integer.parseInt(st.nextToken());
            int a = Integer.parseInt(st.nextToken());
            int b = Integer.parseInt(st.nextToken());
            int c = Integer.parseInt(st.nextToken());

            char[] s1 = file.readLine().toCharArray();
            char[] s2 = file.readLine().toCharArray();

            out.println(sequenceAlignment(s1, s2, n, m, a, b, c));
        }
    }

    private int sequenceAlignment(char[] s1, char[] s2, int n, int m, int a, int b, int c) {
        int[] prev = new int[m + 1];
        int[] cur = new int[m + 1];

        // Base case: aligning empty s1 with prefix of s2 -> all gaps
        for (int j = 0; j <= m; j++) {
            prev[j] = j * -c;
        }

        for (int i = 1; i <= n; i++) {
            // Base case: aligning prefix of s1 with empty s2 -> all gaps
            cur[0] = i * -c;

            for (int j = 1; j <= m; j++) {
                int matchScore;
                if (s1[i - 1] == s2[j - 1]) {
                    matchScore = prev[j - 1] + a;
                } else {
                    matchScore = prev[j - 1] - b;
                }

                int gapInS2 = prev[j] - c;
                int gapInS1 = cur[j - 1] - c;

                cur[j] = Math.max(matchScore, Math.max(gapInS2, gapInS1));
            }

            // swap arrays
            int[] temp = prev;
            prev = cur;
            cur = temp;
        }

        return prev[m];
    }
}
