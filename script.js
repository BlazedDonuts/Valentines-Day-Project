document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById("background-music");
    const playButton = document.querySelector(".play-music");

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
});