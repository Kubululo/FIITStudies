// vypis suboru na obrazovku: male pismena konvertuje na velke, vynechava znaky
// ine ako pismena a biele znaky
// vypise pocet znakov najdlhsieho riadka
#include <stdio.h>

int main() {
	FILE *fr;
	int c, dlzka, max_dlzka;

	if ((fr = fopen("lyrics.txt", "r")) == NULL) {
		printf("Subor sa nepodarilo otvorit.\n");
		return 0;
	}

	dlzka = max_dlzka = 0;
	while((c= getc(fr)) != EOF) {
		dlzka++;
		if (c>='a' && c<='z') 
			c += 'A' - 'a';
		
		if (c>='A' && c<='Z' || c == ' ' || c == '\n')
			putchar(c);
		if (c == '\n') {
			if (max_dlzka < dlzka)
			max_dlzka = dlzka;
			dlzka = 0;
		}
	}
	if (max_dlzka < dlzka)
		max_dlzka = dlzka;

	printf("\nMax. dlzka: %d\n", max_dlzka);
	if (fclose(fr) == EOF) 
		printf("Subor sa nepodarilo zatvorit\n");
	return 0;
}

