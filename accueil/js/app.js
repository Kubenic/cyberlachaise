var bgVidContainer = document.querySelector('.video');
bgVidContainer.style.height= window.innerHeight +'px';

document.querySelector('.virgule video').addEventListener('ended',function(e){
  document.querySelector('.virgule').style.display="none";
},false);

$('.fullpage').fullpage({
  scrollingSpeed:300,
  onLeave: function(index, nextIndex, direction){
    var leavingSection = $(this);
    var virgule, virguleVid;

    virgule = document.querySelector('.virgule');
    virguleVid = virgule.querySelector('video');

    virgule.style.display='';
    virguleVid.play();

    //after leaving section 2
    if(index == 2 && direction =='down'){
      // alert("Going to section 3!");
    }

          else if(index == 2 && direction == 'up'){
             // alert("Going to section 1!");
              var bgVid = document.querySelector('.video video');
          bgVid.play();
          }
      },
      afterRender: function(){
          var pluginContainer = $(this);
          var bgVid = document.querySelector('.video video');
          bgVid.play();
          startHitboxes();
      }
  });

var video = document.querySelector('.video video');
var btnPlay = document.getElementById('play');
var btnPause = document.getElementById('pause');
var btnMuet = document.getElementById('muet');
var muted = document.querySelector('.fa-volume-up');

btnPlay.addEventListener("click", playVid);
function playVid() {
  // console.log('toto');
  video.play();
}

btnPause.addEventListener("click", pauseVid);
function pauseVid() {
  // console.log('toto');
  video.pause();
}

btnMuet.addEventListener("click", muetVid);
function muetVid() {
  // console.log('toto');
  if (video.muted === true) {
    video.muted = false;
    muted.classList.add('fa-volume-up');
    muted.classList.remove('fa-volume-off');
  } else {
    video.muted = true;
    muted.classList.remove('fa-volume-up');
    muted.classList.add('fa-volume-off');
  }
}
