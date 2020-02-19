// vykresli vianocny stromcek z cisel a *
// rozdele na lavu a pravu cast obrazka
#include <stdio.h>
int main() {
	int i, j, n;
	
	scanf("%d", &n);
	for(i=1; i<=n; i++) {
		for(j=1; j<=2*n-1; j++)
			if(j <= n)  // lavych n stlpcov
				if(j<=n-i)
					putchar('*');
				else
					printf("%d", i%10);
			else		// pravych n-1 stlpcov
				if(j>=i+n)
					putchar('*');
				else
					printf("%d", i%10);
		putchar('\n');	
	}
	return 0;
	
}
