window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                              window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;


var soulsCanvas = document.querySelector('.creepywall .souls_canvas');
console.log(soulsCanvas);
soulsCanvas.height = window.innerHeight;
soulsCanvas.width = window.innerWidth;


var ctx = soulsCanvas.getContext('2d');

var x = 100,
    y = 75,
    // Radii of the white glow.
    innerRadius = 5,
    outerRadius = 100,
    // Radius of the entire circle.
    radius = 60;

    var x2 = x,
    y2 = y,
    // Radii of the white glow.
    innerRadius2 = innerRadius*3,
    outerRadius2 = outerRadius*3,
    // Radius of the entire circle.
    radius2 = radius * 3;




function update(){

ctx.clearRect(0,0,window.innerWidth,window.innerHeight);

	var gradient2 = ctx.createRadialGradient(x2, y2, innerRadius2, x2, y2, outerRadius2);
gradient2.addColorStop(0, 'rgba(255,255,255,0.1');

gradient2.addColorStop(0.5, 'rgba(255,255,255,0');

ctx.arc(x2, y2, radius2, 0, 2 * Math.PI);

ctx.fillStyle = gradient2;
ctx.fill();

var gradient = ctx.createRadialGradient(x, y, innerRadius, x, y, outerRadius);
gradient.addColorStop(0, 'rgba(255,255,255,1');
gradient.addColorStop(0.01, 'rgba(255,255,255,0.8');
gradient.addColorStop(0.02, 'rgba(255,255,255,0.7');
gradient.addColorStop(0.03, 'rgba(255,255,255,0.6');
gradient.addColorStop(0.05, 'rgba(255,255,255,0.5');
gradient.addColorStop(0.1, 'rgba(255,255,255,0.3');
gradient.addColorStop(0.2, 'rgba(255,255,255,0.2');
gradient.addColorStop(0.3, 'rgba(255,255,255,0.1');
gradient.addColorStop(0.4, 'rgba(255,255,255,0');

ctx.arc(x, y, radius, 0, 2 * Math.PI);

ctx.fillStyle = gradient;

ctx.fill();

requestAnimationFrame(update);
}


requestAnimationFrame(update);
var during = 2000;
var progress = Math.round(during / 60);
console.log(progress);
var move = 50;
var timing = 0;
var up = true;
var down = false;
function anim(){

	if(timing === progress){
		if(!up){
			up = true;
		}else{
			up = false;
		}

		if(down){
			down = false;
		}else{
			down = true;
		}
		
		timing -= 1;
	}

	if(down && timing === 0){
		up = true;
		down = false;
	}

	if(timing < progress && up){
		x+= move/progress;
		x2 = x;
		timing+=1;
	}

	if(timing < progress && down){
		x-= move/progress;
		x2 = x;
		timing-=1;
	}


	requestAnimationFrame(anim);
}

requestAnimationFrame(anim);