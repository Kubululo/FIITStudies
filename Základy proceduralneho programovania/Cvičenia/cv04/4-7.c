// uloha4-7.c -- Jakub Skurčák, 14.10.2019 16:14

#include <stdio.h>

int main()
{
  int a,i;
  scanf("%d",&a);
  float h[a],max,min;
  for(i=0;i<a;i++)
  {
    scanf("%f",&h[i]);
  }
  max= h[1];
  for(i=0;i<a;i++)
  {
    if(h[i]>max)
    {
      max=h[i];
    }
  }
  min= h[0];
  for(i=0;i<a;i++)
  {
    if (h[i] < min)
        {
           min = h[i];
        }
  }
  printf("Minimum: %.2f\nMaximum: %.2f",min,max);
  return 0;
}   