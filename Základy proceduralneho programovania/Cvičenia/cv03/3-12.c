#include <stdio.h>

int main () {
    int a[5],i,sum=0,max;
    scanf("%d %d %d %d %d",&a[0],&a[1],&a[2],&a[3],&a[4]);
    for(i=0;i<5;i++)
    {
        if(max<a[i])
        {
            max=a[i];
        }
    }
    for(i=0;i<5;i++)
    {
        sum+=a[i];
    }
    sum-=max;
    printf("%d\n",sum);
}