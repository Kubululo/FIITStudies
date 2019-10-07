#include <stdio.h>

int main()
{
    int a,b,i,counta,countb,c,d;
    scanf("%d %d",&a,&b);
    if(a % 11 == 0){
        printf("Prve cislo je delitelne cislom 11\n");
    }
    
    if(b % 5 != 0){
       printf("Druhe cislo nieje delitelne cislom 5\n");
    }
    
    while(c != 0)
    {
        c=a;
        c /= 10;
        ++counta;
    }
     while(d != 0)
    {
        d=b;
        d /= 10;
        ++countb;
    }
    if((a >= 0 && counta == 4) && ( b >= 0 && countb == 4)){
        printf("Obe cisla su kladne 4-ciferne\n");
    }
    
    if(b < 0 || a < 0){
        printf("Aspon jedno z cisel je zaporne\n");
    }

    if((b != 0) && (a != 0)){
        printf("Ani jedno z cisel nie je 0\n");
    }
    return 0;
}