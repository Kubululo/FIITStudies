// vytvorenie kopie suboru
// osetrenie otvorenia a zatvorenia suboru
#include <stdio.h>

int main() {
	FILE *fr, *fw;
	int c;

	if ((fr = fopen("lyrics.txt", "r")) != NULL) {
		printf("Subor na citanie sa nepodarilo otvorit\n");
		return 0;
	}
	if ((fr = fopen("kopia.txt", "w")) != NULL) {
		printf("Subor na citanie sa nepodarilo otvorit\n");
		fclose(fr);
		return 0;
	}


	while ((c = getc(fr)) != EOF)
		putc(c, fw);
	//printf("Znak konca suboru: %d\n", c);

	if(fclose(fr) == EOF)
		printf("Subor otvoreny na citanie sa nepodarilo zatvorit\n");
	if(fclose(fw) == EOF)
		printf("Subor otvoreny na zapis sa nepodarilo zatvorit\n");
	return 0;
}

