(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Безымянный_1_atlas_1", frames: [[0,0,1164,1052],[0,1054,1323,448]]}
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



(lib.Безимени2 = function() {
	this.initialize(img.Безимени2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3840,2160);


(lib.луна = function() {
	this.initialize(img.луна);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,6066,6067);


(lib.персонаж = function() {
	this.initialize(img.персонаж);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3923,6173);


(lib.плечо = function() {
	this.initialize(ss["Безымянный_1_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.предплечье = function() {
	this.initialize(ss["Безымянный_1_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.руказадняя = function() {
	this.initialize(img.руказадняя);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,791,2145);


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
	this.instance = new lib.плечо();
	this.instance.setTransform(-57.15,-51.65,0.0983,0.0983);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.1,-51.6,114.30000000000001,103.30000000000001);


(lib.Анимация11 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.предплечье();
	this.instance.setTransform(-65.7,-31.6,0.1044,0.1044,6.9588);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.3,-31.6,142.7,63.2);


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
	this.instance = new lib.руказадняя();
	this.instance.setTransform(-56.4,-152.9,0.1426,0.1426);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.4,-152.9,112.8,305.9);


(lib.Анимация1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.луна();
	this.instance.setTransform(-421.8,-421.85,0.1391,0.1391);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-421.8,-421.8,843.6,843.7);


(lib.руказадняя_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Анимация10("synched",0);
	this.instance.setTransform(-0.05,0.05,1,1,-11.1899,0,0,-56.4,-152.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,regY:0,rotation:-11.1458,x:84.8441,y:139.0673},0).wait(1).to({rotation:-11.0541,x:84.6213,y:139.2027},0).wait(1).to({rotation:-10.91,x:84.2705,y:139.4149},0).wait(1).to({rotation:-10.7082,x:83.7787,y:139.7104},0).wait(1).to({rotation:-10.444,x:83.1329,y:140.0947},0).wait(1).to({rotation:-10.1134,x:82.3225,y:140.5714},0).wait(1).to({rotation:-9.7145,x:81.341,y:141.1404},0).wait(1).to({rotation:-9.249,x:80.1907,y:141.7957},0).wait(1).to({rotation:-8.7238,x:78.8864,y:142.5238},0).wait(1).to({rotation:-8.1523,x:77.4597,y:143.3025},0).wait(1).to({regX:-56.4,regY:-152.8,rotation:-7.554,x:-0.05,y:0},0).wait(1).to({regX:0,regY:0,rotation:-6.422,x:73.0899,y:145.5271},0).wait(1).to({rotation:-5.3281,x:70.2977,y:146.8977},0).wait(1).to({rotation:-4.3094,x:67.6744,y:148.1261},0).wait(1).to({rotation:-3.3915,x:65.2923,y:149.1928},0).wait(1).to({rotation:-2.5883,x:63.194,y:150.0948},0).wait(1).to({rotation:-1.9041,x:61.3967,y:150.8399},0).wait(1).to({rotation:-1.3367,x:59.8998,y:151.4415},0).wait(1).to({rotation:-0.8802,x:58.6911,y:151.9148},0).wait(1).to({rotation:-0.5267,x:57.7524,y:152.2746},0).wait(1).to({rotation:-0.2676,x:57.0633,y:152.5346},0).wait(1).to({rotation:-0.0947,x:56.6026,y:152.7065},0).wait(1).to({regX:-56.4,regY:-152.9,rotation:0,x:0,y:0},0).wait(1).to({regX:0,regY:0,rotation:-0.0204,x:56.4541,y:152.8807},0).wait(1).to({rotation:-0.0616,x:56.5638,y:152.8416},0).wait(1).to({rotation:-0.1258,x:56.7342,y:152.7807},0).wait(1).to({rotation:-0.2149,x:56.9709,y:152.6957},0).wait(1).to({rotation:-0.3311,x:57.2791,y:152.5844},0).wait(1).to({rotation:-0.476,x:57.6634,y:152.4446},0).wait(1).to({rotation:-0.651,x:58.1267,y:152.2745},0).wait(1).to({rotation:-0.8562,x:58.6694,y:152.0734},0).wait(1).to({rotation:-1.0901,x:59.2872,y:151.8416},0).wait(1).to({rotation:-1.3492,x:59.9702,y:151.582},0).wait(1).to({regX:-56.4,regY:-152.8,rotation:-1.6273,x:-0.1,y:0.1},0).wait(1).to({regX:0,regY:0,rotation:-2.7889,x:63.7062,y:149.9819},0).wait(1).to({rotation:-3.9545,x:66.7462,y:148.6462},0).wait(1).to({rotation:-5.0854,x:69.6693,y:147.2914},0).wait(1).to({rotation:-6.1486,x:72.3928,y:145.9653},0).wait(1).to({rotation:-7.1202,x:74.8597,y:144.7096},0).wait(1).to({rotation:-7.9857,x:77.0393,y:143.556},0).wait(1).to({rotation:-8.7391,x:78.9221,y:142.5251},0).wait(1).to({rotation:-9.3802,x:80.5137,y:141.6284},0).wait(1).to({rotation:-9.9131,x:81.8288,y:140.8697},0).wait(1).to({rotation:-10.3438,x:82.8866,y:140.2475},0).wait(1).to({rotation:-10.6795,x:83.708,y:139.757},0).wait(1).to({rotation:-10.9276,x:84.3133,y:139.3913},0).wait(1).to({rotation:-11.0955,x:84.7218,y:139.1425},0).wait(1).to({regX:-56.4,regY:-152.8,rotation:-11.1899,x:-0.05,y:0.05},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,-21.9,170.1,327.79999999999995);


(lib.предплечье_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Анимация11("synched",0);
	this.instance.setTransform(127.15,31.6,1,1,0,0,0,55.8,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:-0.1,rotation:74.9998,x:142.2,y:7.6},11,cjs.Ease.quadInOut).to({rotation:68.7785,y:7.55},12,cjs.Ease.quadInOut).to({rotation:74.9998,y:7.6},14,cjs.Ease.quadInOut).to({regY:0,rotation:0,x:127.15,y:31.6},11,cjs.Ease.quadInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,-117.8,161.7,181);


(lib.плечо_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Анимация12("synched",0);
	this.instance.setTransform(114.35,0.05,1,1,0,0,0,57.2,-51.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:57.6,regY:-52.4,rotation:3.9539,x:114.65,y:0.35},23,cjs.Ease.quadInOut).to({regX:57.2,regY:-51.6,rotation:0,x:114.35,y:0.05},25,cjs.Ease.quadInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-7.4,121.6,111.7);


(lib.луна_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Анимация1("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:180},23).to({rotation:0},25).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-596.2,-596.2,1192.4,1192.5);


(lib.ронин = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.предплечье_1("synched",0);
	this.instance.setTransform(-163.6,-67.55,1,1,0,0,0,71.4,31.6);

	this.instance_1 = new lib.плечо_1("synched",0);
	this.instance_1.setTransform(-109.35,-159.15);

	this.instance_2 = new lib.персонаж();
	this.instance_2.setTransform(-155.35,-307.15,0.0995,0.0995);

	this.instance_3 = new lib.руказадняя_1("synched",0);
	this.instance_3.setTransform(40.15,-45.2,0.8132,0.8132,0,0,0,56.5,153);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3,p:{startPosition:0}},{t:this.instance_2},{t:this.instance_1,p:{startPosition:0}},{t:this.instance,p:{startPosition:0}}]}).to({state:[{t:this.instance_3,p:{startPosition:47}},{t:this.instance_2},{t:this.instance_1,p:{startPosition:47}},{t:this.instance,p:{startPosition:47}}]},47).to({state:[]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-235,-307.1,470.1,614.3);


// stage content:
(lib.Безымянный1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_6
	this.instance = new lib.ронин("synched",0);
	this.instance.setTransform(631.15,731.25,0.8657,0.8657,0,0,180,-0.8,0.1);
	var instanceFilter_1 = new cjs.ColorFilter(0.44,0.44,0.44,1,0,0,0,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-237,-309,474,618);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9407,scaleY:0.9407,startPosition:23},23,cjs.Ease.quadInOut).to({scaleX:0.8657,scaleY:0.8657,startPosition:0},25,cjs.Ease.quadInOut).wait(1));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 23,cjs.Ease.quadInOut).to(new cjs.ColorFilter(0.44,0.44,0.44,1,0,0,0,0), 25,cjs.Ease.quadInOut).wait(1));

	// Слой_4
	this.instance_1 = new lib.ронин("synched",0);
	this.instance_1.setTransform(1237.35,731.15);
	var instance_1Filter_2 = new cjs.ColorFilter(0.83,0.83,0.83,1,43.35,43.35,43.35,0);
	this.instance_1.filters = [instance_1Filter_2];
	this.instance_1.cache(-237,-309,474,618);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:0.1,regY:0.1,scaleX:0.9407,scaleY:0.9407,x:1237.45,y:731.25,startPosition:23},23,cjs.Ease.quadInOut).to({regX:0,regY:0,scaleX:1,scaleY:1,x:1237.35,y:731.15,startPosition:0},25,cjs.Ease.quadInOut).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_1Filter_2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 23,cjs.Ease.quadInOut).to(new cjs.ColorFilter(0.83,0.83,0.83,1,43.35,43.35,43.35,0), 25,cjs.Ease.quadInOut).wait(1));

	// Слой_7
	this.instance_2 = new lib.луна_1("synched",0);
	this.instance_2.setTransform(953.8,482.85);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(49));

	// Слой_8
	this.instance_3 = new lib.Безимени2();
	this.instance_3.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(49));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:1, endFrame:23, x:-237, y:-309, w:474, h:618});
	this.filterCacheList.push({instance: this.instance, startFrame:0, endFrame:0, x:-237, y:-309, w:474, h:618});
	this.filterCacheList.push({instance: this.instance, startFrame:24, endFrame:48, x:-237, y:-309, w:474, h:618});
	this.filterCacheList.push({instance: this.instance, startFrame:48, endFrame:49, x:-237, y:-309, w:474, h:618});
	this.filterCacheList.push({instance: this.instance_1, startFrame:1, endFrame:23, x:-237, y:-309, w:474, h:618});
	this.filterCacheList.push({instance: this.instance_1, startFrame:0, endFrame:0, x:-237, y:-309, w:474, h:618});
	this.filterCacheList.push({instance: this.instance_1, startFrame:24, endFrame:48, x:-237, y:-309, w:474, h:618});
	this.filterCacheList.push({instance: this.instance_1, startFrame:48, endFrame:49, x:-237, y:-309, w:474, h:618});
	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(960,426.6,960,653.4);
// library properties:
lib.properties = {
	id: '6057DA4BDE3C8C4D9FF7B1E2A7EC3060',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Безимени2.jpg?1709712792558", id:"Безимени2"},
		{src:"images/луна_.png?1709712792558", id:"луна"},
		{src:"images/персонаж_.png?1709712792558", id:"персонаж"},
		{src:"images/руказадняя_.png?1709712792558", id:"руказадняя"},
		{src:"images/Безымянный_1_atlas_1.png?1709712792545", id:"Безымянный_1_atlas_1"}
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
an.compositions['6057DA4BDE3C8C4D9FF7B1E2A7EC3060'] = {
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