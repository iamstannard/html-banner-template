// console.clear();

var creative = {};

/**
 * Window onload handler.
 */
function preInit() {
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

/**
 * Initializes the ad components
 */
function setupDom() {
    creative.dom = {};
    creative.dom.mainContainer = document.getElementById('main-container');
    creative.dom.expandedExit = document.getElementById('expanded-exit');
    creative.dom.expandedContent = document.getElementById('expanded-state');
    creative.dom.collapsedExit = document.getElementById('collapsed-exit');
    creative.dom.collapsedContent = document.getElementById('collapsed-state');
    creative.dom.collapseButton = document.getElementById('collapse-button');
    creative.dom.expandButton = document.getElementById('expand-button');
    creative.dom.image0 = document.getElementById('main-img-0');
    creative.dom.video1 = {};
    creative.dom.video1.vidContainer = document.getElementById('video-container-1');
    creative.dom.video1.vid = document.getElementById('video-1');
    creative.dom.video1.vidProgressBar = document.getElementById('progress-bar-1');
}

/**
 * Ad initialisation.
 */
function init() {
    
    
    // creative.dom.video1.vid.controls = false;
    
    Enabler.setStartExpanded(false);
    // You can update the autoplay flag to 'true' to enable muted
    // autoplay although it won't work on iOS.
    creative.autoplay1 = false;
    creative.isClick1 = false;

    // Hide mute / unmute on iOS.
    if ((navigator.userAgent.match(/iPhone/i)) ||
        (navigator.userAgent.match(/iPad/i)) ||
        (navigator.userAgent.match(/iPod/i))) {
    }

    addVideoTracking1();

    addListeners();

    // Polite loading
    if (Enabler.isVisible()) {
        show();
    } else {
        Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, show);
    }
}

/**
 * Adds appropriate listeners at initialization time
 */
function addListeners() {
    Enabler.addEventListener(studio.events.StudioEvent.EXPAND_START, expandStartHandler);
    Enabler.addEventListener(studio.events.StudioEvent.EXPAND_FINISH, expandFinishHandler);
    Enabler.addEventListener(studio.events.StudioEvent.COLLAPSE_START, collapseStartHandler);
    Enabler.addEventListener(studio.events.StudioEvent.COLLAPSE_FINISH, collapseFinishHandler);
    creative.dom.expandButton.addEventListener('click', onExpandHandler, false);
    creative.dom.collapseButton.addEventListener('click', onCollapseClickHandler, false);
    creative.dom.expandedExit.addEventListener('click', exitClickHandler);
    creative.dom.collapsedExit.addEventListener('click', collapsedExitClickHandler);
    //creative.dom.video1.vid.addEventListener('ended', videoEndHandler1, false);
    //creative.dom.video1.vid.addEventListener('timeupdate', videoTimeUpdateHandler1, false);
}

/**
 *  Shows the ad.
 */
function show() {
    creative.dom.expandedContent.style.display = 'none';
    creative.dom.expandedExit.style.display = 'none';
    creative.dom.collapseButton.style.display = 'none';

    creative.dom.collapsedContent.style.display = 'block';
    creative.dom.collapsedExit.style.display = 'block';
    creative.dom.expandButton.style.display = 'block';
    creative.dom.image0.style.visibility = 'visible';
}

// ---------------------------------------------------------------------------------
// MAIN
// ---------------------------------------------------------------------------------


function expandStartHandler() {
    // Show expanded content.
    creative.dom.expandedContent.style.display = 'block';
    creative.dom.expandedExit.style.display = 'block';
    creative.dom.collapseButton.style.display = 'block';
    creative.dom.collapsedContent.style.display = 'none';
    creative.dom.collapsedExit.style.display = 'none';
    creative.dom.expandButton.style.display = 'none';

    Enabler.finishExpand();
}

function expandFinishHandler() {
    creative.dom.video1.vidContainer.style.visibility = 'visible';
    creative.isExpanded = true;
    creative.dom.video1.vid.currentTime = 0;
    creative.dom.video1.vid.play();
}

function collapseStartHandler() {
    // Perform collapse animation.
    creative.dom.expandedContent.style.display = 'none';
    creative.dom.expandedExit.style.display = 'none';
    creative.dom.collapseButton.style.display = 'none';
    creative.dom.collapsedContent.style.display = 'block';
    creative.dom.collapsedExit.style.display = 'block';
    creative.dom.expandButton.style.display = 'block';
    creative.dom.video1.vid.pause();
    creative.dom.video1.vid.currentTime = 0;

    // When animation finished must call
    Enabler.finishCollapse();
}

