// uloha7-3.c -- Jakub Skurčák, 4.11.2019 16:20

#include <stdio.h>

int nasobky(int x[], int pocetx, int y[], int k)
{
	int i,f=0,pocety;
    for(i=0;i<pocetx;i++){
      if((x[i]==0 && k == 0)||(k!=0 && x[i]%k == 0)){
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
	int pocety = nasobky(x, pocetx, y, 2);
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