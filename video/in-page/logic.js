(function () {

    // ---------------------------------------------------------------------------------
    // EXPANDING VARS
    // ---------------------------------------------------------------------------------

    //var autoExpands = true;
    //var autoCollapses = true;

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

    var bg = document.getElementById("bg");
    var clickForSound = document.getElementById("click-for-sound");

    var videoControls = document.getElementById('video-controls');
    var playBtn = document.getElementById('play-btn');
    var pauseBtn = document.getElementById('pause-btn');
    var muteBtn = document.getElementById('mute-btn');
    var unmuteBtn = document.getElementById('unmute-btn');
    var replayBtn = document.getElementById('replay-btn');

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
        // mainContainer.style.display = "block";

    }

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

    var videoAutoPlays = true;
    var videoStartsMuted = true;
    var videoIsReplaying = false;
    var autoPlayingMuted = true;

    videoPlayer.addEventListener("canplay", videoReadyToPlay, false);
    videoPlayer.addEventListener("ended", videoEndHandler, false);
    clickForSound.addEventListener("click", restartWithSound, false);

    function restartWithSound() {
        console.log("restartWithSound");
        Enabler.counter("Restart With Sound", true);
        videoPlayer.currentTime = 0;
        videoPlayer.play();
        removeClickForSound();
    }

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
        videoIsReplaying = true;
        videoPlayer.currentTime = 0;
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
    // MAIN ON LOAD HANDLER
    // ---------------------------------------------------------------------------------

    window.addEventListener('load', preInit);

})();