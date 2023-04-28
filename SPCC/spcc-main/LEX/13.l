%{
int line_count=0,char_count=0;
%}

%%
. {++char_count;}
[\n] {++char_count; ++line_count;} 
":q" {return 0;}
%%

void main()
{
	printf("~ Type :q to exit ~\n ");
	printf("Enter Data:\n ");
	yylex();
	printf("\nLine Count: %d\nChar Count: %d\n",line_count,char_count);
}
