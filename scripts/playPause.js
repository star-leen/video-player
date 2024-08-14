const playPauseBtn = document.querySelector('.play-pause-btn')
const video = document.querySelector('video')
const videoContainer = document.querySelector('.video-container')

document.addEventListener('keydown', e => {
    const tagName = document.activeElement.tagName.toLowerCase()

    if (tagName === 'input') return
    switch (e.key.toLowerCase()) {
        case ' ':
            if (tagName === 'button') return
        case 'p':
            togglePlay()
            break
    }
})

// Play/Pause Video
function togglePlay() {
    video.paused ? video.play() : video.pause()
    setTimeout()
}

playPauseBtn.addEventListener("click", togglePlay)

video.addEventListener('click', togglePlay)

video.addEventListener('play', () => {
    videoContainer.classList.remove('paused')
})

video.addEventListener('pause', () => {
    videoContainer.classList.add('paused')
})

