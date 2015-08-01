
var yoff = 0.0; 

function setup() {
   createCanvas(1600, 100);
}

function drawWave(color, option) {
  fill(color);
  noStroke();
  beginShape(); 
  
  var xoff = 0; 
  for (var x = -100; x <= width + 100; x += option) {
    var y = map(noise(xoff, yoff), 0, 1.5, 20, 140);
    vertex(x, y); 
    xoff += 0.05;
  }
  yoff += 0.003;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
}

function draw() {
  background(0, 0, 0);
  blendMode(SCREEN);
  drawWave(color(60, 208, 123), 22);
  drawWave(color(223, 87, 87), 11);
  drawWave(color(120, 36, 147), 30);
  drawWave(color(43, 89, 244), 29);
  drawWave(color(60, 208, 123), 8);
}