function displayScore() {
    modal = document.getElementById("myModal");
    document.querySelector("p").innerHTML = "";
    span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";
    var table = document.createElement('table');

    var div = document.getElementById("modal");
    div.appendChild(table);

    var row = document.createElement('tr');

    var cell = document.createElement('td');
    cell.textContent = "Date";
    row.appendChild(cell);

    var cell = document.createElement('td');
    cell.textContent = "Score";
    row.appendChild(cell);
    table.appendChild(row);

    for (var i = 0; i < this.score.length; i++) {
        var row = document.createElement('tr');
        var cell = document.createElement('td');
        cell.textContent = this.score[i].date;
        row.appendChild(cell);

        var cell = document.createElement('td');
        cell.textContent = this.score[i].value;
        row.appendChild(cell);
        table.appendChild(row);
    }
    span.onclick = function() {
        modal.style.display = "none";
        var element = document.querySelector('table');

        if (element)
            element.parentNode.removeChild(element);
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            var element = document.querySelector('table');

            if (element)
                element.parentNode.removeChild(element);
        }
    }
}