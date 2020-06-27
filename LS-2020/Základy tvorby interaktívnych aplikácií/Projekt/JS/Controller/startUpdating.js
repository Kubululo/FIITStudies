function startUpdating() {
    stopUpdating();
    redrawInterval = setInterval(updateGameArea, 1000 / fps);
    start = new Date().getTime();
}