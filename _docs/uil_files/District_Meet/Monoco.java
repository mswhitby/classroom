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
import java.util.Arrays;
import java.util.Base64;
import java.util.LinkedList;
import java.util.Queue;

public class Monoco {
    public static void main(String[] args) throws IOException {
        new Monoco().run();
    }

    private void run() throws IOException {
        BufferedReader file = new BufferedReader(new FileReader("monoco.dat"));
        PrintWriter out = new PrintWriter(new BufferedWriter(new OutputStreamWriter(System.out)));

        solve(file, out);

        file.close();
        out.close();
    }

    public void solve(BufferedReader file, PrintWriter out) throws IOException {
        int T = Integer.parseInt(file.readLine());
        while (T-- > 0) {
            String byteStream = file.readLine();
            Object o = null;
            try {
                o = Serializer.unmarshall(byteStream);
            } catch (Exception e) {
                System.out.println("Come on problem setter, get your classes straight!");
                return;
            }

            BinTreeNode binTree = null;
            if (o instanceof BinTreeNode) {
                binTree = BinTreeNode.class.cast(o);
            } else {
                System.out.println("Come on problem setter, get your classes straight!");
                return;
            }

            out.println(binTree);
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

class BinTreeNode implements Serializable {
    public static final long serialVersionUID = 1L;

    protected int value;
    protected BinTreeNode left, right;

    public BinTreeNode(int value) {
        this.value = value;
    }

    private int getHeight() {
        if (left == null && right == null) {
            return 0;
        }
        return 1 + Math.max(left != null ? left.getHeight() : 0, right != null ? right.getHeight() : 0);
    }

    public Integer[] getArrayRepresentation() {
        int h = getHeight();
        int vArray = (int) Math.pow(2, h + 1) - 1;
        Integer[] array = new Integer[vArray];

        Queue<Object[]> queue = new LinkedList<Object[]>();
        queue.add(new Object[] { this, 0 });

        while (!queue.isEmpty()) {
            Object[] item = queue.poll();
            BinTreeNode node = (BinTreeNode) item[0];
            int index = (int) item[1];

            if (node.left != null) {
                queue.add(new Object[] { node.left, index * 2 + 1 });
            }
            if (node.right != null) {
                queue.add(new Object[] { node.right, index * 2 + 2 });
            }

            array[index] = node.value;
        }

        return array;
    }

    @Override
    public String toString() {
        return Arrays.toString(getArrayRepresentation()).replaceAll("[\\[\\],]", "");
    }
}
