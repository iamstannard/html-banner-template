(function () {

    // console.clear();

    // ===== get dom elements =====

    var placeholder = document.getElementById('placeholder');
    var cta = document.getElementById('cta');

    // ===== set vars and defaults =====

    var animTime = 1;
    var fadeTime = animTime / 4;
    var animDist = 100;
    var animScale = 2;
    var staggerOffset = 0.25;
    var maxAnimDuration = 15; // secs

    // ===== establish gsap timeline =====

    // https://greensock.com/docs/v3/GSAP

    var tl1 = gsap.timeline({
        repeat: 1,
        repeatDelay: 3
    });

    // ===== defaults =====

    gsap.defaults({
        ease: "power3.out",
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

    var bConfig = "1.5"

    var bo = "back.out(" + bConfig + ")";
    var bi = "back.in(" + bConfig + ")";
    var bio = "back.inOut(" + bConfig + ")";

    var eConfig = "1.25, 0.5"

    var eo = "elastic.out(+" + eConfig + ")"; //or just "elastic" because ".out" is the default flavor
    var ei = "elastic.in(+" + eConfig + ")";
    var eio = "elastic.inOut(+" + eConfig + ")";

    // "bounce.out";
    // "steps(5)";
    // "slow(0.5, 0.8)"; //external EasePack file
    // "rough(40)"; //external EasePack file
    // "expoScale(0.5, 3)"; //external EasePack file

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

    function startAnim() {
        //console.log('startAnim');

        tl1

        //.eventCallback("onStart", onStartF)
        //.eventCallback("onUpdate", onUpdateF)
        //.eventCallback("onComplete", onCompleteF)
        //.eventCallback("onUpdate", null)

            .addLabel("frame1", 0)
            .addLabel("frame2", 3)
            .addLabel("frame3", 6)

        .from(placeholder, {
            autoAlpha: 0,
            scale: animScale
        }, "frame1")

        .from(cta, {
            autoAlpha: 0,
            y: animDist,
            ease: eo
        }, "frame2")

        .to(cta, {
            duration: animTime * 2,
            rotation: 360,
            ease: eio
        }, "frame3")

        ;

        // ===== gets total duration of timeline =====

        console.log("total duration : " + tl1.totalDuration() + " secs");

        // ===== timescale/duration =====

        //tl1.timeScale(1);
        //tl1.totalDuration(15);

        if (tl1.totalDuration() >= maxAnimDuration) {
            tl1.totalDuration(maxAnimDuration);
            console.log("adjusted duration : " + maxAnimDuration + " secs");
        };

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
