// vypis riadku - striedavo medzera a *
#include <stdio.h>

int main() {
	int i, r;

	printf("Zadajte dlzku: ");
	scanf("%d", &r);

	for (i=1; i<=r; i++)   
		if (i%2)
			putchar(' ');
		else
			putchar('*');
	
	return 0;
}
