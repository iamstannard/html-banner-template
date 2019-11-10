(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8F8F8F").s().p("AiHCzIAAllIEIAAIAAA8IjAAAIAABQICzAAIAAA7IizAAIAABiIDHAAIAAA8g");
	this.shape.setTransform(203.25,29.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8F8F8F").s().p("Ah9CyIAAliIBIAAIAAElICzAAIAAA9g");
	this.shape_1.setTransform(171.95,29.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8F8F8F").s().p("AgjCzIAAkpIhqAAIAAg8IEbAAIAAA8IhqAAIAAEpg");
	this.shape_2.setTransform(140.275,29.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8F8F8F").s().p("AgjCzIAAllIBHAAIAAFlg");
	this.shape_3.setTransform(118.175,29.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8F8F8F").s().p("AgjCzIAAkpIhqAAIAAg8IEbAAIAAA8IhqAAIAAEpg");
	this.shape_4.setTransform(95.925,29.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.title, new cjs.Rectangle(0,0,300,59.9), null);


(lib.square = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().dr(-50,-50,100,100);
	this.shape.setTransform(50,50);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.square, new cjs.Rectangle(0,0,100,100), null);


(lib.cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhDBZIAAiyICEAAIAAAfIhgAAIAAAnIBZAAIAAAeIhZAAIAAAwIBjAAIAAAeg");
	this.shape.setTransform(152.275,19.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA1BZIAAiLIgjCLIgjAAIgjiLIAACLIgiAAIAAiyIA3AAIAfB5IAhh5IA2AAIAACyg");
	this.shape_1.setTransform(133.25,19.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAiBZIgwhTIgdAdIAAA2IglAAIAAiyIAlAAIAABQIBIhQIAwAAIhDBGIBHBsg");
	this.shape_2.setTransform(107.825,19.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag2BEQgXgYAAgqQAAgsAXgYQAXgaAlAAQAhAAAUAUQAMAMAGAVIgjAJQgDgOgKgJQgLgHgOAAQgTAAgMANQgNAPAAAgQAAAhANAPQAMAOASgBQAPABAKgKQAKgIAFgVIAjAMQgIAdgTAOQgTAPgcAAQgjAAgXgZg");
	this.shape_3.setTransform(88.825,19.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgRBZIAAiyIAjAAIAACyg");
	this.shape_4.setTransform(76.45,19.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag+BZIAAixIAlAAIAACTIBYAAIAAAeg");
	this.shape_5.setTransform(65.9,19.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag2BEQgXgYAAgqQAAgsAXgYQAXgaAlAAQAhAAAUAUQAMAMAGAVIgjAJQgDgOgKgJQgLgHgOAAQgTAAgMANQgNAPAAAgQAAAhANAPQAMAOASgBQAPABAKgKQAKgIAFgVIAjAMQgIAdgTAOQgTAPgcAAQgjAAgXgZg");
	this.shape_6.setTransform(48.625,19.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8F8F8F").s().p("AvnDIIAAmPIfPAAIAAGPg");
	this.shape_7.setTransform(100,20);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

}).prototype = getMCSymbolPrototype(lib.cta, new cjs.Rectangle(0,0,200,40), null);


(lib.bgColour = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C7C7C7").s().dr(-114,-76,228,152);
	this.shape.setTransform(149.9773,125.022,1.3158,1.6447);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgColour, new cjs.Rectangle(0,0,300,250), null);


(lib.click = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.square();
	this.instance.parent = this;
	this.instance.setTransform(50,50,1,1,0,0,0,50,50);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


// stage content:
(lib._300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{loop:1});

	// timeline functions:
	this.frame_0 = function() {
		// ----- SIZMEK -----
		
		/*
		this.click.cursor = "pointer";
		this.click.addEventListener("click", clickthroughSizmek);
		function clickthroughSizmek() {
			console.log("Sizmek Clickthrough");
			EB.clickthrough();
			if (typeof (videlem) != 'undefined' && videlem != null) {
				videlem.pause();
			}
		}
		*/
		var maxLoops, loopNum, startTime, elapsedTime;
		
		this.startTime = new Date().getTime();
		this.maxLoops = 3;
		this.loopNum = 1;
	}
	this.frame_50 = function() {
		console.log(this.loopNum + " of " + this.maxLoops);
		if (this.loopNum < this.maxLoops) {
			this.loopNum++;
			this.play();
		} else {
			this.stop();
			this.elapsedTime = new Date().getTime() - this.startTime;
			console.log("stop");
			console.log("elapsed : " + this.elapsedTime / 1000 + " secs");
		}
	}
	this.frame_89 = function() {
		this.gotoAndPlay("loop");
		console.log("loop");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(50).call(this.frame_50).wait(39).call(this.frame_89).wait(1));

	// click
	this.click = new lib.click();
	this.click.name = "click";
	this.click.parent = this;
	this.click.setTransform(150,125,3,2.5,0,0,0,50,50);
	new cjs.ButtonHelper(this.click, 0, 1, 2, false, new lib.click(), 3);

	this.timeline.addTween(cjs.Tween.get(this.click).wait(90));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("AtCqiIaFAAIAAVFI6FAAg");
	this.shape.setTransform(149.958,124.9685,1.797,1.8519);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(90));

	// cta
	this.instance = new lib.cta();
	this.instance.parent = this;
	this.instance.setTransform(150,175,1,1,0,0,0,100,20);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(35).to({_off:false},0).to({alpha:1},15,cjs.Ease.get(1)).wait(40));

	// title
	this.instance_1 = new lib.title();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150,77.9,1,1,0,0,0,150,29.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).to({alpha:1},15,cjs.Ease.get(1)).wait(65));

	// bg
	this.instance_2 = new lib.bgColour();
	this.instance_2.parent = this;
	this.instance_2.setTransform(150.05,124.95,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149,124,152,127);
// library properties:
lib.properties = {
	id: '40D73FBDD4D54661B2174ACB14E9314F',
	width: 300,
	height: 250,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['40D73FBDD4D54661B2174ACB14E9314F'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;