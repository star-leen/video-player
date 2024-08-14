// video and videoContainer variables were declared in playPause.js. There values are:
// const video = document.querySelector('video')
// const videoContainer = document.querySelector('.video-container')
const currentTimeElem = document.querySelector('.current-time')
const totalTimeElem = document.querySelector('.total-time')


video.addEventListener('loadeddata', () => {
    totalTimeElem.textContent = formatDuration(video.duration)
})

video.addEventListener('timeupdate', () => {
    currentTimeElem.textContent = formatDuration(video.currentTime)
    percent = video.currentTime / video.duration
    // timelineContainer was defined in timeline.js
    timelineContainer.style.setProperty('--progress-position', percent)
    // if (Math.floor(video.currentTime % 60) > 5.1 && Math.floor(video.currentTime % 60) < 6) {
    //     console.log('5 second mark')
    // }
})

const leadingZeroFormatter = new Intl.NumberFormat(undefined, {
    minimumIntegerDigits: 2
})
function formatDuration(time) {
    const seconds = Math.floor(time % 60)
    const minutes = Math.floor(time / 60) % 60
    const hours = Math.floor(time / 3600)

    if (hours === 0) {
        return `${minutes}:${leadingZeroFormatter.format(seconds)}`
    } else {
        return `${hours}:${leadingZeroFormatter.format(minutes)}:${leadingZeroFormatter.format(seconds)}`
    }
}

function skip(duration) {
    video.currentTime += duration
}

console.log(video.duration)

document.addEventListener('keydown', e => {
    const tagName = document.activeElement.tagName.toLowerCase()

    if (tagName === 'input') return
    switch (e.key.toLowerCase()) {
        case 'arrowleft':
        case 'j':
            skip(-5)
            break
        case 'arrowright':
        case 'l':
            skip(+5)
            break
    }
})