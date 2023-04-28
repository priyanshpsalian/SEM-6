import java.util.*;

import javax.swing.plaf.synth.SynthStyle;

import java.lang.*;
import java.io.*;

public class LeftRecursion {
    public static void main(String args[]) {
        try {
            Scanner sc = new Scanner(System.in);

            File myobj = new File("file.txt");
            Scanner myReader = new Scanner(myobj);

            while (myReader.hasNextLine()) {

                ArrayList<String> alpha = new ArrayList<String>();
                ArrayList<String> beta = new ArrayList<String>();

                String gr = myReader.nextLine();

                String[] pro = gr.split("->");
                String lhs = pro[0];
                String rhs = pro[1];
                
                String[] rhs_list = rhs.split("\\|");
                
                for (int i = 0; i < rhs_list.length; i++) {
                    
                    if (lhs.charAt(0) == rhs_list[i].charAt(0)) {
                        String substr = rhs_list[i].substring(1);
                        alpha.add(substr);
                    } 
                    else {
                        beta.add(rhs_list[i]);
                    }
                }

                if (alpha.size() != 0) {
                    System.out.println();
                    System.out.print(lhs + " -> ");
                    for (String b : beta)
                        System.out.print(b + "" + lhs + "'" + " | ");
                    
                    System.out.println();
                    System.out.print(lhs + "'" + " -> ");
                    for (String a : alpha)
                        System.out.print(a + "" + lhs + "'");
                    System.out.print(" | $\n");
                } else {
                    System.out.print(gr);
                }
            }
        }

        catch (FileNotFoundException e) {
            System.out.println("error");
            e.printStackTrace();
        }

    }
}
