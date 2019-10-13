// Ukážkový vstup:
// 170 58
// Ukážkový výstup:
// BMI: 20.069
// Normalna hmotnost

#include <stdio.h>

int main () {

    float w, h, i, bmi ;
    printf ("Zadaj vysku(cm) a hmotnost(kg):\n") ;
    scanf ("%f %f", &h, &w) ;

    printf ("Na zaklade tvojej vysky %.1f a vahy %.1f je ", h, w) ;
    h = h/100 ;
    i = h*h ;
    bmi = w/i ;
    printf ("\ntvoje BMI: %.3f\n", bmi) ;

    if (bmi <= 18.5) {
        printf ("\nMas podvahu") ;
    }

    if ((18.5 < bmi) && (bmi < 25)) {
        printf ("\nMas normalnu vahu") ;
    }

    if ((25 <= bmi) && (bmi < 30)) {
        printf ("\nMas nadvahu") ;
    }

    if (bmi >= 30) {
        printf ("\nSi obezny") ;
    }

    return 0 ;
}