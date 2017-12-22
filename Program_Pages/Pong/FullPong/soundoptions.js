var themeSound;
var paddleSound;
var winSound;
var winSoundPlayed = false;
var masterVolSlider;
var vol = 0.5;
var musicVol = 1;
var sfxVol = 1;
var musicSlider;
var musicOn = true;
var sfxSlider;
var sfxOn = true;


function soundOptions() {
  clearButtons();
  background(0);
  textSize(50);
  text("sound options", width/2, height/6.66);
  textSize(20);
  returnButton.show();
  playButton.show();
  changeVol();
  musicChoose();
  sfxChoose();
}

function soundSetup() {
  if (masterVolSlider.value() != vol){
    vol = masterVolSlider.value();
  }
  if (musicSlider.value() != musicVol){
    musicVol = musicSlider.value();
    if (musicVol === 0) {
      musicOn = false;
    } else {
      musicOn = true;
    }
  }
  if (sfxSlider.value() != sfxVol){
    sfxVol = sfxSlider.value();
    if (sfxVol === 0) {
      sfxOn = false;
    } else {
      sfxOn = true;
    }
  }
  themeSound.setVolume(musicVol*vol/2);
  paddleSound.setVolume(sfxVol*vol/5);
  winSound.setVolume(sfxVol*vol);
  soundOptions();
}

function changeVol() {
  text("Master Volume", width/2-200, height/3.33);
  var v = floor(vol*100);
  text(v, width/2, height/3.33);
  masterVolSlider = createSlider(0,1,vol,0.01);
  masterVolSlider.position(width/2 + 100, height/3.33-10);
  masterVolSlider.changed(soundSetup);
}

function musicChoose() {
  text("Music", width/2-200, height/2.66);
  if (musicOn) {
    var a = floor(musicVol * 100);
  } else {
    var a = "Off";
  }
  text(a, width/2, height/2.66);
  musicSlider = createSlider(0,1,musicVol,0.01);
  musicSlider.position(width/2 + 100, height/2.66-10);
  musicSlider.changed(soundSetup);
}

function sfxChoose() {
  text("Sound Effects", width/2-200, height/2.22);
  if (sfxOn) {
    var a = floor(sfxVol * 100);
  } else {
    var a = "Off";
  }
  text(a, width/2, height/2.22);
  sfxSlider = createSlider(0,1,sfxVol,0.01);
  sfxSlider.position(width/2 + 100, height/2.22-10);
  sfxSlider.changed(soundSetup);
}

function playTheme() {
  themeSound.play();
}
