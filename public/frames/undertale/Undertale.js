(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Undertale_atlas_1", frames: [[1372,630,403,614],[1372,0,402,628],[1372,1246,404,612],[918,0,404,616],[0,0,457,948],[0,950,457,948],[459,0,457,929],[459,931,455,930],[916,931,454,930]]},
		{name:"Undertale_atlas_2", frames: [[1881,592,154,152],[1725,592,154,154],[1380,584,180,213],[1562,592,161,228],[1210,584,168,235],[403,0,402,608],[0,0,401,614],[1603,0,362,590],[807,0,401,605],[1210,0,391,582]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Firstloca = function() {
	this.initialize(img.Firstloca);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3698,1378);


(lib.flowerloca = function() {
	this.initialize(img.flowerloca);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2208,2894);


(lib.Flowey1 = function() {
	this.initialize(ss["Undertale_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Flowey2 = function() {
	this.initialize(ss["Undertale_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Flowey3 = function() {
	this.initialize(ss["Undertale_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Flowey4 = function() {
	this.initialize(ss["Undertale_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Flowey5 = function() {
	this.initialize(ss["Undertale_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.FriskDown = function() {
	this.initialize(ss["Undertale_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.FriskDownL1 = function() {
	this.initialize(ss["Undertale_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.FriskDownR1 = function() {
	this.initialize(ss["Undertale_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.FriskRight = function() {
	this.initialize(ss["Undertale_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.FriskRightStep = function() {
	this.initialize(ss["Undertale_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.FriskUp = function() {
	this.initialize(ss["Undertale_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.FriskUpL1 = function() {
	this.initialize(ss["Undertale_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.FriskUpR1 = function() {
	this.initialize(ss["Undertale_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.TorielBullet3 = function() {
	this.initialize(ss["Undertale_atlas_2"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.TorielDown = function() {
	this.initialize(ss["Undertale_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.TorielDownOpen = function() {
	this.initialize(ss["Undertale_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.TorielUp = function() {
	this.initialize(ss["Undertale_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.TorielUpL1 = function() {
	this.initialize(ss["Undertale_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.TorielUpR1 = function() {
	this.initialize(ss["Undertale_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.Символ19 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.flowerloca();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(0,0,2208,2894), null);


(lib.Символ18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.FriskUp();
	this.instance.setTransform(0,0,0.2389,0.2389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(0,0,96.6,146.3), null);


(lib.Символ17 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.FriskUpR1();
	this.instance.setTransform(0,0,0.2421,0.2421);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(0,0,97.8,149.2), null);


(lib.Символ16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.TorielUpR1();
	this.instance.setTransform(0,0,0.2694,0.2694);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(0,0,122.3,250.5), null);


(lib.Символ15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.TorielUp();
	this.instance.setTransform(0,0,0.2602,0.2602);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(0,0,118.9,241.7), null);


(lib.Символ14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.TorielUpL1();
	this.instance.setTransform(0,0,0.2663,0.2663);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(0,0,121.2,247.7), null);


(lib.Символ13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Flowey5();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(0,0,168,235), null);


(lib.Символ12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Flowey4();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(0,0,161,228), null);


(lib.Символ11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Flowey3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(0,0,180,213), null);


(lib.Символ10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Flowey2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(0,0,154,154), null);


(lib.Символ9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.FriskUpR1();
	this.instance.setTransform(0,0,0.2625,0.2625);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(0,0,106.1,161.7), null);


(lib.Символ8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.FriskUpL1();
	this.instance.setTransform(0,0,0.2545,0.2545);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(0,0,102.1,154), null);


(lib.Символ7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.FriskRight();
	this.instance.setTransform(0,0,0.2553,0.2553);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(0,0,102.7,160.4), null);


(lib.Символ6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.FriskRightStep();
	this.instance.setTransform(0,0,0.2667,0.2667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(0,0,96.6,157.4), null);


(lib.Символ5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.FriskRight();
	this.instance.setTransform(0,0,0.2553,0.2553);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(0,0,102.7,160.4), null);


(lib.Символ4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.FriskRightStep();
	this.instance.setTransform(0,0,0.2773,0.2773);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(0,0,100.4,163.6), null);


(lib.Символ3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.FriskDownR1();
	this.instance.setTransform(0,0,0.2474,0.2474);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,99.2,151.9), null);


(lib.Символ2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.FriskDownL1();
	this.instance.setTransform(0,0,0.2608,0.2608);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,105.1,160.2), null);


(lib.Анимация19 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.TorielDown();
	this.instance.setTransform(-62.45,-129.55,0.2733,0.2733);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.4,-129.5,124.9,259.1);


(lib.Анимация18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.TorielDown();
	this.instance.setTransform(-62.45,-129.6,0.2733,0.2733);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.4,-129.6,124.9,259.2);


(lib.Анимация12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.TorielBullet3();
	this.instance.setTransform(-32.8,-48.85,0.1679,0.1679);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.8,-48.8,65.69999999999999,97.69999999999999);


(lib.Анимация10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Firstloca();
	this.instance.setTransform(-1849,-689);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1849,-689,3698,1378);


(lib.Анимация9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Firstloca();
	this.instance.setTransform(-1849,-689);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1849,-689,3698,1378);


// stage content:
(lib.Undertale = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_68
	this.instance = new lib.Символ18();
	this.instance.setTransform(996.35,383.4,1,1,0,0,0,48.2,73.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(458).to({_off:false},0).wait(22));

	// Слой_67
	this.instance_1 = new lib.FriskUpL1();
	this.instance_1.setTransform(951,318,0.2369,0.2369);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(452).to({_off:false},0).to({_off:true},6).wait(22));

	// Слой_66
	this.instance_2 = new lib.Символ18();
	this.instance_2.setTransform(997.7,388.3,1,1,0,0,0,48.2,73.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(447).to({_off:false},0).to({_off:true},5).wait(28));

	// Слой_64
	this.instance_3 = new lib.Символ17();
	this.instance_3.setTransform(997.9,390.1,1,0.9886,0,0,0,48.9,74.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(439).to({_off:false},0).to({_off:true},8).wait(33));

	// Слой_63
	this.instance_4 = new lib.Символ18();
	this.instance_4.setTransform(997.35,390.75,1,1,0,0,0,48.2,73.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(431).to({_off:false},0).to({_off:true},8).wait(41));

	// Слой_62
	this.instance_5 = new lib.FriskUpL1();
	this.instance_5.setTransform(950,321,0.2369,0.2369);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(423).to({_off:false},0).to({_off:true},8).wait(49));

	// Слой_61
	this.instance_6 = new lib.Символ18();
	this.instance_6.setTransform(997.2,458.1,1,1,0,0,0,48.2,73.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(418).to({_off:false},0).wait(1).to({regX:48.3,x:997.3,y:442.1},0).wait(1).to({y:426.1},0).wait(1).to({y:410.1},0).wait(1).to({y:394.1},0).to({_off:true},1).wait(57));

	// Слой_60
	this.instance_7 = new lib.Символ17();
	this.instance_7.setTransform(996.9,568.5,1,1,0,0,0,48.9,74.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(410).to({_off:false},0).wait(1).to({regY:74.6,y:554.85},0).wait(1).to({y:541.15},0).wait(1).to({y:527.45},0).wait(1).to({y:513.7},0).wait(1).to({y:500},0).wait(1).to({y:486.3},0).wait(1).to({y:472.6},0).to({_off:true},1).wait(62));

	// Слой_59
	this.instance_8 = new lib.Символ16();
	this.instance_8.setTransform(994.1,46.2,1,1,0,0,0,61.1,125.2);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(397).to({_off:false},0).wait(1).to({regY:125.3,y:22.15},0).wait(1).to({y:-2},0).wait(1).to({y:-26.2},0).wait(1).to({y:-50.35},0).wait(1).to({y:-74.5},0).wait(1).to({y:-98.7},0).wait(1).to({y:-122.85},0).wait(1).to({y:-147},0).wait(1).to({y:-171.2},0).wait(1).to({y:-195.35},0).wait(1).to({y:-219.5},0).wait(1).to({y:-243.7},0).to({_off:true},1).wait(70));

	// Слой_58
	this.instance_9 = new lib.Символ15();
	this.instance_9.setTransform(994.5,152.9,1,1,0,0,0,59.5,120.9);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(392).to({_off:false},0).wait(1).to({y:130.8},0).wait(1).to({y:108.75},0).wait(1).to({y:86.65},0).wait(1).to({y:64.55},0).to({_off:true},1).wait(83));

	// Слой_57
	this.instance_10 = new lib.Символ14();
	this.instance_10.setTransform(995.6,315.85,1,1,0,0,0,60.6,123.8);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(384).to({_off:false},0).wait(1).to({y:295.7},0).wait(1).to({y:275.55},0).wait(1).to({y:255.4},0).wait(1).to({y:235.3},0).wait(1).to({y:215.15},0).wait(1).to({y:195},0).wait(1).to({y:174.9},0).to({_off:true},1).wait(88));

	// Слой_56
	this.instance_11 = new lib.TorielDown();
	this.instance_11.setTransform(934,238,0.2762,0.2772);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(367).to({_off:false},0).to({_off:true},17).wait(96));

	// Слой_54
	this.instance_12 = new lib.TorielDownOpen();
	this.instance_12.setTransform(935,241,0.275,0.2745);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(359).to({_off:false},0).to({_off:true},8).wait(113));

	// Слой_52
	this.instance_13 = new lib.TorielDown();
	this.instance_13.setTransform(935,240,0.2762,0.2772);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(351).to({_off:false},0).to({_off:true},8).wait(121));

	// Слой_51
	this.instance_14 = new lib.TorielDownOpen();
	this.instance_14.setTransform(934,242,0.275,0.2745);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(343).to({_off:false},0).to({_off:true},8).wait(129));

	// Слой_48
	this.instance_15 = new lib.Анимация18("synched",0);
	this.instance_15.setTransform(994.8,-126.4);
	this.instance_15._off = true;

	this.instance_16 = new lib.Анимация19("synched",0);
	this.instance_16.setTransform(996.45,374.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_15}]},295).to({state:[{t:this.instance_16}]},47).to({state:[]},1).wait(137));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(295).to({_off:false},0).to({_off:true,guide:{path:[994.8,-126.3,994.8,-126.3,994.8,-126.3,995.1,-125.8,995.3,-125.2,995.3,-124.6,995.3,-124,995.3,-123.4,995.3,-122.9,995.3,-122.3,995.3,-121.7,995.3,-121.1,995.3,-120.6,995.3,-120,995.3,-119.4,995.3,-118.8,995.3,-118.3,995.3,-117.7,995.3,-117.1,995.3,-116.5,995.3,-116,995.3,-115.4,995.3,-114.8,995.3,-114.2,995.3,-113.7,995.3,-113.1,995.3,-112.5,995.3,-111.9,995.3,-111.3,995.3,-110.8,995.3,-110.2,995.3,-109.6,995.3,-109,995.3,-108.5,995.3,-107.9,995.3,-107.3,995.3,-106.7,995.3,-106.2,995.3,-105.6,995.3,-105,995.3,-104.4,995.3,-103.9,995.3,-103.3,995.3,-102.7,995.3,-102.1,995.3,-101.5,995.3,-101,995.3,-100.4,995.3,-99.8,995.3,-99.2,995.3,-98.7,995.3,-98.1,995.3,-97.5,995.3,-96.9,995.3,-96.4,995.3,-95.8,995.3,-95.2,995.3,-94.6,995.3,-94.1,995.3,-93.5,995.3,-92.9,995.3,-92.3,995.3,-91.7,995.3,-91.2,995.3,-90.6,995.3,-90,995.3,-89.4,995.3,-88.9,995.3,-88.3,995.3,-87.7,995.3,-87.1,995.3,-86.6,995.3,-86,995.3,-85.4,995.3,-84.8,995.3,-84.3,995.3,-83.7,995.3,-83.1,995.3,-82.5,995.3,-82,995.3,-81.4,995.3,-80.8,995.3,-80.2,995.3,-79.6,995.3,-79.1,995.3,-78.5,995.3,-77.9,995.3,-77.3,995.3,-76.8,995.3,-76.2,995.3,-75.6,995.3,-75,995.3,-74.5,995.3,-73.9,995.3,-73.3,995.3,-72.7,995.3,-72.2,995.3,-71.6,995.3,-71,995.3,-70.4,995.3,-69.8,995.3,-69.3,995.3,-68.7,995.3,-68.1,995.3,-67.5,995.3,-67,995.3,-66.4,995.3,-65.8,995.3,-65.2,995.3,-64.7,995.3,-64.1,995.3,-63.5,995.3,-62.9,995.3,-62.4,995.3,-61.8,995.3,-61.2,995.3,-60.6,995.3,-60,995.3,-59.5,995.3,-58.9,995.3,-58.3,995.3,-57.7,995.3,-57.2,995.3,-56.6,995.3,-56,995.3,-55.4,995.3,-54.9,995.3,-54.3,995.3,-53.7,995.3,-53.1,995.3,-52.6,995.3,-52,995.3,-51.4,995.3,-50.8,995.3,-50.3,995.3,-49.7,995.3,-49.1,995.3,-48.5,995.3,-47.9,995.3,-47.4,995.3,-46.8,995.3,-46.2,995.3,-45.6,995.3,-45.1,995.3,-44.5,995.3,-43.9,995.3,-43.3,995.3,-42.8,995.3,-42.2,995.3,-41.6,995.3,-41,995.3,-40.5,995.3,-39.9,995.3,-39.3,995.3,-38.7,995.3,-38.1,995.3,-37.6,995.3,-37,995.3,-36.4,995.3,-35.8,995.3,-35.3,995.3,-34.7,995.3,-34.1,995.3,-33.5,995.3,-33,995.3,-32.4,995.3,-31.8,995.3,-31.2,995.3,-30.7,995.3,-30.1,995.3,-29.5,995.3,-28.9,995.3,-28.3,995.3,-27.8,995.3,-27.2,995.3,-26.6,995.3,-26,995.3,-25.5,995.3,-24.9,995.3,-24.3,995.3,-23.7,995.3,-23.2,995.3,-22.6,995.3,-22,995.3,-21.4,995.3,-20.9,995.3,-20.3,995.3,-19.7,995.3,-19.1,995.3,-18.6,995.3,-18,995.3,-17.4,995.3,-16.8,995.3,-16.2,995.3,-15.7,995.3,-15.1,995.3,-14.5,995.3,-13.9,995.3,-13.4,995.3,-12.8,995.3,-12.2,995.3,-11.6,995.3,-11.1,995.3,-10.5,995.3,-9.9,995.3,-9.3,995.3,-8.8,995.3,-8.2,995.3,-7.6,995.3,-7,995.3,-6.4,995.3,-5.9,995.3,-5.3,995.3,-4.7,995.3,-4.1,995.3,-3.6,995.3,-3,995.3,-2.4,995.3,-1.8,995.3,-1.3,995.3,-0.7,995.3,-0.1,995.3,0.5,995.3,1,995.3,1.6,995.3,2.2,995.3,2.8,995.3,3.4,995.3,3.9,995.3,4.5,995.3,5.1,995.3,5.7,995.3,6.2,995.3,6.8,995.3,7.4,995.3,8,995.3,8.5,995.3,9.1,995.3,9.7,995.3,10.3,995.3,10.8,995.3,11.4,995.3,12,995.3,12.6,995.3,13.1,995.3,13.7,995.3,14.3,995.3,14.9,995.3,15.5,995.3,16,995.3,16.6,995.3,17.2,995.3,17.8,995.3,18.3,995.3,18.9,995.3,19.5,995.3,20.1,995.3,20.6,995.3,21.2,995.3,21.8,995.3,22.4,995.3,22.9,995.3,23.5,995.3,24.1,995.3,24.7,995.3,25.3,995.3,25.8,995.3,26.4,995.3,27,995.3,27.6,995.3,28.1,995.3,28.7,995.3,29.3,995.3,29.9,995.3,30.4,995.3,31,995.3,31.6,995.3,32.2,995.3,32.7,995.3,33.3,995.3,33.9,995.3,34.5,995.3,35.1,995.3,35.6,995.3,36.2,995.3,36.8,995.3,37.4,995.3,37.9,995.3,38.5,995.3,39.1,995.3,39.7,995.3,40.2,995.3,40.8,995.3,41.4,995.3,42,995.3,42.5,995.3,43.1,995.3,43.7,995.3,44.3,995.3,44.8,995.3,45.4,995.3,46,995.3,46.6,995.3,47.2,995.3,47.7,995.3,48.3,995.3,48.9,995.3,49.5,995.3,50,995.3,50.6,995.3,51.2,995.3,51.8,995.3,52.3,995.3,52.9,995.3,53.5,995.3,54.1,995.3,54.6,995.3,55.2,995.3,55.8,995.3,56.4,995.3,57,995.3,57.5,995.3,58.1,995.3,58.7,995.3,59.3,995.3,59.8,995.3,60.4,995.3,61,995.3,61.6,995.3,62.1,995.3,62.7,995.3,63.3,995.3,63.9,995.3,64.4,995.3,65,995.3,65.6,995.3,66.2,995.3,66.8,995.3,67.3,995.3,67.9,995.3,68.5,995.3,69.1,995.3,69.6,995.3,70.2,995.3,70.8,995.3,71.4,995.3,71.9,995.3,72.5,995.3,73.1,995.3,73.7,995.3,74.2,995.3,74.8,995.3,75.4,995.3,76,995.3,76.5,995.3,77.1,995.3,77.7,995.3,78.3,995.3,78.9,995.3,79.4,995.3,80,995.3,80.6,995.3,81.2,995.3,81.7,995.3,82.3,995.3,82.9,995.3,83.5,995.3,84,995.3,84.6,995.3,85.2,995.3,85.8,995.3,86.3,995.3,86.9,995.3,87.5,995.3,88.1,995.3,88.7,995.3,89.2,995.3,89.8,995.3,90.4,995.3,91,995.3,91.5,995.3,92.1,995.3,92.7,995.3,93.3,995.3,93.8,995.3,94.4,995.3,95,995.3,95.6,995.3,96.1,995.3,96.7,995.3,97.3,995.3,97.9,995.3,98.4,995.3,99,995.3,99.6,995.3,100.2,995.3,100.8,995.3,101.3,995.3,101.9,995.3,102.5,995.3,103.1,995.3,103.6,995.3,104.2,995.3,104.8,995.3,105.4,995.3,105.9,995.3,106.5,995.3,107.1,995.3,107.7,995.3,108.2,995.3,108.8,995.3,109.4,995.3,110,995.3,110.6,995.3,111.1,995.3,111.7,995.3,112.3,995.3,112.9,995.3,113.4,995.3,114,995.3,114.6,995.3,115.2,995.3,115.7,995.3,116.3,995.3,116.9,995.3,117.5,995.3,118,995.3,118.6,995.3,119.2,995.3,119.8,995.3,120.4,995.3,120.9,995.3,121.5,995.3,122.1,995.3,122.7,995.3,123.2,995.3,123.8,995.3,124.3,995.3,124.9,995.3,125.4,995.3,126,995.3,126.6,995.3,127.2,995.3,127.7,995.3,128.3,995.3,128.9,995.3,129.5,995.3,130,995.3,130.6,995.3,131.2,995.3,131.8,995.3,132.4,995.3,132.9,995.3,133.5,995.3,134.1,995.3,134.7,995.3,135.2,995.3,135.8,995.3,136.4,995.3,137,995.3,137.5,995.3,138.1,995.3,138.7,995.3,139.3,995.3,139.8,995.3,140.4,995.3,141,995.3,141.6,995.3,142.2,995.3,142.7,995.3,143.3,995.3,143.9,995.3,144.5,995.3,145,995.3,145.6,995.3,146.2,995.3,146.8,995.3,147.3,995.3,147.9,995.3,148.5,995.3,149.1,995.3,149.6,995.3,150.2,995.3,150.8,995.3,151.4,995.3,152,995.3,152.5,995.3,153.1,995.3,153.7,995.3,154.3,995.3,154.8,995.3,155.4,995.3,156,995.3,156.6,995.3,157.1,995.3,157.7,995.3,158.3,995.3,158.9,995.3,159.4,995.3,160,995.3,160.6,995.3,161.2,995.3,161.7,995.3,162.3,995.3,162.9,995.3,163.5,995.3,164.1,995.3,164.6,995.3,165.2,995.3,165.8,995.3,166.4,995.3,166.9,995.3,167.5,995.3,168.1,995.3,168.7,995.3,169.2,995.3,169.8,995.3,170.4,995.3,171,995.3,171.5,995.3,172.1,995.3,172.7,995.3,173.3,995.3,173.9,995.3,174.4,995.3,175,995.3,175.6,995.3,176.2,995.3,176.7,995.3,177.3,995.3,177.9,995.3,178.5,995.3,179,995.3,179.6,995.3,180.2,995.3,180.8,995.3,181.3,995.3,181.9,995.3,182.5,995.3,183.1,995.3,183.7,995.3,184.2,995.3,184.8,995.3,185.4,995.3,186,995.3,186.5,995.3,187.1,995.3,187.7,995.3,188.3,995.3,188.8,995.3,189.4,995.3,190,995.3,190.6,995.3,191.1,995.3,191.7,995.3,192.3,995.3,192.9,995.3,193.4,995.3,194,995.3,194.6,995.3,195.2,995.3,195.8,995.3,196.3,995.3,196.9,995.3,197.5,995.3,198.1,995.3,198.6,995.3,199.2,995.3,199.8,995.3,200.4,995.3,200.9,995.3,201.5,995.3,202.1,995.3,202.7,995.3,203.2,995.3,203.8,995.3,204.4,995.3,205,995.3,205.6,995.3,206.1,995.3,206.7,995.3,207.3,995.3,207.9,995.3,208.4,995.3,209,995.3,209.6,995.3,210.2,995.3,210.7,995.3,211.3,995.3,211.9,995.3,212.5,995.3,213,995.3,213.6,995.3,214.2,995.3,214.8,995.3,215.4,995.3,215.9,995.3,216.5,995.3,217.1,995.3,217.7,995.3,218.2,995.3,218.8,995.3,219.4,995.3,220,995.3,220.5,995.3,221.1,995.3,221.7,995.3,222.3,995.3,222.8,995.3,223.4,995.3,224,995.3,224.6,995.3,225.1,995.3,225.7,995.3,226.3,995.3,226.9,995.3,227.5,995.3,228,995.3,228.6,995.3,229.2,995.3,229.8,995.3,230.3,995.3,230.9,995.3,231.5,995.3,232.1,995.3,232.6,995.3,233.2,995.3,233.8,995.3,234.4,995.3,234.9,995.3,235.5,995.3,236.1,995.3,236.7,995.3,237.3,995.3,237.8,995.3,238.4,995.3,239,995.3,239.6,995.3,240.1,995.3,240.7,995.3,241.3,995.3,241.9,995.3,242.4,995.3,243,995.3,243.6,995.3,244.2,995.3,244.7,995.3,245.3,995.3,245.9,995.3,246.5,995.3,247.1,995.3,247.6,995.3,248.2,995.3,248.8,995.3,249.4,995.3,249.9,995.3,250.5,995.3,251.1,995.3,251.7,995.3,252.2,995.3,252.8,995.3,253.4,995.3,254,995.3,254.5,995.3,255.1,995.3,255.7,995.3,256.3,995.3,256.8,995.3,257.4,995.3,258,995.3,258.6,995.3,259.2,995.3,259.7,995.3,260.3,995.3,260.9,995.3,261.5,995.3,262,995.3,262.6,995.3,263.2,995.3,263.8,995.3,264.3,995.3,264.9,995.3,265.5,995.3,266.1,995.3,266.6,995.3,267.2,995.3,267.8,995.3,268.4,995.3,269,995.3,269.5,995.3,270.1,995.3,270.7,995.3,271.3,995.3,271.8,995.3,272.4,995.3,273,995.3,273.6,995.3,274.1,995.3,274.7,995.3,275.3,995.3,275.9,995.3,276.4,995.3,277,995.3,277.6,995.3,278.2,995.3,278.8,995.3,279.3,995.3,279.9,995.3,280.5,995.3,281.1,995.3,281.6,995.3,282.2,995.3,282.8,995.3,283.4,995.3,283.9,995.3,284.5,995.3,285.1,995.3,285.7,995.3,286.2,995.3,286.8,995.3,287.4,995.3,288,995.3,288.5,995.3,289.1,995.3,289.7,995.3,290.3,995.3,290.9,995.3,291.4,995.3,292,995.3,292.6,995.3,293.2,995.3,293.7,995.3,294.3,995.3,294.9,995.3,295.5,995.3,296,995.3,296.6,995.3,297.2,995.3,297.8,995.3,298.3,995.3,298.9,995.3,299.5,995.3,300.1,995.3,300.7,995.3,301.2,995.3,301.8,995.3,302.4,995.3,303,995.3,303.5,995.3,304.1,995.3,304.7,995.3,305.3,995.3,305.8,995.3,306.4,995.3,307,995.3,307.6,995.3,308.1,995.3,308.7,995.3,309.3,995.3,309.9,995.3,310.5,995.3,311,995.3,311.6,995.3,312.2,995.3,312.8,995.3,313.3,995.3,313.9,995.3,314.5,995.3,315.1,995.3,315.6,995.3,316.2,995.3,316.8,995.3,317.4,995.3,317.9,995.3,318.5,995.3,319.1,995.3,319.7,995.3,320.2,995.3,320.8,995.3,321.4,995.3,322,995.3,322.6,995.3,323.1,995.3,323.7,995.3,324.3,995.3,324.9,995.3,325.4,995.3,326,995.3,326.6,995.3,327.2,995.3,327.7,995.3,328.3,995.3,328.9,995.3,329.5,995.3,330,995.3,330.6,995.3,331.2,995.3,331.8,995.3,332.4,995.3,332.9,995.3,333.5,995.3,334.1,995.3,334.7,995.3,335.2,995.3,335.8,995.3,336.4,995.3,337,995.3,337.5,995.3,338.1,995.3,338.7,995.3,339.3,995.3,339.8,995.3,340.4,995.3,341,995.3,341.6,995.3,342.2,995.3,342.7,995.3,343.3,995.3,343.9,995.3,344.5,995.3,345,995.3,345.6,995.3,346.2,995.3,346.8,995.3,347.3,995.3,347.9,995.3,348.5,995.3,349.1,995.3,349.6,995.3,350.2,995.3,350.8,995.3,351.4,995.3,351.9,995.3,352.5,995.3,353.1,995.3,353.7,995.3,354.3,995.3,354.8,995.3,355.4,995.3,356,995.3,356.6,995.3,357.1,995.3,357.7,995.3,358.3,995.3,358.9,995.3,359.4,995.3,360,995.3,360.6,995.3,361.2,995.3,361.7,995.3,362.3,995.3,362.9,995.3,363.5,995.3,364.1,995.3,364.6,995.3,365.2,995.3,365.8,995.3,366.4,995.3,366.9,995.3,367.5,995.3,368.1,995.3,368.7,995.3,369.2,995.3,369.8,995.3,370.4,995.3,371,995.3,371.5,995.3,372.1,995.3,372.7,995.3,373.3,995.3,373.8,995.3,374.2,995.3,374.5]}},47).wait(138));

	// Слой_44
	this.instance_17 = new lib.Анимация12("synched",0);
	this.instance_17.setTransform(1603.8,334.85);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(248).to({_off:false},0).wait(1).to({scaleX:1.0335,scaleY:1.0335,rotation:5.6252,x:1571.82},0).wait(1).to({scaleX:1.067,scaleY:1.067,rotation:11.2503,x:1539.84},0).wait(1).to({scaleX:1.1005,scaleY:1.1005,rotation:16.8755,x:1507.86},0).wait(1).to({scaleX:1.134,scaleY:1.134,rotation:22.5007,x:1475.88},0).wait(1).to({scaleX:1.1675,scaleY:1.1675,rotation:28.1258,x:1443.9},0).wait(1).to({scaleX:1.201,scaleY:1.201,rotation:33.751,x:1411.92},0).wait(1).to({scaleX:1.2345,scaleY:1.2345,rotation:39.3761,x:1379.94},0).wait(1).to({scaleX:1.268,scaleY:1.268,rotation:45.0013,x:1347.96},0).wait(1).to({scaleX:1.3015,scaleY:1.3015,rotation:51.4297,x:1315.98},0).wait(1).to({scaleX:1.335,scaleY:1.335,rotation:57.8581,x:1284},0).wait(1).to({scaleX:1.3685,scaleY:1.3685,rotation:64.2865,x:1252.02},0).wait(1).to({scaleX:1.4021,scaleY:1.4021,rotation:70.7148,x:1220.04},0).wait(1).to({scaleX:1.4356,scaleY:1.4356,rotation:77.1432,x:1188.06},0).wait(1).to({scaleX:1.4691,scaleY:1.4691,rotation:83.5716,x:1156.08},0).wait(1).to({scaleX:1.5026,scaleY:1.5026,rotation:90,x:1124.1},0).to({_off:true},1).wait(216));

	// Слой_43
	this.instance_18 = new lib.TorielBullet3();
	this.instance_18.setTransform(1571,286,0.1679,0.1679);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(246).to({_off:false},0).to({_off:true},1).wait(233));

	// Слой_42
	this.instance_19 = new lib.TorielBullet3();
	this.instance_19.setTransform(1571,286,0.1679,0.1679);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(244).to({_off:false},0).to({_off:true},1).wait(235));

	// Слой_41
	this.instance_20 = new lib.TorielBullet3();
	this.instance_20.setTransform(1571,286,0.1679,0.1679);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(242).to({_off:false},0).to({_off:true},1).wait(237));

	// Слой_40
	this.instance_21 = new lib.TorielBullet3();
	this.instance_21.setTransform(1571,286,0.1679,0.1679);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(240).to({_off:false},0).to({_off:true},1).wait(239));

	// Слой_46
	this.instance_22 = new lib.Символ13();
	this.instance_22.setTransform(997.5,388.8,1,1,0,0,0,84,117.5);
	this.instance_22._off = true;
	this.instance_22.filters = [new cjs.BlurFilter(25, 25, 1)];
	this.instance_22.cache(-2,-2,172,239);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(264).to({_off:false},0).wait(1).to({scaleY:1.0152,skewY:-2.2941,y:383.1,alpha:0.9765},0).wait(1).to({scaleY:1.0304,skewY:-4.5883,y:377.35,alpha:0.9529},0).wait(1).to({scaleY:1.0456,skewY:-6.8824,y:371.65,alpha:0.9294},0).wait(1).to({scaleY:1.0608,skewY:-9.1766,x:997.45,y:365.95,alpha:0.9059},0).wait(1).to({scaleY:1.076,skewY:-11.4707,y:360.25,alpha:0.8824},0).wait(1).to({scaleY:1.0912,skewY:-13.7648,x:997.5,y:354.5,alpha:0.8588},0).wait(1).to({scaleY:1.1064,skewY:-16.059,x:997.45,y:348.8,alpha:0.8353},0).wait(1).to({scaleY:1.1216,skewY:-18.3531,x:997.5,y:343.15,alpha:0.8118},0).wait(1).to({scaleY:1.1368,skewY:-20.6473,x:997.45,y:337.45,alpha:0.7882},0).wait(1).to({scaleY:1.152,skewY:-22.9414,y:331.7,alpha:0.7647},0).wait(1).to({scaleY:1.1672,skewY:-25.2356,x:997.5,y:326.05,alpha:0.7412},0).wait(1).to({scaleY:1.1824,skewY:-27.5297,y:320.3,alpha:0.7176},0).wait(1).to({scaleY:1.1976,skewY:-29.8238,y:314.55,alpha:0.6941},0).wait(1).to({scaleY:1.2128,skewY:-32.118,y:308.9,alpha:0.6706},0).wait(1).to({scaleY:1.228,skewY:-34.4121,x:997.45,y:303.25,alpha:0.6471},0).wait(1).to({scaleY:1.2432,skewY:-36.7063,x:997.5,y:297.5,alpha:0.6235},0).wait(1).to({scaleY:1.2585,skewY:-39.0004,y:291.8,alpha:0.6},0).wait(1).to({scaleX:0.9658,scaleY:1.2767,skewY:-39.0061,y:283.1,alpha:0.5923},0).wait(1).to({scaleX:0.9316,scaleY:1.295,skewY:-39.0118,x:997.45,y:274.4,alpha:0.5846},0).wait(1).to({scaleX:0.8975,scaleY:1.3133,skewY:-39.0174,y:265.7,alpha:0.5769},0).wait(1).to({scaleX:0.8633,scaleY:1.3316,skewY:-39.0231,x:997.5,y:257,alpha:0.5692},0).wait(1).to({scaleX:0.8291,scaleY:1.3498,skewY:-39.0288,x:997.45,y:248.35,alpha:0.5615},0).wait(1).to({scaleX:0.7949,scaleY:1.3681,skewY:-39.0345,y:239.65,alpha:0.5538},0).wait(1).to({scaleX:0.7607,scaleY:1.3864,skewY:-39.0401,x:997.5,y:230.95,alpha:0.5462},0).wait(1).to({scaleX:0.7265,scaleY:1.4047,skewY:-39.0458,y:222.25,alpha:0.5385},0).wait(1).to({scaleX:0.6923,scaleY:1.423,skewY:-39.0515,x:997.45,y:213.55,alpha:0.5308},0).wait(1).to({scaleX:0.6581,scaleY:1.4412,skewY:-39.0572,x:997.5,y:204.85,alpha:0.5231},0).wait(1).to({scaleX:0.624,scaleY:1.4595,skewY:-39.0628,y:196.15,alpha:0.5154},0).wait(1).to({scaleX:0.5898,scaleY:1.4778,skewY:-39.0685,x:997.45,y:187.5,alpha:0.5077},0).wait(1).to({scaleX:0.5556,scaleY:1.4961,skewY:-39.0742,x:997.5,y:178.85,alpha:0.5},0).to({_off:true},1).wait(185));

	// Слой_32
	this.instance_23 = new lib.FriskUp();
	this.instance_23.setTransform(948,519,0.2434,0.2434);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(180).to({_off:false},0).to({_off:true},230).wait(70));

	// Слой_37
	this.instance_24 = new lib.Символ13();
	this.instance_24.setTransform(996,391.4,1,1,0,0,0,84,117.4);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(196).to({_off:false},0).wait(1).to({regY:117.5,scaleX:1.08,scaleY:1.08,x:995.95,y:391.5},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:996},0).wait(1).to({scaleX:1.24,scaleY:1.24},0).wait(1).to({scaleX:1.32,scaleY:1.32},0).wait(1).to({scaleX:1.256,scaleY:1.256},0).wait(1).to({scaleX:1.192,scaleY:1.192},0).wait(1).to({scaleX:1.128,scaleY:1.128},0).wait(1).to({scaleX:1.064,scaleY:1.064,y:391.45},0).wait(59).to({_off:true},1).wait(216));

	// Слой_36
	this.instance_25 = new lib.Символ12();
	this.instance_25.setTransform(1001.5,395,1,1,0,0,0,80.5,114);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(193).to({_off:false},0).wait(1).to({scaleX:1.0356,scaleY:1.0356,x:1000.4,y:394.7},0).wait(1).to({scaleX:1.0711,scaleY:1.0711,x:999.35,y:394.45},0).to({_off:true},1).wait(284));

	// Слой_35
	this.instance_26 = new lib.Символ11();
	this.instance_26.setTransform(999,402.5,1,1,0,0,0,90,106.5);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(190).to({_off:false},0).wait(1).to({scaleX:1.08,scaleY:1.08,y:402.45},0).wait(1).to({scaleX:1.16,scaleY:1.16,y:402.5},0).to({_off:true},1).wait(287));

	// Слой_34
	this.instance_27 = new lib.Символ10();
	this.instance_27.setTransform(998,432,1,1,0,0,0,77,77);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(187).to({_off:false},0).wait(1).to({scaleX:1.0533,scaleY:1.0533,x:997.45,y:432.85},0).wait(1).to({scaleX:1.1067,scaleY:1.1067,x:996.9,y:433.75},0).to({_off:true},1).wait(290));

	// Слой_29
	this.instance_28 = new lib.Flowey1();
	this.instance_28.setTransform(920,357);
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(155).to({_off:false},0).to({_off:true},32).wait(293));

	// Слой_31
	this.instance_29 = new lib.Символ9();
	this.instance_29.setTransform(998,756.9,1,1,0,0,0,53,80.9);
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(172).to({_off:false},0).wait(1).to({regY:80.8,y:736.25},0).wait(1).to({y:715.75},0).wait(1).to({y:695.25},0).wait(1).to({y:674.75},0).wait(1).to({y:654.25},0).wait(1).to({y:633.75},0).wait(1).to({y:613.25},0).to({_off:true},1).wait(300));

	// Слой_30
	this.instance_30 = new lib.Символ8();
	this.instance_30.setTransform(997.65,890.65,1,1,0,0,0,51,77);
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(164).to({_off:false},0).wait(1).to({y:873.85},0).wait(1).to({y:857.1},0).wait(1).to({y:840.35},0).wait(1).to({y:823.55},0).wait(1).to({y:806.8},0).wait(1).to({y:790.05},0).wait(1).to({y:773.3},0).to({_off:true},1).wait(308));

	// Слой_28
	this.instance_31 = new lib.FriskUp();
	this.instance_31.setTransform(952,840,0.2434,0.2434);
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(155).to({_off:false},0).to({_off:true},9).wait(316));

	// Слой_65
	this.instance_32 = new lib.Символ19();
	this.instance_32.setTransform(993,-247,1,1,0,0,0,1104,1447);
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(423).to({_off:false},0).wait(1).to({y:-218.55},0).wait(1).to({y:-190.15},0).wait(1).to({y:-161.75},0).wait(1).to({y:-133.35},0).wait(1).to({y:-104.95},0).wait(1).to({y:-76.55},0).wait(1).to({y:-48.15},0).wait(1).to({y:-19.75},0).wait(1).to({y:8.65},0).wait(1).to({y:37.05},0).wait(1).to({y:65.45},0).wait(1).to({y:93.85},0).wait(1).to({y:122.25},0).wait(1).to({y:150.65},0).wait(1).to({y:179.05},0).wait(1).to({y:207.45},0).wait(1).to({y:235.85},0).wait(1).to({y:264.3},0).wait(1).to({y:292.7},0).wait(1).to({y:321.1},0).wait(1).to({y:349.5},0).wait(1).to({y:377.9},0).wait(1).to({y:406.3},0).wait(1).to({y:434.7},0).wait(1).to({y:463.1},0).wait(1).to({y:491.5},0).wait(1).to({y:519.9},0).wait(1).to({y:548.3},0).wait(1).to({y:576.7},0).wait(1).to({y:605.1},0).wait(1).to({y:633.5},0).wait(1).to({y:661.9},0).wait(1).to({y:690.3},0).wait(1).to({y:718.7},0).wait(1).to({y:747.1},0).wait(20).to({_off:true},1).wait(1));

	// Слой_27
	this.instance_33 = new lib.flowerloca();
	this.instance_33.setTransform(-111,-1694);
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(155).to({_off:false},0).to({_off:true},268).wait(57));

	// Слой_26
	this.instance_34 = new lib.FriskUp();
	this.instance_34.setTransform(1567,450,0.2434,0.2434);
	this.instance_34._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(149).to({_off:false},0).to({_off:true},6).wait(325));

	// Слой_25
	this.instance_35 = new lib.Символ8();
	this.instance_35.setTransform(1616,655,1,1,0,0,0,51,77);
	this.instance_35._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(140).to({_off:false},0).wait(1).to({y:639.05},0).wait(1).to({y:623.1},0).wait(1).to({y:607.15},0).wait(1).to({y:591.25},0).wait(1).to({y:575.3},0).wait(1).to({y:559.35},0).wait(1).to({y:543.4},0).wait(1).to({y:527.5},0).to({_off:true},1).wait(331));

	// Слой_24
	this.instance_36 = new lib.Символ7();
	this.instance_36.setTransform(1483.3,655.2,1,1,0,0,0,51.3,80.2);
	this.instance_36._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(132).to({_off:false},0).wait(1).to({x:1501.3},0).wait(1).to({x:1519.3},0).wait(1).to({x:1537.3},0).wait(1).to({x:1555.3},0).wait(1).to({x:1573.3},0).wait(1).to({x:1591.3},0).wait(1).to({x:1609.3},0).to({_off:true},1).wait(340));

	// Слой_23
	this.instance_37 = new lib.Символ6();
	this.instance_37.setTransform(1282.2,656.7,1,1,0,0,0,48.2,78.7);
	this.instance_37._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(124).to({_off:false},0).wait(1).to({regX:48.3,x:1307.3},0).wait(1).to({x:1332.3},0).wait(1).to({x:1357.3},0).wait(1).to({x:1382.3},0).wait(1).to({x:1407.3},0).wait(1).to({x:1432.3},0).wait(1).to({x:1457.3},0).to({_off:true},1).wait(348));

	// Слой_22
	this.instance_38 = new lib.Символ5();
	this.instance_38.setTransform(1186.3,656.2,1,1,0,0,0,51.3,80.2);
	this.instance_38._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(120).to({_off:false},0).wait(1).to({x:1213.8},0).wait(1).to({x:1241.3},0).wait(1).to({x:1268.8},0).to({_off:true},1).wait(356));

	// Слой_21
	this.instance_39 = new lib.FriskRight();
	this.instance_39.setTransform(1135,576,0.2553,0.2553);
	this.instance_39._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(116).to({_off:false},0).to({_off:true},4).wait(360));

	// Слой_20
	this.instance_40 = new lib.FriskRightStep();
	this.instance_40.setTransform(1132,579,0.2667,0.2667);
	this.instance_40._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(108).to({_off:false},0).to({_off:true},8).wait(364));

	// Слой_19
	this.instance_41 = new lib.FriskRight();
	this.instance_41.setTransform(1135,577,0.2553,0.2553);
	this.instance_41._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(99).to({_off:false},0).to({_off:true},9).wait(372));

	// Слой_18
	this.instance_42 = new lib.FriskRightStep();
	this.instance_42.setTransform(1132,580,0.2667,0.2667);
	this.instance_42._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(91).to({_off:false},0).to({_off:true},8).wait(381));

	// Слой_17
	this.instance_43 = new lib.FriskRight();
	this.instance_43.setTransform(1136,577,0.2553,0.2553);
	this.instance_43._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(82).to({_off:false},0).to({_off:true},9).wait(389));

	// Слой_16
	this.instance_44 = new lib.FriskRightStep();
	this.instance_44.setTransform(1133,581,0.2667,0.2667);
	this.instance_44._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(74).to({_off:false},0).to({_off:true},8).wait(398));

	// Слой_14
	this.instance_45 = new lib.FriskRight();
	this.instance_45.setTransform(1132,579,0.2553,0.2553);
	this.instance_45._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(65).to({_off:false},0).to({_off:true},9).wait(406));

	// Слой_12
	this.instance_46 = new lib.FriskRightStep();
	this.instance_46.setTransform(1128,583,0.2667,0.2667);
	this.instance_46._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(56).to({_off:false},0).to({_off:true},9).wait(415));

	// Слой_11
	this.instance_47 = new lib.FriskRight();
	this.instance_47.setTransform(1127,582,0.2553,0.2553);
	this.instance_47._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_47).wait(48).to({_off:false},0).to({_off:true},8).wait(424));

	// Слой_10
	this.instance_48 = new lib.FriskRightStep();
	this.instance_48.setTransform(1123,582,0.2709,0.2709);
	this.instance_48._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_48).wait(39).to({_off:false},0).to({_off:true},9).wait(432));

	// Слой_9
	this.instance_49 = new lib.FriskRight();
	this.instance_49.setTransform(1129,578,0.2544,0.2627);
	this.instance_49._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_49).wait(31).to({_off:false},0).to({_off:true},8).wait(441));

	// Слой_8
	this.instance_50 = new lib.Символ4();
	this.instance_50.setTransform(1070.2,644.8,1,1,0,0,0,50.2,81.8);
	this.instance_50._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_50).wait(21).to({_off:false},0).wait(1).to({x:1103.6,y:650.15},0).wait(1).to({x:1137,y:655.55},0).wait(1).to({x:1170.45,y:660.95},0).wait(6).to({_off:true},1).wait(449));

	// Слой_6
	this.instance_51 = new lib.Символ3();
	this.instance_51.setTransform(949.7,574.9,1,1,0,0,0,49.6,76);
	this.instance_51._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_51).wait(13).to({_off:false},0).wait(1).to({regY:75.9,x:962.1,y:588.5},0).wait(1).to({x:974.6,y:602.15},0).wait(1).to({x:987.75,y:615.2},0).wait(1).to({x:1002.45,y:626.45},0).wait(1).to({x:1019.8,y:632.85},0).wait(1).to({x:1037.95,y:636.25},0).wait(1).to({x:1056.35,y:638.75},0).to({_off:true},1).wait(459));

	// Слой_5
	this.instance_52 = new lib.Символ2();
	this.instance_52.setTransform(797.6,429,1,1,0,0,0,52.6,80);
	this.instance_52._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_52).wait(4).to({_off:false},0).wait(1).to({regY:80.1,x:804.5,y:455.95},0).wait(1).to({x:816.8,y:481.1},0).wait(1).to({x:833.05,y:503.85},0).wait(1).to({x:852,y:523.7},0).wait(1).to({x:872.2,y:539.95},0).wait(1).to({x:892.35,y:552.05},0).wait(1).to({x:911.15,y:559.4},0).wait(1).to({x:927.2,y:561.35},0).to({_off:true},1).wait(467));

	// Слой_4
	this.instance_53 = new lib.FriskDown();
	this.instance_53.setTransform(744,328,0.2715,0.2715);

	this.timeline.addTween(cjs.Tween.get(this.instance_53).to({_off:true},4).wait(476));

	// Слой_1
	this.instance_54 = new lib.Firstloca();
	this.instance_54.setTransform(0,-255);

	this.instance_55 = new lib.Анимация9("synched",0);
	this.instance_55.setTransform(1849,434);
	this.instance_55._off = true;

	this.instance_56 = new lib.Анимация10("synched",0);
	this.instance_56.setTransform(88,434);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_54}]}).to({state:[{t:this.instance_55}]},24).to({state:[{t:this.instance_56}]},95).to({state:[{t:this.instance_56}]},35).to({state:[]},1).wait(325));
	this.timeline.addTween(cjs.Tween.get(this.instance_55).wait(24).to({_off:false},0).to({_off:true,x:88},95).wait(361));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-801,-1154,4499,3348.1);
// library properties:
lib.properties = {
	id: '238511D429C9A345888B054FD6ADDC43',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Firstloca.jpg", id:"Firstloca"},
		{src:"images/flowerloca.jpg", id:"flowerloca"},
		{src:"images/Undertale_atlas_1.png", id:"Undertale_atlas_1"},
		{src:"images/Undertale_atlas_2.png", id:"Undertale_atlas_2"}
	],
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
an.compositions['238511D429C9A345888B054FD6ADDC43'] = {
	getStage: function() { return exportRoot.stage; },
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
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;