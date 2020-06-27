function displayAchievement(i) {
    deleteBtns();
    modal = document.getElementById("myModal");
    span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";
    document.querySelector("p").innerHTML = "<u><strong>New Achievment</u></strong><br>  <i>" + achievements[i].name + ":</i><br><i>" + achievements[i].text + "</i>";
    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            playBtn.active = 1;
            tutorialBtn.active = 1;
            scoreBtn.active = 1;
            buttons.push(playBtn, tutorialBtn, scoreBtn);
        }
    }
}