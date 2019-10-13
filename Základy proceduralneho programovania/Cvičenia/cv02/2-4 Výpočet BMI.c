#include <stdio.h>
int main()
{
float w,h,i,bmi;
printf("Zadaj vysku(cm) a hmotnost(kg):\n");
scanf("%f %f",&h,&w);
printf("Na zaklade tvojej vysky %.1f a vahy %.1f je ",h,w);
h=h/100;
i=h*h;
bmi=w/i;
printf("tvoje BMI: %.3f\n",bmi);
return 0;
}