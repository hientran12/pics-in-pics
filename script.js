const videoElement = document.getElementById('video');
const button = document.getElementById('start-button');

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
button.addEventListener('click', async () => {
    //Disable Button
    button.disable = true;
    //Start Picture in Pictrue
    await videoElement.requestPictureInPicture();
    // Reset Button
    button.disable = false;
});
// Onload
selectMediaStream();