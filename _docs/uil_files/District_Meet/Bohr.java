import java.io.File;
import java.io.FileNotFoundException;
import java.util.*;

public class Bohr {
    
    static int N, M, T;
    static char[][] grid;
    static Map<String, Integer> controlOwner = new HashMap<>();
    static Map<String, Integer> controlValue = new HashMap<>();
    static List<int[]> redSpawns = new ArrayList<>();
    static List<int[]> blueSpawns = new ArrayList<>();
    static List<int[]> controlPoints = new ArrayList<>();
    static List<int[]> redSoldiers = new ArrayList<>();
    static List<int[]> blueSoldiers = new ArrayList<>();
    static Random redCombatRng, redRespawnRng, blueCombatRng, blueRespawnRng;
    static int redScore = 0, blueScore = 0;
    
    public static void main(String[] args) throws FileNotFoundException {
        Scanner sc = new Scanner(new File("bohr.dat"));
        
        N = sc.nextInt();
        M = sc.nextInt();
        T = sc.nextInt();
        
        int redCombatSeed = sc.nextInt();
        int redRespawnSeed = sc.nextInt();
        int blueCombatSeed = sc.nextInt();
        int blueRespawnSeed = sc.nextInt();
        
        int P = sc.nextInt();
        sc.nextLine();
        
        redCombatRng = new Random(redCombatSeed);
        redRespawnRng = new Random(redRespawnSeed);
        blueCombatRng = new Random(blueCombatSeed);
        blueRespawnRng = new Random(blueRespawnSeed);
        
        grid = new char[N][M];
        
        for (int i = 0; i < N; i++) {
            String line = sc.nextLine();
            for (int j = 0; j < M; j++) {
                grid[i][j] = line.charAt(j);
                
                if (grid[i][j] == 'R') {
                    redSpawns.add(new int[]{i, j});
                } else if (grid[i][j] == 'B') {
                    blueSpawns.add(new int[]{i, j});
                } else if (grid[i][j] >= '1' && grid[i][j] <= '9') {
                    controlPoints.add(new int[]{i, j, grid[i][j] - '0'});
                    String key = i + "," + j;
                    controlValue.put(key, grid[i][j] - '0');
                    controlOwner.put(key, 0);
                }
            }
        }
        
        int[] redStart = redSpawns.get(0);
        int[] blueStart = blueSpawns.get(0);
        
        for (int i = 0; i < P; i++) {
            redSoldiers.add(new int[]{redStart[0], redStart[1]});
            blueSoldiers.add(new int[]{blueStart[0], blueStart[1]});
        }
        
        for (int t = 0; t < T; t++) {
            phase0Scoring();
            phase1And2Movement();
            phase3Combat();
            phase4Capture();
            phase5Respawn();
        }
        
        System.out.println("Red: " + redScore);
        System.out.println("Blue: " + blueScore);
        
        sc.close();
    }
    
    static int redDeadCount = 0;
    static int blueDeadCount = 0;
    
    static void phase0Scoring() {
        for (int[] cp : controlPoints) {
            String key = cp[0] + "," + cp[1];
            int owner = controlOwner.get(key);
            int value = cp[2];
            if (owner == 1) redScore += value;
            else if (owner == 2) blueScore += value;
        }
    }
    
    static void phase1And2Movement() {
        for (int[] soldier : redSoldiers) {
            int[] target = findTarget(soldier, 1);
            moveSoldier(soldier, target);
        }
        for (int[] soldier : blueSoldiers) {
            int[] target = findTarget(soldier, 2);
            moveSoldier(soldier, target);
        }
    }
    
    static int[] findTarget(int[] soldier, int team) {
        boolean allControlled = true;
        for (int[] cp : controlPoints) {
            String key = cp[0] + "," + cp[1];
            if (controlOwner.get(key) != team) {
                allControlled = false;
                break;
            }
        }
        
        List<double[]> candidates = new ArrayList<>();
        
        if (!allControlled) {
            for (int[] cp : controlPoints) {
                String key = cp[0] + "," + cp[1];
                if (controlOwner.get(key) != team) {
                    double dist = euclideanDist(soldier[0], soldier[1], cp[0], cp[1]);
                    candidates.add(new double[]{dist, -cp[2], cp[0], cp[1]});
                }
            }
        } else {
            List<int[]> enemySpawns = (team == 1) ? blueSpawns : redSpawns;
            for (int[] spawn : enemySpawns) {
                double dist = euclideanDist(soldier[0], soldier[1], spawn[0], spawn[1]);
                candidates.add(new double[]{dist, 0, spawn[0], spawn[1]});
            }
        }
        
        if (candidates.isEmpty()) return null;
        
        candidates.sort((a, b) -> {
            if (Math.abs(a[0] - b[0]) > 1e-9) return Double.compare(a[0], b[0]);
            if (Math.abs(a[1] - b[1]) > 1e-9) return Double.compare(a[1], b[1]);
            if (Math.abs(a[2] - b[2]) > 1e-9) return Double.compare(a[2], b[2]);
            return Double.compare(a[3], b[3]);
        });
        
        return new int[]{(int)candidates.get(0)[2], (int)candidates.get(0)[3]};
    }
    
    static double euclideanDist(int r1, int c1, int r2, int c2) {
        return Math.sqrt((r1 - r2) * (r1 - r2) + (c1 - c2) * (c1 - c2));
    }
    
