import java.io.*;
import java.util.*;

public class Vick {

    static class Order {
        int id;
        boolean isBuy;
        int price;
        int quantity;      // remaining quantity
        int visibleQty;    // for iceberg: current visible portion
        int totalQty;      // for iceberg: original total (used for refill tracking)
        int hiddenQty;     // for iceberg: hidden quantity remaining
        int maxVisible;    // for iceberg: max visible size
        boolean isIceberg;
        long timestamp;    // for time priority

        Order(int id, boolean isBuy, int price, int quantity, long timestamp) {
            this.id = id;
            this.isBuy = isBuy;
            this.price = price;
            this.quantity = quantity;
            this.visibleQty = quantity;
            this.totalQty = quantity;
            this.hiddenQty = 0;
            this.maxVisible = quantity;
            this.isIceberg = false;
            this.timestamp = timestamp;
        }

        Order(int id, boolean isBuy, int price, int quantity, int visible, long timestamp) {
            this.id = id;
            this.isBuy = isBuy;
            this.price = price;
            this.quantity = quantity;
            this.totalQty = quantity;
            this.visibleQty = Math.min(visible, quantity);
            this.hiddenQty = quantity - this.visibleQty;
            this.maxVisible = visible;
            this.isIceberg = true;
            this.timestamp = timestamp;
        }

        int getVisibleQuantity() {
            if (isIceberg) {
                return visibleQty;
            }
            return quantity;
        }

        // Fill some quantity from visible portion
        void fill(int amount) {
            int filled = Math.min(amount, getVisibleQuantity());
            quantity -= filled;
            if (isIceberg) {
                visibleQty -= filled;
            }
        }

        // For iceberg: refill visible portion from remaining quantity
        void refillVisible(long newTimestamp) {
            if (!isIceberg || visibleQty > 0 || quantity <= 0) {
                return;
            }
            // Refill visible from remaining quantity
            int refillAmount = Math.min(maxVisible, quantity);
            visibleQty = refillAmount;
            timestamp = newTimestamp;  // goes to back of queue
        }

        boolean isEmpty() {
            return quantity <= 0;
        }
    }

    static long globalTimestamp = 0;
    static List<String> trades;

    // Order books: price -> list of orders (in time priority)
    static TreeMap<Integer, LinkedList<Order>> bids;  // descending by price
    static TreeMap<Integer, LinkedList<Order>> asks;  // ascending by price
    static Map<Integer, Order> orderById;

    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(new File("vick.dat"));

        int K = sc.nextInt();

        for (int t = 0; t < K; t++) {
            int N = sc.nextInt();

            // Initialize
            globalTimestamp = 0;
            trades = new ArrayList<>();
            bids = new TreeMap<>(Collections.reverseOrder());  // highest first
            asks = new TreeMap<>();  // lowest first
            orderById = new HashMap<>();

            for (int i = 0; i < N; i++) {
                String op = sc.next();

                if (op.equals("LIMIT")) {
                    int id = sc.nextInt();
                    String side = sc.next();
                    int price = sc.nextInt();
                    int qty = sc.nextInt();
                    boolean isBuy = side.equals("BUY");

                    Order order = new Order(id, isBuy, price, qty, globalTimestamp++);
                    processOrder(order);

                } else if (op.equals("CANCEL")) {
                    int id = sc.nextInt();
                    cancelOrder(id);

                } else if (op.equals("ICEBERG")) {
                    int id = sc.nextInt();
                    String side = sc.next();
                    int price = sc.nextInt();
                    int qty = sc.nextInt();
                    int visible = sc.nextInt();
                    boolean isBuy = side.equals("BUY");

                    Order order = new Order(id, isBuy, price, qty, visible, globalTimestamp++);
                    processOrder(order);
                }
            }

            // Output trades
            for (String trade : trades) {
                System.out.println(trade);
            }
            System.out.println();
        }

