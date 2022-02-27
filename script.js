const musicContainer = document.querySelector('.music_container');
const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const audio = document.querySelector('#audio');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress_container');
const title = document.querySelector('#title');
const singer = document.querySelector('#singer');
const cover = document.querySelector('#cover');
const musicPlayerContainer = document.querySelector('#music__player__container');

// Song Titles
const songs = ['Gafur', 'Lily-Alan-Walker', 'Nightcore-Remix', 'Skan-Time', 'Tsunami'];
const singerInfo = ['Gafur', 'Alan Walker, Emelie Hollow', 'Nightcore-Remix', 'Skan', 'Escape'];
const songName = ['луна', 'Lily', 'Nightcore-Remix', 'Time', 'Цунами']

// Keep Track Of Songs
let songIndex = 4;
console.log(songIndex - 1);

function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function pad(d) {
    return (d < 10) ? '0' + d.toString() : d.toString();
}

// Initially Load Song Info DOM
loadSong(songs[songIndex]);
console.log(songs[songIndex])

// Update Song Details DOM
function loadSong(song) {
    title.innerText = songName[songIndex];
    singer.innerText = singerInfo[songIndex];
    audio.src = `./music/${song}.mp3`;
    cover.src = `./images/${song}.jpg`;
}

// Play Song
function playSong() {
    musicContainer.classList.add('play')
    playBtn.querySelector('i.fa-solid').classList.remove('fa-circle-play');
    playBtn.querySelector('i.fa-solid').classList.add('fa-pause');

    audio.play();
}

function pauseSong() {
    musicContainer.classList.remove('play')
    playBtn.querySelector('i.fa-solid').classList.add('fa-circle-play');
    playBtn.querySelector('i.fa-solid').classList.remove('fa-pause');

    audio.pause();
}

function prevSong() {
    songIndex--

    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);
    const num = getRandomNumberBetween(1, 10)
    musicPlayerContainer.style.backgroundImage = `
    linear-gradient(0deg, var(--color-${num}) 23.8%, var(--color-${num == 9 ? num + 1 : num - 1}) 82%)
    `
    playSong()
}

function nextSong() {
    songIndex++

    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }
    const num = getRandomNumberBetween(1, 10)
    loadSong(songs[songIndex]);
    musicPlayerContainer.style.backgroundImage = `
    linear-gradient(${getRandomNumberBetween(0, 360)}deg, var(--color-${num}) 23.8%, var(--color-${num == 9 ? num + 1 : num - 1}) 82%)
    `

    playSong()
}

function updateProgressBar(e) {
    // console.log(e.srcElement.currentTime + " | " + e.srcElement.duration);
    // console.log(e);
    // const str = 0;
    const { duration, currentTime } = e.srcElement;
    // console.log(`${audio.currentTime}  `);
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
    // console.log(duration + " " + currentTime)
    document.getElementById('current_time').innerText = `${Math.floor(currentTime / 60)} : ${pad(Math.floor(currentTime % 60))}`
    document.getElementById('duration').innerText = `${Math.floor(duration / 60)} : ${pad(Math.floor(duration % 60))}`
}

function setProgress(e) {
    const Width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration

    audio.currentTime = (clickX / Width) * duration;
}

// Event Listen
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');

    if (isPlaying) {
        pauseSong()
    } else {
        playSong()
    }
});


// Previous Song
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);


// Update Progress Bar
audio.addEventListener('timeupdate', updateProgressBar);

progressContainer.addEventListener('click', setProgress);

audio.addEventListener('ended', nextSong);


// Searching Functionalities
const iframes = document.querySelectorAll('iframe');
const observer = lozad(iframes); // lazy loads elements with default selector as ".lozad"
observer.observe();

