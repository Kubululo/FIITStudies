// vypis 1. riadku suboru
#include <stdio.h>

int main() {
	FILE *fr;
	int c;

	fr = fopen("lyrics.txt", "r");
	while ((c = getc(fr)) != '\n') 
		putchar(c);
	putchar(c);    // vypis \n
	fclose(fr);
	return 0;
}

