// video and videoContainer variables were declared in playPause.js. There values are:
// const video = document.querySelector('video')
// const videoContainer = document.querySelector('.video-container')
const miniPlayerBtn = document.querySelector('.mini-player-btn')
const theaterBtn = document.querySelector('.theater-btn')
const fullScreenBtn = document.querySelector('.full-screen-btn')


// View Modes
miniPlayerBtn.addEventListener('click', toggleMiniPlayerMode)
theaterBtn.addEventListener('click', toggleTheaterMode)
fullScreenBtn.addEventListener('click', toggleFullScreenMode)

document.addEventListener('keydown', e => {
    const tagName = document.activeElement.tagName.toLowerCase()

    if (tagName === 'input') return
    switch (e.key.toLowerCase()) {
        case 'f':
            toggleFullScreenMode()
            break
        case 't':
            toggleTheaterMode()
            break
        case 'i':
            toggleMiniPlayerMode()
            break
    }
})

// Mini Player Mode
function toggleMiniPlayerMode() {
    if (videoContainer.classList.contains('mini-player')) {
        document.exitPictureInPicture()
     } else {
         video.requestPictureInPicture()
     }
}

video.addEventListener('enterpictureinpicture', () => {
    videoContainer.classList.add('mini-player')
})

video.addEventListener('leavepictureinpicture', () => {
    videoContainer.classList.remove('mini-player')
})


// Theater Mode
function toggleTheaterMode() {
    videoContainer.classList.toggle('theater')
}


// Full Screen Mode
function toggleFullScreenMode() {
    if (document.fullscreenElement == null) {
       videoContainer.requestFullscreen()
    } else {
        document.exitFullscreen()
    }
}

document.addEventListener('fullscreenchange', () => {
    videoContainer.classList.toggle('full-screen', document.fullscreenElement)
})