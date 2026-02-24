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
 * Solution using Edmonds' Algorithm (Chu-Liu/Edmonds' algorithm)
 * for Maximum Spanning Arborescence.
 * 
 * Time Complexity: O(VE) per test case
 */
public class Clea {
    public static void main(String[] args) throws IOException {
        new Clea().run();
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
        // Build edge list: edge from parent to child with weight
        // Node 0 is the super-root connecting to all nodes

        // For maximum arborescence, we need edges going INTO each node
        // Edge: (from, to, weight) means "from" is the parent of "to"

        List<int[]> edges = new ArrayList<>();

        for (int child = 1; child <= n; child++) {
            int silverP = silver[child];
            int obsidianP = obsidian[child];

            if (silverP == obsidianP) {
                // Both registries agree
                if (silverP != 0) {
                    // Both claim same non-zero parent: weight 2
                    edges.add(new int[] { silverP, child, 2 });
                }
                // If both are 0, no edge from registries, only super-root edge
            } else {
                // Registries disagree
                if (silverP != 0) {
                    edges.add(new int[] { silverP, child, 1 });
                }
                if (obsidianP != 0) {
                    edges.add(new int[] { obsidianP, child, 1 });
                }
            }

            // Add edge from super-root (0) to this child with weight 0
            // This ensures every node is reachable
            edges.add(new int[] { 0, child, 0 });
        }

        // Run Edmonds' algorithm with root = 0
        return edmondsMaxArborescence(n + 1, 0, edges);
    }

    /**
     * Edmonds' Algorithm for Maximum Spanning Arborescence
     * 
     * @param numNodes total number of nodes (0 to numNodes-1)
     * @param root     the root node
     * @param edges    list of [from, to, weight] edges
     * @return maximum total weight of arborescence
     */
    private int edmondsMaxArborescence(int numNodes, int root, List<int[]> edges) {
        // We use an iterative approach with contraction

        int totalWeight = 0;
        int[] id = new int[numNodes]; // Node mapping after contraction
        int[] prev = new int[numNodes]; // Best incoming edge source for each node
        int[] maxWeight = new int[numNodes]; // Best incoming edge weight for each node

        while (true) {
            // Initialize: find max weight incoming edge for each non-root node
            Arrays.fill(maxWeight, Integer.MIN_VALUE);
            maxWeight[root] = 0;
            Arrays.fill(prev, -1);

            for (int[] edge : edges) {
                int u = edge[0], v = edge[1], w = edge[2];
                if (u != v && v != root && w > maxWeight[v]) {
                    maxWeight[v] = w;
                    prev[v] = u;
                }
            }

            // Check if all non-root nodes have an incoming edge
            for (int i = 0; i < numNodes; i++) {
                if (i != root && prev[i] == -1) {
                    // Node unreachable - shouldn't happen with super-root edges
                    return -1;
                }
            }

            // Detect cycles among chosen edges
            int[] visited = new int[numNodes];
            Arrays.fill(visited, -1);
            int cycleId = 0;
            Arrays.fill(id, -1);

            for (int i = 0; i < numNodes; i++) {
                if (i == root)
                    continue;

                totalWeight += maxWeight[i];

                int v = i;
                while (v != root && visited[v] == -1 && id[v] == -1) {
                    visited[v] = i;
                    v = prev[v];
                }

                // If we found a cycle starting from node i
                if (v != root && id[v] == -1 && visited[v] == i) {
                    // Mark all nodes in cycle with same id
                    int u = v;
                    do {
                        id[u] = cycleId;
                        u = prev[u];
                    } while (u != v);
                    cycleId++;
                }
            }

            // If no cycles found, we're done
            if (cycleId == 0) {
                return totalWeight;
            }

            // Assign new ids to non-cycle nodes
            for (int i = 0; i < numNodes; i++) {
                if (id[i] == -1) {
                    id[i] = cycleId++;
                }
            }

            // Contract the graph
            List<int[]> newEdges = new ArrayList<>();
            for (int[] edge : edges) {
                int u = id[edge[0]], v = id[edge[1]], w = edge[2];
                if (u != v) {
                    // Adjust weight: subtract the weight of the edge being replaced
                    int adjustedWeight = w - maxWeight[edge[1]];
                    newEdges.add(new int[] { u, v, adjustedWeight });
                }
            }

            edges = newEdges;
            root = id[root];
            numNodes = cycleId;
            id = new int[numNodes];
            prev = new int[numNodes];
            maxWeight = new int[numNodes];
        }
    }
}
