// ---------------------------------------------------------------------------------
// WINDOW ON LOAD HANDLE
// ---------------------------------------------------------------------------------

function preInit() {
    console.log("preInit");
    if (Enabler.isInitialized()) {
        init();
    } else {
        Enabler.addEventListener(
            studio.events.StudioEvent.INIT,
            init
        );
    }
}

// ---------------------------------------------------------------------------------
// INIT AD COMPONENTS
// ---------------------------------------------------------------------------------

var mainContainer = document.getElementById('main-container');
var exit = document.getElementById('exit');

var videoContainer = document.getElementById('video-container');
var videoPlayer = document.getElementById("video-player");
var videoControls = document.getElementById('video-controls');

var bg = document.getElementById("bg");
var clickForSound = document.getElementById("click-for-sound");

// ---------------------------------------------------------------------------------
// INIT AD
// ---------------------------------------------------------------------------------

function init() {
    console.log("init");

    addListeners();
    addVideoTracking();

    // Polite loading
    if (Enabler.isPageLoaded()) {
        show();
    } else {
        Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, show);
    }
}

// ---------------------------------------------------------------------------------
// LISTENERS
// ---------------------------------------------------------------------------------

function addListeners() {
    console.log("addListeners");
    exit.addEventListener('click', exitClickHandler);
}

// ---------------------------------------------------------------------------------
// SHOWS THE AD
// ---------------------------------------------------------------------------------
function show() {
    console.log("show");
    mainContainer.style.display = "block";
}

// ---------------------------------------------------------------------------------
// MAIN
// ---------------------------------------------------------------------------------

function exitClickHandler() {
    console.log("exitClickHandler");

    // send video to end frame
    //    if (videoPlayer.currentTime < videoPlayer.duration) {
    //        videoPlayer.currentTime = videoPlayer.duration;
    //    }

    // videoPlayer.currentTime = 0;
    videoPlayer.pause();
    videoPlayer.muted = false;

    pauseBtn.style.visibility = 'hidden';
    playBtn.style.visibility = 'visible';
    muteBtn.style.visibility = 'visible';
    unmuteBtn.style.visibility = 'hidden';

    //showControls();

    if (autoPlayingMuted) {
        removeClickForSound();
        autoPlayingMuted = false;
    }

    Enabler.exit('Exit');
}

// ---------------------------------------------------------------------------------
// ADD VIDEO SRC AND METRICS
// ---------------------------------------------------------------------------------

function addVideoTracking() {
    console.log("addVideoTracking");

    var srcNode;

    //    srcNode = document.createElement('source');
    //    srcNode.setAttribute('type', 'video/webm');
    //    srcNode.setAttribute('src', Enabler.getUrl('video.webm'));
    //    videoPlayer.appendChild(srcNode);
    //
    //    srcNode = document.createElement('source');
    //    srcNode.setAttribute('type', 'video/ogg');
    //    srcNode.setAttribute('src', Enabler.getUrl('video.ogg'));
    //    videoPlayer.appendChild(srcNode);

    srcNode = document.createElement('source');
    srcNode.setAttribute('type', 'video/mp4');
    srcNode.setAttribute('src', Enabler.getUrl('video.mp4'));
    videoPlayer.appendChild(srcNode);

    Enabler.loadModule(studio.module.ModuleId.VIDEO, function () {
        studio.video.Reporter.attach('Video', videoPlayer);
    }.bind(this));

}

// ---------------------------------------------------------------------------------
// CUSTOM
// ---------------------------------------------------------------------------------

//videoContainer.addEventListener("mouseover", showControls, false);
//videoContainer.addEventListener("mouseout", hideControls, false);

videoPlayer.addEventListener("ended", videoEndHandler, false);
clickForSound.addEventListener("click", restartWithSound, false);

var autoPlayingMuted = true;

function restartWithSound() {
    console.log("restartWithSound");
    Enabler.counter("Restart With Sound", true);
    videoPlayer.currentTime = 0;
    videoPlayer.play();
    removeClickForSound();
}

