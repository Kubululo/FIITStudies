// uloha5-6.c -- Jakub Skurčák, 21.10.2019 11:15

#include <stdio.h>

int main()
{
    int i,j,n,a,b,c,d,f,e,g;
    scanf("%d %d %d",&n,&d,&e);
    if(n>=1 && n<=15 && n%2!=0 && d>=1 && d<=5 && e>=1 && e<=5)
    {
      for(f=1;f<=e;f++)
      {
        
        a=1;
        b = n/2 +1;
        c=n;
        for(i = 1;i<=n;i++){
            for(g=1; g<=d ; g++){
            if(i==b){
                for (j = 1; j <= n; j++){
                    printf("*");
                }
            }
            else{
                for (j = 1; j <= n; j++)
                {
                    if(j==a || j == b || j == c)printf("*");
                    else printf("-");
                   
                }
                 
            }
            }
            a++;
            c--;
            printf("\n");
        }

      }
        
    }
    else
    {
        printf("Zly vstup");
    }
    
    
    
    return 0;

}