#include <stdio.h>

int main()
{
    int a,b,i,c;
    scanf("%d %d",&a,&b);
    if(a % 11 == 0){
      printf("Prve cislo je delitelne cislom 11\n");
    }
    if(b % 5 != 0){
         printf("Druhe cislo nie je delitelne cislom 5\n");
    }
    if((a>999 && a<10000) && (b>999 && b<10000)){
        printf("Obe cisla su kladne 4-ciferne\n");
    }
    if(b < 0 || a < 0){
        printf("Aspon jedno z cisel je zaporne\n");
    }
    if(b != 0 && a != 0){
       printf("Ani jedno z cisel nie je 0\n");
    }
    return 0;
}