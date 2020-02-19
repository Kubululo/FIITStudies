// vykreslenie kriza 
#include <stdio.h>

int main() 
{
	int dlzka, i, j;
	printf("Zadajte dlzku ramena: ");
	scanf("%d", &dlzka);

	for (i = 1; i <= dlzka * 2 + 1; i++) {
		for (j = 1; j <= dlzka * 2 + 1; j++) 
			if (j == dlzka+1 || i == dlzka+1) 
				putchar('*');
			else
				putchar(' ');
		putchar('\n');
	}
	
	return 0;
} 

