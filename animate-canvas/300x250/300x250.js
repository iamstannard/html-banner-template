(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
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
	this.shape.setTransform(203.3,29.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8F8F8F").s().p("Ah9CyIAAliIBIAAIAAElICzAAIAAA9g");
	this.shape_1.setTransform(172,29.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8F8F8F").s().p("AgjCzIAAkpIhqAAIAAg8IEbAAIAAA8IhqAAIAAEpg");
	this.shape_2.setTransform(140.3,29.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8F8F8F").s().p("AgjCzIAAllIBHAAIAAFlg");
	this.shape_3.setTransform(118.2,29.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8F8F8F").s().p("AgjCzIAAkpIhqAAIAAg8IEbAAIAAA8IhqAAIAAEpg");
	this.shape_4.setTransform(95.9,29.4);

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
	this.shape.setTransform(152.3,19.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA1BZIAAiLIgjCLIgjAAIgjiLIAACLIgiAAIAAiyIA3AAIAfB5IAhh5IA2AAIAACyg");
	this.shape_1.setTransform(133.3,19.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAiBZIgwhTIgdAdIAAA2IglAAIAAiyIAlAAIAABQIBIhQIAwAAIhDBGIBHBsg");
	this.shape_2.setTransform(107.8,19.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag2BEQgXgYAAgqQAAgsAXgYQAXgaAlAAQAhAAAUAUQAMAMAGAVIgjAJQgDgOgKgJQgLgHgOAAQgTAAgMANQgNAPAAAgQAAAhANAPQAMAOASgBQAPABAKgKQAKgIAFgVIAjAMQgIAdgTAOQgTAPgcAAQgjAAgXgZg");
	this.shape_3.setTransform(88.8,19.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgRBZIAAiyIAjAAIAACyg");
	this.shape_4.setTransform(76.5,19.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag+BZIAAixIAlAAIAACTIBYAAIAAAeg");
	this.shape_5.setTransform(65.9,19.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag2BEQgXgYAAgqQAAgsAXgYQAXgaAlAAQAhAAAUAUQAMAMAGAVIgjAJQgDgOgKgJQgLgHgOAAQgTAAgMANQgNAPAAAgQAAAhANAPQAMAOASgBQAPABAKgKQAKgIAFgVIAjAMQgIAdgTAOQgTAPgcAAQgjAAgXgZg");
	this.shape_6.setTransform(48.6,19.7);

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
	this.shape.setTransform(150,125,1.316,1.645);

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
p.nominalBounds = null;


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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(50).call(this.frame_50).wait(39).call(this.frame_89).wait(7));

	// click
	this.click = new lib.click();
	this.click.parent = this;
	this.click.setTransform(150,125,3,2.5,0,0,0,50,50);
	new cjs.ButtonHelper(this.click, 0, 1, 2, false, new lib.click(), 3);

	this.timeline.addTween(cjs.Tween.get(this.click).to({_off:true},90).wait(6));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("AtCqiIaFAAIAAVFI6FAAg");
	this.shape.setTransform(150,125,1.797,1.852);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},90).wait(6));

	// cta
	this.instance = new lib.cta();
	this.instance.parent = this;
	this.instance.setTransform(150,175,1,1,0,0,0,100,20);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(35).to({_off:false},0).to({alpha:1},15,cjs.Ease.get(1)).to({_off:true},40).wait(6));

	// title
	this.instance_1 = new lib.title();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150,77.9,1,1,0,0,0,150,29.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).to({alpha:1},15,cjs.Ease.get(1)).to({_off:true},65).wait(6));

	// bg
	this.instance_2 = new lib.bgColour();
	this.instance_2.parent = this;
	this.instance_2.setTransform(150.1,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},90).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149,124,302,252);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;