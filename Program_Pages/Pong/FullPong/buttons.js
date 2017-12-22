function setupButton(x,y,text) {
  var temp = createButton(text);
  temp.position(x,y);
  return temp;
}

function clearAllButtons() {
  clearButtons();
}


function clearButtons() {
  if (optionsButton) {
    optionsButton.hide();
  }
  if (returnMButton) {
    returnMButton.hide();
  }
  if (msButton) {
    msButton.hide();
  }
  if (scoreInput) {
    scoreInput.hide();
  }
  if (diffButton) {
    diffButton.hide();
  }
  if (vsButton) {
    vsButton.hide();
  }
  if (returnButton) {
    returnButton.hide();
  }
  if (gameButton) {
    gameButton.hide();
  }
  if (visualButton) {
    visualButton.hide();
  }
  if (soundButton) {
    soundButton.hide();
  }
  if (playButton) {
    playButton.hide();
  }
  if (windowWInput) {
    windowWInput.hide();
  }
  if (widthButton) {
    widthButton.hide();
  }
  if (windowHInput) {
    windowHInput.hide();
  }
  if (heightButton) {
    heightButton.hide();
  }
  if (fsButton) {
    fsButton.hide();
  }
  if (masterVolSlider) {
    masterVolSlider.hide();
  }
  if (musicSlider) {
    musicSlider.hide();
  }
  if (sfxSlider) {
    sfxSlider.hide();
  }
}
