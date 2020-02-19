// uloha5-3.c -- Jakub Skurčák, 21.10.2019 08:57

#include <stdio.h>

int main()
{
  int r,n,a,c;
  scanf("%d",&n);
  if(n>15 || n<1){
    printf("Cislo nie je z daneho intervalu");
  }
  else{
 c=1;
  for(r=n;r>=1;r--)
  {
    printf("%d: ",c);
    for(a=n; a>=1; a--)
    {
      printf("%d ",a);
    }
    n--;
    c++;
    printf("\n");
  }
  }
 

  return 0;
}