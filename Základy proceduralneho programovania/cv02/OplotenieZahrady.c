#include <stdio.h>

int main(){
    int n,a,b;
    printf("Zadaj počet záhrad dlžku strany a a b:\n");
    scanf("%d %d %d",&n,&a,&b);
    int p=(n-1)*b;
    int o=(2*a*n)+(2*b);
    int v=p+o;
    printf("Potrebujes %d metrov pletiva",v);

}