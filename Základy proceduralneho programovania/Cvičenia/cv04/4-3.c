#include <stdio.h>
#include <ctype.h>

int main()
{
  int i,countl=0,countu=0;
  char buffer[100];
    char *b = buffer;
    size_t bufsize = 100;
    size_t characters;
    characters = getline(&b,&bufsize,stdin);
    for(i=0;i<characters;i++)
    {
     if(islower(buffer[i]))
     {
       countl++;
     }
     else if(isupper(buffer[i]))
     {
       countu++;
     }
     else
     {
       countl=countl;
       countu=countu;
     }
    }
    printf("%d %d",countl, countu);

    return(0);
}