import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class Asa {
    public static void main(String[] args) {

        String statement = "Happy Valentine’s Day to the World’s Greatest CompSci Judges!!!";
        List<String> words = Arrays.asList(statement.split(" "));
        for(int i = 0; i < 3; i++){
            for(int j = 0; j < words.size(); j++) {
                for (String word : words) {
                    System.out.print(word+" ");
                }
                System.out.println();
                Collections.rotate(words, - 1);
            }
        }
        for (String word : words) {
            System.out.print(word+" ");
        }
        System.out.println();

    }
}
