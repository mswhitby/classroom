import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.FileReader;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.io.Serializable;
import java.util.Base64;
import java.util.HashMap;
import java.util.HashSet;

public class Alicia {
    public static void main(String[] args) throws IOException {
        new Alicia().run();
    }

    private void run() throws IOException {
        BufferedReader file = new BufferedReader(new FileReader("alicia.dat"));
        PrintWriter out = new PrintWriter(new BufferedWriter(new OutputStreamWriter(System.out)));

        solve(file, out);

        file.close();
        out.close();
    }

    public void solve(BufferedReader file, PrintWriter out) throws IOException {
        int T = Integer.parseInt(file.readLine());
        for (int t = 0; t < T; t++) {
            String byteStream = file.readLine();
            Object o = null;
            try {
                o = Serializer.unmarshall(byteStream);
            } catch (ClassNotFoundException e) {
                out.println("Come on problem setter, get your classes straight!");
                continue;
            }

            Graph graph = null;
            if (o instanceof Graph) {
                graph = Graph.class.cast(o);
            } else {
                out.println("Come on problem setter, get your classes straight!");
                continue;
            }
            out.println(graph.toString());
        }
    }
}

class Serializer {
    public static String marshall(Serializable o) throws IOException {
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        ObjectOutputStream oos = new ObjectOutputStream(baos);
        oos.writeObject(o);
        String encodedData = Base64.getEncoder().encodeToString(baos.toByteArray());
        baos.close();
        oos.close();
        return encodedData;
    }

    public static Object unmarshall(String s) throws ClassNotFoundException, IOException {
        byte[] data = Base64.getDecoder().decode(s);
        ByteArrayInputStream bais = new ByteArrayInputStream(data);
        ObjectInputStream ois = new ObjectInputStream(bais);
        Object o = ois.readObject();
        bais.close();
        ois.close();
        return o;
    }
}

enum Directedness {
    Undirected, Directed;
}

enum Cyclicity {
    Cyclic, Acyclic;
}

enum Connectedness {
    Connected, Disconnected, Weakly_Connected, Strongly_Connected, Unilaterally_Connected;
}

class Graph implements Serializable {
    public static final long serialVersionUID = 1L;

    private HashMap<Integer, HashSet<Integer>> g;
    private int n, m;

    public Graph(HashMap<Integer, HashSet<Integer>> g, int n, int m) {
        this.g = g;
        this.n = n;
        this.m = m;
    }

    private Directedness directedness;

    public Directedness getDirectedness() {
        for (int u : g.keySet()) {
            HashSet<Integer> e = g.get(u);
            for (int v : e) {
                if (!g.get(v).contains(u)) {
                    this.directedness = Directedness.Directed;
                    return Directedness.Directed;
                }
            }
        }
        this.directedness = Directedness.Undirected;
        return Directedness.Undirected;
    }

    private Cyclicity cyclicity;

    public Cyclicity getCyclicity() {
        boolean[] visited = new boolean[n];
        if (this.directedness == Directedness.Undirected) {
            // Cycle detection for an undirected graph
            for (int u : g.keySet()) {
                if (!visited[u] && undirectedDFS(visited, -1, u)) {
                    this.cyclicity = Cyclicity.Cyclic;
                    return Cyclicity.Cyclic;
                }
            }
            this.cyclicity = Cyclicity.Acyclic;
            return Cyclicity.Acyclic;
        } else {
            // Cycle detection for a directed graph
            boolean[] recStack = new boolean[n];
            for (int u : g.keySet()) {
                if (!visited[u] && directedDFS(visited, recStack, u)) {
                    this.cyclicity = Cyclicity.Cyclic;
                    return Cyclicity.Cyclic;
                }
            }
            this.cyclicity = Cyclicity.Acyclic;
            return Cyclicity.Acyclic;
        }
    }

    private boolean undirectedDFS(boolean[] visited, int parent, int u) {
        visited[u] = true;

        for (int v : g.get(u)) {
            if (!visited[v]) {
                if (undirectedDFS(visited, u, v)) {
                    return true;
                }
            } else if (v != parent) {
                return true;
            }
        }
        return false;
    }

    private boolean directedDFS(boolean[] visited, boolean[] recStack, int u) {
        if (recStack[u]) {
            return true;
        } else if (visited[u]) {
            return false;
        }

        visited[u] = true;
        recStack[u] = true;

        for (int v : g.get(u)) {
            if (directedDFS(visited, recStack, v)) {
                return true;
            }
        }

        recStack[u] = false;
        return false;
    }

    protected Connectedness connectedness;

    @Override
    public String toString() {
        getDirectedness();
        getCyclicity();

        if (directedness == Directedness.Undirected && connectedness == Connectedness.Connected
                && cyclicity == Cyclicity.Acyclic) {
            return String.format("Tree (%s, %s, %s Graph)", directedness, connectedness, cyclicity);
        }

        StringBuilder sb = new StringBuilder();
        sb.append(directedness.toString()).append(", ");
        sb.append(connectedness.toString().replaceAll("_", " ")).append(", ");
        sb.append(cyclicity.toString()).append(" Graph");
        return sb.toString();
    }
}