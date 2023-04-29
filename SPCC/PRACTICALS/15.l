%{
#include<stdio.h>
char Name[10];
%}
%%
[\n] {printf("\nHi %s,Good Morning\n",Name);}
%%
int yywrap() {}
void main()
{
    char opt;
    do
    {
        printf("\n\nWhat is your name:");
        scanf("%s",Name);
        yylex();
        printf("\nPress any key to continue(Y/y):");
        scanf("%c", &opt);
    }
    while ((opt == 'Y')|| (opt == 'y'));
}