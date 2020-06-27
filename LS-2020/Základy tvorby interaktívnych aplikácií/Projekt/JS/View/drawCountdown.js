function drawCountdown(i) {
    var i = i;
    neonWariorPlayArea.clearCanvas();
    arenaImg.drawMe();
    enemy.drawMe();
    myPlayer.drawMe();
    neonWariorPlayArea.context.strokeStyle = 'black';
    neonWariorPlayArea.context.lineWidth = 10;
    neonWariorPlayArea.context.strokeText(i, neonWariorPlayArea.canvas.width / 2, neonWariorPlayArea.canvas.height / 2);
    neonWariorPlayArea.context.fillStyle = 'red';
    neonWariorPlayArea.context.textAlign = "center";
    neonWariorPlayArea.context.fillText(i, neonWariorPlayArea.canvas.width / 2, neonWariorPlayArea.canvas.height / 2);
    if (i == 0) {
        startUpdating();
        return;
    }

    setTimeout(() => { drawCountdown(i -= 1); }, 1000);
}