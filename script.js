let songIndex = 0;
let audio = new Audio('1.mp3');
let masterplay = document.getElementById('masterplay');
let proressbar = document.getElementById('progressbar');
let gif = document.getElementById('gif')
// let songitem = Array.from(document.getElementsByClassName('songItem'));
let songs = [
  { songname: "295", filepath: "songs/1.mp3", coverpath: "songs/1.jpg" },
  { songname: "Badfella", filepath: "songs/2.mp3", coverpath: "songs/2.jpg" },
  { songname: "Bitch I am back", filepath: "songs/3.mp3", coverpath: "songs/3.jpg" },
  { songname: "Chorni", filepath: "songs/4.mp3", coverpath: "songs/4.jpg" },
  { songname: "Dawood", filepath: "songs/5.mp3", coverpath: "songs/5.jpg" },
  { songname: "Goat", filepath: "songs/6.mp3", coverpath: "songs/6.jpg" },
  { songname: "G shit", filepath: "songs/7.mp3", coverpath: "songs/7.jpg" },
  { songname: "Old skool", filepath: "songs/8.mp3", coverpath: "songs/8.jpg" },
  { songname: "Vaar", filepath: "songs/9.mp3", coverpath: "songs/9.jpg" },
  { songname: "We rollin", filepath: "songs/10.mp3", coverpath: "songs/10.jpg" },
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

console.log("kkk")