import java.util.Scanner;

public class Exp5 {
    static boolean isPrime(int n) {
        boolean prime = true;
        if (n % 2 == 0)
            return !prime;

        for (int i = 3; i < Math.sqrt(n); i += 2) {
            if (n % i == 0)
                return !prime;
        }
        return prime;
    }

    static int gcd(int i, int j) {
        int r = 0;
        do {
            r = i % j;
            i = j;
            j = r;
        } while (r != 0);
        return i;
    }

    public static void main(String[] args) {
        System.out.print("Enter two prime numbers: ");
        Scanner scan = new Scanner(System.in);
        int p = scan.nextInt();
        int q = scan.nextInt();
        if (!(isPrime(q) && isPrime(p))) {
            System.out.println("Numbers are not prime");
        }
        System.out.print("Enter message: ");
        int message = scan.nextInt();
        scan.close();
        int n = p * q;
        System.out.println("n = " + n);
        int phin = (p - 1) * (q - 1);
        System.out.println("phin = " + phin);

        int e = 2;
        while ((gcd(phin, e) != 1) && (e < phin)) {
            e++;
        }

        int d = 1;
        while ((d * e) % phin != 1) {
            d++;
        }
        System.out.println("Public key is: (" + e + ", " + n + ")");
        System.out.println("Private key is: (" + d + ", " + n + ")");

        long encryptedMessage = (long) Math.pow(message, e) % n;
        long decryptedMessage = (long) Math.pow(encryptedMessage, d) % n;
        System.out.println(encryptedMessage);
        System.out.println(decryptedMessage);
    }
}
