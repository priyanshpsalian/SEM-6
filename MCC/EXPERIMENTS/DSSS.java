import java.lang.*; import java.io.*; import java.util.*; 
class DSSS {      
    public static void main(String args[]) { 
        Scanner scanner = new Scanner(System.in); 
        System.out.print("Enter input string: "); 
        String inputString = scanner.next(); 
        //System.out.print(inputString.charAt(1)); 
        String barcaCode = "10110111000"; 
         
        // Encryption 
        String eOutput = ""; 
        for(int i=0; i<inputString.length(); i++) { 
            String a = getString(inputString.charAt(i));             eOutput = eOutput + getEXOR(a, barcaCode); 
        } 
        System.out.println("\nEncrypted message: "+eOutput+"\n"); 
         
         
        // Decryption 
        ArrayList<String> enStrings = new ArrayList();         for(int i=0; i<eOutput.length(); i=i+11) {             enStrings.add(eOutput.substring(i,i+11)); 
        } 
        String dOutput = ""; 
        for(int i=0; i<enStrings.size(); i++) { 
            String a = getEXOR(enStrings.get(i),barcaCode); 
            if(getNoOfOnes(a)>7) {                 dOutput = dOutput + "1";             } else if(getNoOfOnes(a)<3) {                 dOutput = dOutput + "0"; 
            } 
        } 
        System.out.println("Decrypted message: "+dOutput+"\n\n"); 
    } 
     
    /* Method for getting 11111111111 or 00000000000 */ 
    public static String getString(char a) { 
        if(a=='1') { 
            return "11111111111"; 
        } else { 
            return "00000000000"; 
        } 
    } 
     
    /* Method for performing ex-or */ 
    public static String getEXOR(String x, String y) { 
        String z = ""; 
        for(int i = 0; i<x.length(); i++) { 
            




if((x.charAt(i)=='1' && y.charAt(i)=='1') || (x.charAt(i)=='0' && y.charAt(i)=='0')) {                 z = z + "0"; 
            } else if ((x.charAt(i)=='0' && y.charAt(i)=='1') || 
(x.charAt(i)=='1' && y.charAt(i)=='0')) { 
                z = z + "1"; 
            } 
}
return z; 
    } 
     
    /* Method for getting number of one's in string */     public static int getNoOfOnes(String a) { 
        int count = 0; 
        for(int i=0; i<a.length();i++) {             if(a.charAt(i) == '1') {                 count = count + 1; 
            } 
        } 
        return count; 
    } 
} 
