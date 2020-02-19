// vypise sucet 3 cisel zo suboru vypise na obrazovku
// s kontrolou, ci sa podarilo 3 cisla nacitat
#include <stdio.h>

int main() {
	FILE *fr;
	double x, y, z;

	fr = fopen("cisla.txt", "r");		// znaky.txt
	if(fscanf(fr, "%lf %lf %lf\n", &x, &y, &z) == 3)
		printf("%lf \n", x + y + z);
	else 
		printf("Subor neobsahuje 3 realne cisla.\n");
	fclose(fr);
	return 0;
}

