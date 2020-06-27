function muteAudio() {
    if (audio.muted) {
        audio.muted = false;
        muted = 0;
    } else {
        audio.muted = true;
        muted = 1;
    }
}