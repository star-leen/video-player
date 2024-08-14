// video and videoContainer variables were declared in playPause.js. There values are:
// const video = document.querySelector('video')
// const videoContainer = document.querySelector('.video-container')
const captionsBtn = document.querySelector('.captions-btn')

captions = video.textTracks[0]
captions.mode = 'hidden'

captionsBtn.addEventListener('click', toggleCaptions)

function toggleCaptions() {
    const isHidden = captions.mode === 'hidden'
    captions.mode = isHidden ? 'showing' : 'hidden'
    videoContainer.classList.toggle('captions', isHidden)
}

document.addEventListener('keydown', e => {
    const tagName = document.activeElement.tagName.toLowerCase()

    if (tagName === 'input') return
    switch (e.key.toLowerCase()) {
        case 'c':
            toggleCaptions()
            break
    }
})