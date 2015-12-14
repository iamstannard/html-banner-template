// JavaScript Document
//HTML5 Ad Template JS from DoubleClick by Google

var creative = {};

var ecid;
var action;
var collapsedPanel;
var expandedPanel;
var collapsedExit;
var exitBtn;
var closeBtn;
var autoCol;
var orientate;
var isExpanded;

var autoPlayingInitVideo;

window.onload = function () {
    if (Enabler.isInitialized()) {
        enablerInitHandler();
    } else {
        Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
    }
};

enablerInitHandler = function (e) {
    console.log("enablerInitHandler");
    if (Enabler.isVisible()) {
        initAd();
    } else {
        Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, initAd);
    }
};

// ---------------------------------------------------------------------------------
// Initializes the ad components
// ---------------------------------------------------------------------------------

initAd = function () {
    console.log("initAd");

    creative.dom = {};
    creative.dom.video0 = {};
    creative.dom.video0.vidContainer = document.getElementById('video-container-0');
    creative.dom.video0.vid = document.getElementById('video-0');

    container = document.getElementById('container');
    collapsedPanel = document.getElementById('collapsed');
    expandedPanel = document.getElementById('expanded');
    expandButton = document.getElementById('collapsed_clickthrough');
    exitBtn = document.getElementById('exit_btn');
    closeBtn = document.getElementById('close_btn');

    expandedPanel.style.display = "block";
    collapsedPanel.style.display = "none";
    isExpanded = true;

    addVideoTracking0();
    addListeners();

}

addListeners = function () {
    console.log("addListeners");

    Enabler.addEventListener(studio.events.StudioEvent.FULLSCREEN_EXPAND_START, expandStartHandler);
    Enabler.addEventListener(studio.events.StudioEvent.FULLSCREEN_COLLAPSE_START, collapseStartHandler);
    Enabler.addEventListener(studio.events.StudioEvent.FULLSCREEN_EXPAND_FINISH, expandFinishHandler);
    Enabler.addEventListener(studio.events.StudioEvent.FULLSCREEN_COLLAPSE_FINISH, collapseFinishHandler);

    expandButton.addEventListener('click', onExpandHandler, false);
    exitBtn.addEventListener('click', onExitHandler, false);
    closeBtn.addEventListener('click', onCloseHandler, false);
}

collapseFinishHandler = function () {
    console.log("collapseFinishHandler");

}
expandFinishHandler = function () {
    console.log("expandFinishHandler");

    // set new source video for video player
    creative.dom.video0.vid.type = 'video/mp4';
    creative.dom.video0.vid.src = Enabler.getUrl('video-full.mp4');
    creative.dom.video0.vid.muted = false;
    creative.dom.video0.vid.play();
    
    autoPlayingInitVideo = false;

    //   studio.video.Reporter.detach('video 0');
    //   studio.video.Reporter.attach('video 1', creative.dom.video0.vid);

}

onExpandHandler = function (e) {
    console.log("onExpandHandler");
    Enabler.requestFullscreenExpand();
    collapsedPanel.style.display = "none";
    expandedPanel.style.display = "block";
    isExpanded = true;

}

//onCollapsedExitHandler = function (e) {
//    console.log("onCollapsedExitHandler");
//    Enabler.exit('HTML5_Collapsed_Clickthrough');
//
//}

onExitHandler = function (e) {
    console.log("onExitHandler");
    Enabler.exit('HTML5_Expanded_Clickthrough');
    Enabler.requestFullscreenCollapse();
    expandedPanel.style.display = "none";
    collapsedPanel.style.display = "block";
    isExpanded = false;

    // send video to end frame
    if (creative.dom.video0.vid.currentTime < creative.dom.video0.vid.duration) {
        creative.dom.video0.vid.currentTime = creative.dom.video0.vid.duration;
    }
    removeClickForSound();
}

onCloseHandler = function (e) {
    console.log("onCloseHandler");
    Enabler.counter('HTML5_Manual_Close');
    closeAd();
    // send video to end frame
    if (creative.dom.video0.vid.currentTime < creative.dom.video0.vid.duration) {
        creative.dom.video0.vid.currentTime = creative.dom.video0.vid.duration;
    }
    removeClickForSound();

}

closeAd = function () {
    console.log("closeAd");
    Enabler.requestFullscreenCollapse();
    Enabler.reportManualClose();
    collapsedPanel.style.display = "block";
    expandedPanel.style.display = "none";
    isExpanded = false;
}

collapseStartHandler = function (e) {
    console.log("videoEndHandler");
    Enabler.finishFullscreenCollapse();
    // send video to end frame
    if (creative.dom.video0.vid.currentTime < creative.dom.video0.vid.duration) {
        creative.dom.video0.vid.currentTime = creative.dom.video0.vid.duration;
    }
    removeClickForSound();
}

expandStartHandler = function (e) {
    console.log("expandStartHandler");
    Enabler.finishFullscreenExpand();
}

// ---------------------------------------------------------------------------------
// Add video metrics to the HTML5 video elements
// by loading in video module, and assigning to videos
// ---------------------------------------------------------------------------------

function addVideoTracking0() {
    console.log("addVideoTracking0");
    // Add in the video files
    var srcNode;

    //        srcNode = document.createElement('source');
    //        srcNode.setAttribute('type', 'video/mp4');
    //        srcNode.setAttribute('src', Enabler.getUrl('video.mp4'));
    //        creative.dom.video0.vid.appendChild(srcNode);

    creative.dom.video0.vid.muted = true;
    creative.dom.video0.vid.type = 'video/mp4';
    creative.dom.video0.vid.src = Enabler.getUrl('video.mp4');
    creative.dom.video0.vid.play();
    
    autoPlayingInitVideo = true;


    //    Enabler.loadModule(studio.module.ModuleId.VIDEO, function () {
    //        studio.video.Reporter.attach('video 0', creative.dom.video0.vid);
    //    }.bind(this));

}

// ---------------------------------------------------------------------------------
// CUSTOM
// ---------------------------------------------------------------------------------

var video = document.getElementById("video-0");
var clickForSound = document.getElementById("clickForSound");

video.addEventListener("mouseover", showControls);
video.addEventListener("mouseout", hideControls);
video.addEventListener("ended", videoEndHandler);
clickForSound.addEventListener("click", restartWithSound);

function restartWithSound() {
    console.log("restartWithSound");
    Enabler.counter("Restart With Sound", true);
    creative.dom.video0.vid.currentTime = 0;
    removeClickForSound();
    autoPlayingInitVideo = false;
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

    if (autoPlayingInitVideo) {
        Enabler.requestFullscreenCollapse();
        collapsedPanel.style.display = "block";
        expandedPanel.style.display = "none";
        isExpanded = false;
    }

}

function removeClickForSound() {
    console.log("removeClickForSound");
    video.muted = false;
    TweenMax.set(clickForSound, {
        autoAlpha: 0
    });
}