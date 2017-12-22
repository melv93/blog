var gameButton;
var visualButton;
var soundButton;
var playButton;
var returnButton;
var optionsButton;
var returnMButton;

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
  text("", width/2, height/6.66);
  optionsButton = setupButton(width/2-75, height/2,"Options");
  optionsButton.style("font-size","20px");
  optionsButton.size(150,50);
  optionsButton.mousePressed(options);
  playButton = setupButton(width/2-75, height/3,"Play Game")
  playButton.style("font-size","20px");
  playButton.size(150,50);
  playButton.mousePressed(playGame);
}

function options() {
  clearButtons();
  background(0);
  textSize(50);
  text("options", width/2, height/6.66);
  gameButton = setupButton(width/2-51, height/3,"Game Options");
  visualButton = setupButton(width/2-51, 5*height/12,"Visual Options");
  soundButton = setupButton(width/2-52, height/2,"Sound Options");
  playButton = setupButton(width/2-75, 5*height/6,"Play Game")
  returnButton = setupButton(10, 10,"Return to Options")
  returnMButton = setupButton(10, 10,"Return to Menu")

  playButton.style("font-size","20px");
  playButton.size(150,50);

  gameButton.mousePressed(gameOptions);
  visualButton.mousePressed(visualOptions);
  soundButton.mousePressed(soundOptions);
  playButton.mousePressed(playGame);
  returnButton.mousePressed(options);
  returnMButton.mousePressed(menu);

  returnButton.hide();
}
