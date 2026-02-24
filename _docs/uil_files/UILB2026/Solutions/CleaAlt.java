import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.StringTokenizer;

/**
 * Alternative solution using Tarjan's approach to Edmonds' Algorithm
 * for Maximum Spanning Arborescence.
 * 
 * This implementation uses Union-Find for efficient supernode management
 * and processes nodes in a more incremental fashion.
 * 
 * Time Complexity: O(VE) per test case
 */
public class CleaAlt {
    public static void main(String[] args) throws IOException {
        new CleaAlt().run();
    }

    private void run() throws IOException {
        BufferedReader file = new BufferedReader(new FileReader("clea.dat"));
        PrintWriter out = new PrintWriter(new BufferedWriter(new OutputStreamWriter(System.out)));

        solve(file, out);

        file.close();
        out.close();
    }

    public void solve(BufferedReader file, PrintWriter out) throws IOException {
        int T = Integer.parseInt(file.readLine().trim());
        while (T-- > 0) {
            int n = Integer.parseInt(file.readLine().trim());

            StringTokenizer st = new StringTokenizer(file.readLine());
            int[] silverParents = new int[n + 1];
            for (int i = 1; i <= n; i++) {
                silverParents[i] = Integer.parseInt(st.nextToken());
            }

            st = new StringTokenizer(file.readLine());
            int[] obsidianParents = new int[n + 1];
            for (int i = 1; i <= n; i++) {
                obsidianParents[i] = Integer.parseInt(st.nextToken());
            }

            int result = solveCase(n, silverParents, obsidianParents);
            out.println(result);
        }
    }

    private int solveCase(int n, int[] silver, int[] obsidian) {
        // Build edge list
        // Node 0 is the super-root
        // Nodes 1..n are the actual people

        List<int[]> edges = new ArrayList<>();

        for (int child = 1; child <= n; child++) {
            int silverP = silver[child];
            int obsidianP = obsidian[child];

            if (silverP == obsidianP) {
                if (silverP != 0) {
                    edges.add(new int[] { silverP, child, 2 });
                }
            } else {
                if (silverP != 0) {
                    edges.add(new int[] { silverP, child, 1 });
                }
                if (obsidianP != 0) {
                    edges.add(new int[] { obsidianP, child, 1 });
                }
            }

            // Edge from super-root (0) with weight 0
            edges.add(new int[] { 0, child, 0 });
        }

        return tarjanEdmonds(n + 1, 0, edges);
    }

    /**
     * Tarjan-style implementation of Edmonds' Algorithm.
     * 
     * Uses Union-Find to manage supernodes efficiently.
     * 
     * @param n     total number of nodes (0 to n-1)
     * @param root  the root node
     * @param edges list of [from, to, weight] edges
     * @return maximum total weight of arborescence
     */
    private int tarjanEdmonds(int n, int root, List<int[]> edges) {
        // For this implementation, we'll use an approach that processes
        // each node and handles cycle contraction on-the-fly

        final int MAX_NODES = 2 * n; // Space for contracted supernodes

        // Union-Find parent array (-1 means self)
        int[] uf = new int[MAX_NODES];
        Arrays.fill(uf, -1);

        // Best incoming edge for each supernode
        int[] bestFrom = new int[MAX_NODES];
        int[] bestWeight = new int[MAX_NODES];
        Arrays.fill(bestWeight, Integer.MIN_VALUE);

        // Initialize best incoming edges
        for (int[] e : edges) {
            int to = e[1];
            int weight = e[2];
            if (to != root && weight > bestWeight[to]) {
                bestWeight[to] = weight;
                bestFrom[to] = e[0];
            }
        }

        // Status: 0 = unvisited, 1 = in current path, 2 = done
        int[] status = new int[MAX_NODES];
        status[root] = 2;

        int totalWeight = 0;
        int nextNode = n; // Next ID for contracted supernodes

        for (int start = 0; start < n; start++) {
            if (start == root || status[start] == 2)
                continue;

            // Trace from this node following best edges
            List<Integer> path = new ArrayList<>();
            int cur = start;

            while (status[cur] == 0) {
                if (bestWeight[cur] == Integer.MIN_VALUE) {
                    return -1; // No incoming edge
                }

                status[cur] = 1;
                path.add(cur);
                totalWeight += bestWeight[cur];

                // Move to the supernode of the best edge's source
                int pred = find(uf, bestFrom[cur]);

                if (status[pred] == 1) {
                    // Found a cycle - contract it
                    int cycleIdx = -1;
                    for (int i = 0; i < path.size(); i++) {
                        if (path.get(i) == pred) {
                            cycleIdx = i;
                            break;
                        }
                    }

                    if (cycleIdx == -1) {
                        // pred is in a different cycle being processed - should not happen
                        cur = pred;
                        break;
                    }

                    // Create new supernode
                    int superNode = nextNode++;
                    bestWeight[superNode] = Integer.MIN_VALUE;
                    status[superNode] = 0;

                    // Union all cycle nodes into supernode
                    for (int i = cycleIdx; i < path.size(); i++) {
                        int node = path.get(i);
                        uf[node] = superNode;
                        status[node] = 2; // Mark as done
                    }

                    // Find best external edge into the cycle
                    for (int[] e : edges) {
                        int from = find(uf, e[0]);
                        int to = find(uf, e[1]);

                        if (from != superNode && to == superNode) {
                            // Edge entering the supernode
                            // Adjusted weight = original weight - weight of edge being replaced
                            int origTo = e[1];
                            int adjusted = e[2] - bestWeight[origTo];

                            if (adjusted > bestWeight[superNode]) {
                                bestWeight[superNode] = adjusted;
                                bestFrom[superNode] = from;
                            }
                        }
                    }

                    // Continue from the supernode
                    cur = superNode;
                } else {
                    cur = pred;
                }
            }

            // Mark all path nodes as done
            for (int node : path) {
                int rep = find(uf, node);
                status[rep] = 2;
            }
        }

        return totalWeight;
    }

    private int find(int[] uf, int x) {
        if (uf[x] == -1)
            return x;
        return uf[x] = find(uf, uf[x]);
    }
}
