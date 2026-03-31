import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.util.Arrays;

public class Esquie {
    public static void main(String[] args) throws IOException {
        new Esquie().run();
    }

    private void run() throws IOException {
        BufferedReader file = new BufferedReader(new FileReader("esquie.dat"));
        PrintWriter out = new PrintWriter(new BufferedWriter(new OutputStreamWriter(System.out)));

        solve(file, out);

        file.close();
        out.close();
    }

    private static final int TOTAL_ANGLE = 360;
    private static final int TOTAL_HOURS = 12;
    private static final int TOTAL_MINUTES_PER_HOUR = 60;
    private static final double ANGLE_PER_HOUR_H = TOTAL_ANGLE / TOTAL_HOURS;
    private static final double ANGLE_PER_MINUTE_H = ANGLE_PER_HOUR_H / TOTAL_MINUTES_PER_HOUR;
    private static final double ANGLE_PER_MINUTE_M = TOTAL_ANGLE / TOTAL_MINUTES_PER_HOUR;

    private static final String[] ANS = new String[TOTAL_HOURS * TOTAL_MINUTES_PER_HOUR];
    static {
        for (int h = 1; h <= 12; h++) {
            for (int m = 0; m < 60; m++) {
                double alpha = ((h % TOTAL_HOURS) * ANGLE_PER_HOUR_H) + (m * ANGLE_PER_MINUTE_H);
                double beta = ((m * ANGLE_PER_MINUTE_M) - alpha + TOTAL_ANGLE) % TOTAL_ANGLE;
                int time = (h % TOTAL_HOURS) * TOTAL_MINUTES_PER_HOUR + m;
                ANS[time] = String.format("%05.1f:%05.1f", alpha, beta);
            }
        }
    }

    public void solve(BufferedReader file, PrintWriter out) throws IOException {
        int T = Integer.parseInt(file.readLine());
        while (T-- > 0) {
            int[] time = Arrays.asList(file.readLine().split(":")).stream().mapToInt(Integer::parseInt).toArray();
            out.println(ANS[(time[0] % TOTAL_HOURS) * TOTAL_MINUTES_PER_HOUR + time[1]]);
        }
    }
}
