import Player from '@vimeo/player'
var throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const video = new Player(iframe)



video.on('timeupdate', throttle((currentTime) => {
    localStorage.setItem("videoplayer-current-time", currentTime.seconds)
    console.log(localStorage.getItem("videoplayer-current-time"))
},1000))
video.setCurrentTime(localStorage.getItem("videoplayer-current-time"))

