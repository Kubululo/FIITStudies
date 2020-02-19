// zapise do suboru cisla od 1 po 10
#include <stdio.h>

int main() {
   FILE *fw;
   int i;

   fw = fopen("pokus.txt", "w");
   for (i = 1; i <= 10; i++) 
      fprintf(fw, "%d\n", i);
   fclose(fw);
   return 0;
}

