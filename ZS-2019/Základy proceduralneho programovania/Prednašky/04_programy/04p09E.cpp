// hviezdickovanie: trojuholnik - opakovanie pod seba aj vedla seba
#include <stdio.h>

int main() {
	int i, j, n, k, l;

	printf("Zadajte velkost trojuholnika: ");
	scanf("%d", &n);

	
	for(k=1; k<=2; k++)
		for(i=1; i<=n; i++) {
			for(l=1; l<=4; l++)
				for(j=1; j<=n; j++) 
					if(i>=j) putchar('*');
					else putchar(' ');
				putchar('\n');
		}
	
	return 0;
}
