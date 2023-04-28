%{
char name[10];
%}

%%
[0-9]+ {printf("Number");}
[a-zA-Z]+ {printf("Word");}
%%

void main()
{
	printf("Enter");
	yylex();
}
