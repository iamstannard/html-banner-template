// JavaScript Document
// HTML5 Ad Template JS from DoubleClick by Google

var collapsedPanel;
var expandedPanel;
var expandBtn;
var exitBtn;
var closeBtn;

var videoAutoPlays;
var videoStartsMuted;
var videoIsReplaying;
var videonOnEndFrame;

var firstExpand = true;

// ====================================== For Getting Cookie ==========================================

// ========== NOTE : COOKIE FUNCTIONALITY NEEDS TO BE ACTIVATED IN DCM
// ========== Creative parameters/Key-value parameters [ useCookie=true ]

getThisCookie = function () {
    var useCookie = false;

    if (Enabler.getParameter("useCookie")) {

        useCookie = (Enabler.getParameter("useCookie") == "true") ? true : false;

    }

    if (useCookie == false) {
        var adstate = "expanded";
        serveBillboard(adstate);
    } else {
        getBilllboardState = setInterval(checkCookie, 1000);
    }
}

checkCookie = function () {
    var adstate = getFlashState();

    if (adstate != "null") {
        serveBillboard(adstate);
        clearInterval(getBilllboardState);
    }
}


serveBillboard = function (adstate) {
    switch (adstate) {

        case "expanded":
            // Enters Expand Function
            Enabler.counter("Billboard State on Page Load: Secondary Load (Expanded)");
            console.log("Billboard State on Page Load: Secondary Load (Expanded)");
            videoAutoPlays = true;
            videoStartsMuted = true;
            videoIsReplaying = false;
            videonOnEndFrame = false;
            onAutoExpandHandler();
            break;
        case "collapsed":
            // Enters Collapse Function
            Enabler.counter("Billboard State on Page Load: Collapsed");
            console.log("Billboard State on Page Load: Collapsed");
            videoAutoPlays = false;
            videoStartsMuted = false;
            videoIsReplaying = false;
            videonOnEndFrame = false;
            break;
        default:
            // Enters Default Function
            Enabler.counter("Billboard State on Page Load: First Load (Expanded)");
            console.log("Billboard State on Page Load: First Load (Expanded)");
            onAutoExpandHandler();
            break;
    }
}




// =============================================================================================

dcrmInit = function () {
    //    Enabler.setExpandingPixelOffsets(
    //        0, // left offset of expanded ad
    //        0, // top offset of expanded ad
    //        970, // expanded width of ad
    //        250); // expanded height of ad

    // Set Expansion to Auto-Expand
    Enabler.setStartExpanded(true);

    collapsedPanel = document.getElementById('collapsed');
    expandedPanel = document.getElementById('expanded');
    expandBtn = document.getElementById('expand_btn');
    exitBtn = document.getElementById('exit_btn');
    closeBtn = document.getElementById('close_btn');

    // Added Listeners
    addListeners();

    // Add video tracking
    addVideoTracking();

    // Getting Cookie from Billboard JS
    getThisCookie();
}


addListeners = function () {
    expandBtn.addEventListener('click', onUserExpandHandler, false);
    exitBtn.addEventListener('click', onExitHandler, false);
    closeBtn.addEventListener('click', onCloseHandler, false);



    // Expand Event Listeners
    Enabler.addEventListener(studio.events.StudioEvent.EXPAND_START,
        function () {
            //Enabler.startTimer('Expanded Panel');
            collapsedPanel.style.display = "none";
            expandedPanel.style.display = "block";
            setTimeout(function () {
                Enabler.finishExpand()
            }, 1000);
        });

    Enabler.addEventListener(studio.events.StudioEvent.EXPAND_FINISH,
        function () {
            // Record Cookies for Expand from Billboard JS
            console.log("handleExpand");
            handleExpand();
        });


    // Collapse Event Listeners
    Enabler.addEventListener(studio.events.StudioEvent.COLLAPSE_START,
        function () {
            //Enabler.stopTimer('Expanded Panel');
            expandedPanel.style.display = "none";
            collapsedPanel.style.display = "block";
            Enabler.finishCollapse();
        });

    Enabler.addEventListener(studio.events.StudioEvent.COLLAPSE_FINISH,
        function () {
            // Record Cookies for Collapse from Billboard JS
            console.log("handleCollapse");
            handleCollapse();
        });
}

onAutoExpandHandler = function (e) {
    Enabler.requestExpand();
    playVideoMuted();
    showClickForSound();
    firstExpand = false;
}

onUserExpandHandler = function (e) {
    Enabler.requestExpand();
    if (firstExpand) {
        playVideoMuted();
        showClickForSound();
        firstExpand = false;
    } else {
        playVideo();
        hideClickForSound();
    }
}

onExitHandler = function (e) {
    Enabler.exit('Clickthrough');
    closeAd();
}

onCloseHandler = function (e) {
    Enabler.reportManualClose();
    closeAd();
}

closeAd = function () {
    Enabler.requestCollapse();
    videoPlayer.currentTime = 0;
    videoPlayer.pause();
    hideClickForSound();
    unmuteVideo();
    showPauseBtn();
    hidePlayBtn();
    hideReplayBtn();
    videoIsReplaying = true;
}

// ---------------------------------------------------------------------------------
// ADD VIDEO SRC AND METRICS
// ---------------------------------------------------------------------------------

