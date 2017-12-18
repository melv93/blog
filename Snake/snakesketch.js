var s;
var scl = 20;
var food;

function setup() {
  var snakecanvas = createCanvas(600,600);
  snakecanvas.parent('snakesketch-holder');
  s = new Snake();
  frameRate(10);
  pickLocation();
}

function pickLocation() {
  var cols = floor(width / scl);
  var rows = floor(height / scl);
  food = createVector(floor(random(cols)),floor(random(rows)));
  food.mult(scl);
}

function draw() {
  background(51)
  s.death();
  s.update();
  s.show();

  if (s.eat(food)) {
    pickLocation();
  }


  fill(255,0,100);
  rect(food.x, food.y, scl, scl);

}


function keyPressed() {
  if (keyCode === 87) {
    if (s.yspeed != 1) {
      console.log(s.dir);
      s.dir(0,-1);
    }
  } else if (keyCode === 83) {
    if (s.yspeed != -1) {
      s.dir(0,1);
    }
  } else if (keyCode === 65) {
    if (s.xspeed != 1) {
      s.dir(-1,0);
    }
  } else if (keyCode === 68) {
      if (s.xspeed != -1) {
        s.dir(1,0);
      }
  }
}
