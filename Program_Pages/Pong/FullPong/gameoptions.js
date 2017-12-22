var scoreInput;
var diffButton;
var vsButton;
var msButton;

function gameOptions() {
  clearButtons();
  background(0);
  textSize(50);
  text("game options", width/2, height/6.66);
  textSize(20);
  playButton.show();
  returnButton.show();
  chooseMaxScore();
  verses();
  selectDifficulty();
}



function selectDifficulty() {
  if (!pvp){
    text("Difficulty", width/2-230, height/2.22);
    if (difficulty === -1) {
      diff = "Easy";
    } else if (difficulty === 0) {
      diff = "Medium";
    } else if (difficulty === 1) {
      diff = "Hard";
    }
    text(diff, width/2, height/2.22);
  } else {
    text("Paddle Size", width/2-215, height/2.22);
    if (difficulty === -1) {
      diff = "Large";
    } else if (difficulty === 0) {
      diff = "Medium";
    } else if (difficulty === 1) {
      diff = "Small";
    }
    text(diff, width/2, height/2.22);
  }
  diffButton = setupButton(width/2+150,height/2.22 - 10,"Change");
  diffButton.mousePressed(changeDifficulty);
}

function changeDifficulty() {
  difficulty += 1;
  if (difficulty > 1) {
    difficulty = -1;
  }
  paddles[1].skill = 0.5 + (0.3 * difficulty);
  paddles[0].h = 80 - (difficulty * 20);
  paddles[1].h = 80 - (difficulty * 20);
  gameOptions();
}

function verses() {
  text("PvP or PvC", width/2-215, height/2.66);
  var pvOption;
  if (!pvp) {
    pvOption = "Player Vs Computer";
  } else {
    pvOption = "Player Vs Player";
  }
  text(pvOption, width/2, height/2.66);
  vsButton = setupButton(width/2+150,height/2.66 - 10,"Switch");
  vsButton.mousePressed(switchPv);
}

function switchPv() {
  if (pvp) {
    pvp = false;
  } else {
    pvp = true;
  }
  gameOptions();
}

function chooseMaxScore() {
  text("Set Max Score", width/2-200, height/3.33);
  text(maxScore, width/2, height/3.33);
  scoreInput = createInput();
  scoreInput.position(width/2+150,height/3.33 - 10);
  scoreInput.size(50);
  msButton = setupButton(scoreInput.x + scoreInput.width, scoreInput.y,"Submit");
  msButton.mousePressed(setMaxScore);
}

function setMaxScore() {
  if (parseInt(scoreInput.value())) {
    maxScore = parseInt(scoreInput.value());
  }
  gameOptions();
}
