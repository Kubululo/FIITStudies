#include <stdio.h>

int main()
{
    int a[3],i;
    for(i=0;i<3;i++){
        scanf("%d",&a[i]);
        if(a[i]<0){
            printf("Zadal si záporný uhol");
            return 1;
        }
    }
    if(a[0]+a[1]+a[2]==180){
        printf("Trojuholnik je platny");
    }
    else
    {
        printf("Trojuholnik nie je platny");
    }
    
    return 0;
}