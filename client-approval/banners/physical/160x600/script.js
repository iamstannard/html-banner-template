(function () {

    // get elements

    var bg1 = document.getElementById('bg1');
    var bg2 = document.getElementById('bg2');
    var bats1 = document.getElementById('bats1');
    var title1 = document.getElementById('title1');
    var char1 = document.getElementById('char1');
    var char2 = document.getElementById('char2');
    var char3 = document.getElementById('char3');
    var quote = document.getElementById('quote');
    var slime = document.getElementById('slime');
    var title2 = document.getElementById('title2');
    var cta = document.getElementById('cta');
    var packs = document.getElementById('packs');
    var legals = document.getElementById('legals');

    var chars = [char3, char2, char1];

    var charsReverse = [char1, char2, char3];

    // set vars

    // set defaults
    // TweenLite.defaultOverwrite = 'auto';
    TweenLite.defaultEase = Elastic.easeOut

    var animEaseOut = Back.easeIn;

    //var tl1 = new TimelineMax();

    var tl1 = new TimelineMax({
        repeat: 0,
        repeatDelay: 3
    });

    //.to(element, defaultAnimTime, {});
    //.from(element, defaultAnimTime, {});
    //.staggerTo(element, defaultAnimTime, {}, defaultStaggerOffset);
    //.staggerFrom(element, defaultAnimTime, {}, defaultStaggerOffset);
    //.set(element, {});

    //cycle:{x:[50,0,-20], rotation:[30,60,90]}
    //cycle:{x:function() { return Math.random() * 200; }}

    // animate

    function startAnim() {

        //console.log('startAnim');

        tl1.set(chars, {
            autoAlpha: 1,
            scaleY: 0.2,
            y: 200,
            transformOrigin: "50% 100%"
        })

        .set(slime, {
            autoAlpha: 1,
            scaleX: 0.2,
            x: 200,
            transformOrigin: "100% 50%"
        })

        .from(title1, 1, {
            autoAlpha: 0,
            scale: 0
        }, 0.5)

        .staggerTo(chars, 1, {
            y: 0,
            scaleY: 1,
            ease: Elastic.easeOut.config(1, 0.6)
        }, 0.125, "-=0.5")

        .to(title1, 0.5, {
            y: -200,
            ease: Back.easeIn
        }, "+=0.5")

        .staggerTo(charsReverse, 0.5, {
            y: 200,
            scaleY: 0.2,
            ease: Back.easeIn
        }, 0.125 / 2, "-=0.5")

        .from(bg2, 1, {
            autoAlpha: 0,
            ease: Cubic.easeOut
        }, "-=0.5")

        .from(bats1, 2, {
            onStart: animateBats,
            autoAlpha: 0,
            ease: Cubic.easeOut
        }, "-=0.5")

        tl1.from(quote, 1, {
            autoAlpha: 0,
            scale: 0
        }, "-=1.5")

        .to(slime, 1, {
            x: 0,
            scaleX: 1,
            ease: Elastic.easeOut.config(1, 0.6)
        }, "-=0.5")

        .to(quote, 0.5, {
            scale: 0.2,
            autoAlpha: 0,
            ease: Back.easeIn
        }, "+=1")

        .to(slime, 0.5, {
            x: 200,
            ease: Back.easeIn
        }, "-=0.5")


        .from(title2, 1, {
            autoAlpha: 0,
            scale: 0
        })

        .from(packs, 1, {
            autoAlpha: 0,
            scale: 0
        }, "-=0.5")

        .from(cta, 1, {
            autoAlpha: 0,
            scale: 0
        }, "-=0.5")

        .from(legals, 1, {
            autoAlpha: 0,
            ease: Cubic.easeOut
        }, "-=0.5")

        //        .to(slime, 0.25, {
        //            y: 10,
        //            scaleY: 0.9,
        //            ease: Quad.easeOut
        //        }, "+=1")
        //
        //        .to(slime, 1.75, {
        //            y: 0,
        //            scaleY: 1,
        //            ease: Elastic.easeOut.config(1, 0.6)
        //        })

        ;

    }

    function animateBats() {

        TweenMax.set(bats1, {
            y: 0

        });

        TweenMax.to(bats1, 15, {
            y: -250,
            ease: Power0.easeNone
        });


    }

    // init

    function addEventListeners() {
        //console.log('addEventListeners');
    }

    function initBanner() {
        //console.log('initBanner');
        addEventListeners();
        startAnim();
    }

    initBanner();

})();
