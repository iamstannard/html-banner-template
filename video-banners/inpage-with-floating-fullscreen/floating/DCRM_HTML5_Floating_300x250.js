var floatCon;
var closeBtn;
var bgExtBtn;
var vid1;
var autoTimer;

function onLoadHandler(e){
	if (Enabler.isInitialized()) {
	    enablerInitHandler();
	} else {
	    Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
	}
}

function enablerInitHandler() {
    Enabler.setFloatingPixelDimensions(400,400);
    Enabler.addEventListener(studio.events.StudioEvent.INTERACTION, userInteract);

    floatCon = document.getElementById('floater_dc');
	closeBtn = document.getElementById('close_btn_dc');
	bgExtBtn = document.getElementById('background_ext_dc');
	vid1 = document.getElementById('video1');

    floatCon.style.display = 'block';

	autoTimer = setInterval(autoClose, 15000);

	addListeners();
	addVideoTracking();

}

function addListeners() {
	closeBtn.addEventListener('click', onCloseHandler, false);
	bgExtBtn.addEventListener('click', onBgExitHandler, false);
	vid1.addEventListener('ended', videoEndHandler, false);
}

function addVideoTracking() {
	Enabler.loadModule(studio.module.ModuleId.VIDEO, function() {
		studio.video.Reporter.attach('video_1', vid1);
	});
}

function autoClose() {
	console.log("HAHA");
	 clearInterval(autoTimer);
	 Enabler.close();
}

function onCloseHandler(e){
	clearInterval(autoTimer);
	Enabler.reportManualClose();
	Enabler.close();
}

function onBgExitHandler(e){
	clearInterval(autoTimer);
	Enabler.exit('HTML5_Background_Clickthrough');
	Enabler.close();
}

function userInteract(){
	clearInterval(autoTimer);
}

function videoEndHandler(e) {
	vid1.currentTime = 0;
}
		
window.addEventListener('load', onLoadHandler);