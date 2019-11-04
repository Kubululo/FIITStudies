// uloha7-4.c -- Jakub Skurčák, 4.11.2019 16:31

#include <stdio.h>

int delitele(int x[], int pocetx, int y[], int k)
{
	int i,f=0,pocety;
    for(i=0;i<pocetx;i++){
      if((x[i]==0 && k == 0)||(x[i]!=0 && k%x[i] == 0)){
        y[f] = x[i];
        f++;
      }
    }
    return f;
}

int main()
{
	int i, x[10], pocetx;
	scanf("%d", &pocetx);
	for (i = 0; i < pocetx; i++)
		scanf("%d", &x[i]);

	int y[10];
	int pocety = delitele(x, pocetx, y, 24);
	printf("pocety: %d\ny: {", pocety);
	for (i = 0; i < pocety; i++)
	{
		if (i > 0)
			printf(", ");
		printf("%d", y[i]);
	}
	printf("}\n");
	return 0;
}