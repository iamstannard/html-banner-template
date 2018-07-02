(function () {

    var collapsedPanel = document.getElementById('collapsed');
    var expandedPanel = document.getElementById('expanded');
    var expandBtn = document.getElementById('expand-btn');
    var exitBtn = document.getElementById('exit-btn');
    var closeBtn = document.getElementById('close-btn');

    var videoIsReplaying = false;
    var videonOnEndFrame = false;

    // ----------
    var startAdState = "expanded";
    // ----------

    serveBillboard = function (adstate) {
        switch (adstate) {
            case "expanded":
                onAutoExpandHandler();
                break;
            case "collapsed":
                // ----------
                collapsedPanel.style.display = "block";
                break;
            default:
                if (startAdState == "collapsed") {
                    // ----------
                } else {
                    onAutoExpandHandler();
                }
                break;
        }
    }




    // =============================================================================================

    init = function () {

        addListeners();
        addVideoTracking();
        serveBillboard(startAdState);
    }


    addListeners = function () {
        expandBtn.addEventListener('click', onUserExpandHandler, false);
        exitBtn.addEventListener('click', onExitHandler, false);
        closeBtn.addEventListener('click', onCloseHandler, false);

        // Expand Event Listeners
        Enabler.addEventListener(studio.events.StudioEvent.EXPAND_START,
            function () {
                collapsedPanel.style.display = "none";
                expandedPanel.style.display = "block";
                Enabler.finishExpand();
            });

        Enabler.addEventListener(studio.events.StudioEvent.EXPAND_FINISH,
            function () {
                // ----------
            });


        // Collapse Event Listeners
        Enabler.addEventListener(studio.events.StudioEvent.COLLAPSE_START,
            function () {
                expandedPanel.style.display = "none";
                collapsedPanel.style.display = "block";
                Enabler.finishCollapse();
            });

        Enabler.addEventListener(studio.events.StudioEvent.COLLAPSE_FINISH,
            function () {
                // ----------
            });
    }



    onAutoExpandHandler = function (e) {
        Enabler.requestExpand();
        hidePlayBtn();
        hidePauseBtn();
        hideUnmuteBtn();
        hideMuteBtn();
        hideReplayBtn();
        showClickForSound();
        playVideo();
    }


    onUserExpandHandler = function (e) {
        // console.log('onUserExpandHandler');
        Enabler.requestExpand();
        //unmuteVideo();
        pauseVideo();
        hidePlayBtn();
        hidePauseBtn();
        hideMuteBtn();
        hideUnmuteBtn();
        hideClickForSound();
        showWatchTrailer();
    }

    onExitHandler = function (e) {
        // console.log('onExitHandler');
        if (!videonOnEndFrame) {
            pauseVideo();
            unmuteVideo();
            showPlayBtn();
            hidePauseBtn();
            showMuteBtn();
            hideUnmuteBtn();
            hideClickForSound();
            hideWatchTrailer();
        }
        Enabler.exit('Clickthrough');
        // closeAd();
    }

    onCloseHandler = function (e) {
        // console.log('onCloseHandler');
        Enabler.reportManualClose();
        closeAd();
    }

    closeAd = function () {
        // console.log('closeAd');
        Enabler.requestCollapse();
        videoPlayer.currentTime = 0;
        videoPlayer.pause();
        hideClickForSound();
        //hideWatchTrailer();
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

    var watchTrailer = document.getElementById("watch-trailer");

    videoPlayer.addEventListener("canplay", videoReadyToPlay, false);
    videoPlayer.addEventListener("ended", videoEndHandler, false);
    clickForSound.addEventListener("click", restartWithSound, false);
    watchTrailer.addEventListener("click", restartWithSound, false);

    function showControls() {
        //console.log("showControls");
        videoControls.style.visibility = 'visible';
    }

    function videoReadyToPlay() {
        //console.log("videoReadyToPlay");

        if (!videoIsReplaying) {
            showClickForSound();
        }

        showControls();
    }


    function restartWithSound() {
        //console.log("restartWithSound");
        videoIsReplaying = true;
        videoPlayer.currentTime = 0;
        hideClickForSound();
        hideWatchTrailer();
        hideReplayBtn();
        hidePlayBtn();
        showPauseBtn();
        hideUnmuteBtn();
        showMuteBtn();
        unmuteVideo();
        playVideo();
    }

    function videoEndHandler() {
        //console.log("videoEndHandler");
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
        TweenMax.to(clickForSound, 0.5, {
            autoAlpha: 1,
            ease: Cubic.easeout
        });
    }

    function hideClickForSound() {
        clickForSound.style.visibility = 'hidden';
    }

    function showWatchTrailer() {
        TweenMax.to(watchTrailer, 0.5, {
            autoAlpha: 1,
            ease: Cubic.easeout
        });
    }

    function hideWatchTrailer() {
        watchTrailer.style.visibility = 'hidden';
    }

    function playVideo() {
        videoPlayer.play();
    }

    function playVideoMuted() {
        muteVideo();
        playVideo();
    }

    function pauseVideo() {
        videoPlayer.pause();
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
    }

    function unmuteVideo() {
        videoPlayer.muted = false;
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
                hideUnmuteBtn();
                showMuteBtn();
                hideClickForSound();
            }
            playVideo();
            hidePlayBtn();
            showPauseBtn();
        } else {
            pauseVideo();
            showPlayBtn();
            hidePauseBtn();
        }
    }

    function muteUnmuteHandler() {

        if (videoPlayer.muted) {
            hideClickForSound();
            unmuteVideo();
            hideUnmuteBtn();
            showMuteBtn();
        } else {
            muteVideo();
            showUnmuteBtn();
            hideMuteBtn();
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
        if (Enabler.isInitialized()) {
            init();
        } else {
            Enabler.addEventListener(studio.events.StudioEvent.INIT, init);
        }
    }

})();
