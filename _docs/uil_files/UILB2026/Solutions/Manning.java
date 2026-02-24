import java.io.*;
import java.util.*;

public class Manning {
    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(new File("manning.dat"));

        int K = sc.nextInt();

        for (int t = 0; t < K; t++) {
            int n = sc.nextInt();
            int m = sc.nextInt();

            // Map currency names to indices
            Map<String, Integer> currencyIndex = new HashMap<>();
            for (int i = 0; i < n; i++) {
                String name = sc.next();
                currencyIndex.put(name, i);
            }

            // Store edges: from, to, -log(rate)
            // We use -log so that maximizing product becomes minimizing sum
            // Arbitrage exists if there's a negative cycle
            int[] edgeFrom = new int[m];
            int[] edgeTo = new int[m];
            double[] edgeWeight = new double[m];

            for (int i = 0; i < m; i++) {
                String from = sc.next();
                String to = sc.next();
                double rate = sc.nextDouble();

                edgeFrom[i] = currencyIndex.get(from);
                edgeTo[i] = currencyIndex.get(to);
                edgeWeight[i] = -Math.log(rate);
            }

            // Bellman-Ford to detect negative cycle
            double[] dist = new double[n];
            Arrays.fill(dist, 0); // Start all at 0 (virtual source concept)

            // Relax edges n-1 times
            for (int i = 0; i < n - 1; i++) {
                for (int j = 0; j < m; j++) {
                    if (dist[edgeFrom[j]] + edgeWeight[j] < dist[edgeTo[j]]) {
                        dist[edgeTo[j]] = dist[edgeFrom[j]] + edgeWeight[j];
                    }
                }
            }

            // Check for negative cycle (one more relaxation)
            boolean hasArbitrage = false;
            for (int j = 0; j < m; j++) {
                if (dist[edgeFrom[j]] + edgeWeight[j] < dist[edgeTo[j]] - 1e-9) {
                    hasArbitrage = true;
                    break;
                }
            }

            System.out.println(hasArbitrage ? "Cha Ching!!" : "gg");
        }
        sc.close();
    }
}