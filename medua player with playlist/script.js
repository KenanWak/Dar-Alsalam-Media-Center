const audio = document.getElementById('audio');
const playlist = document.getElementById('playlist');
const playButton = document.getElementById('play');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const songs = [
    { title: 'Song 1', src: 'song1.mp3' },
    { title: 'Song 2', src: 'song2.mp3' },
    { title: 'Song 3', src: 'song3.mp3' },
     

];
let currentSongIndex = 0;
function loadSong(index) {
    audio.src = songs[index].src;
    audio.load();
}
function playSong() {
    audio.play();
    playButton.innerText = 'Pause';
}
function pauseSong() {
    audio.pause();
    playButton.innerText = 'Play';
}
function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    playSong();
}
function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    playSong();
}
playButton.addEventListener('click', () => {
    if (audio.paused) playSong();
    else pauseSong();
});
nextButton.addEventListener('click', nextSong);
prevButton.addEventListener('click', prevSong);
songs.forEach((song, index) => {
    const li = document.createElement('li');
    li.textContent = song.title;
    li.addEventListener('click', () => {
        currentSongIndex = index;
        loadSong(currentSongIndex);
        playSong();
    });
    playlist.appendChild(li);
});