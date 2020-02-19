// nacita riadok  vypise najnizsie a najvyssie pouzite velke pismeno
#include <stdio.h>

int main() {
	int c, min = 'Z'+1, max = 'A'-1;
	
	while((c=getchar()) != '\n') 
		if (c >='A' && c <='Z') {
			if (c < min)
				min = c;
			if (c > max)
				max = c;			
		}
	if(min < 'Z'+1) 
		printf("min: %c, max: %c\n", min, max);
	else
		printf("Nebolo nacitane ani jedno velke pismeno\n");
			
	return 0;
}
