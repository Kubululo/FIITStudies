#include <stdio.h>

int parne(int x[], int pocetx, int y[])
{
  int i,f=0,pocety;
    for(i=0;i<pocetx;i++){
      if(x[i]%2 == 0){
        pocety++;
      }
    }
    for(i=0;i<pocetx;i++){
      if(x[i]%2 == 0){
        y[f] = x[i];
        f++;
      }
    }
    return pocety;
}

int main()
{
int i, x[10], pocetx;
scanf("%d", &pocetx);
for (i = 0; i < pocetx; i++)
scanf("%d", &x[i]);

int y[10];
int pocety = parne(x, pocetx, y);
printf("pocety: %d\ny: {", pocety);
for (i = 0; i < pocety; i++)
{
if (i > 0)
printf(", ");
printf("%d", y[i]);
}
printf("}\n");
return 0;
}