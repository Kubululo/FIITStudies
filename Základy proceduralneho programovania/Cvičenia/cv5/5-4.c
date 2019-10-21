// uloha5-4.c -- Jakub Skurčák, 21.10.2019 08:57

#include <stdio.h>

int main()
{
  int i, space, rows, k=0;
  scanf("%d",&rows);
  if(rows>15 || rows<1 || rows %2 ==0){
    printf("Zly vstup");
  }
  else{
 
    for(i=1; i<=rows; ++i, k=0)
    {
        for(k=1;k<=i;k++)
        {
            printf("*");
        }
        for(space=1; space<=rows-i; ++space)
        {
            printf("-");
        }
        printf("\n");  
    }
    for(i=rows-1; i>=1; --i, k=0)
    {
        for(k=i;k>=1;k--)
        {
            printf("*");
        }
        for(space=1; space<=rows-i; ++space)
        {
            printf("-");
        }
        printf("\n");  
    }
  }
 

  return 0;
}