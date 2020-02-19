#include <stdio.h>
int main()
{
    int i,j,n,a,b,c;
    scanf("%d",&n);
    a=1;
    b = n/2 +1;
    c=n;
    if(n<1 || n>15 || n%2!=0)
    {
        for(i = 1;i<=n;i++){
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
            a++;
            c--;
            printf("\n");
            
        }
    }
    
    
    
    return 0;
}