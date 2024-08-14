// video and videoContainer variables were declared in playPause.js. There values are:
// const video = document.querySelector('video')
// const videoContainer = document.querySelector('.video-container')
const previewImg = document.querySelector('.preview-img')
const thumbnailImg = document.querySelector('.thumbnail-img')
const timelineContainer = document.querySelector('.timeline-container')

timelineContainer.addEventListener('mousemove', handleTimelimeUpdate)
timelineContainer.addEventListener('mousedown', toggleScrubbing)
document.addEventListener('mouseup', e => {
    if (isScrubbing) toggleScrubbing(e)
})

document.addEventListener('mousemove', e => {
    if (isScrubbing) handleTimelimeUpdate(e)
})

let isScrubbing = false
let wasPaused

function toggleScrubbing(e) {
    const rect = timelineContainer.getBoundingClientRect()
    const percent = Math.min(Math.max(0, e.x - rect.x), rect.width) / rect.width
    isScrubbing = (e.buttons & 1) === 1
    videoContainer.classList.toggle('scrubbing', isScrubbing)
    if (isScrubbing) {
        wasPaused = video.paused
        video.pause()
    } else {
        video.currentTime = percent * video.duration
        if (!wasPaused) video.play()
    }

    handleTimelimeUpdate(e)
}

function handleTimelimeUpdate(e) {
    const rect = timelineContainer.getBoundingClientRect()
    const percent = Math.min(Math.max(0, e.x - rect.x), rect.width) / rect.width
    const previewImgNumber = Math.max(1, Math.floor(percent * 10))
    const previewImgSrc = `assets/previewImgs/preview${previewImgNumber}.jpg`
    previewImg.src = previewImgSrc
    timelineContainer.style.setProperty('--preview-position', percent)

    if (isScrubbing) {
        e.preventDefault()
        thumbnailImg.src = previewImgSrc
        timelineContainer.style.setProperty('--progress-position', percent)

    }
    console.log(video.duration)
}