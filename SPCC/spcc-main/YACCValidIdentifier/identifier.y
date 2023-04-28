%{ 
#include<stdio.h> 
#include<stdlib.h>
int yylex();
void yyerror(char *s);
%}

%token DIGIT LETTER NL UND 

%%
stmt: variable NL {printf("Valid Identifier"); exit(0);};
variable: LETTER alphanumeric;
alphanumeric: LETTER alphanumeric | DIGIT alphanumeric | UND alphanumeric | LETTER | DIGIT | UND;  
%%

void yyerror(char *msg) {
	printf("Invalid Expression: %s", msg);
}

void main() {
	printf("Enter a variable name: ");
	yyparse();
}	
