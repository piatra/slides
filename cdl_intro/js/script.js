var play = false;
var context = new webkitAudioContext();
var source1 = context.createBufferSource();
var bufferLoader;

document.querySelector('#modify').addEventListener('click', function () {

	document.body.style.background = 'url(./css/bg.gif)';
	if(!play) {
		init();
		play = true;
	}
	else {
		source1.disconnect(0);
	}

}, false);


function init() {

  bufferLoader = new BufferLoader(
    context,
    [
      './js/nyan.mp3'
    ],
    finishedLoading
    );

  bufferLoader.load();
}

function finishedLoading(bufferList) {
  // Create two sources and play them both together.
  
  source1.buffer = bufferList[0];

  source1.connect(context.destination);
  source1.noteOn(0);
}


function BufferLoader(context,urlList,callback){this.context=context;this.urlList=urlList;this.onload=callback;this.bufferList=new Array();this.loadCount=0;}
BufferLoader.prototype.loadBuffer=function(url,index){var request=new XMLHttpRequest();request.open("GET",url,true);request.responseType="arraybuffer";var loader=this;request.onload=function(){loader.context.decodeAudioData(request.response,function(buffer){if(!buffer){alert('error decoding file data: '+url);return;}
loader.bufferList[index]=buffer;if(++loader.loadCount==loader.urlList.length)
loader.onload(loader.bufferList);},function(error){console.error('decodeAudioData error',error);});}
request.onerror=function(){alert('BufferLoader: XHR error');}
request.send();}
BufferLoader.prototype.load=function(){for(var i=0;i<this.urlList.length;++i)
this.loadBuffer(this.urlList[i],i);}