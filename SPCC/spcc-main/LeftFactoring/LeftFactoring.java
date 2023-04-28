/* 
 * lhs : left hand side 
 * rhs : right hand side 
 * LF : left factoring 
 * f_count: factoring count that is used to count factor out , i.e X0, X1 , X2  
 * pro: production 
 * cfg: context-free-grammar that refers to the entered grammar by user
 */

public class LeftFactoring {
    public static String cfg_Left_factored = "";
    public static String cfg = "A-->abB|aB|cdg|cdeB|cdfB\n" + "";
    public static String Not_LF = "";

    public static boolean left_factoring = false;
    public static int f_count = 0;

    public static void main(String[] args) {

        System.out.println("Context free grammar is \n" + cfg + "\n");
        check_factor(cfg);
        System.out.println("\n\nThe result of left factoring is \n");
        System.out.println(Not_LF);
       
    }

    public static void check_factor(String cfg) {

        String lines[] = cfg.split("\\\n");

        for (String line: lines) {

            String productions[] = line.split("-->", 0); 
            String lhs = productions[0];
            String rhs = productions[1];
            System.out.println("\nLeft hand side: " + lhs);
            System.out.println("Right hand side: " + rhs);

            String[] rhs_productions = rhs.split("\\|"); 
            String common_prefix = "";
            left_factoring = false;

            for (int i = 0; i < rhs_productions.length - 1; i++) {
                for (int j = i + 1; j < rhs_productions.length; j++) {

                    if (rhs_productions[i].charAt(0) == rhs_productions[j].charAt(0) && (!rhs_productions[i].equals("epsilon"))) 
                    {
                        left_factoring = true;
                        common_prefix += rhs_productions[i].charAt(0);
                        break;
                    }
                    
                }
                if (common_prefix.length() > 0)
                    break;
            }

            if (left_factoring) {
                System.out.println("\nThis Grammar needs left factoring!\n");
                System.out.println("\nCommon prefix is: " + common_prefix);
                left_factor_out(lhs, common_prefix, rhs_productions); 

            } else {
                Not_LF += line + "\n";
                System.out.println("\nThis grammar does not need left factoring\n");
            }
        }
    }

    private static void left_factor_out(String lhs, String common_prefix, String[] rhs_productions) {
        cfg_Left_factored = lhs + "-->"; 
        for (String pro : rhs_productions) {
            if (!pro.startsWith(common_prefix)) {
                cfg_Left_factored += pro + "|";
            }
        }
        
        cfg_Left_factored += common_prefix + "X" + f_count + "\n";

        cfg_Left_factored += "X" + f_count + "-->";

        for (String pro : rhs_productions) {
            if (pro.startsWith(common_prefix)) {

                String stringRemaining = pro.substring(1, pro.length());
                
                if (stringRemaining.length() == 0) {
                    cfg_Left_factored += "epsilon" + "|";
                } 
                else {
                    cfg_Left_factored += stringRemaining + "|";
                }
            }
        }
        
        cfg_Left_factored = cfg_Left_factored.substring(0, cfg_Left_factored.length() - 1);
        
        System.out.println("Left factored out.\n" + cfg_Left_factored);
        System.out.println("~~~~~~~~~~~~~");

        
        if (left_factoring) {
            f_count++;
            check_factor(cfg_Left_factored);
        }

    }
}