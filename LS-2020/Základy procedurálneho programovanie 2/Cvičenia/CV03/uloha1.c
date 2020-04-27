#define _CRT_SECURE_NO_WARNINGS
#define _CRT_SECURE_NO_WARNINGS
#define _CRT_SECURE_NO_DEPRECATE  
#define _CRT_NONSTDC_NO_DEPRECATE
#pragma warning(disable:4996)
#include <stdlib.h>
#include <string.h>
#include <stdio.h>
int main() {
	char slovo[255], heslo[255],vysledok[255];
	int i=0,e=0;
	int dlzkaslova;
	printf("Zadaj slovo:\n");
	if (fgets(slovo, sizeof slovo, stdin)) {
	}
	printf("Zadaj heslo:\n");
	if (fgets(heslo, sizeof heslo, stdin)) {
	}
	dlzkaslova= strlen(heslo);
	heslo[dlzkaslova] = 0;
	heslo[dlzkaslova - 1] = 0;
	dlzkaslova = strlen(slovo);
	slovo[dlzkaslova] = 0;
	slovo[dlzkaslova - 1] = 0;
	
	while (i < dlzkaslova) {
		vysledok[i] = ((slovo[i] + heslo[i % strlen(slovo)]) % 26) + 'A';
		i++;
	}
	vysledok[i] = '\0';
	printf("%s", vysledok);
}