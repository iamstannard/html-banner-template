// JavaScript Document
// JavaScript Document
//HTML5 Ad Template JS from DoubleClick by Google

//Declaring elements from the HTML i.e. Giving them Instance Names like in Flash - makes it easier
var container;
var content;
var dcLogo;
var bgExit;
var showBtn;
var hideBtn;

//Function to run with any animations starting on load, or bringing in images etc
init = function(){
	
	//Assign All the elements to the element on the page
	container = document.getElementById('container_dc');
	content = document.getElementById('content_dc');
	dcLogo = document.getElementById('doubleclick_logo_dc');
	bgExit = document.getElementById('background_exit_dc');
	showBtn = document.getElementById('show_btn');
	hideBtn = document.getElementById('hide_btn')
		
	//Setup Background Image (this can be done in CSS as well)
	content.style.backgroundImage = "url("+Enabler.getUrl('DCRM_HTML5_inPageFloating_Polite_300x250.jpg')+")";
	
	//Bring in listeners i.e. if a user clicks or rollovers
	addListeners();
	
	//Show Ad
	container.style.display = "block";
	
}


//Add Event Listeners
addListeners = function() {
	bgExit.addEventListener('click', bgExitHandler, false);
	hideBtn.addEventListener('click', closeButtonClickHandler, false);
	showBtn.addEventListener('click', openButtonClickHandler, false);
}


bgExitHandler = function(e) {
	//Call Exits
	Enabler.exit('HTML5_Background_Clickthrough');
	Enabler.closeCompanion();
}

function openButtonClickHandler(event) {

  // Record a custom counter each time the Floating creative is opened.
  Enabler.counter("Show Floating");
          
  // Open the Floating creative.
  Enabler.displayCompanion();
};

function closeButtonClickHandler(event) {

  // Record a manual close each time the Floating creative is closed.
  Enabler.reportManualClose();
          
  // Close the Floating creative.
  Enabler.closeCompanion();
};

init();




