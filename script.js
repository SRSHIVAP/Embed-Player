// Get the video element
var video = document.getElementById("myVideo");

// Play the video
function playVideo() {
    video.play();
}

// Pause the video
function pauseVideo() {
    video.pause();
}

// Stop the video and reset to the beginning
function stopVideo() {
    video.pause();
    video.currentTime = 0;
}
