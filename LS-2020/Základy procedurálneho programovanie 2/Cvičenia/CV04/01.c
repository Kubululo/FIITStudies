char* spojRetazce(char* str1, char* str2) {
	int i,j=0,k=0,  totalSize;
	totalSize = strlen(str2) + strlen(str2);
	char* vyslednyStr = (char*)malloc(sizeof(char*) * totalSize);
	for (i = 0; i < totalSize; i++) {
		
			if (i % 2 == 0) {
				*(vyslednyStr + i) = *(str1 + j);
				j++;
			}
			else {
				*(vyslednyStr + i) = *(str2 + k);
				k++;
			}
		printf("%c", *(vyslednyStr + i));
	}
	return vyslednyStr;
}