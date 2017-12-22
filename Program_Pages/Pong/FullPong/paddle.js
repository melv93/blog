function Paddle() {
  this.x;
  this.y = height/2;
  this.w = 15;
  this.h = 80;
  this.yspeed = 0;
  this.skill = (0.2*difficulty) + 0.7;
  // this.skill = 1;
  this.score = 0;
}

Paddle.prototype.show = function() {
  fill(255);
  stroke(255);
  rectMode(CENTER);
  rect(this.x, this.y, this.w, this.h);
  textSize(20);
  text(this.score, this.x, 30);
}

Paddle.prototype.update = function() {
  this.y = this.y + this.yspeed;

}

Paddle.prototype.edges = function() {
  if (this.y + this.h/2 > height){
    this.y -= 5;
  } else if (this.y - this.h/2 < 0) {
    this.y += 5;
  }
}

Paddle.prototype.setSpd = function(time) {
  var ydist = impactPt - this.y;
  var perfectyspd = ydist/time;
  var p = random(this.skill, this.skill+0.2);
  this.yspeed = constrain(p * perfectyspd,-5,5)
}
