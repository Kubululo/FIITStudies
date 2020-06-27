function playAudio() {
    delete audio;
    if (audioType == "menu") {
        this.audio = new Audio();
        this.audio.src = "../ASSETS/SOUND/Music/menu.mp3";
        this.audio.play();
        this.audio.onended = function() {

            playAudio();
        };
    }
}