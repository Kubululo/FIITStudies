// uloha4-5.c -- Jakub Skurčák, 14.10.2019 15:47

#include <stdio.h>

int main()
{
  int f,g,d,i;
  scanf("%d %d %d",&f,&g,&d);
  for(i=f;i<=g;i++)
  {
    if(i % d == 0)
    {
      printf("%d ",i);
    }
  }
  return 0;
}