function collapseFinishHandler() {
    creative.isExpanded = false;
}

function onCollapseClickHandler() {
    Enabler.requestCollapse();
    Enabler.stopTimer('Panel Expansion');
}

function onExpandHandler() {
    Enabler.requestExpand();
    Enabler.startTimer('Panel Expansion');
}

function exitClickHandler() {
    // Reset video
    creative.dom.video1.vid.pause();
    if (creative.dom.video1.vid.readyState > 0) {
        creative.dom.video1.vid.currentTime = 0;
    }
    Enabler.requestCollapse();
    Enabler.stopTimer('Panel Expansion');
    Enabler.exit('BackgroundExit');
}

function collapsedExitClickHandler() {
    // Reset video
    creative.dom.video1.vid.pause();
    if (creative.dom.video1.vid.readyState > 0) {
        creative.dom.video1.vid.currentTime = 0;
    }
    Enabler.exit('CollapsedExit');
}

/**
 * Triggered once the video player is ready to play the video on expansion.
 */
function startMuted1(e) {
    // Leaving the listener can cause issues on Chrome / Firefox
    if (creative.dom.video1.hasCanPlay) {
        creative.dom.video1.vid.removeEventListener('canplay', startMuted1);
        creative.dom.video1.hasCanPlay = false;
    }
    // If paused then play
    creative.dom.video1.vid.volume = 0; // Muted by default
    creative.dom.video1.vid.currentTime = 0;
    creative.dom.video1.vid.play();
}

/**
 * Play pause toggle.
 */
function pausePlayHandler1(e) {
    // Under IE10, a video is not 'paused' after it ends.
    if (creative.dom.video1.vid.paused || creative.dom.video1.vid.ended) {
        if (creative.isClick1) {
            creative.dom.video1.vid.volume = 1.0;
            creative.isClick1 = false;
        }
        // If paused then play
        creative.dom.video1.vid.play();
    } else {
        creative.dom.video1.vid.pause();
    }
    if (creative.dom.video1.vid.volume == 0.0) {
        creative.dom.video1.vid.volume = 1.0;
    }
}

/**
 * Mutes or unmute the video player.
 */
function muteUnmuteHandler1(e) {
    if (creative.dom.video1.vid.volume == 0.0) {
        Enabler.counter("Unmute video 1", true);
        creative.dom.video1.vid.volume = 1.0;
    } else {
        Enabler.counter("Mute video 1", true);
        creative.dom.video1.vid.volume = 0.0;
    }
}

/**
 * Stops the video.
 */
function stopHandler1(e) {
    Enabler.counter("Video 1 stopped", true);
    creative.dom.video1.vid.currentTime = 0;
    creative.dom.video1.vid.pause();
    creative.isClick1 = true;
}

/**
 * Relaunches the video from the beginning.
 */
function replayHandler1(e) {
    Enabler.counter("Replay video 1", true);
    creative.dom.video1.vid.currentTime = 0;
    creative.dom.video1.vid.play();
    creative.dom.video1.vid.volume = 1.0;
}

/**
 * Handler triggered when the video has finished playing.
 */
function videoEndHandler1(e) {
    // creative.dom.video1.vid.currentTime = 0;
    creative.dom.video1.vid.pause();
    creative.isClick1 = true;
}

/**
 * Handler triggered when the video has timeUpdates.
 */
function videoTimeUpdateHandler1(e) {
    var perc = creative.dom.video1.vid.currentTime / creative.dom.video1.vid.duration;
    creative.dom.video1.vidProgressBar.style.width = Math.round(100 * perc) + '%';
}

/**
 * Add video metrics to the HTML5 video elements by loading in video module, and assigning to videos.
 */
function addVideoTracking1() {
    // Add in the video files.
    // These are 3 different codecs due to different browser specifications ; we recommend you have all 3 filetypes.
    var srcNode = document.createElement('source');
    //  srcNode.setAttribute('type', 'video/webm');
    //  srcNode.setAttribute('src', Enabler.getUrl('video.webm'));
    //  creative.dom.video1.vid.appendChild(srcNode);

    srcNode = document.createElement('source');
    srcNode.setAttribute('type', 'video/mp4');
    srcNode.setAttribute('src', Enabler.getUrl('video.mp4'));
    creative.dom.video1.vid.appendChild(srcNode);

    creative.dom.video1.vid.appendChild(srcNode);

    Enabler.loadModule(studio.module.ModuleId.VIDEO, function () {
        studio.video.Reporter.attach('Video Report 1', creative.dom.video1.vid);
    }.bind(this));
}

/**
 *  Main onload handler
 */
window.addEventListener('load', preInit);