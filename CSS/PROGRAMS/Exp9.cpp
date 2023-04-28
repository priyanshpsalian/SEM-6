#include <stdio.h>
#include <string.h>

int main()
{
char buff[15];
int pass = 0;
printf("Enter the password: ");
gets(buff);
if (strcmp(buff, "Priyash"))
{
printf("\nWrong Password");
}
else
{
printf("\nCorrect Password");
pass = 1;
}

if(pass)
{
printf("\nRoot priveledges granted");
}
return 0;
}