        sc.close();
    }

    static void processOrder(Order incoming) {
        if (incoming.isBuy) {
            // Match against asks
            while (!incoming.isEmpty() && !asks.isEmpty()) {
                int bestAskPrice = asks.firstKey();
                if (bestAskPrice > incoming.price) break;

                LinkedList<Order> ordersAtPrice = asks.get(bestAskPrice);

                while (!incoming.isEmpty() && !ordersAtPrice.isEmpty()) {
                    Order resting = ordersAtPrice.peekFirst();

                    int fillQty = Math.min(incoming.getVisibleQuantity(), resting.getVisibleQuantity());
                    if (fillQty > 0) {
                        incoming.fill(fillQty);
                        resting.fill(fillQty);

                        trades.add("TRADE " + incoming.id + " " + resting.id + " " + resting.price + " " + fillQty);
                    }

                    // Refill incoming iceberg if needed (doesn't change queue position since it's not resting)
                    if (incoming.isIceberg && incoming.visibleQty == 0 && !incoming.isEmpty()) {
                        incoming.visibleQty = Math.min(incoming.maxVisible, incoming.quantity);
                    }

                    // Check if resting iceberg needs refill
                    if (resting.isIceberg && resting.visibleQty == 0 && !resting.isEmpty()) {
                        // Remove from front, refill, add to back
                        ordersAtPrice.pollFirst();
                        resting.refillVisible(globalTimestamp++);
                        ordersAtPrice.addLast(resting);
                    } else if (resting.isEmpty()) {
                        ordersAtPrice.pollFirst();
                        orderById.remove(resting.id);
                    }
                }

                if (ordersAtPrice.isEmpty()) {
                    asks.remove(bestAskPrice);
                }
            }
        } else {
            // Match against bids
            while (!incoming.isEmpty() && !bids.isEmpty()) {
                int bestBidPrice = bids.firstKey();
                if (bestBidPrice < incoming.price) break;

                LinkedList<Order> ordersAtPrice = bids.get(bestBidPrice);

                while (!incoming.isEmpty() && !ordersAtPrice.isEmpty()) {
                    Order resting = ordersAtPrice.peekFirst();

                    int fillQty = Math.min(incoming.getVisibleQuantity(), resting.getVisibleQuantity());
                    if (fillQty > 0) {
                        incoming.fill(fillQty);
                        resting.fill(fillQty);

                        trades.add("TRADE " + resting.id + " " + incoming.id + " " + resting.price + " " + fillQty);
                    }

                    // Refill incoming iceberg if needed (doesn't change queue position since it's not resting)
                    if (incoming.isIceberg && incoming.visibleQty == 0 && !incoming.isEmpty()) {
                        incoming.visibleQty = Math.min(incoming.maxVisible, incoming.quantity);
                    }

                    // Check if resting iceberg needs refill
                    if (resting.isIceberg && resting.visibleQty == 0 && !resting.isEmpty()) {
                        ordersAtPrice.pollFirst();
                        resting.refillVisible(globalTimestamp++);
                        ordersAtPrice.addLast(resting);
                    } else if (resting.isEmpty()) {
                        ordersAtPrice.pollFirst();
                        orderById.remove(resting.id);
                    }
                }

                if (ordersAtPrice.isEmpty()) {
                    bids.remove(bestBidPrice);
                }
            }
        }

        // Rest remaining quantity
        if (!incoming.isEmpty()) {
            TreeMap<Integer, LinkedList<Order>> book = incoming.isBuy ? bids : asks;
            if (!book.containsKey(incoming.price)) {
                book.put(incoming.price, new LinkedList<>());
            }
            book.get(incoming.price).addLast(incoming);
            orderById.put(incoming.id, incoming);
        }
    }

    static void cancelOrder(int id) {
        Order order = orderById.get(id);
        if (order == null) return;

        TreeMap<Integer, LinkedList<Order>> book = order.isBuy ? bids : asks;
        LinkedList<Order> ordersAtPrice = book.get(order.price);

        if (ordersAtPrice != null) {
            ordersAtPrice.remove(order);
            if (ordersAtPrice.isEmpty()) {
                book.remove(order.price);
            }
        }

        orderById.remove(id);
    }
}