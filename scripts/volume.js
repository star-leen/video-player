// video and videoContainer variables were declared in playPause.js. There values are:
// const video = document.querySelector('video')
// const videoContainer = document.querySelector('.video-container')
const muteBtn = document.querySelector('.mute-btn')
const volumeSlider = document.querySelector('.volume-slider')


muteBtn.addEventListener('click', toggleMute)
volumeSlider.addEventListener('input', e => {
    video.volume = e.target.value
    video.muted = e.target.value === 0
})

function toggleMute() {
    video.muted = !video.muted
}

video.addEventListener('volumechange', () => {
    volumeSlider.value = video.volume
    let volumeLevel
    if (video.muted || video.volume === 0) {
        volumeSlider.value = 0
        volumeLevel = 'muted'
    } else if (video.volume >= .5) {
        volumeLevel = 'high'
    } else {
        volumeLevel = 'low'
    }
    videoContainer.dataset.volumeLevel = volumeLevel
})

document.addEventListener('keydown', e => {
    const tagName = document.activeElement.tagName.toLowerCase()

    if (tagName === 'input') return
    switch (e.key.toLowerCase()) {
        case 'm':
            toggleMute()
            break
    }
})