function drawPauseMenu() {
    clearInterval(redrawInterval);
    resumeBtn.active = 1;
    quitBtn.active = 1;
    neonWariorPlayArea.context.drawImage(pauseMenu, neonWariorPlayArea.canvas.width / 2 - 150, neonWariorPlayArea.canvas.height / 2 - 150, 300, 300);
}