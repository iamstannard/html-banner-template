(function () {

    // console.clear();

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

    TweenLite.set([quote1, quote2, cta], {
        perspective: 100
    });

    // set vars

    var animDist = 25;
    var animScale = 0.25;
    var animTime = 3;
    var staggerOffset = 0.125;
    var frameDelay = 3;

    var vw, vh;

    function random(min, max) {
        if (max == null) {
            max = min;
            min = 0;
        }
        return Math.random() * (max - min) + min;
    }

    // set defaults

    TweenLite.defaultEase = Power4.easeOut;

    var tl1 = new TimelineMax({
        repeat: 0,
        repeatDelay: frameDelay
    });

    function startAnim() {

        //console.log('startAnim');

        tl1

            .addLabel("intro", 0)
            .addLabel("quote1", 2)
            .addLabel("quote2", 7)
            .addLabel("end", 12)

        .from(placeholder, animTime, {
            autoAlpha: 0
        }, "intro")

        .staggerFrom(quote1SplitWords, animTime, {
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
        }, staggerOffset, "quote1")

        .to(quote1, 0.5, {
            autoAlpha: 0
        }, "quote2-=0.5")

        .staggerFrom(quote2SplitWords, animTime, {
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
        }, staggerOffset, "quote2")

        .to(quote2, 0.5, {
            autoAlpha: 0
        }, "end-=0.5")

        .staggerFrom(ctaSplitWords, animTime, {
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
        }, staggerOffset, "end")

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
        addEventListeners();
        startAnim();
    }

    initBanner();

})();
