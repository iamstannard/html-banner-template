(function () {

    // console.clear();

    // ===== get dom elements =====

var text1 = document.getElementById('text1');
var text2 = document.getElementById('text2');
    
    // ===== set vars and defaults =====

    var animTime = 1;
    var fadeTime = animTime/3;
    var animDist = 100;
    var animScale = 2;
    var staggerOffset = 1;
    var maxAnimDuration = 15; // secs

    // ===== establish gsap timeline =====

    // https://greensock.com/docs/v3/GSAP

    var tl1 = gsap.timeline({
        repeat: 0,
        repeatDelay: 3
    });

    // ===== defaults =====

    gsap.defaults({
        ease: "power2.out",
        duration: animTime,
        stagger: staggerOffset
    });

    //gsap.config({
    //    force3D: false
    //});

    // ===== eases =====

    // https://greensock.com/ease-visualizer

    var le = "none";

    var so = "sine.out";
    var si = "sine.in";
    var sio = "sine.inOut";

    var bConfig = "2";

    var bo = "back.out(" + bConfig + ")";
    var bi = "back.in(" + bConfig + ")";
    var bio = "back.inOut(" + bConfig + ")";

    var eConfig = "1.25, 0.375"

    var eo = "elastic.out(+" + eConfig + ")"; //or just "elastic" because ".out" is the default flavor
    var ei = "elastic.in(+" + eConfig + ")";
    var eio = "elastic.inOut(+" + eConfig + ")";
    
    var eOut = "power2.out";
    var eIn = "power2.in";
    
    // rotation: gsap.utils.wrap([0,-30,30,-35,40])
    //.set(plateDiv,{x:-10,y:0,transformPerspective:450, rotationY: -45, transformStyle:'preserve-3d',backfaceVisibility: 'hidden'})
    
    var rIn = gsap.utils.wrap([85,-85]);
    var rOut = gsap.utils.wrap([-85,85]);
    
    function startAnim() {
        //console.log('startAnim');

        tl1

            .addLabel("frame1", 1)
   
            .from([text1,text2],{y: 50, autoAlpha:0},'frame1')


        ;

        // ===== gets total duration of timeline =====

        //console.log("total duration : " + tl1.totalDuration() + " secs");

        // ===== timescale/duration =====

//        tl1.timeScale(1);
//        tl1.totalDuration(15);

//        if (tl1.totalDuration() >= maxAnimDuration) {
//            tl1.totalDuration(maxAnimDuration);
//            console.log("adjusted duration : " + maxAnimDuration + " secs");
//        };

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
