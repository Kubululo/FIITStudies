#include <stdio.h>

int main(){
    int p,v,o,i,j,k,a,c;
    scanf("%d",&p);
    if(p>=1 && p<=100){
    for(i=1;i<=p;i++){
        scanf("%d %d",&v,&o);
        a=v/2+1;
        if(v>=3 && v<=11 && v%2!=0 && o>=1 && o<=7){
            for(j=1;j<=v;j++){
                for(c=1;c<=o;c++){
                    for(k=1;k<=v;k++){
                        if(k==a || j==v/2+1){
                            printf("*");
                        }
                        else{
                            printf(".");
                        }
                    }
                }
                if(j<v/2+1){
                    a--;
                }
                else
                {
                    a++;
                }
                    printf("\n");
                }
            }
            else{
                printf("Nespravny vstup");
                return 0;
            }
        }
    }
    else printf("Nespravny vstup");
    return 0;
}