    static void moveSoldier(int[] soldier, int[] target) {
        if (target == null) return;
        
        int dy = target[0] - soldier[0];
        int dx = target[1] - soldier[1];
        
        if (dy < 0 && soldier[0] > 0 && grid[soldier[0] - 1][soldier[1]] != '#') {
            soldier[0]--;
            return;
        }
        if (dy > 0 && soldier[0] < N - 1 && grid[soldier[0] + 1][soldier[1]] != '#') {
            soldier[0]++;
            return;
        }
        
        if (dx < 0 && soldier[1] > 0 && grid[soldier[0]][soldier[1] - 1] != '#') {
            soldier[1]--;
            return;
        }
        if (dx > 0 && soldier[1] < M - 1 && grid[soldier[0]][soldier[1] + 1] != '#') {
            soldier[1]++;
            return;
        }
        
        if (dy == 0) {
            if (soldier[0] > 0 && grid[soldier[0] - 1][soldier[1]] != '#') {
                soldier[0]--;
                return;
            }
            if (soldier[0] < N - 1 && grid[soldier[0] + 1][soldier[1]] != '#') {
                soldier[0]++;
                return;
            }
        }
        
        if (dx == 0) {
            if (soldier[1] > 0 && grid[soldier[0]][soldier[1] - 1] != '#') {
                soldier[1]--;
                return;
            }
            if (soldier[1] < M - 1 && grid[soldier[0]][soldier[1] + 1] != '#') {
                soldier[1]++;
                return;
            }
        }
    }
    
    static void phase3Combat() {
        Map<String, List<Integer>> redByCell = new HashMap<>();
        Map<String, List<Integer>> blueByCell = new HashMap<>();
        
        for (int i = 0; i < redSoldiers.size(); i++) {
            int[] s = redSoldiers.get(i);
            String key = s[0] + "," + s[1];
            redByCell.computeIfAbsent(key, k -> new ArrayList<>()).add(i);
        }
        
        for (int i = 0; i < blueSoldiers.size(); i++) {
            int[] s = blueSoldiers.get(i);
            String key = s[0] + "," + s[1];
            blueByCell.computeIfAbsent(key, k -> new ArrayList<>()).add(i);
        }
        
        Set<Integer> redDead = new HashSet<>();
        Set<Integer> blueDead = new HashSet<>();
        
        for (int r = 0; r < N; r++) {
            for (int c = 0; c < M; c++) {
                String key = r + "," + c;
                List<Integer> reds = redByCell.get(key);
                List<Integer> blues = blueByCell.get(key);
                
                if (reds == null || blues == null || reds.isEmpty() || blues.isEmpty()) continue;
                
                List<int[]> redRolls = new ArrayList<>();
                List<int[]> blueRolls = new ArrayList<>();
                
                for (int idx : reds) {
                    redRolls.add(new int[]{redCombatRng.nextInt(100), idx});
                }
                for (int idx : blues) {
                    blueRolls.add(new int[]{blueCombatRng.nextInt(100), idx});
                }
                
                redRolls.sort((a, b) -> b[0] - a[0]);
                blueRolls.sort((a, b) -> b[0] - a[0]);
                
                int pairs = Math.min(redRolls.size(), blueRolls.size());
                for (int i = 0; i < pairs; i++) {
                    int redRoll = redRolls.get(i)[0];
                    int redIdx = redRolls.get(i)[1];
                    int blueRoll = blueRolls.get(i)[0];
                    int blueIdx = blueRolls.get(i)[1];
                    
                    if (redRoll > blueRoll) blueDead.add(blueIdx);
                    else if (blueRoll > redRoll) redDead.add(redIdx);
                    else {
                        redDead.add(redIdx);
                        blueDead.add(blueIdx);
                    }
                }
            }
        }
        
        List<int[]> newRedSoldiers = new ArrayList<>();
        List<int[]> newBlueSoldiers = new ArrayList<>();
        
        for (int i = 0; i < redSoldiers.size(); i++) {
            if (!redDead.contains(i)) newRedSoldiers.add(redSoldiers.get(i));
        }
        for (int i = 0; i < blueSoldiers.size(); i++) {
            if (!blueDead.contains(i)) newBlueSoldiers.add(blueSoldiers.get(i));
        }
        
        redSoldiers = newRedSoldiers;
        blueSoldiers = newBlueSoldiers;
        redDeadCount = redDead.size();
        blueDeadCount = blueDead.size();
    }
    
    static void phase4Capture() {
        Map<String, Integer> redCount = new HashMap<>();
        Map<String, Integer> blueCount = new HashMap<>();
        
        for (int[] s : redSoldiers) {
            String key = s[0] + "," + s[1];
            redCount.merge(key, 1, Integer::sum);
        }
        for (int[] s : blueSoldiers) {
            String key = s[0] + "," + s[1];
            blueCount.merge(key, 1, Integer::sum);
        }
        
        for (int[] cp : controlPoints) {
            String key = cp[0] + "," + cp[1];
            int reds = redCount.getOrDefault(key, 0);
            int blues = blueCount.getOrDefault(key, 0);
            
            if (reds > 0 && blues == 0) controlOwner.put(key, 1);
            else if (blues > 0 && reds == 0) controlOwner.put(key, 2);
        }
    }
    
    static void phase5Respawn() {
        for (int i = 0; i < redDeadCount; i++) {
            int spawnIdx = redRespawnRng.nextInt(redSpawns.size());
            int[] spawn = redSpawns.get(spawnIdx);
            redSoldiers.add(new int[]{spawn[0], spawn[1]});
        }
        for (int i = 0; i < blueDeadCount; i++) {
            int spawnIdx = blueRespawnRng.nextInt(blueSpawns.size());
            int[] spawn = blueSpawns.get(spawnIdx);
            blueSoldiers.add(new int[]{spawn[0], spawn[1]});
        }
        redDeadCount = 0;
        blueDeadCount = 0;
    }
}
