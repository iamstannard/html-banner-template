(function () {

    // console.clear();

    // ===== get elements =====

    var placeholder = document.getElementById('placeholder');
    var cta = document.getElementById('cta');

    // ===== set vars and defaults =====

    var animTime = 1;
    var fadeTime = animTime / 4;
    var animDist = 100;
    var animScale = 2;
    var staggerOffset = 0.25;

    // https://greensock.com/docs/v3/GSAP

    var tl1 = gsap.timeline({
        repeat: 0,
        repeatDelay: 2
    });

    gsap.defaults({
        ease: "power4.out"
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

    var bo = "back.out(1.5)";
    var bi = "back.in(1.5)";
    var bio = "back.inOut(1.5)";

    var eo = "elastic.out(1.25, 1)"; //or just "elastic" because ".out" is the default flavor
    var ei = "elastic.in(1.25, 1)";
    var eio = "elastic.inOut(1.25, 1)";

    // "bounce.out";
    // "steps(5)";
    // "slow(0.5, 0.8)";
    // "rough(40)";
    // "expoScale(0.5, 3)";

    // ===== random =====

    //chooses a random number between -100 and 100 for each target, rounding to the closest 10!
    //gsap.to(".class", {
    //    x: "random(-100, 100, 10)"
    //});

    //randomly selects one of the values (0, 100, 200, or 500)
    //x: "random([0, 100, 200, 500])"

    // ===== yoyo =====

    //gsap.timeline({
    //    repeat: 1,
    //    yoyo: true
    //});

    // ===== timescale/duration =====

    // tl1.timeScale(1); 
    // tl1.totalDuration(10);

    function startAnim() {
        //console.log('startAnim');

        tl1

        //.eventCallback("onStart", onStartF)
        //.eventCallback("onUpdate", onUpdateF)
        //.eventCallback("onComplete", onCompleteF)
        //.eventCallback("onUpdate", null)

            .addLabel("frame1", 0)
            .addLabel("frame2", 2)

        .from(placeholder, {
            duration: animTime,
            autoAlpha: 0,
            scale: animScale
        }, "frame1")

        .from(cta, {
            duration: animTime,
            autoAlpha: 0,
            y: animDist,
            ease: eo
        }, "frame2")

        ;

        // ===== gets total duration of timeline =====

        // console.log("duration : " + tl1.totalDuration() + " secs");

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
