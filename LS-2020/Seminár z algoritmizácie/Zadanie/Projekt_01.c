#include <stdio.h>
void sort(char* pismena, int *cisla);
void swap(int* a, int* b);
int main() {
	char pismena[1000],blank;
	int i, cisla[1000];
	for (i = 0; i < 1000; ++i) {
		pismena[i] = '\0';
		cisla[i] = '\0';
	}
	for (i = 0; i < 1000; ++i) {
		scanf("%c%d", &pismena[i], &cisla[i]);
		scanf("%1c",&blank);
		if (pismena[i] == '\0' || cisla[i] == '\0' || blank == '\n') break;
	}
	sort(pismena,cisla);
	i = 0;
	while(cisla[i] != 0){
		printf("%c%d ",pismena[i],cisla[i]);
		i++;
	}
	

}
void sort(char* pismena , int *cisla) {
	int i = 0, a = 0,j=0,e;		
		for (a = 0; a < 1000; a++) {
			for (j = 0; j < 1000; j++) {
				if (*(pismena + a) == *(pismena + j) && *(cisla + j) > *(cisla + a)) swap((cisla + j), (cisla + a));
			}
		}
}
void swap(int* a, int* b)
{
	int temp = *b;
	*b = *a;
	*a = temp;

}
