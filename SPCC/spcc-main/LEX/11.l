%{
int flag;
void display(int, char*);
%}

%%
[a|e|i|o|u] {flag=1;display(flag,yytext);}
[.] {flag=0;display(flag,yytext);}
%%

void main()
{
	printf("Enter a word:");
	yylex();
}

void display(int flag, char *t) {
	if(flag) {
		printf("The char %c is is a vowel \n", t);
	} else {
		printf("The char %c is is a consonant \n", t);
	}
}
