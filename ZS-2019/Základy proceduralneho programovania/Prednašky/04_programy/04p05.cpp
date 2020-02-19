#include <stdio.h>
#include <math.h>

int main() {
	int i, j, n, odmocnina;
	
	printf("Zadajte hranicu: ");
	scanf("%d", &n);
	
	for(i=1; i<=n; i++) {
		odmocnina = (int) pow(i, 0.5);
		for(j=2; j<=odmocnina; j++)	// skuste prepisat bez break
			if(i%j == 0)
				break;
		if(j>odmocnina)
			printf("%d ", i);
	}
			
	return 0;
}
