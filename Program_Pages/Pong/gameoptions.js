function gameOptions() {
  clearButtons();
  background(0);
  textSize(50);
  text("game options", width/2, height/6.66);
  textSize(20);
  buttons[3].show();
  buttons[4].show();
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
  buttons[6].show();
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
  buttons[7].show();
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
  buttons[8].show();
  buttons[9].show();
}

function setMaxScore() {
  if (parseInt(buttons[8].value())) {
    maxScore = parseInt(buttons[8].value());
  }
  gameOptions();
}
