function Ball() {
  this.x = width/2;
  this.y = height/2;
  this.r = 5;
  this.xspeed = -2;
  this.yspeed = 1;
  this.speedMag = 1;
}

Ball.prototype.show = function() {
  fill(255);
  stroke(255);
  ellipse(this.x, this.y, this.r*2)
}

Ball.prototype.update = function() {
  this.x = this.x + this.xspeed;
  this.y = this.y + this.yspeed;

}

Ball.prototype.checkWalls = function(paddleslist) {
  if (this.y >= height || this.y <= 0) {
    this.yspeed *= -1;
    if (this.xspeed > 0) {
      impactPt = this.calcImpactPt();
    }
  }
  if (this.x >= width) {
    paddleslist[0].score += 1;
    if (!pvp) {
      impactPt = height/2;
      paddleslist[1].y = height/2;
    }
    this.resetBall();
  } else if (this.x < 0) {
    paddleslist[1].score += 1;
    if (!pvp) {
      paddleslist[1].y = height/2;
    }
    this.resetBall();
  }
}

Ball.prototype.resetBall = function() {
  this.x = width/2;
  this.xspeed = -2;
  this.speedMag = 1;
}

Ball.prototype.checkPaddlesLeft = function(p) {
  if (this.x < p.x + p.w/2 + this.r && this.x > p.x - p.w/2 + this.r) {
    if (this.y >= p.y - p.h/2 && this.y <= p.y + p.h/2) {
      var d = this.y - (p.y - p.h/2);
      var adeg = map(d,0,p.h,-45,45);
      var arad = radians(adeg);
      this.speedMag += 1;
      this.xspeed = this.speedMag * cos(arad);
      this.yspeed = this.speedMag * sin(arad);
      if (this.xspeed > 15) {
        this.xspeed = 15;
      }
      paddleSound.play();
      if (!pvp) {
        this.calcImpactPt();
      }
    }
  }
}

Ball.prototype.checkPaddlesRight = function(p) {
  if (this.x > p.x - p.w/2 - this.r && this.x < p.x + p.w/2 - this.r) {
    if (this.y >= p.y - p.h/2 && this.y <= p.y + p.h/2) {
      var d = this.y - (p.y - p.h/2);
      var adeg = map(d,0,p.h,-45,45);
      var arad = radians(adeg);
      this.speedMag += 1;
      this.xspeed =  -1 * this.speedMag * cos(arad);
      this.yspeed = this.speedMag * sin(arad);
      if (this.xspeed > 15) {
        this.xspeed = 15;
      }
      paddleSound.play();
      if (!pvp) {
        impactPt = height/2;
        var t = abs(width/(this.xspeed*2));
        paddles[1].setSpd(t);
      }
    }
  }
}

Ball.prototype.calcImpactPt = function() {
  var xdist = width-this.x;
  var t = xdist/this.xspeed;
  var i = this.y + (t*this.yspeed);
  if (i<0) {
    i = 0;
  } else if (i > height) {
    i = height;
  }
  impactPt = i;
  paddles[1].setSpd(t);
}
