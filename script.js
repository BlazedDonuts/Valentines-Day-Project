// Get DOM elements
const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('play-pause');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const songs = document.querySelectorAll('.song');
const coverImage = document.getElementById('cover-image');

let currentSongIndex = 0;

// Load a song
function loadSong(index) {
    const song = songs[index];
    audio.src = song.getAttribute('data-src'); // Set the audio source
    coverImage.src = song.getAttribute('data-cover'); // Set the cover art
    song.classList.add('active');
}

// Play or pause the audio
function togglePlayPause() {
    if (audio.paused) {
        audio.play();
        playPauseButton.textContent = 'Pause';
    } else {
        audio.pause();
        playPauseButton.textContent = 'Play';
    }
}

// Play the next song
function playNext() {
    songs[currentSongIndex].classList.remove('active');
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    audio.play();
    playPauseButton.textContent = 'Pause';
}

// Play the previous song
function playPrev() {
    songs[currentSongIndex].classList.remove('active');
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    audio.play();
    playPauseButton.textContent = 'Pause';
}

// Event listeners
playPauseButton.addEventListener('click', togglePlayPause);
nextButton.addEventListener('click', playNext);
prevButton.addEventListener('click', playPrev);

// Load the first song on page load
loadSong(currentSongIndex);

// Automatically play the next song when the current one ends
audio.addEventListener('ended', playNext);

// Allow clicking on songs to play them
songs.forEach((song, index) => {
    song.addEventListener('click', () => {
        songs[currentSongIndex].classList.remove('active');
        currentSongIndex = index;
        loadSong(currentSongIndex);
        audio.play();
        playPauseButton.textContent = 'Pause';
    });
});