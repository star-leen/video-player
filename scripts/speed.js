// video and videoContainer variables were declared in playPause.js. There values are:
// const video = document.querySelector('video')
// const videoContainer = document.querySelector('.video-container')
const speedBtn = document.querySelector('.speed-btn')


speedBtn.addEventListener('click', changePlaybackSpeed)

function changePlaybackSpeed() {
    let newPlaybackRate = video.playbackRate + .25
    if (newPlaybackRate > 2) newPlaybackRate = .25
    video.playbackRate = newPlaybackRate
    speedBtn.textContent = `${newPlaybackRate}x`
}