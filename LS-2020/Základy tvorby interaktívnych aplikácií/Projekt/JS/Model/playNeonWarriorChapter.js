function playNeonWariorChaper(level) {
    deleteBtns();
    currentLevel = level - 1;
    if (level != 1 && chapters[currentLevel - 1].beaten != 1) {
        modal = document.getElementById("myModal");
        span = document.getElementsByClassName("close")[0];
        modal.style.display = "block";
        document.querySelector("p").innerHTML = "<u><strong>This level is locked</u></strong><br><br><strong>Beat the previous level in order to play this one</strong>";
        span.onclick = function() {
            modal.style.display = "none";
            drawChapterSelect();
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
                drawChapterSelect();
            }
        }

    } else {
        neonWariorPlayArea.clearCanvas();
        arenaImg = new arena(level);
        muteBtn.active = 1;
        pauseBtn.active = 1;
        myPlayer = new stickman(100, 100, 200, 150);
        enemy = new stickman(100, 700, 200, 50 * level);
        myPlayerHealthBar = new healthBar(myPlayer.myHealth);
        enemyHealthBar = new healthBar(enemy.myHealth);
        arenaImg.drawMe();
        myPlayer.drawMe();
        enemy.drawMe();
        drawCountdown(5);
    }
}