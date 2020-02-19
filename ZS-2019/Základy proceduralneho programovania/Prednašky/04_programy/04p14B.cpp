// vytvorenie kopie suboru
// testovanie konca suboru pomocou feof()
#include <stdio.h>

int main() {
	FILE *fr, *fw;
	int c;

	fr = fopen("lyrics.txt", "r");
	fw = fopen("kopia1.txt", "w");

	while (c = getc(fr), feof(fr) == 0)
		putc(c, fw);
	//printf("Vysledok volania makra feof(): %d\n", feof(fr));

	fclose(fr);
	fclose(fw);
	return 0;
}
