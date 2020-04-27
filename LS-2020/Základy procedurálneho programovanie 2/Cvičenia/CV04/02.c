    int* vloz(int cislo, int* pole, int* m, int* n) {
        int* cis_p = &cislo;
        int m2 = *m;
        int n2 = *n;
        int i, a,b;
        
        if (m2 > n2) {
            vkladaj:
            for (i = m2 - 1; (i >= 0 && *(pole+i) > cislo); i--)
                *(pole+(i + 1)) = *(pole+i);

            *(pole + (i + 1)) = cislo;
        }
        else
        {
            m2+= 10;
            pole = (int*)realloc(pole, sizeof(int)*m2);
            goto vkladaj;
        }

        return pole;
    }