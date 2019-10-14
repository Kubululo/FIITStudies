// uloha4-4.c -- Jakub Skurčák, 14.10.2019 15:42

#include <stdio.h>

int main()
{
  int f,g,i;
  scanf("%d %d",&f,&g);
  for(i=f;i<=g;i++)
  {
    if(i % 3 == 0)
    {
      printf("%d ",i);
    }
  }
  return 0;
}