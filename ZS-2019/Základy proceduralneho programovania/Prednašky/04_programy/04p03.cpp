// vypis pismen od A po zvolene pismeno - opakovane zvoleny pocet krat
#include <stdio.h>

int main() {
	char c1, c2;
	int i, n;

	printf("Zadajte velke pismeno: ");
	c2 = getchar();
	if(c2 >= 'A' && c2 <= 'Z') {
		printf("Kolkokrat vypisat A - %c? ", c2);
		scanf("%d", &n);

		for(i=1; i<=n; i++) {	  
			for(c1='A'; c1<=c2; c1++)
            	putchar(c1);
			putchar('\n');
		}
	}
	return 0;
}

