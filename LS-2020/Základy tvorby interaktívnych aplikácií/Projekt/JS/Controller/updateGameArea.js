function updateGameArea() {
    frameNo++;
    if (frameNo >= 9) {
        frameNo = 0;
        frame++;
    }
    if (frame > 7) frame = 0;
    neonWariorPlayArea.clearCanvas();
    arenaImg.drawMe();
    if (muted == 0)
        neonWariorPlayArea.context.drawImage(unmuted, 760, 5, 30, 30);
    else
        neonWariorPlayArea.context.drawImage(mutedIcon, 760, 5, 30, 30);
    myPlayer.cover = 0;
    enemy.updateEnemy();
    myPlayer.updatePlayer();
    enemyHealthBar.drawMe(50, 25);
    myPlayerHealthBar.drawMe(50, 10);

}