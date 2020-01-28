(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 60,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.subtitle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BFBBBB").s().p("AgcAoQgJgJgBgOIAPAAQABAHADAEQAGAIANAAQAJAAAHgEQAHgDAAgJQAAgFgFgEQgEgCgKgCIgLgEQgMgDgGgBQgKgHAAgKQAAgOAJgJQAKgHAQgBQAUAAAKANQAGAIAAAJIgPAAQgBgFgDgFQgGgGgMAAQgJAAgEADQgFAEAAAFQAAAHAGADQAEACAHACIAIADQASAEAFACQAKAFAAAOQAAANgKAIQgKAJgTAAQgUAAgIgJg");
	this.shape.setTransform(182.9,1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BFBBBB").s().p("AgKBTIgEgBIAAgNQALgBACgBQABgBAAgJIAAhnIAPAAIAABpQAAALgDAEQgGAJgOAAgAAAhAIAAgSIAPAAIAAASg");
	this.shape_1.setTransform(177.2,1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BFBBBB").s().p("AgIAJIAAgRIARAAIAAARg");
	this.shape_2.setTransform(174.9,4.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BFBBBB").s().p("AAWAvIAAg5QAAgIgDgGQgEgIgLgBIgHABQgHADgFAFQgEAFgBAFIgBAOIAAAvIgQAAIAAhcIAPAAIAAANQAHgHAHgEQAIgEAHABQAUAAAHANQAEAIAAAOIAAA6g");
	this.shape_3.setTransform(169,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BFBBBB").s().p("AgHBAIAAhbIAPAAIAABbgAgHgtIAAgSIAPAAIAAASg");
	this.shape_4.setTransform(163.5,-0.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BFBBBB").s().p("AAvAvIAAg/QgBgKgFgDQgEgEgHAAQgJAAgHAHQgGAGgBAOIAAA1IgOAAIAAg7QAAgKgCgEQgEgHgJAAQgKABgGAGQgIAIAAASIAAAvIgQAAIAAhcIAPAAIAAANIALgKQAIgEAJAAQAMgBAHAGQABADAEAGQAFgIAHgDQAHgEAJABQATAAAHANQAEAHAAANIAAA8g");
	this.shape_5.setTransform(155.6,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BFBBBB").s().p("AgIAJIAAgRIARAAIAAARg");
	this.shape_6.setTransform(147,4.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#BFBBBB").s().p("AAWAuIgWgjIgWAjIgUAAIAhguIgfguIAUAAIAUAiIAWgiIATABIggAtIAiAug");
	this.shape_7.setTransform(141.5,1.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BFBBBB").s().p("AgiAqQgJgIAAgMQAAgNAJgIQAHgFAOgCIAXgDQAFAAADgEIABgGQgBgJgFgDQgGgEgJAAQgMAAgGAHQgCAEgBAHIgPAAQABgSAKgGQALgHAOAAQAPAAAKAGQALAGAAAOIAAA0IABAEQAAABABAAQAAAAAAAAQABABABAAQAAAAABAAIACgBIADAAIAAAMIgFABIgGAAQgIAAgEgGQgCgDAAgFQgFAGgJAFQgHAEgLAAQgNAAgIgHgAALACIgJABIgIACQgIABgFACQgIAEAAAJQABAHAEAEQAGAEAGAAQAJAAAGgEQANgGAAgPIAAgLIgHACg");
	this.shape_8.setTransform(133.7,1.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#BFBBBB").s().p("AAtBAIAAhKIAAgOIAAgTIglBrIgPAAIglhrIAAAEIAAAPIAAAOIAABKIgQAAIAAh/IAZAAIAjBrIAlhrIAYAAIAAB/g");
	this.shape_9.setTransform(122.6,-0.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#BFBBBB").s().p("AAVAvIAAg5QAAgIgCgGQgEgIgLgBIgIABQgGADgFAFQgEAFgBAFIgBAOIAAAvIgQAAIAAhcIAPAAIAAANQAHgHAHgEQAIgEAHABQAUAAAHANQAEAIAAAOIAAA6g");
	this.shape_10.setTransform(111.6,1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#BFBBBB").s().p("AgdAkQgMgMAAgYQAAgUAMgOQAMgOASAAQAKAAAKAEQAJAFAFAHQAEAIACAJIABATIhCAAQAAAOAHAJQAGAIALAAQAMAAAIgIQAEgFACgGIAPAAIgEAMQgDAGgFAEQgHAHgKADQgGABgGAAQgRAAgMgNgAAagHQgBgKgDgGQgHgMgPAAQgJAAgHAIQgHAIgBAMIAyAAIAAAAg");
	this.shape_11.setTransform(103,1.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#BFBBBB").s().p("AgdAkQgMgMAAgYQAAgUAMgOQAMgOASAAQAKAAAKAEQAJAFAFAHQAEAIACAJIABATIhCAAQAAAOAHAJQAGAIALAAQAMAAAIgIQAEgFACgGIAPAAIgEAMQgDAGgFAEQgHAHgKADQgGABgGAAQgRAAgMgNgAAagHQgBgKgDgGQgHgMgPAAQgJAAgHAIQgHAIgBAMIAyAAIAAAAg");
	this.shape_12.setTransform(94.5,1.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#BFBBBB").s().p("AATAuIgThHIgRBHIgQAAIgchcIARAAIASBIIAThIIAPAAIATBIIAUhIIAPAAIgbBcg");
	this.shape_13.setTransform(84.6,1.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#BFBBBB").s().p("AgHBAIAAhwIgsAAIAAgPIBnAAIAAAPIgsAAIAABwg");
	this.shape_14.setTransform(74.2,-0.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#BFBBBB").s().p("AgdA0QgLgNAAgWQAAgSAKgPQALgPATAAQAJAAAIAEQAEADAFAGIAAgvIAPAAIAAB/IgOAAIAAgMQgGAIgHAEQgIAEgIAAQgPAAgMgOgAgQgJQgHAJAAAQQAAAPAGALQAHAKAMAAQAKAAAIgKQAGgJABgSQAAgQgIgIQgHgJgKAAQgKABgIAIg");
	this.shape_15.setTransform(61.4,-0.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#BFBBBB").s().p("AgiAqQgJgIAAgMQAAgNAJgIQAHgFAOgCIAXgDQAGAAACgEIABgGQAAgJgHgDQgFgEgJAAQgMAAgGAHQgCAEgBAHIgPAAQABgSALgGQAKgHAOAAQAPAAAKAGQALAGAAAOIAAA0IABAEQAAABABAAQAAAAAAAAQABABABAAQAAAAABAAIACgBIADAAIAAAMIgGABIgEAAQgJAAgEgGQgCgDAAgFQgFAGgJAFQgHAEgLAAQgNAAgIgHgAALACIgKABIgHACQgIABgFACQgIAEABAJQAAAHAEAEQAGAEAHAAQAIAAAGgEQANgGAAgPIAAgLIgHACg");
	this.shape_16.setTransform(53.4,1.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#BFBBBB").s().p("AgfAkQgLgNAAgWQAAgVAMgPQAMgOASAAQASAAANANQAMAMAAAXQAAAVgLAPQgLAPgVAAQgTAAgMgOgAgTgYQgHALAAAOQAAAPAHAKQAGAKANAAQAPAAAGgMQAGgMAAgMQAAgOgFgIQgGgNgQAAQgNAAgGALg");
	this.shape_17.setTransform(44.6,1.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#BFBBBB").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape_18.setTransform(39.3,-0.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#BFBBBB").s().p("AgfAkQgLgNAAgWQAAgVAMgPQAMgOASAAQASAAANANQAMAMAAAXQAAAVgLAPQgLAPgVAAQgTAAgMgOgAgTgYQgHALAAAOQAAAPAHAKQAGAKANAAQAPAAAGgMQAGgMAAgMQAAgOgFgIQgGgNgQAAQgNAAgGALg");
	this.shape_19.setTransform(30.1,1.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#BFBBBB").s().p("AgEA3QgEgGAAgJIAAg8IgMAAIAAgNIAMAAIAAgaIAOAAIAAAaIAQAAIAAANIgQAAIAAA7QAAAFADACIAHABIACAAIAEAAIAAAMIgHABIgGAAQgJAAgEgFg");
	this.shape_20.setTransform(24.2,-0.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#BFBBBB").s().p("AgdAkQgMgMAAgYQAAgUAMgOQAMgOASAAQAKAAAKAEQAJAFAFAHQAEAIACAJIABATIhCAAQAAAOAHAJQAGAIALAAQAMAAAIgIQAEgFACgGIAPAAIgEAMQgDAGgFAEQgHAHgKADQgGABgGAAQgRAAgMgNgAAagHQgBgKgDgGQgHgMgPAAQgJAAgHAIQgHAIgBAMIAyAAIAAAAg");
	this.shape_21.setTransform(14.6,1.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#BFBBBB").s().p("AgEA3QgDgGgBgJIAAg8IgMAAIAAgNIAMAAIAAgaIAPAAIAAAaIAPAAIAAANIgPAAIAAA7QAAAFACACIAHABIACAAIAEAAIAAAMIgGABIgHAAQgJAAgEgFg");
	this.shape_22.setTransform(8.7,-0.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#BFBBBB").s().p("AgjAqQgIgIAAgMQAAgNAIgIQAJgFANgCIAXgDQAFAAACgEIABgGQAAgJgFgDQgGgEgIAAQgNAAgFAHQgDAEgBAHIgPAAQAAgSALgGQAMgHAOAAQAOAAALAGQAKAGAAAOIAAA0IABAEQAAABABAAQAAAAABAAQAAABABAAQAAAAABAAIADgBIACAAIAAAMIgFABIgGAAQgIAAgDgGQgCgDgBgFQgFAGgJAFQgHAEgLAAQgNAAgJgHgAAKACIgJABIgHACQgIABgFACQgHAEgBAJQAAAHAGAEQAFAEAGAAQAJAAAGgEQANgGAAgPIAAgLIgIACg");
	this.shape_23.setTransform(2.9,1.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#BFBBBB").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_24.setTransform(-2.7,-0.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#BFBBBB").s().p("AgoBCIAAiAIAPAAIAAAMQAFgGAFgEQAJgFAIgBQARAAALANQALAMAAAXQAAAcgQAOQgKAIgOAAQgJAAgHgEQgEgDgGgGIAAAvgAgWgjQgDAJAAANQAAALADAGQAGAPAQAAQAKAAAHgKQAIgJAAgQQAAgMgDgIQgHgPgPAAQgQAAgGAQg");
	this.shape_25.setTransform(-8,2.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#BFBBBB").s().p("AAuAvIAAg/QAAgKgEgDQgFgEgHAAQgJAAgHAHQgGAGgBAOIAAA1IgOAAIAAg7QAAgKgCgEQgEgHgJAAQgKABgGAGQgIAIAAASIAAAvIgQAAIAAhcIAQAAIAAANIAKgKQAIgEAJAAQAMgBAHAGQACADADAGQAFgIAHgDQAHgEAJABQATAAAHANQAEAHAAANIAAA8g");
	this.shape_26.setTransform(-19.1,1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#BFBBBB").s().p("AgdAkQgMgMAAgYQAAgUAMgOQAMgOASAAQAKAAAKAEQAJAFAFAHQAEAIACAJIABATIhCAAQAAAOAHAJQAGAIALAAQAMAAAIgIQAEgFACgGIAPAAIgEAMQgDAGgFAEQgHAHgKADQgGABgGAAQgRAAgMgNgAAagHQgBgKgDgGQgHgMgPAAQgJAAgHAIQgHAIgBAMIAyAAIAAAAg");
	this.shape_27.setTransform(-30.3,1.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#BFBBBB").s().p("AgEA3QgDgGgBgJIAAg8IgMAAIAAgNIAMAAIAAgaIAOAAIAAAaIAQAAIAAANIgQAAIAAA7QAAAFADACIAHABIACAAIAEAAIAAAMIgHABIgGAAQgJAAgEgFg");
	this.shape_28.setTransform(-36.2,-0.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#BFBBBB").s().p("AAvAvIAAg/QAAgKgGgDQgEgEgHAAQgJAAgHAHQgHAGAAAOIAAA1IgNAAIAAg7QAAgKgDgEQgDgHgKAAQgJABgIAGQgHAIAAASIAAAvIgQAAIAAhcIAPAAIAAANIALgKQAIgEAJAAQAMgBAHAGQABADAEAGQAFgIAHgDQAIgEAIABQATAAAHANQAEAHAAANIAAA8g");
	this.shape_29.setTransform(-48.1,1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#BFBBBB").s().p("AgfAkQgLgNAAgWQAAgVAMgPQAMgOASAAQASAAANANQAMAMAAAXQAAAVgLAPQgLAPgVAAQgTAAgMgOgAgTgYQgHALAAAOQAAAPAHAKQAGAKANAAQAPAAAGgMQAGgMAAgMQAAgOgFgIQgGgNgQAAQgNAAgGALg");
	this.shape_30.setTransform(-59.2,1.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#BFBBBB").s().p("AgEA3QgDgGAAgJIAAg8IgOAAIAAgNIAOAAIAAgaIANAAIAAAaIAPAAIAAANIgPAAIAAA7QAAAFAEACIAGABIACAAIADAAIAAAMIgGABIgFAAQgKAAgEgFg");
	this.shape_31.setTransform(-65.2,-0.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#BFBBBB").s().p("AgcAoQgJgJgBgOIAPAAQABAHADAEQAGAIANAAQAJAAAHgEQAHgDAAgJQAAgFgFgEQgEgCgKgCIgLgEQgMgDgGgBQgKgHAAgKQAAgOAJgJQAKgHAQgBQAUAAAKANQAGAIAAAJIgPAAQgBgFgDgFQgGgGgMAAQgJAAgEADQgFAEAAAFQAAAHAGADQAEACAHACIAIADQASAEAFACQAKAFAAAOQAAANgKAIQgKAJgTAAQgUAAgIgJg");
	this.shape_32.setTransform(-70.6,1.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#BFBBBB").s().p("AggAiQgEgHAAgMIAAg+IAQAAIAAA9QAAAHACAEQAFAJALAAQAOAAAGgPQADgIAAgMIAAguIAQAAIAABcIgPAAIAAgOQgDAGgFADQgIAIgLAAQgUAAgHgOg");
	this.shape_33.setTransform(-78.7,1.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#BFBBBB").s().p("AgcAkQgLgOAAgUQAAgXAMgNQANgOAQAAQAQAAAKAIQAKAHACATIgQAAQgBgIgFgGQgFgGgLAAQgNAAgHAPQgEAJAAAMQAAAPAGAJQAGAKALAAQAKAAAFgGQAGgGACgLIAQAAQgDATgLAJQgKAIgQAAQgRAAgLgNg");
	this.shape_34.setTransform(-86.5,1.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#BFBBBB").s().p("AgiAqQgJgIAAgMQAAgNAJgIQAHgFAOgCIAXgDQAGAAACgEIABgGQAAgJgHgDQgFgEgJAAQgMAAgGAHQgCAEgBAHIgPAAQABgSALgGQAKgHAOAAQAPAAAKAGQALAGAAAOIAAA0IABAEQAAABABAAQAAAAAAAAQABABABAAQAAAAABAAIACgBIADAAIAAAMIgGABIgFAAQgIAAgEgGQgCgDAAgFQgFAGgJAFQgHAEgLAAQgNAAgIgHgAALACIgJABIgIACQgIABgFACQgIAEABAJQAAAHAEAEQAGAEAGAAQAJAAAGgEQANgGAAgPIAAgLIgHACg");
	this.shape_35.setTransform(-97.9,1.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#BFBBBB").s().p("AgcAoQgJgJgBgOIAPAAQABAHADAEQAGAIANAAQAJAAAHgEQAHgDAAgJQAAgFgFgEQgEgCgKgCIgLgEQgMgDgGgBQgKgHAAgKQAAgOAJgJQAKgHAQgBQAUAAAKANQAGAIAAAJIgPAAQgBgFgDgFQgGgGgMAAQgJAAgEADQgFAEAAAFQAAAHAGADQAEACAHACIAIADQASAEAFACQAKAFAAAOQAAANgKAIQgKAJgTAAQgUAAgIgJg");
	this.shape_36.setTransform(-109.6,1.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#BFBBBB").s().p("AgdAkQgMgMAAgYQAAgUAMgOQAMgOASAAQAKAAAKAEQAJAFAFAHQAEAIACAJIABATIhCAAQAAAOAHAJQAGAIALAAQAMAAAIgIQAEgFACgGIAPAAIgEAMQgDAGgFAEQgHAHgKADQgGABgGAAQgRAAgMgNgAAagHQgBgKgDgGQgHgMgPAAQgJAAgHAIQgHAIgBAMIAyAAIAAAAg");
	this.shape_37.setTransform(-117.7,1.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#BFBBBB").s().p("AgcAoQgJgJgBgOIAPAAQABAHADAEQAGAIANAAQAJAAAHgEQAHgDAAgJQAAgFgFgEQgEgCgKgCIgLgEQgMgDgGgBQgKgHAAgKQAAgOAJgJQAKgHAQgBQAUAAAKANQAGAIAAAJIgPAAQgBgFgDgFQgGgGgMAAQgJAAgEADQgFAEAAAFQAAAHAGADQAEACAHACIAIADQASAEAFACQAKAFAAAOQAAANgKAIQgKAJgTAAQgUAAgIgJg");
	this.shape_38.setTransform(-125.6,1.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#BFBBBB").s().p("AggAiQgEgHAAgMIAAg+IAQAAIAAA9QAAAHACAEQAFAJALAAQAOAAAGgPQADgIAAgMIAAguIAQAAIAABcIgPAAIAAgOQgDAGgFADQgIAIgLAAQgUAAgHgOg");
	this.shape_39.setTransform(-133.7,1.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#BFBBBB").s().p("AgiAqQgJgIAAgMQAAgNAJgIQAHgFAOgCIAXgDQAGAAACgEIAAgGQABgJgHgDQgFgEgIAAQgNAAgFAHQgDAEgBAHIgPAAQAAgSAMgGQALgHAOAAQAOAAALAGQAKAGAAAOIAAA0IABAEQAAABABAAQAAAAAAAAQABABABAAQAAAAABAAIADgBIACAAIAAAMIgGABIgEAAQgJAAgEgGQgBgDgBgFQgFAGgJAFQgHAEgLAAQgNAAgIgHgAAKACIgJABIgHACQgJABgEACQgHAEAAAJQAAAHAEAEQAGAEAHAAQAIAAAGgEQANgGAAgPIAAgLIgIACg");
	this.shape_40.setTransform(-145.4,1.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#BFBBBB").s().p("AgGBAIAAh/IAOAAIAAB/g");
	this.shape_41.setTransform(-151,-0.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#BFBBBB").s().p("AgIBBIAAhPIgNAAIAAgMIANAAIAAgPQABgLADgEQAEgIAPAAIADAAIAEAAIAAAPIgEgBIgCAAQgHAAgCAEQgBAEAAAQIAQAAIAAAMIgQAAIAABPg");
	this.shape_42.setTransform(-154.1,-0.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#BFBBBB").s().p("AgcAoQgJgJgBgOIAPAAQABAHADAEQAGAIANAAQAJAAAHgEQAHgDAAgJQAAgFgFgEQgEgCgKgCIgLgEQgMgDgGgBQgKgHAAgKQAAgOAJgJQAKgHAQgBQAUAAAKANQAGAIAAAJIgPAAQgBgFgDgFQgGgGgMAAQgJAAgEADQgFAEAAAFQAAAHAGADQAEACAHACIAIADQASAEAFACQAKAFAAAOQAAANgKAIQgKAJgTAAQgUAAgIgJg");
	this.shape_43.setTransform(-163,1.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#BFBBBB").s().p("AgGBAIAAhbIAOAAIAABbgAgGgtIAAgSIAOAAIAAASg");
	this.shape_44.setTransform(-168,-0.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#BFBBBB").s().p("AAWBAIAAg7QAAgIgDgFQgEgIgMAAQgIAAgIAHQgIAHAAAQIAAAyIgQAAIAAh/IAQAAIAAAwQAGgHAEgDQAIgFAJAAQAVAAAHAOQAEAIAAAMIAAA8g");
	this.shape_45.setTransform(-173.5,-0.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#BFBBBB").s().p("AgHBAIAAhwIgsAAIAAgPIBnAAIAAAPIgsAAIAABwg");
	this.shape_46.setTransform(-182.4,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-266,-12.8,530,24.8);


(lib.Path_21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AALBQQgpgBgvgHIgIiOIAmgJQA6AcBBABQgEARgBAWQgBAqAOAZQANAYhKAAIgMAAg");
	this.shape.setTransform(8.6,8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,17.3,16.1);


(lib.Path_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhXA1QAagIAKgYQALgXgTgZQgOgRgSgQQgHgIAXgCQAXgBBKAoQAnAUAhATIhFA/g");
	this.shape.setTransform(9.5,7.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,18.9,14.3);


(lib.Path_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXArQhdgBg7gJQgegEgLgEIAEgxQA9AVB2gDQA0gBA1gHQBBgIAogOQAlgNADAQQABAJgGAKIghAdQgTAHgjAIQhAANhFAAIgPAAg");
	this.shape.setTransform(21.8,4.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43.5,8.7);


(lib.Path_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgTAkQhdgBgygHQgagDgGgDIgCgxQA9AVB2gDQBNgCAXgCQA9gGAngOQAPgFgBAPQgBAIgDAIIgKAQQgUAHgkAHQhAANhDAAIgPAAg");
	this.shape.setTransform(19.8,3.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,39.5,7.2);


(lib.Path_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjhGyQgEgOgDgRIgGgvQgNiMgohkQgvh0hNgvQB4hBD8h6QEbiMB9gyQA6gYgJAJQgqAsgNAWQgRAeAAArQAAApgBACQh4Brh9CDQj1EChLDLQgCgDABgFg");
	this.shape.setTransform(41.6,44.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.3,83.2,88.5);


(lib.Path_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAOCAQiBhmjWAHQCVgJDUiTQCrh2B2iDQALgMgCANIgNAqQgbBYAAAuQACDDgNBkQgUCZg/B+QhSiuhkhNg");
	this.shape.setTransform(33.1,38);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,66.2,75.9);


(lib.Path_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAjEcQgDg3gGg6QgNh3gOgUQgPgSg2gqQhAgygKgKQgRgQAXgmQAdgxgCgaQgDgiAThEQAJgjAJgcIC4CTQgigOgYAgQgXAfAJApQAHAbA6BJQA3BXgDB0QgDBkgSBIQgKAkgIAQg");
	this.shape.setTransform(15.4,38.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.2,0,30.5,76.6);


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhzF4QBwiPAEgbQAEgQgchsIgfhmIBslvQgDBiATCjIAdDgQAHA2AKAzQADAdgUAfQghAvgrBNg");
	this.shape.setTransform(11.7,38.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,23.4,77.6);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag0A5QgqgPgbgYQgcgXgVguIAvACIASAuICbAbIB0hcQAEASAAAVQACApgOAQQghAmhQACIgSABQgvAAgggMg");
	this.shape.setTransform(17.1,6.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34.2,13.9);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgpBAIgZgrIBChYQAGAgALAdQAQAlAVASQALAMABADQABADgJAAg");
	this.shape.setTransform(6.7,6.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13.4,13.6);


(lib.greensock_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#88CE02").s().p("ArhIZQhrh3AAjjQgBjhBrh3QBrh3DOAAQDOAABqB4QBqB3AADgQAADjhqB3QhqB4jOAAQjNAAhrh4gApJC/QgBEJChAAQBSAAAnhEQAmhBAAiEQAAiEgmg+QgnhDhSAAQihAAABEFgA5mJZQhpgvAAg0QAAgmAng4QAog4AcAAQAIAAAYAMIA2AcQBVAnBTAAQBEAAApgYQA2ggAAhGQAAhChOguQgcgQg0gWIhcgnQhzg1g4g/QhOhXAAiKQAAixCBhfQBvhSCpAAQCDAABeAnQBXAkAAAtQAAAmggA3QgiA6geAAIg9gWQg9gVhFAAQhaAAgqAkQgdAbgBAnQAAA/BPAtQAuAbB9AxQBzAzA5A9QBOBYgBCJQAADHh8BkQhoBUijAAQi0AAh4g2gADSIdQhrhyAAjoQAAjnBph0QBuh4DlAAQBnAABWAfQBhAiAAA3QAAAagiA1QglA2gUAAQgQgEgOgIQhHgohRABQhmAAgvBBQguA9AACHQAACHArBAQAtBCBiAAQBbAABOgpQAMgHASgDQAbAAAhA1QAeAxAAAcQAAA/iCAiQhaAXhRAAQjeAAhrhygAYlKJQgrAAgXgGQgbgIgMgSIjwmOIgFACIAAF1QAAAcgZANQgZAOg3AAIgwAAQg3AAgZgOQgZgNAAgcIAAyrIgBAAQAAgcAZgOQAZgNA3AAIAwAAQA2AAAaANQAYAOAAAcIAAKqIAGACIDTk4QAOgUAbgHQAVgFArAAIA/AAQBjAAgBAaQgDAUgNAPIjwFUIEZG+IAKAVQAEAJABAHQAAAahiAAg");
	this.shape.setTransform(604.6,65.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A92HUQiKiYAAkxQAApyIwAAQB8AABpAlQBlAjAAAkQAAAXgVAmQgWAngQAAQgigSgsgTQhYgmhnAAQjcAAhhB+QhYBzAADuQAADeBOB4QBfCRDWAAQBCAAA+gHQA7gGAjgKIAAlcIjJAAQgjAAAAgzIAAgdQAAgbAIgKQAIgLATAAIEvAAQAbAAAMAMQAMAKAAAaIAAHLQAABEh2AfQhhAZiqAAQkGAAiGiUgAIqH0QhohwAAjpQAAjiBlh3QBmh3DGAAQCwAABbBzQBZByAADbQAAAQgVAbQgVAcgPAAIoiAAQALCQBABEQBABDCAAAQBcAABUgkQAqgSAjgTQARAAAWAkQAWAhAAARQAAAihaAkQhkAoh6AAQjXAAhohwgAJcBYIHDAAQAAkPjQAAQjgAAgTEPgAlVH0QhohwAAjpQgBjiBmh3QBmh3DHAAQCuAABbBzQBZByAADbQAAAQgVAbQgVAcgPAAIogAAQALCQBABEQBABDCAAAQBaAABUgkQAqgSAigTQARAAAXAkQAWAhAAARQAAAihaAkQhkAoh4AAQjXAAhphwgAkkBYIHAAAQAAkPjOAAQjfAAgTEPgAtwJiQhFAAAAgnIAApdIgBAAQAChwgWhqQAAgVAngMQAbgIAcAAQAaAAAQApQAFAOAOA7QAtg/AyghQA0giA1AAQAxAAAaATQAZASAAAfQAAAcgKAfQgLAigOAAQgGAAgcgJQgbgJgiAAQg4AAg5A1IguA1IAAJ3QAAAnhFAAgAe1JeQhFAAAAgnIAApJQAAhQgugrQgugshVAAQg6AAg7AhQg6AggrA3IAAJ4QAAAmhFAAIgHAAQhFAAAAgmIAApZIAAAAQAChwgWhqQAAgVAngMQAbgIAcAAQAaAAAQApQAFAOAOA7QA3g9BHgiQBHgjBIAAQCEAABLBLQBKBKAACCIAAJVQAAAnhFAAg");
	this.shape_1.setTransform(204.9,69.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,779,131.6);


(lib.logo_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path();
	this.instance.setTransform(276.3,125.5,1,1,0,0,0,6.7,6.8);
	this.instance.alpha = 0.398;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AHzHfQhOhphbgoQhlgtjAgDQjKgDiHhiQiThrgXjBQgRiYgchTQgihohCg5IAxgeQA7A6AkBoQAgBcALB5QAVDRBzBiQB8BoD8gGQCkgEByA4QBjAxBHBnQAPAVAYAOQAYAOAUAAQABAAAAAAQAAAAAAAAQAAABAAAAQAAABgBAAQgCAEACACIgSAqQg9gMglgzg");
	this.shape.setTransform(120.2,199.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#88CE02").s().p("AD0ArQgFgCgRgFQgOgFgGgEIgagNQgQgGgQAAQgZADhVAXQgvANgzgMQhHgUgcgGQgugJg7ADIAFgxQBEAcCmAlQAlAJBVg2QAkgWAtALQApAKAZAbQAdAhgBAKQAAAFgGAAQgGAAgMgFg");
	this.shape_1.setTransform(239.9,64.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1.6,0,1).p("AjwgwQAiAXBTAZQA/AQAqAIQAUAFArgXQAXgKAkgVQAdgOAgAEQArAFApAjQAGAGgVAbQgNgDgRgHQgagPgdADQgcADhQAWQguANg0gMQhJgTgbgGQgtgKg3AC");
	this.shape_2.setTransform(239.4,63.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#88CE02").s().p("Ag1ArQhJgUgbgGQgtgKg3ADIARg5QAiAWBTAZQA/ARAqAHQAUAFArgXQAXgKAkgVQAdgNAgADQArAGApAjQAGAGgVAaQgNgDgRgHQgagPgdADQgcAEhQAWQgZAGgYAAQgYAAgZgFg");
	this.shape_3.setTransform(239,63.7);

	this.instance_1 = new lib.Path_4();
	this.instance_1.setTransform(231.1,50,1,1,0,0,0,17.1,6.9);
	this.instance_1.alpha = 0.398;

	this.instance_2 = new lib.Path_5();
	this.instance_2.setTransform(235.7,226.1,1,1,0,0,0,11.7,38.8);
	this.instance_2.alpha = 0.398;

	this.instance_3 = new lib.Path_6();
	this.instance_3.setTransform(202,124.2,1,1,0,0,0,15.4,38.3);
	this.instance_3.alpha = 0.398;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AnKDDQDbiIF7izQC/haCSg/IAFAJQAEAMgFAMQgNAnhbAdQhnAglQCwQlICshdBCg");
	this.shape_4.setTransform(90.1,131.9);

	this.instance_4 = new lib.Path_8();
	this.instance_4.setTransform(161.7,220.2,1,1,0,0,0,33,38);
	this.instance_4.alpha = 0.398;

	this.instance_5 = new lib.Path_9();
	this.instance_5.setTransform(101.2,146.9,1,1,0,0,0,41.6,44.5);
	this.instance_5.alpha = 0.398;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EFEFEF").s().p("AgsBoQgKgFACgHQABgIgLgIQgwgigNgXQgSgeAQg0QABgJAPgOIAkgeQAvgDAmAMQAsANAcAdIAiAgQASATgDAMQAAAGgWAbIgPARIgQAQIgrAgQgHAIgNAJQgJAEgJAAQgSAAgZgNg");
	this.shape_5.setTransform(197.2,162.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("ABGAtQgHgIgjgXQgigXgSgHQgSgHgSgLQgTgLAAgDQAAgDAIAAIAIABIA3AbQAxAXAVAXQAUAVgCAGQgBAAAAABQAAAAAAAAQgBAAAAABQAAAAgBAAQgDAAgEgHg");
	this.shape_6.setTransform(266.4,71.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgsATQg2gFgegOQgggMAHgGQADgDAKAAQArAXBDAEQAZABA6gDIAxgFQArgGACABQAHABABAFQgHAEgRAEQggAKgsACIgtACQgbAAgbgDg");
	this.shape_7.setTransform(204.9,64.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EFEFEF").s().p("AhJCUQgxgYgNgSQgQgVAJgoQAGgcApgiQAcgZA1gkIgrAKQgTAEADgQQAFgfAPgQQAXgZACgDQgHgHA+ADQBBADAMALIAAACQABAIALAhQAJAagFAKQgCAGgIgFQgNgJgFgCQAOBVAhBOQAbA8hMAOIghAAQhBAAhBgNg");
	this.shape_8.setTransform(179.3,335);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EFEFEF").s().p("AhNEWQgxgJgXgMQADgYAPjqQALikAmh2QBzAjB1AMQgPBfglBXQgUAxgmBRQgMAkgEBZQgDBOgDABQgRAEgTAAQgaAAghgGg");
	this.shape_9.setTransform(189.9,288.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhzAvQhogcghgQIgLgJIgIhAQADANBXAoQBfArA9ALQA4ALBygGQBggEAfgHIgEAcQg2AJhMACIgsABQh4AAhZgYg");
	this.shape_10.setTransform(236.2,147.9);

	this.instance_6 = new lib.Path_18();
	this.instance_6.setTransform(242.2,286.3,1,1,0,0,0,19.8,3.6);
	this.instance_6.alpha = 0.301;

	this.instance_7 = new lib.Path_19();
	this.instance_7.setTransform(243.3,275.9,1,1,0,0,0,21.8,4.4);
	this.instance_7.alpha = 0.301;

	this.instance_8 = new lib.Path_20();
	this.instance_8.setTransform(292.4,340.5,1,1,0,0,0,9.6,7.1);
	this.instance_8.alpha = 0.301;

	this.instance_9 = new lib.Path_21();
	this.instance_9.setTransform(234.3,336.3,1,1,0,0,0,8.6,8);
	this.instance_9.alpha = 0.301;

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#88CE02").s().p("ADaGPQgkgChkgQQhPgMhKgCIiZgCQhSgBgOgqQgKghAfg+QAYgzADgjQADgbgIhhQgGhIgchDQgnhdgDgLQgniVARgYQABgBAWAIQAiAMA6ADQCCAFCCgZQAWgFgCANQgCAIgIAZIgaC3QgIAtABB3QAABsAFAuQABAJBKAoQBaAwAWARQAdAXBOAbQBRAaAKAIQAWAPgNAPQgOAPgwAIQggAEggAAIgggBg");
	this.shape_11.setTransform(260.2,305.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("ADwGVQhHgCh/gOQh0gNgsAAQhuAAgWgBQg/gEgLgRQgNgSALgoQALgkAVgfQATgZACgfIgChQQgCg6gXhMIgriFQgzidAjhJIAVAGQAcAIAmAEQB5ANClgZIggDVQgdDrAWB2IAwAkQBRAwCgA7IA5AVQA4AdgDAkQABADgQACQgWADguAAIgzAAg");
	this.shape_12.setTransform(260.8,302.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EFEFEF").s().p("AhLDdQgOgEgOgKQghgxgGg9QgCgVgGgeQgFgagBgRIgChPIAKhiQACgTAegOQAogUBLAAQBDAAAtATQAiAOAGASQAMA8gFA6IgEAvQgCAlgDAQQgBAQgFAcIgMA4QgEAZgSAZQgSAZgRAEQgbAHgvAAQgqAAghgHg");
	this.shape_13.setTransform(231,27.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#001423").s().p("AADAJQgPgKgQgPIAcAOQAPAIAOALQgPAAgLgIg");
	this.shape_14.setTransform(190.3,173.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AF/BcQhxhEiSgHQh8gHiVAmQgkAIgOABQgcADgagIQg4gTgugdQgpgYgWgaQgNgRgDgQIgCgOIAxAkQA3AnAeARQAmARAjgBQAmAABRgUQB2gcB6ABQBbAABnArQAsAVAMABQAhADAEgvIAOAcQALAhgKAQQgJANgRAJQgLAGgHAAIgFgCg");
	this.shape_15.setTransform(238.2,95.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EFEFEF").s().p("AAeGJIiDhKQiehagehIQgZg/gCghQgCgkAXgZQAugzAXhbQAUhOAhgVQArgbArAUQAgAQAdAoQgMgugkgeQgigVAAgDQAAhCA4gyQAzguBGgNQAygJAfAAQAgAAAeALQAfALAgAFQAuAJgFBOQgEBLgrBHQgBABgMgSQgMgTgCABQgUAlgIAMQgEBDgiBCQgoBKg9AWQgRAGgSgCQgSgBgQgKQgmgYgpgOQA3AqAcAkQAfAnAYA4QAdBHAYArQAqBJA8A/QgRAagMAOQgVAWgVAKQgsgnhLgtg");
	this.shape_16.setTransform(169.9,111.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAXGdIiFhAQiehNgshlQgZg6gHgbQgMgyAUgWQAmgmANgYQASgfAThGQAWhRAuggQAXgPArgHQAEhSA8g3QAygxBNgPQBVgRBDARQA/AQAgAsQAgAtgIA9QgIBBg1BGQAMBvhEBNQgvA4hCAXQARAZAMAjIAUA9QAfBXBNBbQgNAhgjAhQgnAlglAKQgygqhOgog");
	this.shape_17.setTransform(165.4,110.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AibHDQhhgYAQg5QAHgZAWgoQAUgmACgHQADgbAFgVQAJgnAWgXQAUhDAAhTQABghgHhqQgJhaAEhQQAGhoAcg0QAmAZBBAVQBvAkCAgHQgHA+gHAaQgUBKg6BVQgjAzgYBRQgbBWgGBnQABARAHAgQADAdgPAaQAFAQAVAmIAfA6QAQAggLAQQgQAWhIACIgXAAQhfAAg+gPg");
	this.shape_18.setTransform(185.8,304.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAGAlQhhgNg/ADIgzAAQg+gIgUgUQgTgXAagcIJAAwQAEAcgrAPQgiANg1ACQgjgCiBgPg");
	this.shape_19.setTransform(262.3,341);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("ABbArQjBgVg4ABQiiADgngbIABgXIABgWIAWgFIK3A4IgCAlQg5AKhGAAQhBAAhLgJg");
	this.shape_20.setTransform(262.7,341.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AARBPQiVgCglhCIgIgyIAOgUQAPgTAEAAQATABBuAjQByAkA6AHIALADIAKAEIgGAzQgFAFgWAGQglAJhHAAIgUAAg");
	this.shape_21.setTransform(179.5,346.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgZCRQgNgBgRgFQghgJgVgWQgEgNAIgLQgrglgMgYQgSgkAOgoQACgLAtghIBBgvQA0ADAyAPQAeALANALQAIAHAOASIAlAlQAXAZgFASQgDAKgIAIIgSAQQgzA3gKAGIgyAjQgRAIgLADQgIADgLAAIgIAAg");
	this.shape_22.setTransform(197.6,163.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EFEFEF").s().p("Ak1J2QgQjSAmhgQAQgrAkgwIBNhiQgkh1ADhxQAEjYBzkyQC8gpBzBhQBCA4ASBBQgXAZgaBaQgPAzgaBjQgaBrgtBIQg4BdhiBCQAAAogVAiQgNATgdAdQgYAcgIAmQAMgPAOgLQANgLAAAEQgDBwgSA6QgQA0g5Bag");
	this.shape_23.setTransform(211,225.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AlQJxQgCgHgCgdQgEg5AAhpQAAhsAvhNQAQgaAfglQAngwAMgQQgsivAvjUQAVhfBaj/QDIgtCHBnQBEAzAbA8QgTBFgYCjQgSB6gjBMQgqBbhLBDQgmAigdAQQgCAigTAeQgLAPgOAQQAHBLgRBKQgRBDgvBNQgXAngTAZg");
	this.shape_24.setTransform(208,227.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#EFEFEF").s().p("AjPB3QglgoghgzIgagoIARhJQAKgtAMgbIAIhFQEIgBEDAZQAFAlgJAhQABA7AOA9QADATAOA3QAJAmAAAWQAABNheARQghAGg7ABIhjABQgRADgPAAQheAAhkhsg");
	this.shape_25.setTransform(235.7,168.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AjVBgQgygogxgyIgngpIAShDQANgyAKgbQAEgJACgKQALgQE4AbQCcANCbARIAEBcQAAAKAIAqQAJApABAPQgXAnhEArQhZA3h1AWQgRADgSAAQhhAAiIhtg");
	this.shape_26.setTransform(233.5,170.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EFEFEF").s().p("ABBGmQiZgNhpgFQgYhegJhfQAngTAdggQgtAHgagDQgXgDgdgQQgagOgqgqQgogmgagiQgJAOgMAQQgaAigeABQgKgNAfgzQAegygHgNQgghCAkirIApifQAtAOAxAEQBMAEBJgGQBpgIA7ACQBlAGA8AjQA0gQA2ADQAOABAYANQAcAOAMADQBHASAtBdQAwBhgcBiQgCAEgUAAQgaAAgRAGQAPBSglBPQgmBKgOA1QgZBaAFBwQhrgFiagLg");
	this.shape_27.setTransform(230.4,107.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#EFEFEF").s().p("AhJLeQgDgxgJg+QgSh8gbhBIgvhXQgeg3gCgvQgEg5Ajg5QAphEBFADQgChOgUg/IgshxQhEiogRkfIGFhcIAcCrQARBrAEBMQAKDXhYBhQANA7gLA3QgHApgPAnQgNAfgKA1QgEAVgIA6QgTB8gFA+QgFA2gJDQg");
	this.shape_28.setTransform(247.9,245.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AhOLUQgDgxgJg+QgSh8gbhBQgFgLg/haQgyhGACgvQAEg2ATgjQAagwBHg4QACgjgQg4QgXhJgNgwQg1jFALkDIGphGIARBKQATBbAIBVQAaEShdB2QAJAugHAtQgIAvgXApIgNA7QgIAjgDAYIgvDaQgeCEgHCig");
	this.shape_29.setTransform(248.4,246.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("ABCG7QjUgdiKACIAGhEIAGAAIgOhTQgHgngHgfQhJgvgsgnQhBg4guhGQgqhEBOjKQAZhAAihFIAdg4IBGATQBTAUA9gEQBpgJBLAEQBxAGA7AjIA5gOQBDgKA1AOQBPAVBFBbQBQBrggBpQgDAIgSALQgSAKgWAIIAEApQABAwgSAjQgqBSgOAlQgkBegBBeQgHBOgDAWQg1gBjvghg");
	this.shape_30.setTransform(230.5,111.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#88CE02").s().p("AhCAOIgpgdQANgKgFgCQAXgNAOAAQAWgBAJAaQAegLAPALIAcAcQAlgPAQAKQAHAFAFAUQgrACgmAFIgPABQgjAAgqgbg");
	this.shape_31.setTransform(270,70.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AhDAoQglgfAAABQAAgVgCgUQAAgCgIgHQgIgHAAgDIgFgEIAUgHQAWgHAPAGQARAFAOAUQAHAKADAIQAdgLAPAJQADACAYAZQAigGAQAMQAIAGAcApQgJgCgSAAQglAAgsAIIgOABQgjAAgmgag");
	this.shape_32.setTransform(270.6,68.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#88CE02").s().p("AklA+QArg+BJgWQAbgKAUADQARACAXAPQgJgQgLgMQARgIAagRQAWgMATAEQAWAEAXARQAUAOAQASQgJgZgRgSQAKgHAUgQQATgMASABQBVAHAtAsQAMALATAXQATAQAUAHIi0ApQhtAYhoAOQhFAIgtAAQhdAAALgkg");
	this.shape_33.setTransform(192.1,65.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AkuA0QArg6A+gUQATgHAWgBQAVgBAKAFQAOgGASgMIAhgVQAQgJAdAIQASAFAOAJQASgKAcgVQAYgOAWAGQA6AQAyAhQAyAhAlAuIixApQhyARhtAFQgkABgdAAQiaABANgug");
	this.shape_34.setTransform(190.8,63);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#EFEFEF").s().p("AhDH0QgYgGgagQIg+gmQgUgLABgSQAFgUAAgKQACgKAIgIQAMgYAWgVIASgSQAXgSAYACQAdABAbgFQAagFAGgIQAAgWgKgVIgZgjQgggvAQhGQAFgPAogFQgugKgMgEQgZgJgXgWQgnghgKg1QgHgngNi2IgMiuIAZgKQAfgMAegFQBggQA1A1QA6A5ADBJQACAygbBBQAcAhAOAnQAWA9gVA6QgCAHgeARQghARgSAfQA8gjAnAHQAlAHAOAtQAUA/ghBQQgbBBgyA3IgCgGQgMAugIASQgUAxgnAqQgVAWgVADIgHABQgPAAgYgGg");
	this.shape_35.setTransform(283.3,126.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AA2GQQgrg2hFgFQABgMgPgSQgVgVgKgOQgogzAeg/QgzgMgSgmQgFgMgOhLQgGgmAPjdIARjVIAWgEQAagDAbACQBXAGA0A0QA1AyAPBGQAPBGgcBDQAgAnAJAyQAIAwgQAwQBfBRgWB5QgTBthjBfQgHgbgVgbg");
	this.shape_36.setTransform(286.6,118.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAoCCIgNgYQgDgDgJgFQgKgFgDgDIgDgLQgDgJgGgEQgFgFgGAAQgIgBgDgCQgFgFgEgIQgFgJgDgDQgCgCgKgDQgKgDgCgCQgCgCgzgSQgtgPACgMQAIgdAQgYIAZgcQAdgcAYABIA3AEQAaAAANgMQATgRA/AtQBAAvgEAtQgJAdgTAlQgnBIgvAbQgJgEgGgLg");
	this.shape_37.setTransform(278.5,165.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("ACqCLQALgogBgnQgBgWgFgPQgCgIAEgHQAKgNAAgIQABgQgYgOQgUgLgyAMQhEASgZAAQgagBhDgRQgxgMgVALQgXAOABAQQAAAIAKANQADAGgCAIQgEAQgBAWQgBApALAmIgSAAQgMhtgCgjQgEgxAGgHQAogqAYgMQAugXBZAAQBaABAwAXQAhARAfApQAEAGgEAwIgOCNg");
	this.shape_38.setTransform(231,17);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AhKDLQgQgEgMgIIgtgjQgjgaAAgTQANhzgRh3QgDgNAGgQQAMgfAwgJQBAgNA7gDQA+ABA+APQAwAJAMAfQAGAQgDANQgRB3ANBzQAAATgjAaIgnAeQgUAOgOADQgkAGgnAAQgkAAgmgGg");
	this.shape_39.setTransform(230.9,29.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAyBkIgxgBQgxAAgKgBQgfgCgNgLQgQgOgbgbIgsgsQAEgZACgdIACgYQAlgVCiAAQCkAAACAVQACARAEBFQgVAYgeAZQgfAbgYALQgIAFgVAAIgFAAg");
	this.shape_40.setTransform(230.6,42.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#EFEFEF").s().p("AiiB3QgNhBgpg2QglgqABgGQAGghACgeQAEgkACgsIAAgkQAlgWCJAFQCHAEADAXQAEAaAEAyQAFA3ACAoQABAdgDAiQABAXATAIQBMAeBHAvQhaBjh2ATQgUADgSAAQhxAAg5h/g");
	this.shape_41.setTransform(238.3,57.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAGDSQh4gMhYgvQhlg1gehWQATgHAzgLQAlgKABgHQAQhUAHhVQAlgVCkAAQCjAAADAVQAEAfAGChQABApADAHQAEAIAWAJQBEAeA9AnQgZAthgAVQg9AOhGAAQglAAgngEg");
	this.shape_42.setTransform(232.7,54.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAMCOQg3gFhHgoQgXgMgSgmQgQghACgQQAAgsAggcIAVgbQAagbAYABQA3ADAMAAQArgBANgMQAQgSAxAlQA0AngDAuQgKAhgTAkQgnBNgwAbQgJAEgPAAIgTgCg");
	this.shape_43.setTransform(278.3,166.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#88CE02").s().p("AuBDCQBwh5C3hvQF7jpHyiWQBPgYFMhaQD4hDCcg3QAJAsAIBGQALBaAJA8Qi4BHjlBJIm5CJQnOCPmJDeQlsDNi0DIQAnkDC+jNg");
	this.shape_44.setTransform(117.8,117.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#88CE02").s().p("AC1MAQiLiGjyAFQj/AGh7hoQhzhhgVjUQgZkChuhvQiKiKj0CMQBFiAEIiTQCvhhDLhOQDKhODxhNQCFgrDmhGQC4g6BmgtQCBg5BOhDQBJgaByBXQByBWBMCLQBWCdgLCTQgNCsiUB4QiUB4gSARQhqBdhRB3QjgFEh9JkQhcjjhfhcg");
	this.shape_45.setTransform(148.8,159.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("ACnGtQiBgOgbAAQh0AChDgCQh8gEgigXQgmgbgCgyIAGgtQAZhEAIgfQAThLgHg0QgJg3gOguQgKgjgahAQgYg7gLhlQgKhnAUgIQARgGAJAEIAfAKQBMAVBRgBQBkAABggSQAdgGAIAGQAOAJgGAqQgFAggUBeQgRBbgBA4QgEC9AIAZQADALAdASIA0AgQBLA3BZAkIB3AwQAxAagPAkQgRAnhMANQgXAEghAAQgpAAg5gGg");
	this.shape_46.setTransform(260.7,304.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AiuDIQgLgNgKg+IgIg8QgJg4AHhZQAGhYANgTQASgZA2gPQAzgOA/gBQCTgBAqA8QAcAqgKCHIgLBuQgIBPgBAVQgBALgwALQgwAMg9ADQgaACgVAAQh4AAgkgrg");
	this.shape_47.setTransform(230.9,24.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AiBGwQg1gRgegcQgXgWgDgpQgCgsAWgpIAbgsQAOgXAGgbQAIglATggQAGgLACgVQACgYAChHIACi+QACiAAGgwQAGgzCxAnQBaATBYAeIgtBuIg9CUQgOAhgFA/QgBAYAAAvQAAARgFAWQgFAXgFABQgBABAIAgQAIAjgHASQgFARALAvIAPA2QANBRgUAVQgRAThZALQgVADgWAAQg0AAgwgPg");
	this.shape_48.setTransform(184.4,311.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("As2J8QgNgEgDgeQgGhDAph8QAlhwBTh4QBgiICGhuQBLg9ClhfQB3hFCVhNQA5geDThOQEdhpDhg1QAQgFgZAfQgiArgEAOQghBhoeFyQkNC4kICmIgjASQhKAjihB+QiaB5grA0QgQAUgMAAIgFgBg");
	this.shape_49.setTransform(84,127.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.instance_5},{t:this.instance_4},{t:this.shape_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,307.1,355.9);


// stage content:
(lib.GSAP_Basic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var tl = new TimelineMax({repeat:3, repeatDelay:1});
		
		tl.from(this.logo_mc, 0.5, {scaleX:0, scaleY:0, alpha:0, ease:Back.easeOut})
		  .from(this.GreenSock_mc, 0.4, {y:"+=70", alpha:0, ease:Back.easeOut}, "-=0.3")
		  .from(this.subtitle_mc, 0.5, {alpha:0}, "+=0.3")
		
		
		console.log(TweenLite.version);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// logo
	this.logo_mc = new lib.logo_mc();
	this.logo_mc.setTransform(265.5,123,0.54,0.54,0,0,0,160.3,175);

	this.timeline.addTween(cjs.Tween.get(this.logo_mc).wait(1));

	// GreenSock
	this.GreenSock_mc = new lib.greensock_mc();
	this.GreenSock_mc.setTransform(274,248,0.311,0.311,0,0,0,389.6,65.8);

	this.timeline.addTween(cjs.Tween.get(this.GreenSock_mc).wait(1));

	// subtitle
	this.subtitle_mc = new lib.subtitle();
	this.subtitle_mc.setTransform(275.6,372.1);

	this.timeline.addTween(cjs.Tween.get(this.subtitle_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#252525","#000000"],[0,1],0,24.1,0,0,24.1,340.1).s().p("Egq9AfQMAAAg+fMBV6AAAMAAAA+fg");
	this.shape.setTransform(275,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(275,200,550,400.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;