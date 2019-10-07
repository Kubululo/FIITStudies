#include <stdio.h>

int main(){
    float p;
    printf("Zadaj cenu bez DPH:\n");
    scanf("%f",&p);
    printf("Cena s DPH je %.1f",p*0.2+p);
    return 0;
}