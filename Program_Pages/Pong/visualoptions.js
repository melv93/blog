function visualOptions() {
  clearButtons();
  background(0);
  textSize(50);
  text("visual options", width/2, height/6.66);
  textSize(20);

  buttons[4].show();
  buttons[3].show();
  chooseWidth();
  chooseHeight();
}

function chooseWidth() {
  text("Screen Width (600-900)", width/2-164, height/3.33);
  text(scrw, width/2, height/3.33);
  buttons[10].show();
  buttons[11].show();
}

function setWidth() {
  var a = parseInt(buttons[10].value());
  if (a >= 600 && a <= 900) {
    scrw = a;
  }
  resizeCanvas(scrw, scrh);
  reset();
}

function chooseHeight() {
  text("Screen Height (>350)", width/2-175, height/2.66);
  text(scrh, width/2, height/2.66);
  buttons[12].show();
  buttons[13].show();
}

function setHeight() {
  var a = parseInt(buttons[12].value());
  if (a >= 350 && a <= 1500) {
    scrh = a;
  }
  resizeCanvas(scrw, scrh);
  reset();
}
