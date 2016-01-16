var creative = {};

// ---------------------------------------------------------------------------------
// Window onload handler
// ---------------------------------------------------------------------------------

function preInit() {
    console.log("preInit");
    setupDom();
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
// Initializes the ad components
// ---------------------------------------------------------------------------------

function setupDom() {
    console.log("setupDom");

    creative.dom = {};
    creative.dom.mainContainer = document.getElementById('main-container');
    creative.dom.exit = document.getElementById('exit');

    creative.dom.video0 = {};
    creative.dom.video0.vidContainer = document.getElementById('video-container-0');
    creative.dom.video0.vid = document.getElementById('video-0');
}

// ---------------------------------------------------------------------------------
// Ad initialisation
// ---------------------------------------------------------------------------------

function init() {
    console.log("init");

    addVideoTracking0();
    addListeners();

    // Polite loading
    if (Enabler.isPageLoaded()) {
        show();
    } else {
        Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, show);
    }
}

// ---------------------------------------------------------------------------------
// Adds appropriate listeners at initialization time
// ---------------------------------------------------------------------------------

function addListeners() {
    console.log("addListeners");
    creative.dom.exit.addEventListener('click', exitClickHandler);
}

// ---------------------------------------------------------------------------------
// SHOWS THE AD
// ---------------------------------------------------------------------------------
function show() {
    console.log("show");
    creative.dom.mainContainer.style.display = "block";
}

// ---------------------------------------------------------------------------------
// MAIN
// ---------------------------------------------------------------------------------

function exitClickHandler() {
    console.log("exitClickHandler");
    // send video to end frame
    if (creative.dom.video0.vid.currentTime < creative.dom.video0.vid.duration) {
        creative.dom.video0.vid.currentTime = creative.dom.video0.vid.duration;
    }
    // removeClickForSound();
    Enabler.exit('BackgroundExit');
}

// ---------------------------------------------------------------------------------
// Add video metrics to the HTML5 video elements
// by loading in video module, and assigning to videos
// ---------------------------------------------------------------------------------

function addVideoTracking0() {
    console.log("addVideoTracking0");
    // Add in the video files.

    //    var srcNode;
    //
    //    srcNode = document.createElement('source');
    //    srcNode.setAttribute('type', 'video/mp4');
    //    srcNode.setAttribute('src', Enabler.getUrl('video.mp4'));
    //    creative.dom.video0.vid.appendChild(srcNode);

    creative.dom.video0.vid.muted = true;
    creative.dom.video0.vid.type = 'video/mp4';
    creative.dom.video0.vid.src = Enabler.getUrl('video.mp4');
    creative.dom.video0.vid.play();

    //    Enabler.loadModule(studio.module.ModuleId.VIDEO, function () {
    //        studio.video.Reporter.attach('video 0', creative.dom.video0.vid);
    //    }.bind(this));

}

// ---------------------------------------------------------------------------------
// CUSTOM
// ---------------------------------------------------------------------------------

var video = document.getElementById("video-0");
var bg = document.getElementById("bg");
var clickForSound = document.getElementById("clickForSound");
var clickForSoundImg = document.getElementById("clickForSoundImg");

video.addEventListener("mouseover", showControls);
video.addEventListener("mouseout", hideControls);
video.addEventListener("ended", videoEndHandler);
clickForSound.addEventListener("click", restartWithSound);

function restartWithSound() {
    console.log("restartWithSound");
    Enabler.counter("Restart With Sound", true);
    creative.dom.video0.vid.currentTime = 0;
    removeClickForSound();
}

function showControls() {
    video.setAttribute("controls", "controls");
}

function hideControls() {
    video.removeAttribute("controls");
}

function videoEndHandler() {
    console.log("videoEndHandler");
    Enabler.counter("Video Ended", true);
    creative.dom.video0.vid.pause();
    removeClickForSound();
}

function removeClickForSound() {
    console.log("removeClickForSound");
    video.muted = false;
    TweenMax.set(clickForSound, {
        autoAlpha: 0
    });
    TweenMax.to(clickForSoundImg, 0.5, {
        y: -50,
        ease: Cubic.easeOut
    });
}



// ---------------------------------------------------------------------------------
// Main onload handler
// ---------------------------------------------------------------------------------

window.addEventListener('load', preInit);