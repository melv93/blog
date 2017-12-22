var buttons = [];

function createButtons() {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].remove();
  }
  buttons = [];
  let optionsButton = createButton("Options");
  let gameButton = createButton("Game Options");
  let visualButton = createButton("Visual Options");
  let playButton = createButton("Play Game");
  let returnButton = createButton("Return to Options");
  let returnMButton = createButton("Return to Menu");
  let diffButton = createButton("Change");
  let vsButton = createButton("Switch");
  let scoreInput = createInput();
  let msButton = createButton("Submit");
  let windowWInput = createInput();
  let widthButton = createButton("Submit");
  let windowHInput = createInput();
  let heightButton = createButton("Submit");

  optionsButton.style("font-size","20px");
  optionsButton.size(150,50);
  playButton.style("font-size","20px");
  playButton.size(150,50);
  scoreInput.size(50);
  windowWInput.size(50);
  windowHInput.size(50);

  optionsButton.position(width/2-75, height/2);
  gameButton.position(width/2-51, height/3);
  visualButton.position(width/2-51, 5*height/12);
  playButton.position(width/2-75, 5*height/6);
  returnButton.position(10, 40);
  returnMButton.position(10, 10);
  diffButton.position(width/2+150,height/2.22 - 10);
  vsButton.position(width/2+150,height/2.66 - 10);
  scoreInput.position(width/2+150,height/3.33 - 10);
  msButton.position(scoreInput.x + scoreInput.width, scoreInput.y);
  windowWInput.position(width/2+150,height/3.33 - 10);
  widthButton.position(windowWInput.x + windowWInput.width, windowWInput.y);
  windowHInput.position(width/2+150,height/2.66 - 10);
  heightButton.position(windowHInput.x + windowHInput.width, windowHInput.y);

  optionsButton.mousePressed(options);
  gameButton.mousePressed(gameOptions);
  visualButton.mousePressed(visualOptions);
  playButton.mousePressed(playGame);
  returnButton.mousePressed(options);
  returnMButton.mousePressed(menu);
  diffButton.mousePressed(changeDifficulty);
  vsButton.mousePressed(switchPv);
  msButton.mousePressed(setMaxScore);
  widthButton.mousePressed(setWidth);
  heightButton.mousePressed(setHeight);

  buttons.push(optionsButton);
  buttons.push(gameButton);
  buttons.push(visualButton);
  buttons.push(playButton);
  buttons.push(returnButton);
  buttons.push(returnMButton);
  buttons.push(diffButton);
  buttons.push(vsButton);
  buttons.push(scoreInput);
  buttons.push(msButton);
  buttons.push(windowWInput);
  buttons.push(widthButton);
  buttons.push(windowHInput);
  buttons.push(heightButton);
  clearButtons();
}


function clearButtons() {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].hide();
  }
}
