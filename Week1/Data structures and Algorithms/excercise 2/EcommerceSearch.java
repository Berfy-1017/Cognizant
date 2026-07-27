class Product {

    int productId;
    String productName;
    String category;

    Product(int productId, String productName, String category) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }

    void display() {
        System.out.println("ID: " + productId +
                ", Name: " + productName +
                ", Category: " + category);
    }
}

class LinearSearch {

    public static Product search(Product[] products, int key) {

        for (Product product : products) {
            if (product.productId == key) {
                return product;
            }
        }
        return null;
    }
}

class BinarySearch {

    public static Product search(Product[] products, int key) {

        int left = 0;
        int right = products.length - 1;

        while (left <= right) {

            int mid = (left + right) / 2;

            if (products[mid].productId == key) {
                return products[mid];
            }

            if (products[mid].productId < key) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return null;
    }
}

public class EcommerceSearch {

    public static void main(String[] args) {

        Product[] products = {
                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Mobile", "Electronics"),
                new Product(103, "Shoes", "Fashion"),
                new Product(104, "Watch", "Accessories"),
                new Product(105, "Headphones", "Electronics")
        };

        int searchId = 104;

        System.out.println("Linear Search Result:");

        Product result1 = LinearSearch.search(products, searchId);

        if (result1 != null)
            result1.display();
        else
            System.out.println("Product not found");

        System.out.println("\nBinary Search Result:");

        Product result2 = BinarySearch.search(products, searchId);

        if (result2 != null)
            result2.display();
        else
            System.out.println("Product not found");
    }
}