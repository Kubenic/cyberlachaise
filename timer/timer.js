function Timer(param){
	this.container = document.querySelector(param.container);
	this.domElem = {};
	this.domElem.meter = document.createElement('meter');
	this.domElem.meter.classList.add('meterTimer');
	this.intervalTime = 100;
	console.log()
	this.minimum = param.minimum || 0;
	this.maximum = param.maximum || 100;
	this.finishTime = param.finishingTime*1000 || 10*1000;
	this.loss = (this.intervalTime / this.finishTime);
	this.speed = (this.maximum / (this.finishTime/this.intervalTime) ) + this.loss;
	this.queriedElem = {};
	this.finish = param.finishCallback;
	

	this.actual = this.maximum;
}	

Timer.prototype.restart = function(){
	this.actual = this.maximum;

}
Timer.prototype.init = function(){
	this.domElem.meter.min = this.minimum;
	this.domElem.meter.max = this.maximum;
	this.actual = this.maximum;
	this.domElem.meter.value = this.actual;
	this.container.appendChild(this.domElem.meter);
}

Timer.prototype.reduceTime = function(){
	//console.log(this);
	this.queriedElem.meterElement = this.container.querySelector('.meterTimer');
	this.actual = this.actual - this.speed;
	this.queriedElem.meterElement.value = this.actual;

	if(this.actual > this.minimum){
		window.setTimeout(this.reduceTime.bind(this),this.intervalTime);
	}else{
		this.finish();
	}

}
Timer.prototype.start = function(){
	window.setTimeout(this.reduceTime.bind(this),this.intervalTime);
}
