var syms = ["|", "r", "m", "f", "@", "]", "}", "x", "k", "o", "i", "w", ";", ":", "h", "[", "y", "#", "b", ".", "p", "v", "u", "=", "d", "{", "s", "n", "j", "a", "?", "z", "t", "-", "<", "c", "/", "~", "g", "-", "q", "e", "*", ">", "l"];
var nums = [0,1,2,3,4,5,6,7,8,9];
var alls;
var hashedpass;
function setup() {
  var numsstr = [nums.length];
  for (let i = 0; i < nums.length; i++) {
    numsstr[i] = str(nums[i]);
  }
  alls = splice(numsstr, syms, 0);
  hashedpass = '6j|m/cz175-5b*<szw4';
}

function passWord() {
  var testV = 1;
  var pass1 = prompt('Please Enter Your Password', ' ');
  while (testV < 3) {
    if (!pass1)
    history.go(-1);
    if (equivalent(hashedpass, pass1.toLowerCase())) {
      window.open('blog.html');
      break;
    }
    testV += 1;
    var pass1 = prompt('Access Denied - Password Incorrect, Please Try Again.', 'Password');
  }
  if (!equivalent(hashedpass, pass1.toLowerCase()) & testV == 3)
  history.go(-1);
  return " ";
}

function salt(p, n, iter, shif) {
  let passArray = split(p, "");
  if (!iter) {
    var iter = floor(random(100, 1000));
    var shif = floor(random(1, 10));
    var n = floor(random(5, 10));
  }

  passArray = code(passArray,iter,shif);

  let nint = [nf(n, 1, 0)]
  let salt1 = [];
  for (let i = 0; i < n; i++) {
    let l = random(alls);
    salt1=append(salt1,l);
  }
  passArray = splice(passArray, salt1, 0);
  passArray = splice(passArray, nint, 0);
  p = join(passArray, "");
  return p;
}

function code(pa, iter, shif) {
  for (let i = 0; i < iter; i++) {
    for (let j = 0; j < pa.length; j++) {
      let ind = alls.indexOf(pa[j]);
      pa[j] = alls[(ind + shif)%alls.length];
    }
  }
  append(pa, shif);
  splice(pa, iter, 0);

  return pa;
}

function read(hash) {
  var inf = [];
  let hasharray = split(hash, "");
  inf = append(inf, int(hasharray[0]));
  let a = subset(hasharray, inf[0] + 1, 3);
  let astr = join(a, "");
  inf = append(inf, int(astr));
  let b = int(hasharray[hasharray.length - 1]);
  inf = append(inf, b);
  return inf;
}

function equivalent(pass, passattempt) {
  let passinfo = read(pass);
  passattempt = salt(passattempt, passinfo[0], passinfo[1], passinfo[2]);
  pass = split(pass, "");
  passattempt = split(passattempt, "");
  passsub = subset(pass, passinfo[0] + 1);
  attemptsub = subset(passattempt, passinfo[0] + 1);
  passsub = join(passsub, "");
  attemptsub = join(attemptsub, "");
  if (passsub == attemptsub) {
    return true;
  } else {
    return false;
  }
}
