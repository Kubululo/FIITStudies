// uloha5-2.c -- Jakub Skurčák, 21.10.2019 08:57

#include <stdio.h>

int main()
{
  int r,n,a,c;
  scanf("%d",&n);
  if(n>15 || n<1){
    printf("Cislo nie je z daneho intervalu");
  }
  c=n;
  for(r=1;r<=c;r++)
  {
    printf("%d: ",r);
    for(a=1; a<=n; a++)
    {
      printf("%d ",a);
    }
    n--;
    printf("\n");
  }

  return 0;
}