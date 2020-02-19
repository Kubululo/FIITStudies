// vypis pismen podla abecedy, najprv A, v kazdom dalsom riadku o pismeno viac 
#include <stdio.h>

int main() {
	int i, j, n;

	printf("Zadajte pocet: ");
	scanf("%d", &n);

	for (i=1; i<=n; i++) {	  
		for (j=0; j<i; j++)  // co ked zmenime i za n?
           	putchar('A'+j);
		putchar('\n');
	}
	
	return 0;
}

