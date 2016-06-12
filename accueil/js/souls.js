var souls = document.querySelectorAll('.souls');

for(var i = 0; i<souls.length; i+=1){
	var randomWidth = (Math.random() * (0 - window.innerWidth) + window.innerWidth);
	var randomHeight = (Math.random() * (0 - window.innerHeight) + window.innerHeight);
	var randomSec = (Math.random() * (0 - 2) + 2);
	var randomGlow = (Math.random() * (0 - 10) + 10);
	var glow = souls[i].querySelector('.glow');

	if(randomWidth > 0 && randomWidth < 50){
		randomWidth = randomWidth+50;
	}
	if(randomHeight > 0 && randomHeight < 50){
		randomHeight = randomHeight+50;
	}

	if(randomWidth < window.innerWidth && randomWidth > (window.innerWidth - 50)){
		randomWidth = randomWidth - 50;
	}
	if(randomHeight < window.innerHeight && randomHeight > (window.innerHeight - 50)){
		randomHeight = randomHeight - 50;
	}

	souls[i].style.left = randomWidth+"px";
	souls[i].style.top = randomHeight+"px";
	souls[i].style.animationDelay = randomSec+"s";
	glow.style.animationDelay = (randomGlow+5)+'s';
}

var hitboxes = document.querySelectorAll('.hitbox');
	console.log(hitboxes);
for(var i=0; i< hitboxes.length; i+=1){
	hitboxes[i].addEventListener('mouseover',function(e){
		console.log('mousein');
		var target = e.target;
		while(!target.classList.contains('souls')){
			target = target.parentElement;
		}
		target.style.animationPlayState="paused";
		//target.style.marginTop = "0px";
		console.log(target);
		var boxname = target.querySelector('.boxname');
		boxname.classList.remove("hide");
		boxname.classList.add("show");
	},false);

	hitboxes[i].addEventListener('mouseout',function(e){
		console.log('mouseout');
		var target = e.target;
		while(!target.classList.contains('souls')){
			target = target.parentElement;
		}
		target.style.animationPlayState="";

		console.log(target);
		var boxname = target.querySelector('.boxname');
		boxname.classList.add("hide");
		boxname.classList.remove("show");
	},false);
}
