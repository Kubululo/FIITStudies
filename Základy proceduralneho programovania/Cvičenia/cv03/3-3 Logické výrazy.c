#include <stdio.h>

int main()
{
    int a,b,i,c;
    scanf("%d %d",&a,&b);
    if(a % 11 == 0){
        i=1;
    }
    else{
        i=0;
    }
    printf("Prve cislo je delitelne cislom 11: %d\n",i);
    if(b % 5 == 0){
        i=0;
    }
    else{
        i=1;
    }
    printf("Druhe cislo nie je delitelne cislom 5: %d\n",i);
    if((a>999 && a<10000) && (b>999 && b<10000)){
        i=1;
    }
    else{
        i=0;
    }
    printf("Obe cisla su kladne 4-ciferne: %d\n",i);
    if(b < 0 || a < 0){
        i=1;
    }
    else{
        i=0;
    }
    printf("Aspon jedno z cisel je zaporne: %d\n",i);
    if(b != 0 && a != 0){
        i=1;
    }
    else{
        i=0;
    }
    printf("Ani jedno z cisel nie je 0: %d\n",i);
    return 0;
}