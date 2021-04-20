const videoElement = document.getElementById('video');
const startBtn = document.getElementById('start-button');
const shareScrBtn = document.getElementById('share-button');


//promt to select media stream, pass to video elem and play it
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        console.log('error is:', error);
    }
}

// add Event Listener
startBtn.addEventListener('click', async () => {
    try {
        await videoElement.requestPictureInPicture();
    } catch (error) {
        selectMediaStream();
    }
    
});

shareScrBtn.addEventListener('click', async () => {
    try {
        if (document.pictureInPictureElement) {
            document.exitPictureInPicture();
        }
        selectMediaStream();
    } catch (error) {
        console.log('error is:', error);
    }
});

//on Load
selectMediaStream();