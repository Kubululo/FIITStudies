function drawGameOver(q) {
    neonWariorPlayArea.clearCanvas();

    if (myPlayer.myHealth > enemy.myHealth && q != 1) {
        delete myPlayer;
        delete enemy;
        neonWariorPlayArea.context.drawImage(won, 0, 0);
        end = new Date().getTime();
        completeTime += end - start;
        if (achievements[2].obtained == 0) {
            displayAchievement(2);
            achievements[2].obtained = 1;
        }
        chapters[currentLevel].beaten = 1;
        backToMenuBtn.active = 1;
    }
    if (myPlayer.myHealth < enemy.myHealth && q != 1) {
        delete myPlayer;
        delete enemy;
        neonWariorPlayArea.context.drawImage(gameOver, 0, 0);
        if (achievements[4].obtained == 0 && currentLevel == 0) {
            displayAchievement(4);
            achievements[4].obtained = 1;

        }
        backToMenuBtn.active = 1;
    }
    if (q == 1) {
        neonWariorPlayArea.context.drawImage(gameOver, 0, 0);
        delete myPlayer;
        delete enemy;
        backToMenuBtn.active = 1;
    }

}