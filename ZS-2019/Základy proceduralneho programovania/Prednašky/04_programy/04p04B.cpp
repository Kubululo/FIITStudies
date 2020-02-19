// vypis pismen podla abecedy, najprv n pismen, v kazdom dalsom riadku o pismeno menej 
#include <stdio.h>

int main() {
	int i, j, n;

	printf("Zadajte pocet: ");
	scanf("%d", &n);

	for (i=n; i>=1; i--) {	  
		for (j=0; j<i; j++)  // co, ked pojdem od i po 0?
           	putchar('A'+j);
		putchar('\n');
	}
	
	return 0;
}
