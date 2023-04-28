import java.lang.Math;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

class Exp4 {
    static Map<Integer, Integer> primeFactors = new HashMap<Integer, Integer>();
    public static int getEulerTotient(int n){
        int ans = 1;
        for (Map.Entry<Integer, Integer> entry : primeFactors.entrySet()) {
            ans *= Math.pow(entry.getKey(), entry.getValue()) - Math.pow(entry.getKey(), entry.getValue() - 1);
        }
        return ans;
    }

    public static void getPrimeFactors(int n){
        while (n % 2 == 0) {
            primeFactors.put(2, primeFactors.getOrDefault(2, 0) + 1);
            n /= 2;
        }
        for (int i = 3; i <= Math.sqrt(n); i += 2) {
            while (n % i == 0) {
                primeFactors.put(i, primeFactors.getOrDefault(i, 0) + 1);
                n /= i;
            }
        }
        if (n > 2)
            primeFactors.put(n, primeFactors.getOrDefault(n, 0) + 1);
    }

    public static void main(String[] args)
    {
        System.out.print("Enter a number: ");
        Scanner scan = new Scanner(System.in);
        int n = scan.nextInt();
        scan.close();
        getPrimeFactors(n);
        System.out.println("Prime Factors of " + n + " are: " + primeFactors);
        int phin = getEulerTotient(n);
        System.out.println("Euler's Totient Fucntion for " + n + " is " + phin);
    }
}
