(function () {

    // get elements

    var brownArrow = document.getElementById('brownArrowR');
    var whiteArrow = document.getElementById('whiteArrowR');

    var tt1 = document.getElementById('tt1');
    var tt2 = document.getElementById('tt2');

    var bale = document.getElementById('bale');
    var carell = document.getElementById('carell');
    var gosling = document.getElementById('gosling');
    var pitt = document.getElementById('pitt');

    var q1 = document.getElementById('q1');
    var q2 = document.getElementById('q2');
    var q3 = document.getElementById('q3');

    var baleName = document.getElementById('baleName');
    var carellName = document.getElementById('carellName');
    var goslingName = document.getElementById('goslingName');
    var pittName = document.getElementById('pittName');

    var dvd = document.getElementById('dvd');
    var bd = document.getElementById('bd');
    var cta = document.getElementById('cta');
    var button = document.getElementById('button');

    var copyright = document.getElementById('copyright');
    var rating = document.getElementById('rating');

    // set vars

    var animScale = 0.75;
    var animTime = 1.25;
    var staggerOffset = 0.25;
    var frameDelay = 3;

    // set defaults

    TweenLite.defaultEase = Power4.easeOut;

    var secs = [0.25, 1, 2, 3, 5];

    var tl1 = new TimelineMax({
        repeat: 0,
        repeatDelay: frameDelay
    });

    function startAnim() {

        //console.log('startAnim');

        tl1

            .set(brownArrow, {
            autoAlpha: 1,
            y: -769
        })

        .set(whiteArrow, {
            autoAlpha: 1,
            y: -362
        })

        .staggerTo([brownArrow, whiteArrow], 2, {
            y: 0
        }, 0, secs[0])

        .staggerFrom([tt1, tt2], 2, {
            autoAlpha: 0,
        }, 1, secs[1])

        .staggerFrom([bale, carell, gosling, pitt], animTime, {
            autoAlpha: 0,
            y: 25
        }, staggerOffset, secs[2])

        .staggerFrom([q1, q2, q3], 0.75, {
            autoAlpha: 0,
            y: 25
        }, staggerOffset, secs[3])


        .from(rating, 1.5, {
            autoAlpha: 0,
        }, secs[4])

        ;

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
