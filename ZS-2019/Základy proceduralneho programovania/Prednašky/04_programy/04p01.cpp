// nacita n cisel a vypise minimum a maximum z nich
#include <stdio.h>

int main() {
	int i, n;
	double x, min, max;
	
	scanf("%d", &n);
	if (n > 0) {
		scanf("%lf", &x);
		min = max = x;
	
		for(i=2; i<=n; i++) {
			scanf("%lf", &x);
			if (x > max)
				max = x;
			if (x < min)
				min = x;
		}
	
		printf("min: %.2f, max: %.2f\n", min, max);
	}
	else
		printf("Nebolo nacitane ani jedno cislo\n");
			
	return 0;
}
