//eventHandlers
function keyPressed(e) {
    this.keys = (this.keys || []);
    this.keys[e.keyCode] = true;
}

function keyReleased(e) {
    this.keys[e.keyCode] = false;
}

function mouseClicked(e) {
    this.mouseX = e.pageX - neonWariorPlayArea.offsetX;
    this.mouseY = e.pageY - neonWariorPlayArea.offsetY;
    if (typeof playBtn != "undefined" && playBtn.clicked()) {
        deleteBtns();
        setTimeout(drawChapterSelect, 300);
    }
    if (typeof backToMenuBtn != "undefined" && backToMenuBtn.clicked()) { drawMainMenu() };
    if (typeof chapter1Btn != "undefined" && chapter1Btn.clicked()) { playNeonWariorChaper(1) };
    if (typeof chapter2Btn != "undefined" && chapter2Btn.clicked()) { playNeonWariorChaper(2) };
    if (typeof chapter3Btn != "undefined" && chapter3Btn.clicked()) { playNeonWariorChaper(3) };
    if (typeof chapter4Btn != "undefined" && chapter4Btn.clicked()) { playNeonWariorChaper(4) };
    if (typeof chapter5Btn != "undefined" && chapter5Btn.clicked()) { playNeonWariorChaper(5) };
    if (typeof scoreBtn != "undefined" && scoreBtn.clicked()) { displayScore() };
    if (typeof tutorialBtn != "undefined" && tutorialBtn.clicked()) { drawTurotial() };
    if (typeof muteBtn != "undefined" && muteBtn.clicked()) { muteAudio() };
    if (typeof pauseBtn != "undefined" && pauseBtn.clicked()) { drawPauseMenu() };
    if (typeof quitBtn != "undefined" && quitBtn.clicked()) {
        deleteBtns();
        drawGameOver(1)
    };
    if (typeof resumeBtn != "undefined" && resumeBtn.clicked()) {
        deleteBtns();
        redrawInterval = setInterval(updateGameArea, 1000 / fps)
    };

}