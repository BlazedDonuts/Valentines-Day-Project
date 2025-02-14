document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById("background-music");
    const playButton = document.querySelector(".play-music");
    const progressBar = document.getElementById("progress-bar");

    //auto-play on page load
    audio.play();

    //toggle music when clicking play button
    playButton.addEventListener("click", function() {
        if (audio.paused) {
            audio.play();
            playButton.innerHTML = "&#10074;&#10074;"; //change to pause icon
        } else {
            audio.pause();
            playButton.innerHTML = "&#9658;";  //change to play icon
        }
    });

    //update progress bar as song plays
    audio.addEventListener("timeupdate", function () {
        const progress = (audio.currentTime/audio.duration) * 100;
        progressBar.value = progress;
    });

    //users can seek using progress bar 
    progressBar.addEventListener("input", function (e) {
        const seektime = (progressBar.value/100) * audio.duration;
        audio.currentTime = seektime;
    });
});