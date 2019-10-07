
#include <stdio.h>

int main()
{
    int a;
    double c;
    
    scanf("%d",&a);
    c = (a - 32) * 5/9;
    printf("%.f\n",c);
    if(c<=0)
    {
        printf("Mrzne");
    }
    else
    {
        if(c >= 100){
            printf("Vrie");
        }
    }
    return 0;
}