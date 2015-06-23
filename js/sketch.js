var s = function(p){
  var x = 0;
  var y = 0;
  var px = 0;
  var py = 0;
  var easing = 0.05;
  
  p.preload = function() {
  };
  
  p.setup = function() {
    p.createCanvas(window.innerWidth/2, window.innerHeight/2);
    p.stroke(0, 102);
  };

  p.draw = function() {
    var targetX = p.mouseX;
    x += (targetX - x) * easing;
    var targetY = p.mouseY;
    y += (targetY - y) * easing;
    var weight = p.dist(x, y, px, py);
    p.strokeWeight(weight);
    p.line(x, y, px, py);
    py = y;
    px = x;
  };
};

var myP5 = new p5(s,'p5sketch');