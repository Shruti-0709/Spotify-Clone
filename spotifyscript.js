let songIndex = 0;
var music = new Audio('tumtak.mp3');
let masterplay = document.getElementById('masterplaybtn');
let pausebtn = document.getElementById('pausebtn');
let songIcon = document.getElementById('songIcon');
let playstrip = document.getElementById('playstrip');

// Songs array should be declared here before it's used
let songs = [
    { songName: "Tum Tak", filepath: "tumtak.mp3" },
    { songName: "Apna Bana Le", filepath: "apnaBanaLe.mp3" },
    { songName: "Daryaa", filepath: "daryaa.mp3" },
    { songName: "Piyu Bole", filepath: "Piyu Bole.mp3" },
    { songName: "Mera Yaar", filepath: "Mera Yaar.mp3" },
];

// Function to play a song
function playSong(filepath) {
    music.src = filepath;
    music.play();
    songIcon.style.opacity = "1";
    pausebtn.style.display = "inline";
    masterplay.style.display = "none";
}

// Add event listeners for each song button
document.getElementById('playApnaBanaLe').addEventListener('click', () => {
    songIndex = 1;
    playSong(songs[songIndex].filepath);
});

document.getElementById('playtumtak').addEventListener('click', () => {
    songIndex = 0;
    playSong(songs[songIndex].filepath);
});

document.getElementById('playDaryaa').addEventListener('click', () => {
    songIndex = 2;
    playSong(songs[songIndex].filepath);
});

document.getElementById('playPiyu').addEventListener('click', () => {
    songIndex = 3;
    playSong(songs[songIndex].filepath);
});

document.getElementById('playMera').addEventListener('click', () => {
    songIndex = 4;
    playSong(songs[songIndex].filepath);
});

// Update playstrip according to the song's current time
music.addEventListener('timeupdate', () => {
    const progress = (music.currentTime / music.duration) * 100;
    playstrip.value = progress;
});

// Seek functionality in the playstrip
playstrip.addEventListener('input', () => {
    const seekTime = (playstrip.value / 100) * music.duration;
    music.currentTime = seekTime;
});

// Master play/pause button functionality
masterplay.addEventListener('click', () => {
    if (music.paused) {
        music.play();
        songIcon.style.opacity = "1";
        pausebtn.style.display = "inline";
        masterplay.style.display = "none";
    } else {
        music.pause();
        masterplay.style.display = "inline";
        pausebtn.style.display = "none";
        songIcon.style.opacity = "0";
    }
});

// Pause button functionality
pausebtn.addEventListener('click', () => {
    if (!music.paused) {
        music.pause();
        masterplay.style.display = "inline";
        pausebtn.style.display = "none";
        songIcon.style.opacity = "0";
    }
});

// Function to play the next song
document.getElementById('playnext').addEventListener('click', () => {
    songIndex = (songIndex + 1) % songs.length;
    playSong(songs[songIndex].filepath);
});

// Function to play the previous song
document.getElementById('playprev').addEventListener('click', () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    playSong(songs[songIndex].filepath);
});



// Function to play a song
function playSong(filepath, songName) {
    music.src = filepath;
    music.play();
    songIcon.style.opacity = "1";
    pausebtn.style.display = "inline";
    masterplay.style.display = "none";
    document.querySelector('.currentsong').innerText = songName;
}

// Add event listeners for each song button
document.getElementById('playApnaBanaLe').addEventListener('click', () => {
    songIndex = 1;
    playSong(songs[songIndex].filepath, songs[songIndex].songName);
});

document.getElementById('playtumtak').addEventListener('click', () => {
    songIndex = 0;
    playSong(songs[songIndex].filepath, songs[songIndex].songName);
});

document.getElementById('playDaryaa').addEventListener('click', () => {
    songIndex = 2;
    playSong(songs[songIndex].filepath, songs[songIndex].songName);
});

document.getElementById('playPiyu').addEventListener('click', () => {
    songIndex = 3;
    playSong(songs[songIndex].filepath, songs[songIndex].songName);
});

document.getElementById('playMera').addEventListener('click', () => {
    songIndex = 4;
    playSong(songs[songIndex].filepath, songs[songIndex].songName);
});

// Function to play the next song
document.getElementById('playnext').addEventListener('click', () => {
    songIndex = (songIndex + 1) % songs.length;
    playSong(songs[songIndex].filepath, songs[songIndex].songName);
});

// Function to play the previous song
document.getElementById('playprev').addEventListener('click', () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    playSong(songs[songIndex].filepath, songs[songIndex].songName);
});

