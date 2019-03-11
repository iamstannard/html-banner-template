(function () {

    // console.clear();

    // get elements
    
    var bg = document.getElementById('bg');
    
    var tt1L = document.getElementById('tt1L');
    var tt2L = document.getElementById('tt2L');
    var tt1R = document.getElementById('tt1R');
    var tt2R = document.getElementById('tt2R');
    
    var dvd1 = document.getElementById('dvd1');
    var dvd2 = document.getElementById('dvd2');
    var dvd3 = document.getElementById('dvd3');
    var dvd4 = document.getElementById('dvd4');
    
    var ctaL = document.getElementById('ctaL');
    var ctaR = document.getElementById('ctaR');
    
    var ratings = document.getElementById('ratings');
    var copyright = document.getElementById('copyright');
    var legals = [ratings, copyright];

    // set vars

    var animDist = 25;
    var animScale = 1.75;
    var animTime = 2;
    var staggerOffset = 0.75;
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
    var backEaseConfig = 2;
    var bo = Back.easeOut.config(backEaseConfig); // back out
    var bi = Back.easeIn.config(backEaseConfig); // back in
    var bio = Back.easeInOut.config(backEaseConfig); // back in

    var tl1 = new TimelineMax({
        repeat: 0,
        repeatDelay: frameDelay
    });

    // set timeScale
    tl1.timeScale(1);

    function startAnim() {

        //console.log('startAnim');

        tl1

        .addLabel("bg", 0)
        .addLabel("tt", 1)
        .addLabel("packs", 2)
        .addLabel("cta", 5)
        .addLabel("legals", 5)
        
                .set(bg, {autoAlpha: 1}, 'bg')
        
        .set([dvd1,dvd2], {
            autoAlpha:1,
            x: 200,
            rotation: 45,
            transformOrigin: '50% 50%'
        })
        
        .set([dvd3,dvd4], {
            autoAlpha:1,
            x: -200,
            rotation: -45,
            transformOrigin: '50% 50%'
        })
        
        
        .set([s1, s2], {
            transformOrigin: '50% 100%',
            opacity: 0.5,
            rotation: 30
        })

        .set([s3, s4], {
            transformOrigin: '50% 100%',
            opacity: 0.5,
            rotation: -30
        })

        .staggerFrom([s2, s3, s1, s4], 2, {
            autoAlpha: 0
        }, 0.5, 'packs')

        .staggerTo([s2, s3, s1, s4], 2, {
            autoAlpha: 0
        }, 0.5, 15)

        .to(s2, 3, {
                rotation: '-=90',
                repeat: 3,
                yoyo: true,
                ease: Cubic.easeInOut
            }, 'packs')
        
            .to(s3, 3, {
                rotation: '+=90',
                repeat: 3,
                yoyo: true,
                ease: Cubic.easeInOut
            }, 'packs+=1.25')
        
            .to(s1, 3, {
                rotation: '-=90',
                repeat: 3,
                yoyo: true,
                ease: Cubic.easeInOut
            }, 'packs+=2')
        
                .to(s4, 3, {
                rotation: '+=90',
                repeat: 3,
                yoyo: true,
                ease: Cubic.easeInOut
            }, 'packs+=2.75')
        

        
        .staggerFrom([tt1L,tt2L],0.25, {autoAlpha: 0},staggerOffset/2, 'tt')
        .staggerFrom([tt1R,tt2R],0.25, {autoAlpha: 0},staggerOffset/2, 'tt')
        .staggerFrom([tt1L,tt2L],animTime, {x: 125, ease:ee},staggerOffset/2, 'tt')
        .staggerFrom([tt1R,tt2R],animTime, {x: -125, ease:ee},staggerOffset/2, 'tt')
        
        
//        .staggerFrom([dvd1, dvd3, dvd2, dvd4], 0.25, {
//            autoAlpha: 0
//        }, staggerOffset, 'packs')
        
        .staggerTo([dvd1, dvd3, dvd2, dvd4], animTime, {
            x: 0,
            rotation: 0,
            ease: ee
        }, staggerOffset, 'packs')
        
        .from([ctaL,ctaR],0.25, {autoAlpha: 0}, 'cta')
        .from([ctaL,ctaR],animTime, {scale: animScale, ease:ee}, 'cta')
        
        .from(legals, animTime, {autoAlpha: 0}, 'legals')
        



        ;

        // total duration of timeline
        console.log("duration : " + tl1.totalDuration() + " secs");

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
