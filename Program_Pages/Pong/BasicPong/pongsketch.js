var paddles;
var ball;
var looping = true;
var chooseOptions;
var maxScore = 10;
var pvp = false;
var difficulty = 0;
var scrw = 600;
var scrh = 400;
var impactPt;
var pongCanvas;

function setup() {
  pongCanvas = createCanvas(scrw,scrh);
  pongCanvas.parent('pongsketch-holder');

  fill(255);
  textAlign(CENTER, CENTER);
  reset();
}

function reset() {
  createButtons();
  var canvpos = pongCanvas.position();
  for (let i = 0; i < buttons.length; i++) {
    let posx = buttons[i].x;
    let posy = buttons[i].y;
    buttons[i].position(posx + canvpos.x, posy + canvpos.y);
  }
  paddles = [];
  chooseOptions = true;
  for (var i = 0; i < 2; i++) {
    var newpaddle = new Paddle();
    paddles.push(newpaddle);
  }
  paddles[0].x = 20;
  paddles[1].x = width - 20;
  ball = new Ball();
  menu();
  noLoop();
}

function draw() {
  background(0);
  textSize(20);
  textAlign(CENTER, CENTER);
  text("Press R to Reset", width/2, 20);
  if (!looping) {
    paused();
  }
  for (var i = 0; i < paddles.length; i++) {
    paddles[i].edges();
    paddles[i].update();
    paddles[i].show();
    if (paddles[i].score >= maxScore) {
      winner(i, ball);
    }
  }
  if (!pvp) {
    if (abs(paddles[1].y - impactPt) < 3) {
      paddles[1].yspeed = 0;
    }
  }
  ball.update();
  ball.checkWalls(paddles);
  ball.show();
  if (ball.xspeed < 0) {
    ball.checkPaddlesLeft(paddles[0]);
  } else if (ball.xspeed > 0) {
    ball.checkPaddlesRight(paddles[1]);
  }
  if (chooseOptions) {
    menu();
  }
}

function keyPressed() {
  //o and l P2
  if (pvp) {
    if (keyCode === 79) {
      paddles[1].yspeed = -5;
    } else if (keyCode === 76) {
      paddles[1].yspeed = 5;
    }
  }
  // w and s P1
  if (keyCode === 87) {
    paddles[0].yspeed = -5;
  } else if (keyCode === 83) {
    paddles[0].yspeed = 5;
  }
  //R Key
  if (keyCode === 82) {
    reset();
  //Spacebar (PAUSE)
  } else if (keyCode === 32) {
    if (looping && !chooseOptions) {
      looping = false;
      noLoop();
    } else if (!looping) {
      looping = true;
      loop();
    }
  }
}

function keyReleased() {
  if (keyCode === 79) {
    paddles[1].yspeed = 0;
  } else if (keyCode === 76) {
    paddles[1].yspeed = 0;
  }
  if (keyCode === 87) {
    paddles[0].yspeed = 0;
  } else if (keyCode === 83) {
    paddles[0].yspeed = 0;
  }
}
