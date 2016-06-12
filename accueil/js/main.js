function getRandom(min, max){
  return Math.random() * (max - min) + min;
}

var isSafari = /constructor/i.test(window.HTMLElement);
var isFF = !!navigator.userAgent.match(/firefox/i);

if (isSafari) {
  document.getElementsByTagName('html')[0].classList.add('safari');
}

// Remove click on button for demo purpose
Array.prototype.slice.call(document.querySelectorAll('.button'), 0).forEach(function(bt) {
  bt.addEventListener('mouseover', function(e) {
    e.preventDefault();
  });
});

initBt7();

// Button 7
function initBt7() {
  var bt = document.querySelectorAll('#component-7')[0];
  var turbVal = { val: 0.000001 };
  var turb = document.querySelectorAll('#filter-glitch-3 feTurbulence')[0];
  var btTl = new TimelineLite({ paused: true, onUpdate: function() {
    turb.setAttribute('baseFrequency', '0.00001 ' + turbVal.val); // Firefox bug is value is 0
  } });

  btTl.to(turbVal, 0.4, { val: 0.4 });
  btTl.to(turbVal, 0.2, { val: 0.000001 });

  bt.addEventListener('mouseover', function() {
    btTl.restart();
  });
}
