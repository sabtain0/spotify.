let songIndex = 0;
let audio = new Audio('C:\Users\YOU\Documents\Practic\Spotify');
let masterplay = document.getElementById('masterplay');
let proressbar = document.getElementById('progressbar');
let gif = document.getElementById('gif')
// let songitem = Array.from(document.getElementsByClassName('songItem'));
let songs = [
  { songname2: "Adhia", filepath: "adhia.mp3",  },
  { songname2: "Approach", filepath: "songs/Approach.mp3", coverpath: "songs/2.jpg" },
  { songname2: "Chitta", filepath: "songs/Chitta.mp3", coverpath: "songs/3.jpg" },
  { songname2: "Dont", filepath: "songs/Dont.mp3", coverpath: "songs/4.jpg" },
  { songname2: "Dont worry", filepath: "songs/Dontt.mp3", coverpath: "songs/5.jpg" },
  { songname2: "Let", filepath: "songs/let.mp3", coverpath: "songs/6.jpg" },
  { songname2: "sikander", filepath: "songs/sikander.mp3", coverpath: "songs/7.jpg" },
  { songname2: "WYTB", filepath: "songs/WYTB.mp3", coverpath: "songs/8.jpg" },
]
// songitem.forEach((element , i) => {
//     console.log(element , i)
//     element.getElementsByTagName('img')[0].src=xx[i].coverpath;
//     element.getElementsByClassName('songname')[0].innertext =songs[i].songname
// })

masterplay.addEventListener('click', () => {
  if (audio.paused || audio.currentTime <= 0) {
    audio.play()
    masterplay.classList.replace('fa-circle-play', 'fa-circle-pause')
    gif.style.opacity = 1
  }

  else {
    audio.pause()
    masterplay.classList.replace('fa-circle-pause', 'fa-circle-play')
    gif.style.opacity = 0
  }
})

audio.addEventListener('timeupdate', () => {
  progress = parseInt((audio.currentTime / audio.duration) * 100)
  // console.log(progress)
  proressbar.value = progress
})
proressbar.addEventListener('change', () => {
  audio.currentTime = proressbar.value * audio.duration / 100
})
const makeAllPlays = (() => {
  Array.from(document.getElementsByClassName('songItem')).forEach((element) => {
    element.classList.replace('fa-circle-play', 'fa-circle-pause')
  })
})

Array.from(document.getElementsByClassName('songplay')).forEach((element) => {
  element.addEventListener('click', (e) => {
    makeAllPlays()
    songIndex = parseInt(e.target.id)
    e.target.classList.replace('fa-circle-play', 'fa-circle-pause');
    audio.src = `${songIndex + 1}.mp3`
    audio.currentTime = 0;
    audio.play();
    masterplay.classList.replace('fa-circle-play', 'fa-circle-pause')

  })
})
document.getElementById('next').addEventListener('click', () => {
  if (songIndex >= 9) {
    songIndex = 0
  }
  else {
    songIndex += 1
    audio.src = `${songIndex + 1}.mp3`
    audio.currentTime = 0;
    audio.play();
    masterplay.classList.replace('fa-circle-play', 'fa-circle-pause')
  }
})
document.getElementById('previous').addEventListener('click', () => {
  if (songIndex <= 1) {
    songIndex = 0
  }
  else {
    songIndex -= 1
    audio.src = `${songIndex + 1}.mp3`
    audio.currentTime = 0;
    audio.play();
    masterplay.classList.replace('fa-circle-play', 'fa-circle-pause')
  }
})
document.getElementById('pausedddd').addEventListener('click', () => {
  if (audio.paused || audio.currentTime <= 0) {
    audio.src = `${songIndex + 1}.mp3`
    audio.currentTime = 0;
    audio.play();
  }
  else {
    audio.src = `${songIndex+1}.mp3`
     audio.currentTime = 0;
     audio.pause();
    // masterplay.classList.replace('fa-circle-pause', 'fa-circle-play')
  }
})

console.log("helooooooooooo")