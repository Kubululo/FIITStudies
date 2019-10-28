// uloha5-10.c -- Jakub Skurčák, 21.10.2019 12:08

#include <stdio.h>
#include <stdlib.h>

int main()
{
    int min=100;
    FILE * fp;
    char * line = NULL;
    size_t len = 0;
    ssize_t read;

    fp = fopen("list.txt", "r");
    if(fp==NULL){
    printf("Chyba: otvaranie suboru");
    }
    while ((read = getline(&line, &len, fp)) != -1) {
        if(min>read){
            min=read;
        }
    }
    printf("%d",min);
    fclose(fp);
}