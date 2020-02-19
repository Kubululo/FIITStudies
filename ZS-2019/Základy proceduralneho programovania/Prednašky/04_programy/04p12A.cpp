// vypise sucet 3 cisel zo suboru vypise na obrazovku
#include <stdio.h>

int main() {
	FILE *fr;
	double x, y, z;

	fr = fopen("cisla.txt", "r");
	fscanf(fr, "%lf %lf %lf\n", &x, &y, &z);
	// printf("x: %.2f, y: %.2f, z: %.2f\n", x, y, z);
	
	printf("%lf\n", x + y + z);
	fclose(fr);
	return 0;
}

