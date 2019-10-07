#include <stdio.h>


int main(){
float r;
printf("Zadaj polomer");
scanf("%f",&r);
printf("Obsah kruhu je :%.2f\n Obvod kruhu je %.2f",2*3.14*r,3.14*r*r);
return 0;
}