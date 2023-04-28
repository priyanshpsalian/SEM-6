import java.util.Arrays;
import java.util.Scanner;

class Exp6 {
    static int getGenerator(int p) {
        int generator = 0;
        int genArray[] = new int[p - 1];
        int tempArray[] = new int[p - 1];
        for (int i = 0; i < genArray.length; i++) {
            genArray[i] = i + 1;
        }
        int index = 0;
        for (int i = 2; i < p - 1; i++) {
            index = 0;
            for (int j = 1; j <= p - 1; j++) {
                tempArray[index] = (int) Math.pow(i, j) % p;
                index++;
            }
            Arrays.sort(tempArray);
            if (Arrays.equals(genArray, tempArray)) {
                return i;
            }
        }
        return generator;
    }

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.print("Enter a prime number: ");
        int p = scan.nextInt();
        int generator = getGenerator(p);
        if (generator == 0) {
            System.out.println("Generator not found");
            System.exit(0);
        }
        System.out.println("Generator is: " + generator);
        System.out.print("Enter x private key: ");
        int x = scan.nextInt();
        System.out.print("Enter y private key: ");
        int y = scan.nextInt();
        scan.close();
        int r1 = (int) (Math.pow(generator, x) % p);
        int r2 = (int) (Math.pow(generator, y) % p);
        System.out.println("R1 = " + r1);
        System.out.println("R2 = " + r2);

        int key = (int) Math.pow(r2, x) % p;
        int key2 = (int) Math.pow(r1, y) % p;
        if (key == key2) {
            System.out.println("Key = " + key);
        } else {
            System.out.println("Key not found");
        }
    }
}
