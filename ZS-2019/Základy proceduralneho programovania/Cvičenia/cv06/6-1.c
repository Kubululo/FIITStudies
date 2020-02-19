// uloha6-1.c -- Jakub Skurčák, 28.10.2019 13:05

#include <stdio.h>

int main() {
	FILE *fr, *fw;
	int c;
  char f;
  scanf("%c",&f);
  if(f=='s'){
    fr = fopen("znak.txt", "r");
	fw = fopen("novy.txt", "w");

	while (c = getc(fr), feof(fr) == 0)
		putc(c, fw);
	fclose(fr);
	fclose(fw);
  }
  else{
    fr = fopen("znak.txt", "r");
    while (c = getc(fr), feof(fr) == 0)
		printf("%c",c);
  }
	
	return 0;
}