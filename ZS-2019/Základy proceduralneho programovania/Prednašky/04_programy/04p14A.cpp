// vytvorenie kopie suboru
// testovanie znaku na EOF
#include <stdio.h>

int main() {
	FILE *fr, *fw;
	int c;

	fr = fopen("lyrics.txt", "r");
	fw = fopen("kopia.txt", "w");

	while ((c = getc(fr)) != EOF)
		putc(c, fw);
	//printf("Znak konca suboru: %d\n", c);

	fclose(fr);
	fclose(fw);
	return 0;
}

