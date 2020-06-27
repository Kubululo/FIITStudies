function drawChapterSelect() {

    deleteBtns();
    chapter1Btn.active = 1;
    chapter2Btn.active = 1;
    chapter3Btn.active = 1;
    chapter4Btn.active = 1;
    chapter5Btn.active = 1;
    backToMenuBtn.active = 1;
    neonWariorPlayArea.context.drawImage(chapterSelect, 0, 0);
    if (chapters[0].beaten == 1)
        neonWariorPlayArea.context.drawImage(chapterSelectBeaten01, 0, 0);
    if (chapters[1].beaten == 1)
        neonWariorPlayArea.context.drawImage(chapterSelectBeaten02, 0, 0);
    if (chapters[2].beaten == 1)
        neonWariorPlayArea.context.drawImage(chapterSelectBeaten03, 0, 0);
    if (chapters[3].beaten == 1)
        neonWariorPlayArea.context.drawImage(chapterSelectBeaten04, 0, 0);
    if (chapters[4].beaten == 1)
        neonWariorPlayArea.context.drawImage(chapterSelectBeaten05, 0, 0);

}