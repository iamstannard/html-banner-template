(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"images/bg.png", id:"bg"},
		{src:"images/cta.png", id:"cta"}
	]
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
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
p.nominalBounds = new cjs.Rectangle(0,0,200,40);


(lib.title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8F8F8F").s().p("AjgEsIAApXIHBAAIAACLIkNAAIAABXIDaAAIAACDIjaAAIAABiIENAAIAACQg");
	this.shape.setTransform(232.5,54.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8F8F8F").s().p("AjREsIAApXIC4AAIAAHEIDrAAIAACTg");
	this.shape_1.setTransform(182.5,54.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8F8F8F").s().p("AhWEsIAAnHIh8AAIAAiQIGlAAIAACQIh8AAIAAHHg");
	this.shape_2.setTransform(135.1,54.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8F8F8F").s().p("AhaEsIAApXIC1AAIAAJXg");
	this.shape_3.setTransform(99.6,54.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8F8F8F").s().p("AhVEsIAAnHIh9AAIAAiQIGlAAIAACQIh8AAIAAHHg");
	this.shape_4.setTransform(64,54.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,106.1);


(lib.cta_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cta();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,200,40);


(lib.bgColour = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C7C7C7").s().dr(-114,-76,228,152);
	this.shape.setTransform(150,125,1.316,1.645);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.bg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


// stage content:
(lib._300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_149 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(149).call(this.frame_149).wait(1));

	// cta
	this.instance = new lib.cta_1();
	this.instance.setTransform(150,190,0.5,0.5,0,0,0,100,20);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},23,cjs.Ease.get(1)).wait(104));

	// title
	this.instance_1 = new lib.title();
	this.instance_1.setTransform(150,53,0.5,0.5,0,0,0,150,53);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(17).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},23,cjs.Ease.get(1)).wait(110));

	// bg
	this.instance_2 = new lib.bg_1();
	this.instance_2.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12).to({_off:false},0).to({alpha:1},23,cjs.Ease.get(1)).wait(115));

	// bgColour
	this.instance_3 = new lib.bgColour();
	this.instance_3.setTransform(150.1,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(150));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150.1,125,300,250);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;