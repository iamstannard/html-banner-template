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



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.cta = function() {
	this.initialize(img.cta);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,40);// helper functions:

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
	this.shape.graphics.f("#8F8F8F").s().p("AjwFCIAAqDIHRAAIAABMIl7AAIAADFIFkAAIAABLIlkAAIAADbIGLAAIAABMg");
	this.shape.setTransform(243.6,51.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8F8F8F").s().p("AjIFCIAAqDIBVAAIAAI3IE8AAIAABMg");
	this.shape_1.setTransform(189.1,51.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8F8F8F").s().p("AgqFCIAAo3IjUAAIAAhMIH9AAIAABMIjVAAIAAI3g");
	this.shape_2.setTransform(135.1,51.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8F8F8F").s().p("AgqFCIAAqDIBVAAIAAKDg");
	this.shape_3.setTransform(95.1,51.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8F8F8F").s().p("AgqFCIAAo3IjUAAIAAhMIH9AAIAABMIjVAAIAAI3g");
	this.shape_4.setTransform(55.1,51.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.title, new cjs.Rectangle(0,0,300,104.5), null);


(lib.square = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().dr(-50,-50,100,100);
	this.shape.setTransform(50,50);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.square, new cjs.Rectangle(0,0,100,100), null);


(lib.cta_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cta();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cta_1, new cjs.Rectangle(0,0,200,40), null);


(lib.bgColour = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C7C7C7").s().dr(-114,-76,228,152);
	this.shape.setTransform(150,125,1.316,1.645);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgColour, new cjs.Rectangle(0,0,300,250), null);


(lib.bg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg_1, new cjs.Rectangle(0,0,300,250), null);


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
	this.initialize(mode,startPosition,loop,{});

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
	}
	this.frame_45 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(45).call(this.frame_45).wait(1));

	// click
	this.click = new lib.click();
	this.click.parent = this;
	this.click.setTransform(150,125,3,2.5,0,0,0,50,50);
	new cjs.ButtonHelper(this.click, 0, 1, 2, false, new lib.click(), 3);

	this.timeline.addTween(cjs.Tween.get(this.click).wait(46));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("AtCqiIaFAAIAAVFI6FAAg");
	this.shape.setTransform(150,125,1.797,1.852);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(46));

	// cta
	this.instance = new lib.cta_1();
	this.instance.parent = this;
	this.instance.setTransform(150,198,0.5,0.5,0,0,0,100,20);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},15,cjs.Ease.get(1)).wait(11));

	// title
	this.instance_1 = new lib.title();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150,53,0.5,0.5,0,0,0,150,53);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},15,cjs.Ease.get(1)).wait(16));

	// bg
	this.instance_2 = new lib.bg_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({_off:false},0).to({alpha:1},15,cjs.Ease.get(1)).wait(21));

	// bgColour
	this.instance_3 = new lib.bgColour();
	this.instance_3.parent = this;
	this.instance_3.setTransform(150.1,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(46));

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
	manifest: [
		{src:"images/bg.png", id:"bg"},
		{src:"images/cta.png", id:"cta"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;