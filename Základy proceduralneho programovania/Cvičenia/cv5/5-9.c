// uloha5-4.c -- Jakub Skurčák, 21.10.2019 08:57

#include <stdio.h>

int main()
{
  int i, n, j, a,e;
  scanf("%d",&n);
  a=1;
  e=(((n*2-1)/2)+1);
  if(n>=3 && n<=15 && n%2!=0){
      for(i=1;i<=(n*2-1);i++)
        {
            for(j=1;j<=(n*2-1);j++)
            {
                if(i<n)
                {
                if(j<=a)
                    {
                        printf("*");
                    }
                else
                    {
                        printf("-");
                    }
                }
                if(i==e)
                {
                    printf("*");
                }
                if(i>n)
                {
                    if(j<=a)
                    {
                        printf("*");
                    }
                    else
                    {
                        printf("0");
                    }
                }
            }
            printf("\n");
            if(i<n)
            {
                a++;
            }
            else
            {
                a--;
            }
            
        }
        
        
    }

  return 0;
}