function showControls() {
    //console.log("showControls");
    TweenMax.to(videoControls, 0.5, {
        autoAlpha: 1,
        ease: Cubic.easeOut
    });
}

function hideControls() {
    //console.log("hideControls");
    TweenMax.to(videoControls, 0.5, {
        autoAlpha: 0,
        ease: Cubic.easeOut
    });
}

function videoEndHandler() {
    console.log("videoEndHandler");

    videoPlayer.pause();
    
    videoPlayer.muted = false;

    pauseBtn.style.visibility = 'hidden';
    playBtn.style.visibility = 'visible';
    muteBtn.style.visibility = 'visible';
    unmuteBtn.style.visibility = 'hidden';

    //showControls();

    if (autoPlayingMuted) {
        removeClickForSound();
        autoPlayingMuted = false;
    }
}

function removeClickForSound() {
    console.log("removeClickForSound");

    TweenMax.to(clickForSound, 0.5, {
        autoAlpha: 0,
        ease: Cubic.easeIn
    });


    muteBtn.style.visibility = 'visible';
    unmuteBtn.style.visibility = 'hidden';


    videoPlayer.muted = false;

}

// ---------------------------------------------------------------------------------
// VIDEO CONTROLS
// ---------------------------------------------------------------------------------

//hideControls();

var playBtn = document.getElementById('play-btn');
var pauseBtn = document.getElementById('pause-btn');
var muteBtn = document.getElementById('mute-btn');
var unmuteBtn = document.getElementById('unmute-btn');

pauseBtn.style.visibility = 'visible';
playBtn.style.visibility = 'hidden';
muteBtn.style.visibility = 'hidden';
unmuteBtn.style.visibility = 'visible';

playBtn.addEventListener('click', pausePlayHandler, false);
pauseBtn.addEventListener('click', pausePlayHandler, false);
muteBtn.addEventListener('click', muteUnmuteHandler, false);
unmuteBtn.addEventListener('click', muteUnmuteHandler, false);

function pausePlayHandler() {
    if (videoPlayer.paused) {
        // If paused, then play
        if (videoPlayer.muted) {
            videoPlayer.muted = false;
            muteBtn.style.visibility = 'visible';
            unmuteBtn.style.visibility = 'hidden';

        }
        if (autoPlayingMuted) {
            removeClickForSound();
            autoPlayingMuted = false;
        }
        videoPlayer.play();

        // Show pause button and hide play button
        pauseBtn.style.visibility = 'visible';
        playBtn.style.visibility = 'hidden';
    } else {
        // If playing, then pause
        videoPlayer.pause();
        // Show play button and hide pause button
        pauseBtn.style.visibility = 'hidden';
        playBtn.style.visibility = 'visible';
    }
}

function muteUnmuteHandler() {

    if (videoPlayer.muted) {
        if (autoPlayingMuted) {
            removeClickForSound();
            autoPlayMuted = false;
        }

        // If muted, then turn it on
        videoPlayer.muted = false;
        // Show mute button and hide unmute button
        muteBtn.style.visibility = 'visible';
        unmuteBtn.style.visibility = 'hidden';
    } else {
        // If unmuted, then turn it off
        videoPlayer.muted = true;
        // Show unmute button and hide mute button
        muteBtn.style.visibility = 'hidden';
        unmuteBtn.style.visibility = 'visible';
    }
}

//document.getElementById("mp4_src").src = "movie.mp4";
//document.getElementById("ogg_src").src = "movie.ogg";
//document.getElementById("myVideo").load();

//audio|video.addEventListener("loadstart", myScript);
//audio|video.addEventListener("canplay", myScript);
//audio|video.addEventListener("canplaythrough", myScript);
//audio|video.addEventListener("play", myScript);
//audio|video.addEventListener("pause", myScript);
//audio|video.addEventListener("ended", myScript);

//audio|video.duration
//audio|video.paused
//audio|video.ended
//audio|video.muted=true|false

//audio|video.play()
//audio|video.pause()

// ---------------------------------------------------------------------------------
// MAIN ON LOAD HANDLER
// ---------------------------------------------------------------------------------

window.addEventListener('load', preInit);