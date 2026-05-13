// Plain renders video on article detail pages, where direct playback controls
// should remain available for mouse, keyboard, and touch users.
const videos = document.querySelectorAll('.video-container > video.video');

videos.forEach(video => {
    video.controls = true;
    video.muted = false;
    video.loop = false;
    video.playsInline = true;

    video.addEventListener('play', () => {
        videos.forEach(otherVideo => {
            if (otherVideo !== video) {
                otherVideo.pause();
            }
        });
    });
});
