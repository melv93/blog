var primes = [];
var prime = true;
var current = 6;
var p;
var three = false;
var five = false;
var numstring;
var splitstring;
var splitnum;

var limit = 1000000;


function setup() {
  var primescanvas = createCanvas(800,600);
  primescanvas.parent('primescanvas-holder');
  var p = 2;
  primes.push(p);
  p = 3;
  primes.push(p);
  p = 5;
  primes.push(p);
}

function draw() {
  background(167, 195, 242);
  p = 2*current-1
  splitting();
  threet();
  fivet();
  if (three || five) {
    console.log("not testing", p, three, five);
  } else {
    testPrime();
  }

  printPrime();
  three = false;
  five = false;
  current += 1;
  if (p > limit) {
    console.log("finished");
    noLoop();
  }
}

function splitting() {
  splitnum = [];
  numstring = nf(p);
  splitstring = split(numstring, "");
  for (var i = 0; i < splitstring.length; i++) {
    var a = int(splitstring[i]);
    splitnum.push(a);
  }
}

function threet() {
  var a = 0
  for (var i = 0; i < splitnum.length; i++) {
    a = a + splitnum[i];
  }
  var test = a/3;
  if (test === floor(test)) {
    three = true;
  }
}

function fivet() {
  if (splitnum[splitnum.length-1] === 5) {
    five = true;
  }
}

function testPrime() {
  console.log("testing", p)
  for (var i = 0; i < primes.length; i++) {
    var check = p/primes[i];
    if (check === floor(check)) {
      prime = false;
    }
    if (primes[i] > sqrt(p)) {
      break;
    }
  }
  pushPrime();
}

function pushPrime() {
  if (prime) {
    primes.push(p);
  } else {
    prime = true;
  }
}

function printPrime() {
  var x = 1;
  var y = 11;
  for (var i = 0; i < primes.length; i++) {
    text(primes[i], x, y);
    y += 11;
    if (y > height - 5) {
      y = 11;
      x += textWidth(primes[i])+10;
    }
  }
}
