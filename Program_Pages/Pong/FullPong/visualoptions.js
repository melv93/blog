var windowWInput;
var widthButton;
var windowHInput;
var heightButton;
var fsButton;
var fsOn = false;
var scrwprev;
var scrhprev;

function visualOptions() {
  clearButtons();
  background(0);
  textSize(50);
  text("visual options", width/2, height/6.66);
  textSize(20);

  returnButton.show();
  playButton.show();
  if (!fsOn) {
    chooseWidth();
    chooseHeight();
  }
  chooseFullScr();

}

function chooseWidth() {
  text("Set Screen Width", width/2-200, height/3.33);
  text(scrw, width/2, height/3.33);
  windowWInput = createInput();
  windowWInput.position(width/2+150,height/3.33 - 10);
  windowWInput.size(50);
  widthButton = setupButton(windowWInput.x + windowWInput.width, windowWInput.y,"Submit");
  widthButton.mousePressed(setWidth);
}

function setWidth() {
  var a = parseInt(windowWInput.value());
  if (a >= 600) {
    scrw = a;
  }
  resizeCanvas(scrw, scrh);
  reset();
}

function chooseHeight() {
  text("Set Screen Height", width/2-197, height/2.66);
  text(scrh, width/2, height/2.66);
  windowHInput = createInput();
  windowHInput.position(width/2+150,height/2.66 - 10);
  windowHInput.size(50);
  heightButton = setupButton(windowHInput.x + windowHInput.width, windowHInput.y,"Submit");
  heightButton.mousePressed(setHeight);
}

function setHeight() {
  var a = parseInt(windowHInput.value());
  if (a >= 400 && a <= 1500) {
    scrh = a;
  }
  resizeCanvas(scrw, scrh);
  reset();
}

function chooseFullScr() {
  text("Set Fullscreen", width/2-215, height/2.22);
  if (fsOn) {
    text("On", width/2-3, height/2.22);
  } else {
    text("Off", width/2-3, height/2.22);
  }
  fsButton = setupButton(width/2 + 150, height/2.22 - 10,"Switch");
  fsButton.mousePressed(setFullScr);
}

function setFullScr() {
  if (fsOn) {
    scrw = scrwprev;
    scrh = scrhprev;
    fsOn = false;
  } else {
    scrwprev = scrw;
    scrhprev = scrh;
    scrw = displayWidth-4;
    scrh = displayHeight-4;
    fsOn = true;
  }
  fullscreen(fsOn);
  resizeCanvas(scrw, scrh);
  reset();
}
