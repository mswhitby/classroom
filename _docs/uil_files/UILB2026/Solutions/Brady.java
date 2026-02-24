import java.io.*;
import java.util.*;

public class Brady {
    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(new File("brady.dat"));
        
        int K = sc.nextInt();
        
        for (int t = 0; t < K; t++) {
            int N = sc.nextInt();
            int Q = sc.nextInt();
            sc.nextLine(); // consume newline
            
            String[] words = sc.nextLine().split(" ");
            
            // Build the N-gram model
            // Map from context (N-1 words joined by space) to (word -> count)
            Map<String, Map<String, Integer>> model = new HashMap<>();
            
            for (int i = 0; i <= words.length - N; i++) {
                // Build context from words[i] to words[i+N-2]
                StringBuilder contextBuilder = new StringBuilder();
                for (int j = i; j < i + N - 1; j++) {
                    if (j > i) contextBuilder.append(" ");
                    contextBuilder.append(words[j]);
                }
                String context = contextBuilder.toString();
                String nextWord = words[i + N - 1];
                
                // Update counts
                if (!model.containsKey(context)) {
                    model.put(context, new HashMap<>());
                }
                Map<String, Integer> counts = model.get(context);
                counts.put(nextWord, counts.getOrDefault(nextWord, 0) + 1);
            }
            
            // Answer queries
            for (int q = 0; q < Q; q++) {
                String query = sc.nextLine();
                
                if (!model.containsKey(query)) {
                    System.out.println("unknown");
                } else {
                    Map<String, Integer> counts = model.get(query);
                    
                    // Find the word with highest count (alphabetically first if tied)
                    String bestWord = null;
                    int bestCount = 0;
                    
                    for (Map.Entry<String, Integer> entry : counts.entrySet()) {
                        String word = entry.getKey();
                        int count = entry.getValue();
                        
                        if (count > bestCount || (count == bestCount && word.compareTo(bestWord) < 0)) {
                            bestWord = word;
                            bestCount = count;
                        }
                    }
                    
                    System.out.println(bestWord);
                }
            }
        }
        sc.close();
    }
}
