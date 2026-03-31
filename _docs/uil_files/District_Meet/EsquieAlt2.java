import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.util.Arrays;

public class EsquieAlt2 {
    public static void main(String[] args) throws IOException {
        new EsquieAlt2().run();
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

    public void solve(BufferedReader file, PrintWriter out) throws IOException {
        int T = Integer.parseInt(file.readLine());
        while (T-- > 0) {
            int[] time = Arrays.asList(file.readLine().split(":")).stream().mapToInt(Integer::parseInt).toArray();

            double alpha = ((time[0] % TOTAL_HOURS) * ANGLE_PER_HOUR_H) + (time[1] * ANGLE_PER_MINUTE_H);
            double beta = ((time[1] * ANGLE_PER_MINUTE_M) - alpha + TOTAL_ANGLE) % TOTAL_ANGLE;
            out.printf("%05.1f:%05.1f\n", alpha, beta);
        }
    }
}
