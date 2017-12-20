function playGame() {
  clearButtons();
  looping = true;
  chooseOptions = false;
  loop();
}

function paused() {
  textSize(50);
  text("PAUSED", width/2, height/2);
}

function winner(p, b) {
  b.xspeed = 0;
  b.yspeed = 0;
  background(0);
  textSize(50);
  var player = p + 1;
  text("Player " + player + " wins!", width/2, height/2);
  textSize(20);
  text("Press R to Reset", width/2, height/20);
}

function menu() {
  clearButtons();
  background(0);
  textSize(50);
  noStroke();
  text("Pong", width/2, height/6.66);
  buttons[0].show();
  buttons[3].show();
  console.log('menu',buttons)
}

function options() {

  clearButtons();
  background(0);
  textSize(50);
  text("options", width/2, height/6.66);
  console.log('options',buttons)
  buttons[1].show();
  buttons[2].show();
  buttons[3].show();
  buttons[4].show();
  buttons[5].show();
}
