#include <stdio.h>
#define _USE_MATH_DEFINES
#include <math.h>


int main(){
float r;
printf("Zadaj polomer");
scanf("%f",&r);
printf("Obsah kruhu je :%f\n Obvod kruhu je %f",2*3.14*r,3.14*r*r);
return 0;
}