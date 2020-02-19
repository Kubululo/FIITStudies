// hviezdickovanie: trojuholnik - opakovanie pod seba
#include <stdio.h>

int main() {
	int i, j, n, k;

	printf("Zadajte velkost trojuholnika: ");
	scanf("%d", &n);

	for(k=1; k<=2; k++) 
		for(i=1; i<=n; i++) {
			for(j=1; j<=n; j++) 
				if(i>=j) putchar('*');
				else putchar(' ');
			putchar('\n');
		}
	
	return 0;
}
