// uloha4-6.c -- Jakub Skurčák, 14.10.2019 15:55

#include <stdio.h>

int main()
{
    float w, h, i, bmi;
    int a,b,countnad=0,countnorm=0,countobe=0,countpod=0;
    scanf("%d",&a);
    for(b=1;b<=a;b++)
    {
    scanf ("%f %f", &h, &w) ;
    h = h/100 ;
    i = h*h ;
    bmi = w/i ;
    if (bmi <= 18.5) {
        countpod++;
    }

    if ((18.5 < bmi) && (bmi < 25)) {
        countnorm++;
    }

    if ((25 <= bmi) && (bmi < 30)) {
        countnad++;
    }

    if (bmi >= 30) {
        countobe++;
    }
    printf("%.2f\n",bmi);
    h=0;
    w=0;
    i=0;
    bmi=0;
    }
    printf("Podvaha: %d\nNormalna hmotnost: %d\nNadvaha: %d\nObezita: %d",countpod,countnorm,countnad,countobe);
    
}