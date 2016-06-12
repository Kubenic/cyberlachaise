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
