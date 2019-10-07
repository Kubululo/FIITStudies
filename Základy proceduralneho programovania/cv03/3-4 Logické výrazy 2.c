#include <stdio.h>
#include <ctype.h>

int main()
{
    int a,i;
    a=getchar();
    if(isalpha(a)){
        i=1;
    }
    else{
        i=0;
    }
    printf("%c je alfanumericky znak: %d\n",a,i);
    if(i==1){
        i=0;
    }
    else
    {
        i=1;
    }
    printf("%c nieje alfanumericky znak: %d\n",a,i);
    return 0;
}