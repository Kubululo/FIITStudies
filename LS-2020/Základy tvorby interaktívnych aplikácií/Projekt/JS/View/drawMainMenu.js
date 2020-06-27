function drawMainMenu() {
    deleteBtns()
    playBtn.active = 1;
    tutorialBtn.active = 1;
    scoreBtn.active = 1;
    if (muted != 1) {
        audioType = "menu";
        //user musi najprv interagovat zo strankou aby sa pustil zvuk... preto oneskorenie
        setTimeout(playAudio, 1000);
    }

    neonWariorPlayArea.context.drawImage(mainMenu, 0, 0);
    if (chapters[4].beaten == 1) {

        score.push({
            date: new Date().getDate() + "." + new Date().getMonth() + "." + new Date().getFullYear() + " " + new Date().getHours() + ":" + new Date().getMinutes(),
            value: completeTime / 1000
        })
        saveScore();
        modal = document.getElementById("myModal");
        span = document.getElementsByClassName("close")[0];
        modal.style.display = "block";
        document.querySelector("p").innerHTML = "<u><strong>Congratulations</u></strong><br><br><strong>You won... Your score was:" + completeTime / 1000 + "</strong>";
        span.onclick = function() {
            modal.style.display = "none";

        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }
}