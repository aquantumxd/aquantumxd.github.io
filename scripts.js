document.getElementById('button-image').addEventListener('click', function () {
    playMusic()
});

var audio = new Audio('music/1700_sea_shanties.mp3');
var currentAudio = null;

function playMusic() {
    if (currentAudio) {
        currentAudio.pause();
    }
    currentAudio = audio;
    audio.play();
}
