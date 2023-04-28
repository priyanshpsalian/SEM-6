import java.util.*;

/*

* 	INPUT

	void main () {
		int a = 1 ;
		int b = a ;
	}
	
*	OUTPUT

	Keywords: 3 => void main int 
	Numbers: 1 => 1
	Operators: 1 => =
	Syntax: 4 => () { ; }
	Identifiers: 2 => a b

*/

public class LexicalAnalyzer {
	static HashSet<String> keyword_list = new HashSet<String>();
	static HashSet<String> number_list = new HashSet<String>();
	static HashSet<String> operator_list = new HashSet<String>();
	static HashSet<String> identifier_list = new HashSet<String>();
	static HashSet<String> syntax_list = new HashSet<String>();

	static String keyword_str = "float int double long String main void if else break";
	static String[] keyword_arr = keyword_str.split(" ");
	static ArrayList<String> _keyword_list = new ArrayList<String>(Arrays.asList(keyword_arr));

	static String operator_str = "+ - = * / % > < >= <= == || &&";
	static String[] operator_arr = operator_str.split(" ");
	static ArrayList<String> _operator_list = new ArrayList<String>(Arrays.asList(operator_arr));

	static String syntax_str = "{ } ( ) [ ] ; () {} []";
	static String[] syntax_arr = syntax_str.split(" ");
	static ArrayList<String> _syntax_list = new ArrayList<String>(Arrays.asList(syntax_arr));

	public static boolean isKeyword(String str) {
		return _keyword_list.contains(str);
	}

	public static boolean isOperator(String str) {
		return _operator_list.contains(str);
	}

	public static boolean isNumber(String str) {
		return (str.matches("-?[0-9]*\\.?[0-9]*"));
	}

	public static boolean isSyntax(String str) {
		return _syntax_list.contains(str);
	}

	public static void printResults() {
		System.out.print("\nKeywords: " + keyword_list.size() + " => ");
		for (String token : keyword_list)
			System.out.print(token + " ");

		System.out.print("\nNumbers: " + number_list.size() + " => ");
		for (String token : number_list)
			System.out.print(token + " ");

		System.out.print("\nOperators: " + operator_list.size() + " => ");
		for (String token : operator_list)
			System.out.print(token + " ");

		System.out.print("\nSyntax: " + syntax_list.size() + " => ");
		for (String token : syntax_list)
			System.out.print(token + " ");

		System.out.print("\nIdentifiers: " + identifier_list.size() + " => ");
		for (String token : identifier_list)
			System.out.print(token + " ");
	}

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		while (sc.hasNextLine()) {
			String temp_inp = sc.nextLine();
			if (temp_inp == null || temp_inp.isEmpty())
				break;

			String[] inp_arr = temp_inp.split(" ");
			for (String token : inp_arr) {
				if (isKeyword(token))
					keyword_list.add(token);

				else if (isNumber(token))
					number_list.add(token);

				else if (isOperator(token))
					operator_list.add(token);

				else if (isSyntax(token))
					syntax_list.add(token);

				else
					identifier_list.add(token);
			}
		}
		sc.close();
		printResults();

	}
}
