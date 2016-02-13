(function () {

    // get elements

    var placeholder = document.getElementById('placeholder');
    var cta = document.getElementById('cta');

    // set vars

    var defaultAnimDist = 20;
    var defaultAnimScale = 0.5;
    
    var defaultAnimTime = 1;
    var defaultStaggerOffset = 1;
    var defaultFrameDelay = 2;

    // set defaults
    // TweenLite.defaultOverwrite = 'auto';
    TweenLite.defaultEase = Cubic.easeOut;

    //var tl1 = new TimelineMax();

    var tl1 = new TimelineMax({
        repeat: 1,
        repeatDelay: defaultFrameDelay
    });

    //.to(element, defaultAnimTime, {});
    //.from(element, defaultAnimTime, {});
    //.staggerTo(element, defaultAnimTime, {}, defaultStaggerOffset);
    //.staggerFrom(element, defaultAnimTime, {}, defaultStaggerOffset);
    //.set(element, {});
    
    //cycle:{x:[50,0,-20], rotation:[30,60,90]}
    //cycle:{x:function() { return Math.random() * 200; }}

    // animate

    function nextFrame(nextFrameFunction, nextFrameDelay) {
        setTimeout(nextFrameFunction, nextFrameDelay);
    }

    // onComplete: nextFrame,
    // onCompleteParams: [frame2, 2000]

    function startAnim() {

        console.log('startAnim');

        tl1.from(placeholder, defaultAnimTime, {
                autoAlpha: 0
            }, 1)
            .from(cta, defaultAnimTime, {
                autoAlpha: 0,
                y: defaultAnimDist
            }, '+=2');
    }

    // init

    function addEventListeners() {
        console.log('addEventListeners');
    }

    function initBanner() {
        console.log('initBanner');
        addEventListeners();
        startAnim();
    }

    initBanner();

})();

// ---------------------------------------------------------------------------------
// POLITE LOAD IMAGES
// ---------------------------------------------------------------------------------

/*
function politeLoadImages() {
    console.log("politeLoadImages");
    // Call the function 
    loadAllImages(images, function () {
        // Do whatever you need to do when all images are loaded and assigned to their img tags....
        console.log("allImagesLoaded");
        // initBanner();
    });
}

// Object with img ids and urls
var images = {
    'placeholder': 'images/placeholder.png',
    'cta': 'images/cta.png',
};

function loadAllImages(images, onComplete) {
    console.log("loadAllImages");
    // Vars to keep track of load count
    var loadCount = 0;
    var imagesToLoad = 0;
    // Determine how many images are to be loaded
    for (var id in images) {
        imagesToLoad++;
    }

    console.log("imagesToLoad : " + imagesToLoad);

    // Iterate through the images to be loaded and load the url to an image object
    for (var id in images) {
        var preloadImgTag = new Image();
        // The on load handler for each image object
        preloadImgTag.onload = function () {
                // Increment the load count
                loadCount++;
                if (loadCount === imagesToLoad) {
                    for (var id in images) {
                        // assign image to their associated img id src
                        document.getElementById(id).setAttribute("src", images[id]);
                    }
                    // Call the on complete call back if theres one to call
                    if (onComplete) onComplete();
                }
            }
            // Initiate the load by setting the src on each image object
        preloadImgTag.src = images[id];
    }
}

politeLoadImages();
*/

// ---------------------------------------------------------------------------------
// LOAD EXTERNAL JS LIBRARY
// ---------------------------------------------------------------------------------

/*
function loadScript(url, callback) {
    var script = document.createElement("script")
    script.type = "text/javascript";
    if (script.readyState) { // ie
        script.onreadystatechange = function () {
            if (script.readyState == "loaded" ||
                script.readyState == "complete") {
                script.onreadystatechange = null;
                callback();
            }
        };
    } else { // others
        script.onload = function () {
            callback();
        };
    }
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}
loadScript("libs/TweenMax.min.js", frame1);
*/