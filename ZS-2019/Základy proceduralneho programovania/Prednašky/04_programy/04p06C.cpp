// vypis sachovnice pomocou znakov: medzera a *
// zlozeny if
#include <stdio.h>

int main() {
	int i, j, r;

	printf("Zadajte dlzku: ");
	scanf("%d", &r);

	for (i=1; i<=r; i++)  {
		for (j=1; j<=r; j++)
			if (i%2 == 0)		//parne riadky
				if (j%2 == 1)
					putchar('*');
				else 
					putchar(' ');
			else 				// neparne riadky
				if (j%2 == 0)	
					putchar('*');
				else
					putchar(' ');
		putchar('\n');
	}	

	return 0;
}
