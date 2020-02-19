#include <ctype.h>
#include <stdio.h>

int main () {
    int a, b, i ;
    a = getchar () ;
    i = getchar () ;
    b = getchar () ;
    printf ("%c %c \n", tolower (b), tolower (a)) ;
    return 0 ;
}