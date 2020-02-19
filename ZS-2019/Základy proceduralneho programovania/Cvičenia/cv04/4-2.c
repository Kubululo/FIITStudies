// uloha4-2.c -- Jakub Skurčák, 14.10.2019 15:12

#include <stdio.h>

int main()
{
  int a,i,count;
  scanf("%d",&a);
  int p[a];
  for(i=0;i<a;i++)
  {
    scanf("%d",&p[i]);
    p[i] > 0 && p[i] <= 100 ? count++ : (count=count);  
  }
  printf("%d",count);
  return 0;
}
