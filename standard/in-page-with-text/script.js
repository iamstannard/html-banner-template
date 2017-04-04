(function () {

    console.clear();

    // get elements

    var placeholder = document.getElementById('placeholder');
    var quote1 = document.getElementById('quote1');
    var quote2 = document.getElementById('quote2');
    var cta = document.getElementById('cta');

    var quote1Split = new SplitText(quote1, {
        type: "chars,words"
    });
    var quote1SplitChars = quote1Split.chars;
    var quote1SplitWords = quote1Split.words;
    
        var quote2Split = new SplitText(quote2, {
        type: "chars,words"
    });
    var quote2SplitChars = quote2Split.chars;
    var quote2SplitWords = quote2Split.words;
    
        var ctaSplit = new SplitText(cta, {
        type: "chars,words"
    });
    var ctaSplitChars = ctaSplit.chars;
    var ctaSplitWords = ctaSplit.words;

    TweenLite.set([quote1,quote2,cta], {
        perspective: 100
    });

    // set vars

    var defaultAnimDist = 25;
    var defaultAnimScale = 0.25;
    var defaultAnimTime = 3;
    var defaultStaggerOffset = 0.125;
    var defaultFrameDelay = 3;

    var vw, vh;

    function random(min, max) {
        if (max == null) {
            max = min;
            min = 0;
        }
        return Math.random() * (max - min) + min;
    }

    // set defaults

    // TweenLite.defaultOverwrite = 'auto';
    TweenLite.defaultEase = Cubic.easeOut;

    // some eases

    // ease: Elastic.easeOut.config(1, 0.3);
    // ease: Back.easeOut.config(1.7);
    // ease: SteppedEase.config(12);
    // ease: SlowMo.ease.config(0.5, 1, false);
    // ease: RoughEase.ease.config({ template: Cubic.easeOut, strength: 1, points: 20, taper: "out", randomize: true, clamp: false});

    var tl1 = new TimelineMax({
        repeat: 0,
        repeatDelay: defaultFrameDelay
    });

    // set timeScale
    tl1.timeScale(1);

    // some timeline options

    //.to(element, defaultAnimTime, {});
    //.from(element, defaultAnimTime, {});
    //.staggerTo(element, defaultAnimTime, {}, defaultStaggerOffset);
    //.staggerFrom(element, defaultAnimTime, {}, defaultStaggerOffset);
    //.set(element, {});

    //cycle:{x:[50,0,-20], rotation:[30,60,90]}
    //cycle:{x:function() { return Math.random() * 200; }}

    // animate functions

    // function nextFrame(nextFrameFunction, nextFrameDelay) {
    //     setTimeout(nextFrameFunction, nextFrameDelay);
    // }

    // onComplete: nextFrame,
    // onCompleteParams: [frame2, 2000]

    function startAnim() {

        //console.log('startAnim');

        tl1

            .addLabel("intro", 0)
            .addLabel("quote1", 2)
            .addLabel("quote2", 7)
            .addLabel("end", 12)

        .from(placeholder, defaultAnimTime, {
            autoAlpha: 0
        }, "intro")

        .staggerFrom(quote1SplitWords, defaultAnimTime, {
            opacity: 0,
            scale: 1,
            x: 0,
            y: 0,
            z: 0,
            rotationX: 90,
            rotationY: 0,
            rotationZ: 0,
            transformOrigin: "50% 50% -100",
            ease: Elastic.easeOut
        }, defaultStaggerOffset, "quote1")

        .to(quote1, 0.5, {
            autoAlpha: 0
        }, "quote2-=0.5")

        .staggerFrom(quote2SplitWords, defaultAnimTime, {
            opacity: 0,
            scale: 1,
            x: 0,
            y: 0,
            z: 0,
            rotationX: -90,
            rotationY: 0,
            rotationZ: 0,
            transformOrigin: "50% 50% -100",
            ease: Elastic.easeOut
        }, defaultStaggerOffset, "quote2")

        .to(quote2, 0.5, {
            autoAlpha: 0
        }, "end-=0.5")

        .staggerFrom(ctaSplitWords, defaultAnimTime, {
            opacity: 0,
            scale: 1,
            x: 0,
            y: 0,
            z: 0,
            rotationX: 90,
            rotationY: 0,
            rotationZ: 0,
            transformOrigin: "50% 50% -100",
            ease: Elastic.easeOut
        }, defaultStaggerOffset, "end")

        ;

        // total duration of timeline
        // console.log("duration : " + tl1.totalDuration() + " secs");

    }

    // init

    function addEventListeners() {
        //console.log('addEventListeners');
    }

    function initBanner() {
        //console.log('initBanner');

        bannerContainer.style.display = 'block';

        // banner size
        //        vw = bannerContainer.offsetWidth;
        //        vh = bannerContainer.offsetHeight;
        //        console.log("size : " + vw + " x " + vh);

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