function addVideoTracking() {

    var srcNode;

    srcNode = document.createElement('source');

    srcNode.setAttribute('type', 'video/mp4');
    srcNode.setAttribute('src', Enabler.getUrl('video.mp4'));
    videoPlayer.appendChild(srcNode);

    Enabler.loadModule(studio.module.ModuleId.VIDEO, function () {
        studio.video.Reporter.attach('Video', videoPlayer);
    }.bind(this));

}

// ---------------------------------------------------------------------------------
// VIDEO PLAYER
// ---------------------------------------------------------------------------------

var videoContainer = document.getElementById('video-container');
var videoPlayer = document.getElementById("video-player");
var clickForSound = document.getElementById("click-for-sound");
var videoControls = document.getElementById('video-controls');
var playBtn = document.getElementById('play-btn');
var pauseBtn = document.getElementById('pause-btn');
var muteBtn = document.getElementById('mute-btn');
var unmuteBtn = document.getElementById('unmute-btn');
var replayBtn = document.getElementById('replay-btn');

videoPlayer.addEventListener("canplay", videoReadyToPlay, false);
videoPlayer.addEventListener("ended", videoEndHandler, false);
clickForSound.addEventListener("click", restartWithSound, false);

function showControls() {
    videoControls.style.visibility = 'visible';
}

function videoReadyToPlay() {
    if (!videoIsReplaying) {

        if (videoAutoPlays) {
            playVideo();
        } else {
            pauseVideo();
        }

        if (videoStartsMuted) {
            muteVideo();
            showClickForSound();
        } else {
            unmuteVideo();
        }

        showControls();
    }

    showControls();

}

function restartWithSound() {
    videoIsReplaying = true;
    videoPlayer.currentTime = 0;
    unmuteVideo();
    playVideo();
    hideClickForSound();
}

function videoEndHandler() {
    videonOnEndFrame = true;

    pauseVideo();
    unmuteVideo();

    hideClickForSound();

    hidePlayBtn();
    hidePauseBtn();
    hideMuteBtn();
    hideUnmuteBtn();

    showReplayBtn();
}

// ---------------------------------------------------------------------------------
// VIDEO CONTROLS
// ---------------------------------------------------------------------------------

playBtn.addEventListener('click', playPauseHandler, false);
pauseBtn.addEventListener('click', playPauseHandler, false);
muteBtn.addEventListener('click', muteUnmuteHandler, false);
unmuteBtn.addEventListener('click', muteUnmuteHandler, false);
replayBtn.addEventListener('click', replayHandler, false);

hideReplayBtn();

function showClickForSound() {
    clickForSound.style.visibility = 'visible';
}

function hideClickForSound() {
    clickForSound.style.visibility = 'hidden';
}

function playVideo() {
    showPauseBtn();
    hidePlayBtn();
    videoPlayer.play();
}

function playVideoMuted() {
    videoPlayer.play();
    muteVideo();
    playVideo();
}

function pauseVideo() {
    videoPlayer.pause();
    showPlayBtn();
    hidePauseBtn();
}

function replayVideo() {
    videoIsReplaying = true;
    videoPlayer.currentTime = 0;
    unmuteVideo();
    playVideo();
    videonOnEndFrame = false;
}

function muteVideo() {
    videoPlayer.muted = true;
    showUnmuteBtn();
    hideMuteBtn();
}

function unmuteVideo() {
    videoPlayer.muted = false;
    showMuteBtn();
    hideUnmuteBtn();
}

function showPlayBtn() {
    playBtn.style.visibility = 'visible';
}

function showPauseBtn() {
    pauseBtn.style.visibility = 'visible';
}

function showReplayBtn() {
    replayBtn.style.visibility = 'visible';
}

function showMuteBtn() {
    muteBtn.style.visibility = 'visible';
}

function showUnmuteBtn() {
    unmuteBtn.style.visibility = 'visible';
}

function hidePlayBtn() {
    playBtn.style.visibility = 'hidden';
}

function hidePauseBtn() {
    pauseBtn.style.visibility = 'hidden';
}

function hideReplayBtn() {
    replayBtn.style.visibility = 'hidden';
}

function hideMuteBtn() {
    muteBtn.style.visibility = 'hidden';
}

function hideUnmuteBtn() {
    unmuteBtn.style.visibility = 'hidden';
}


function playPauseHandler() {
    if (videoPlayer.paused) {
        if (videoPlayer.muted) {
            unmuteVideo();
            hideClickForSound();
        }
        playVideo();
    } else {
        pauseVideo();
    }
}

function muteUnmuteHandler() {

    if (videoPlayer.muted) {
        hideClickForSound();
        unmuteVideo();
    } else {
        muteVideo();
    }
}

function replayHandler() {
    hideReplayBtn();
    showPauseBtn();
    showMuteBtn();
    replayVideo();
}

// ---------------------------------------------------------------------------------
// MAIN ON LOAD HANDLER
// ---------------------------------------------------------------------------------

window.onload = function () {
    /* Initialize Enabler */
    if (Enabler.isInitialized()) {
        dcrmInit();
    } else {
        Enabler.addEventListener(studio.events.StudioEvent.INIT, dcrmInit);
    }
}
