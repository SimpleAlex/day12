function draw() {
  var center = document.getElementById('center').getContext('2d');
  // Dynamic Centering and Alignment
  center.fillStyle = '#9d4545';
  var rectW = 100;
  var rectH = 100;
  var rectX =(center.canvas.width * 0.5) - (rectW * 0.5);
  var rectY = (center.canvas.height * 0.5) - (rectW * 0.5);
  center.fillRect(rectX, rectY, rectW, rectH);
  //END Dynamic Centering and Alignment
}
window.onload = draw;

// ANIMATION
function initCanvas() {
    var anim = document.getElementById('anim').getContext('2d');
    var cW = anim.canvas.width, cH = anim.canvas.height;
    var y = 0, x = 0;
    function animate() {
      anim.save();
      anim.clearRect(0, 0, cW, cH);
      // DRAW HERE
      anim.fillStyle = '#399c60';
      // x, y, W, H
      anim.fillRect(0, y, 50, 50);

      anim.fillStyle = '#ba3c3c';
      // x, y, W, H
      anim.fillRect(x, 0, 50, 50);

      anim.fillStyle = '#9643bd';
      // x, y, W, H
      anim.fillRect(x, y, 50, 50);
      y++;
      x++;
      anim.restore();
    }
    var animateInterval = setInterval(animate, 20);
    anim.canvas.addEventListener('click', function(event) {
      clearInterval(animateInterval);
    });
}
window.addEventListener('load', function(event) {
  initCanvas();
});
// END ANIMATION

// MOUSE COORDINATES
function mouseCoordinates() {
  var mouse = document.getElementById('mouse').getContext('2d');
  mouse.canvas.addEventListener('mousemove', function(event) {
    var mouseX = event.clientX - mouse.canvas.offsetLeft;
    var mouseY = event.clientY - mouse.canvas.offsetTop;
    var status = document.getElementById('status');
    status.innerHTML = mouseX + " | " + mouseY;
  });
}
window.addEventListener('load', function(event) {
  mouseCoordinates();
});
// END MOUSE COORDINATES
