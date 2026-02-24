import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.util.Arrays;
import java.util.HashMap;
import java.util.TreeSet;

public class Jun {
    public static void main(String[] args) throws IOException {
        new Jun().run();
    }

    private void run() throws IOException {
        BufferedReader file = new BufferedReader(new FileReader("jun.dat"));
        PrintWriter out = new PrintWriter(new BufferedWriter(new OutputStreamWriter(System.out)));

        solve(file, out);

        file.close();
        out.close();
    }

    private static final String MONTHS[] = {
            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    };

    private class CityReport {
        private String name;
        private double totalTemp, totalPrecip, coldestTemp;
        private int numEntries, windiest, windiestMonth, windiestDay, coldestTempMonth, coldestTempDay;

        public CityReport(String name) {
            this.name = name;
            totalTemp = totalPrecip = windiest = windiestDay = windiestMonth = numEntries = 0;
            coldestTemp = Double.MAX_VALUE;
        }

        public void addEntry(int month, int day, double temp, double precip, int wind) {
            totalTemp += temp;
            totalPrecip += precip;
            if (wind > windiest) {
                windiest = wind;
                windiestMonth = month;
                windiestDay = day;
            }
            if (temp < coldestTemp) {
                coldestTemp = temp;
                coldestTempMonth = month;
                coldestTempDay = day;
            }
            numEntries++;
        }

        public double getColdestTemp() {
            return coldestTemp;
        }

        public String printColdestTemp() {
            return String.format("%s on %s %d: %.1f F", name, MONTHS[coldestTempMonth - 1], coldestTempDay,
                    coldestTemp);
        }

        @Override
        public String toString() {
            return String.format("%s\n Average Temp: %.1f F\n Total Precip: %.2f in\n Windiest Day: %s %d (%d mph)\n",
                    name, totalTemp / numEntries, totalPrecip, MONTHS[windiestMonth - 1], windiestDay, windiest);
        }
    }

    public void solve(BufferedReader file, PrintWriter out) throws IOException {
        HashMap<String, CityReport> reports = new HashMap<String, CityReport>();
        String line = file.readLine();

        while (line != null) {
            String[] parts = line.split(",");

            if (!reports.containsKey(parts[1])) {
                reports.put(parts[1], new CityReport(parts[1]));
            }
            CityReport report = reports.get(parts[1]);

            int[] date = Arrays.asList(parts[0].split("-")).stream().mapToInt(Integer::parseInt).toArray();
            report.addEntry(date[1], date[2], Double.parseDouble(parts[2]), Double.parseDouble(parts[3]),
                    Integer.parseInt(parts[4]));

            line = file.readLine();
        }

        out.println("City Summaries\n");

        TreeSet<String> sortedNames = new TreeSet<String>(reports.keySet());
        double coldestTemp = Double.MAX_VALUE;
        String coldestCity = "";
        for (String name : sortedNames) {
            out.println(reports.get(name).toString());
            if (reports.get(name).getColdestTemp() < coldestTemp) {
                coldestTemp = reports.get(name).getColdestTemp();
                coldestCity = name;
            }
        }

        out.printf("Coldest Reading Overall\n %s\n", reports.get(coldestCity).printColdestTemp());
    }
}
