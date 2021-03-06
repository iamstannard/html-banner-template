(function () {

    // console.clear();

    // ===== get elements =====

    var placeholder = document.getElementById('placeholder');
    var cta = document.getElementById('cta');

    // ===== check date =====

    //    var d = new Date(); // get new date
    //
    //    var d1 = new Date("October 13, 2017"); // date
    //    var d2 = new Date("October 20, 2017"); // day of week
    //    var d3 = new Date("October 27, 2017"); // out now
    //
    //    console.log(d);
    //    console.log(d1);
    //    console.log(d2);
    //    console.log(d3);
    //
    //    d = new Date("October 30, 2017"); // for testing
    //
    //    if (d >= d3) {
    //        console.log('out now');
    //        console.log(d);
    //        console.log(d3);
    //    } else if (d >= d2) {
    //        console.log('day of week');
    //        console.log(d);
    //        console.log(d2);
    //    } else {
    //        console.log('date');
    //        console.log(d);
    //        console.log(d1);
    //    }

    // ===== set vars and defaults =====

    var animTime = 1;
    var fadeTime = 0.5;
    var animDist = 50;
    var animScale = 2;
    var staggerOffset = 0.25;
    var frameDelay = 3;

    // TweenLite.defaultOverwrite = 'auto';

    TweenLite.defaultEase = Power4.easeOut;

    var ee = Elastic.easeOut.config(1, 0.5); // elastic ease
    var re = RoughEase.ease.config({
        template: Cubic.easeOut,
        strength: 1,
        points: 25,
        taper: "out",
        randomize: true,
        clamp: false
    }); // rough ease
    var le = Power0.easeNone; // linear ease
    var bo = Back.easeOut.config(2); // back out
    var bi = Back.easeIn.config(2); // back in

    var tl1 = new TimelineMax({
        repeat: 0,
        repeatDelay: frameDelay
    });

    // ===== set timeScale =====

    tl1.timeScale(1);

    // ===== eases =====

    // https://greensock.com/ease-visualizer

    // ease: Elastic.easeOut.config(1, 0.3);
    // ease: Back.easeOut.config(1.7);
    // ease: SteppedEase.config(12);
    // ease: SlowMo.ease.config(0.5, 1, false);
    // ease: RoughEase.ease.config({ template: Cubic.easeOut, strength: 1, points: 20, taper: "out", randomize: true, clamp: false});

    //  ===== timeline =====

    // https://greensock.com/docs/#/HTML5/Sequencing/TimelineMax/

    //.set(element, {});
    //.to(element, animTime, {});
    //.from(element, animTime, {});
    //.fromTo(element, animTime, {},{});
    //.staggerTo([elements], animTime, {}, staggerOffset);
    //.staggerFrom([elements], animTime, {}, staggerOffset);

    //cycle:{x:[50,0,-20], rotation:[30,60,90]}
    //cycle:{x:function() { return Math.random() * 200; }}

    // ===== frame functions =====

    // function nextFrame(nextFrameFunction, nextFrameDelay) {
    //     setTimeout(nextFrameFunction, nextFrameDelay);
    // }
    // onComplete: nextFrame,
    // onCompleteParams: [frame2, 2000]

    function random(min, max) {
        if (max == null) {
            max = min;
            min = 0;
        }
        return Math.random() * (max - min) + min;
    }

    function startAnim() {
        //console.log('startAnim');

        tl1

        .addLabel("frame1", 0)
        .addLabel("frame2", 3)
        .addLabel("frame3", 6)
        .addLabel("frame4", 9)
        .addLabel("frame5", 12)

        .from(placeholder, animTime, {autoAlpha: 0, scale: animScale}, "frame1")
        .from(cta, animTime, {autoAlpha: 0, y: animDist, ease: ee}, "frame2")

        ;

        // ===== total duration of timeline =====

        console.log("duration : " + tl1.totalDuration() + " secs");

    }

    // ===== init =====

    function addEventListeners() {
        //console.log('addEventListeners');
    }

    function initBanner() {
        //console.log('initBanner');
        bannerContainer.style.display = 'block';
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
