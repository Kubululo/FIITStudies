#include <stdio.h>

int main () 
{
    int a, b, i ;
    printf ("Zadajte dve velke pismena oddelene medzerou: \n");
    a = getchar () ;
    i = getchar () ;
    b = getchar () ;
    a = a - 'A' + 'a';
    b = b - 'A' + 'a';
    printf ("%c %c \n", b, a) ;
    return 0 ;
}
