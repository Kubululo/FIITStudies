//Napíšte program, ktorý načíta tri celé čísla a vypíše najmenšie z nich. Výstupom
//je jeden riadok obsahujúci správu Najmensie cislo z c1 c2 c3 je: min

#include <stdio.h>


int main () {
    int a, b, c;
    
    printf ("Zadaj tri cisla oddelene medzerami a poviem ti najmensie z nich\n") ;
    scanf ("%d %d %d", &a, &b, &c) ;
    
    if ( (a<b) && (a<c) ) {
        printf ("Najmensie cislo z %d %d %d je %d", a, b, c, a) ;
    }

    if ( (b<a) && (b<c) ) {
        printf ("Najmensie cislo z %d %d %d je %d", a, b, c, b) ;
    }

    if ( (c<a) && (c<b) ) {
        printf ("Najmensie cislo z %d %d %d je %d", a, b, c, c) ;
    }

    if ( (a==b) || (a==c) || (b==c) ) {
        printf ("ani jedno cislo nieje najmensie") ;
    }
    
}
