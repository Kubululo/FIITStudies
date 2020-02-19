// vykreslenie oramovaneho stvorca
#include <stdio.h>

int main() {
	int i, j, r;

	printf("Zadajte rozmer: ");
	scanf("%d", &r);

	for (i=1; i<=r; i++) {
		for (j=1; j<=r; j++) 
			if ((i > 1) && (i < r) && (j > 1) && (j < r))
				putchar('o');
			else 
				putchar('x');
		putchar('\n');
	}
	return 0;
}

