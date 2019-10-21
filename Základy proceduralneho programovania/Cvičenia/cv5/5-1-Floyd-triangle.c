
#include <stdio.h>

int main()
{
  int n, i,  c, a = 1;
  scanf("%d", &n);
  if(n>10){
    printf("Nespravny vstup");
  }
  else
  {
    for (i = 1; i <= n; i++)
  {
    for (c = 1; c <= i; c++)
    {
      printf("%d ",a);
      a++;
    }
    printf("\n");
  }
  }
  return 0;
}