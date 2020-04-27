var studenti = [
    { meno: "Adam", body: 65, znamka: null },
    { meno: "Bea", body: 80, znamka: null },
    { meno: "Cyril", body: 47, znamka: null },
    { meno: "Daniela", body: 71, znamka: null },
    { meno: "Emil", body: 92, znamka: null },
];
var priemer = (studenti[0].body + studenti[1].body + studenti[2].body + studenti[3].body + studenti[4].body) / studenti.length;
console.log("Počet študentov: " + studenti.length);
console.log("Priemerný počet bodov: " + priemer);

znamka();
var i = 0;
do {
    console.log(studenti[i].meno);
    i++;
}
while (i < 3);
studenti.sort((a, b) => (a.body > b.body) ? 1 : -1);
printToTable();


function printToTable() {
    var table = document.createElement('table');
    document.body.insertBefore(table, document.body.childNodes['body']);
    for (var i = 0; i < this.studenti.length; i++) {
        var row = document.createElement('tr');
        var cell = document.createElement('td');
        cell.textContent = this.studenti[i].meno;
        row.appendChild(cell);
        var cell = document.createElement('td');
        cell.textContent = this.studenti[i].body;
        row.appendChild(cell);
        var cell = document.createElement('td');
        cell.textContent = this.studenti[i].znamka;
        row.appendChild(cell);
        table.appendChild(row);
    }
}

function addStudent() {
    var mojemeno = prompt("Aké je tvoje ctené meno?");
    var mojebody = parseInt(prompt("Kolko si mal bodov?"));
    if ((mojebody <= 100) || (mojebody >= 0)) {
        studenti.push({ meno: mojemeno, body: mojebody, znamka: null });
        studenti.sort((a, b) => (a.body > b.body) ? 1 : -1);
        removeTable();
        znamka();
        printToTable();
    } else { alert("Nesprávny vstup, počet bodov musí byť z intervalu od 0 po 100"); }
}


function removeTable() {
    var elem = document.querySelector('table');
    elem.parentNode.removeChild(elem);
    return false;
}

function znamka() {
    var i;
    for (i = 0; i < studenti.length; i++) {
        switch (true) {
            case (this.studenti[i].body >= 90):
                this.studenti[i].znamka = 'A';
                break;
            case (this.studenti[i].body >= 80):
                this.studenti[i].znamka = 'B';
                break;
            case (this.studenti[i].body >= 70):
                this.studenti[i].znamka = 'C';
                break;
            case (this.studenti[i].body >= 60):
                this.studenti[i].znamka = 'D';
                break;
            case (this.studenti[i].body >= 50):
                this.studenti[i].znamka = 'E';
                break;
            case (this.studenti[i].body < 50):
                this.studenti[i].znamka = 'Fx';
                break;
        }
        console.log('Študent ' + this.studenti[i].meno + " dostal znamku: " + this.studenti[i].znamka);
    }
}