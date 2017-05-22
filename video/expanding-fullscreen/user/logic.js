(function () {
    
    console.clear();

    // ---------------------------------------------------------------------------------
    // CONTROL VARS
    // ---------------------------------------------------------------------------------

    var autoExpands = false;

    var autoExpanded = autoExpands;
    var autoCollapses = autoExpands;
    
    var hasExtendedVideo = false;

    var autoTimer;
    var autoCollapseDelay = 5000;

    var isExpanded = false;
    var videoCanPlay = false;

    // ---------------------------------------------------------------------------------
    // INIT AD COMPONENTS
    // ---------------------------------------------------------------------------------

    var container = document.getElementById('container');
    var collapsedPanel = document.getElementById('collapsed');
    var expandedPanel = document.getElementById('expanded');
    var expandButton = document.getElementById('collapsed-click');
    var exitBtn = document.getElementById('expanded-click');
    var closeBtn = document.getElementById('close-btn');

    // ---------------------------------------------------------------------------------
    // WINDOW ON LOAD HANDLE
    // ---------------------------------------------------------------------------------

    function preInit() {
        //console.log("preInit");
        
        if (Enabler.isInitialized()) {
            init();
        } else {
            Enabler.addEventListener(
                studio.events.StudioEvent.INIT,
                init
            );
        }
    }

    function init() {
        //console.log("init");

        addListeners();
        addVideoTracking();

        if (Enabler.isPageLoaded()) {
            show();
        } else {
            Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, show);
        }
    }

    function show() {
        //console.log("show");

        if (autoExpands) {
            // auto expand
            Enabler.requestFullscreenExpand();
            switchToExpandedPanel();
            isExpanded = true;

        } else {
            // click to expand
            autoExpanded = false;
            hideExpandedPanel();
            showCollapsedPanel();
            isExpanded = false;
            // setTimeout(startAnim, 1000);
        }
    }

    // ---------------------------------------------------------------------------------
    // EXPANDING AND COLLAPSING MECHANICS
    // ---------------------------------------------------------------------------------


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
        //console.log("switchToCollapsedPanel");
        
        hideExpandedPanel();
        setTimeout(showCollapsedPanel, 100);
        
        isExpanded = false;
        
        // setTimeout(startAnim, 1000);
    }

    function switchToExpandedPanel() {
        //console.log("switchToExpandedPanel");
        
        hideCollapsedPanel();
        setTimeout(showExpandedPanel, 100);
        
        isExpanded = true;
    }

    function collapseFinishHandler() {
        //console.log("collapseFinishHandler");

    }

    function expandFinishHandler() {
        //console.log("expandFinishHandler");

        if (videoCanPlay) {
            initVideoControls();
        } else {
            videoPlayer.addEventListener("canplay", initVideoControls, false);
        }
    }

    function initVideoControls() {
        //console.log("initVideoControls");
        
        videoPlayer.controls = false;

        if (autoExpanded) {
            muteVideo();
            showClickForSound();
        } else {
            unmuteVideo();
        }

        showPauseBtn();
        hidePlayBtn();
        showControls();

        videoPlayer.play();

    }

    function setNewVideoSource() {
        //console.log("setNewVideoSource");

        videoPlayer.type = 'video/mp4';
        videoPlayer.src = Enabler.getUrl('video-full.mp4');
        studio.video.Reporter.detach('Video');
        studio.video.Reporter.attach('Video Full', videoPlayer);
    }

    function onExpandHandler(e) {
        //console.log("onExpandHandler");

        if (autoExpands && hasExtendedVideo) {
            setNewVideoSource();
        }

        Enabler.requestFullscreenExpand();
        switchToExpandedPanel();

    }

    function onExitHandler(e) {
        //console.log("onExitHandler");

        Enabler.exit('Expanded Clickthrough');

        pauseVideo();
        hideReplayBtn();
        hideClickForSound();

        Enabler.requestFullscreenCollapse();
        switchToCollapsedPanel();

        videoPlayer.currentTime = 0;
        autoExpanded = false;
    }

    function onCloseHandler(e) {
        //console.log("onCloseHandler");

        Enabler.reportManualClose();
        Enabler.reportManualClose();

        pauseVideo();
        hideReplayBtn();
        hideClickForSound();

        Enabler.requestFullscreenCollapse();
        switchToCollapsedPanel();

        videoPlayer.currentTime = 0;
        autoExpanded = false;
    }

    function collapseStartHandler(e) {
        //console.log("collapseStartHandler");

        Enabler.finishFullscreenCollapse();
    }

    function expandStartHandler(e) {
        //console.log("expandStartHandler");

        Enabler.finishFullscreenExpand();
    }

    // AUTO COLLAPSE

    function autoClose() {
        //console.log("autoClose");

        Enabler.counter('Auto Close');

        pauseVideo();
        hideReplayBtn();
        hideClickForSound();

        Enabler.requestFullscreenCollapse();
        switchToCollapsedPanel();

        stopAutoTimer();

        videoPlayer.currentTime = 0;
        autoExpanded = false;
    }

    function userInteract() {
        //console.log("userInteract");
        stopAutoTimer();
    }

    function startAutoTimer() {
        //console.log("startAutoTimer");
        if (autoCollapses) {
            autoTimer = setInterval(autoClose, autoCollapseDelay);
        }
    }

    function stopAutoTimer() {
        //console.log("stopAutoTimer");
        clearInterval(autoTimer);
    }

    // ---------------------------------------------------------------------------------
    // LISTENERS
    // ---------------------------------------------------------------------------------

    function addListeners() {
        //console.log("addListeners");

        Enabler.addEventListener(studio.events.StudioEvent.FULLSCREEN_EXPAND_START, expandStartHandler);
        Enabler.addEventListener(studio.events.StudioEvent.FULLSCREEN_COLLAPSE_START, collapseStartHandler);
        Enabler.addEventListener(studio.events.StudioEvent.FULLSCREEN_EXPAND_FINISH, expandFinishHandler);
        Enabler.addEventListener(studio.events.StudioEvent.FULLSCREEN_COLLAPSE_FINISH, collapseFinishHandler);

        Enabler.addEventListener(studio.events.StudioEvent.INTERACTION, userInteract);

        expandButton.addEventListener('click', onExpandHandler, false);
        exitBtn.addEventListener('click', onExitHandler, false);
        closeBtn.addEventListener('click', onCloseHandler, false);

    }

    // ---------------------------------------------------------------------------------
    // MAIN
    // ---------------------------------------------------------------------------------

    function exitClickHandler() {
        //console.log("exitClickHandler");
    }

    // ---------------------------------------------------------------------------------
    // ADD VIDEO SRC AND METRICS
    // ---------------------------------------------------------------------------------

    function addVideoTracking() {
        //console.log("addVideoTracking");
        
        var srcNode;
        
        srcNode = document.createElement('source');

        // srcNode.setAttribute('type', 'video/ogg');
        // srcNode.setAttribute('src', Enabler.getUrl('video.ogg'));
        // videoPlayer.appendChild(srcNode);

        // srcNode.setAttribute('type', 'video/webm');
        // srcNode.setAttribute('src', Enabler.getUrl('video.webm'));
        // videoPlayer.appendChild(srcNode);

        srcNode.setAttribute('type', 'video/mp4');
        if (autoExpands) {
            srcNode.setAttribute('src', Enabler.getUrl('video.mp4'));
        } else {
            srcNode.setAttribute('src', Enabler.getUrl('video-full.mp4'));
        }
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
        //console.log("showControls");
        
        TweenMax.to(videoControls, 0.25, {
            autoAlpha: 1,
            ease: Cubic.easeOut
        });
    }

    function videoReadyToPlay() {
        //console.log("videoReadyToPlay");
        
        videoCanPlay = true;
    }

    function restartWithSound() {
        //console.log("restartWithSound");
        
        Enabler.counter("Restart Video With Sound");
        
        videoPlayer.currentTime = 0;
        playVideo();
        hideClickForSound();
    }

    function videoEndHandler() {
        //console.log("videoEndHandler");

        pauseVideo();
        unmuteVideo();

        hideClickForSound();

        hidePlayBtn();
        hidePauseBtn();
        hideMuteBtn();
        hideUnmuteBtn();

        showReplayBtn();

        if (autoExpanded) {
            startAutoTimer();
        }

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
        if (autoExpanded) {
            TweenMax.to(clickForSound, 0.25, {
                autoAlpha: 0,
                ease: Cubic.easeout
            });
        }
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
        //console.log("replayHandler");
        hideReplayBtn();
        showPauseBtn();
        showMuteBtn();
        replayVideo();
    }

    // ---------------------------------------------------------------------------------
    // MREC ANIM
    // ---------------------------------------------------------------------------------

    // ---------------------------------------------------------------------------------
    // MAIN ON LOAD HANDLER
    // ---------------------------------------------------------------------------------

    window.addEventListener('load', preInit);

})();