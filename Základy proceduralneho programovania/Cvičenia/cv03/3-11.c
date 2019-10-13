#include <stdio.h>

int main () {

    char a, b, c;
    
    scanf("%c %c %c",&a,&b,&c) ;

    if ((a == b) && (a == c) && (b == c)) {
        printf ("vsetky su rovnake") ;
    }
    else {
        if ((a != b) && (a != c) && (b != c)) {
            printf ("yiadne sa nezhoduju") ;
        }
        else {
            printf ("dve su rovnake") ;
        }
    }
}