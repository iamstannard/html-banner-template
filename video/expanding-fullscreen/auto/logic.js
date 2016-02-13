(function () {

    // ---------------------------------------------------------------------------------
    // CONTROL VARS
    // ---------------------------------------------------------------------------------

    var autoExpands = true;
    var autoCollapses = true;

    var videoAutoPlays = true;
    var videoStartsMuted = true;
    var videoIsReplaying = false;

    var autoPlayingInitVideo = true;

    var isExpanded;

    // ---------------------------------------------------------------------------------
    // EXPANDING AND COLLAPSING MECHANICS
    // ---------------------------------------------------------------------------------



    // ---------------------------------------------------------------------------------
    // MAIN
    // ---------------------------------------------------------------------------------

    function exitClickHandler() {
        console.log("exitClickHandler");

        pauseVideo();
        unmuteVideo();

        Enabler.exit('Exit');
    }


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
    // CUSTOM
    // ---------------------------------------------------------------------------------

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


    // ---------------------------------------------------------------------------------
    // ADD VIDEO SRC AND METRICS
    // ---------------------------------------------------------------------------------

    function addVideoTracking() {
        console.log("addVideoTracking");

        var srcNode;

        srcNode = document.createElement('source');

        // srcNode.setAttribute('type', 'video/ogg');
        // srcNode.setAttribute('src', Enabler.getUrl('video.ogg'));
        // videoPlayer.appendChild(srcNode);

        srcNode.setAttribute('type', 'video/webm');
        srcNode.setAttribute('src', Enabler.getUrl('video.webm'));
        videoPlayer.appendChild(srcNode);

        srcNode.setAttribute('type', 'video/mp4');
        srcNode.setAttribute('src', Enabler.getUrl('video.mp4'));
        videoPlayer.appendChild(srcNode);

        Enabler.loadModule(studio.module.ModuleId.VIDEO, function () {
            studio.video.Reporter.attach('video1', videoPlayer);
        }.bind(this));

    }

    // ---------------------------------------------------------------------------------
    // VIDEO PLAYER
    // ---------------------------------------------------------------------------------



    videoPlayer.addEventListener("canplay", videoReadyToPlay, false);
    videoPlayer.addEventListener("ended", videoEndHandler, false);
    clickForSound.addEventListener("click", restartWithSound, false);

    function showControls() {
        console.log("showControls");
        TweenMax.to(videoControls, 0.25, {
            autoAlpha: 1,
            ease: Cubic.easeOut
        });
    }

    function videoReadyToPlay() {
        console.log("videoReadyToPlay");

        if (!videoIsReplaying) {

            if (videoAutoPlays) {
                playVideo();
                showPauseBtn();
            } else {
                showPlayBtn();
            }


            if (videoAutoPlays) {
                playVideo();
                showPauseBtn();
            } else {
                showPlayBtn();
            }

            if (videoStartsMuted) {
                muteVideo();
                showUnmuteBtn();
                showClickForSound();
            } else {
                unmuteVideo();
                showMuteBtn();
            }

            showControls();
        }

    }

    function restartWithSound() {
        console.log("restartWithSound");
        Enabler.counter("Restart Video With Sound");
        playVideo();
        hideClickForSound();
    }

    function videoEndHandler() {
        console.log("videoEndHandler");

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
        TweenMax.to(clickForSound, 0.25, {
            autoAlpha: 1,
            ease: Cubic.easeout
        });
    }

    function hideClickForSound() {
        TweenMax.to(clickForSound, 0.25, {
            autoAlpha: 0,
            ease: Cubic.easeout
        });
    }

    function playVideo() {
        videoPlayer.play();
        unmuteVideo();
        showPauseBtn();
        hidePlayBtn();
    }

    function pauseVideo() {
        videoPlayer.pause();
        showPlayBtn();
        hidePauseBtn();
    }

    function replayVideo() {
        Enabler.counter("Replay Video");
        videoIsReplaying = true;
        videoPlayer.currentTime = 0;
        unmuteVideo();
        playVideo();
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
        console.log("replayHandler");
        hideReplayBtn();
        showPauseBtn();
        showMuteBtn();
        replayVideo();
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
    // MREC ANIM
    // ---------------------------------------------------------------------------------

    // ---------------------------------------------------------------------------------
    // MAIN ON LOAD HANDLER
    // ---------------------------------------------------------------------------------

    window.addEventListener('load', preInit);

})();






/*


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

var autoPlayingInitVideo = true;

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

    // auto expand
    Enabler.requestFullscreenExpand();
    //    collapsedPanel.style.display = "none";
    //    expandedPanel.style.display = "block";
    //    isExpanded = true;
    switchToExpandedPanel();

    // click to expand
    // expandedPanel.style.display = "none";
    // collapsedPanel.style.display = "block";
    // isExpanded = false;
    // startAnim();

}

function showCollapsedPanel() {
    collapsedPanel.style.display = "block";
}

function hideCollapsedPanel() {
    collapsedPanel.style.display = "none";
}

function showExpandedPanel() {
    expandedPanel.style.display = "block";
}

function hideExpandedPanel() {
    expandedPanel.style.display = "none";
}

function switchToCollapsedPanel() {
    hideExpandedPanel();
    setTimeout(showCollapsedPanel, 100);
    isExpanded = false;

}

function switchToExpandedPanel() {
    hideCollapsedPanel();
    setTimeout(showExpandedPanel, 100);
    isExpanded = true;
}


collapseFinishHandler = function () {
    console.log("collapseFinishHandler");

}
expandFinishHandler = function () {
    console.log("expandFinishHandler");
    // set new source video for video player

    if (!autoPlayingInitVideo) {
        creative.dom.video0.vid.muted = false;
        creative.dom.video0.vid.type = 'video/mp4';
        creative.dom.video0.vid.src = Enabler.getUrl('video-full.mp4');
        creative.dom.video0.vid.play();
        //        studio.video.Reporter.detach('Video');
        //        studio.video.Reporter.attach('Video Full', creative.dom.video0.vid);
    }
}

onExpandHandler = function (e) {
    console.log("onExpandHandler");
    Enabler.requestFullscreenExpand();
    //    collapsedPanel.style.display = "none";
    //    expandedPanel.style.display = "block";
    //    isExpanded = true;
    switchToExpandedPanel();

}

onExitHandler = function (e) {
    console.log("onExitHandler");
    Enabler.exit('Expanded Clickthrough');
    Enabler.requestFullscreenCollapse();
    //    expandedPanel.style.display = "none";
    //    collapsedPanel.style.display = "block";
    //    isExpanded = false;
    switchToCollapsedPanel();
    // send video to end frame
    if (creative.dom.video0.vid.currentTime < creative.dom.video0.vid.duration) {
        creative.dom.video0.vid.currentTime = creative.dom.video0.vid.duration;
    }
    creative.dom.video0.vid.pause();
    removeClickForSound();
}

onCloseHandler = function (e) {
    console.log("onCloseHandler");
    Enabler.counter('Manual Close');
    closeAd();
    // send video to end frame
    if (creative.dom.video0.vid.currentTime < creative.dom.video0.vid.duration) {
        creative.dom.video0.vid.currentTime = creative.dom.video0.vid.duration;
    }
    creative.dom.video0.vid.pause();
    removeClickForSound();

}

closeAd = function () {
    console.log("closeAd");
    Enabler.requestFullscreenCollapse();
    Enabler.reportManualClose();
    //    expandedPanel.style.display = "none";
    //    collapsedPanel.style.display = "block";
    //    isExpanded = false;
    switchToCollapsedPanel();
    autoPlayingInitVideo = false;
    setTimeout(startAnim, 1000);
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



function videoEndHandler() {
    console.log("videoEndHandler");
    Enabler.counter("Video Ended", true);
    creative.dom.video0.vid.pause();
    removeClickForSound();

    if (autoPlayingInitVideo) {
        Enabler.requestFullscreenCollapse();
        //        collapsedPanel.style.display = "block";
        //        expandedPanel.style.display = "none";
        //        isExpanded = false;
        switchToCollapsedPanel();
        autoPlayingInitVideo = false;
        setTimeout(startAnim, 1000);
    }

}


}

*/