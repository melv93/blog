var matrices = new Array(100);
var inputs = [];
var rowsinput;
var colsinput;
var inpbutton;
var texts = 20;
var findInverse;
var singular = false;
var notSquare = false;
var lpos;
var tpos;
var currentrows;
var currentcols;
var char1 = "M";
var currentWindowWidth;
var currentWindowHeight;
var textSlider;
var matrixcanvas;
var yoffset;

function setup() {
  currentWindowHeight = windowHeight*0.8;
  currentWindowWidth = windowWidth*0.8;
  matrixcanvas = createCanvas(currentWindowWidth,currentWindowHeight);
  matrixcanvas.parent('matrixsketch-holder');
  yoffset = matrixcanvas.position().y
  rowsinput = createInput('3');
  colsinput = createInput('3');
  inpbutton = createButton("Create");
  textAlign(LEFT, TOP);
  reset();
}

function reset() {
  rowsinput.position(8*texts, 100 + yoffset);
  rowsinput.size(texts*2 + 10, texts*2);
  rowsinput.style("font-size", texts + "px");
  rowsinput.style("textAlign", "CENTER");
  colsinput.position(rowsinput.position().x + rowsinput.width + texts + 5, rowsinput.position().y);
  colsinput.size(rowsinput.width, rowsinput.height);
  colsinput.style("font-size", texts + "px");
  colsinput.style("textAlign", "CENTER");
  inpbutton.position(colsinput.position().x+colsinput.width, colsinput.position().y);
  inpbutton.size(texts*5, colsinput.height);
  inpbutton.style("font-size", texts + "px");
  inpbutton.style("textAlign", "CENTER");
  inpbutton.mousePressed(newInputMatrix);
  lpos = rowsinput.position().x;
  tpos = rowsinput.position().y + rowsinput.height - 6;
  newInputMatrix();
}

function draw() {
  background(200);
  textSize(texts*2)
  fill(0);
  text("x", lpos + rowsinput.width + 3, tpos - yoffset - 2*(texts + 1.5));
  text("M = ", lpos - 6*texts, tpos - yoffset - texts + 5 + 2*texts * currentrows);
  for (let i = 0; i < matrices.length; i++) {
    if (matrices[i] != null) {
      displaymatrix(matrices[i]);
    }
  }
  if (notSquare) {
    let notSquareText = "You cannot find the inverse of a non-square matrix.";
    text(notSquareText, lpos, tpos - yoffset + 6*texts + 4*texts*currentrows);
  } else if (singular) {
    let singularText = "Determinant of M = 0 so M is singular.";
    text(singularText, lpos, tpos - yoffset + 6*texts + 4*texts*currentrows);
  }
  showBrackets(lpos, tpos - yoffset + texts + 5, currentrows, currentcols)
}

function showBrackets(posx, posy, rows, cols) {
  push();
  stroke(0);
  let hei = (rows - 1)*4*texts + rowsinput.height;
  let wid = (cols - 1)*4*texts + colsinput.width;
  noFill();
  strokeWeight(5)
  p0 = {x: posx - 10, y: posy};
  p1 = {x: posx - 10, y: posy + hei};
  p2 = {x: posx + wid, y: posy};
  p3 = {x: posx + wid, y: posy + hei};
  let offset = 200;
  curve(p0.x + offset, p0.y, p0.x, p0.y, p1.x, p1.y, p1.x + offset, p1.y);
  curve(p2.x - offset, p2.y, p2.x, p2.y, p3.x, p3.y, p3.x - offset, p3.y);
  pop();
}

function newInputMatrix() {
  matrices[0] = null;
  singular = false;
  notSquare = false;
  if (findInverse instanceof p5.Element) {
    findInverse.remove();
  }
  for (let l = 0; l < inputs.length; l++) {
    inputs[l].remove();
  }
  inputs = [];
  let rows = parseInt(rowsinput.value());
  let cols = parseInt(colsinput.value());
  currentrows = rows;
  currentcols = cols;

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      if (i*3 + j === 4) {
        var inp = createInput(-1*(i*3+j+1));
      } else {
        var inp = createInput(i*3+j+1);
      }
      inp.size(2*texts, 2*texts);
      inp.style("font-size", texts + "px");
      inp.style("textAlign", "CENTER");
      inp.position(lpos + 4*texts*i, tpos + texts + 5 + 4*texts*j);
      if (inp.position().y + 6*texts > currentWindowHeight) {
        currentWindowHeight = inp.position().y + 8*texts;
        resizeCanvas(windowWidth, currentWindowHeight);
        console.log("canvas resize")
      }
      inputs.push(inp);
    }
  }
  matrix = create2DArray(rows, cols);
  findInverse = createButton("Find Inverse");
  findInverse.position(lpos, tpos + texts + 5 + 4*texts*rows);
  findInverse.size(8*texts, colsinput.height);
  findInverse.style("font-size", texts + "px");
  findInverse.style("textAlign", "CENTER");
  findInverse.mousePressed(setMatrix);
}

function setMatrix() {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      matrix[i][j] = parseInt(inputs[matrix.length*j + i].value());
    }
  }
  let inv = inverse(matrix);
  matrices[0] = inv;
}

function displaymatrix(m) {
  noStroke();
  textSize(texts);
  for (let i = 0; i < m.length; i++) {
    for (let j = 0; j < m[0].length; j++) {
      let t = m[i][j].toFixed(2);
      text(t, width*0.5 + lpos + i*texts*4, tpos - yoffset + 1.5*texts + 5 + j*texts*4);
    }
  }
  showBrackets(width*0.5 + lpos, tpos - yoffset + texts + 5,m.length, m[0].length);
  textSize(2*texts);
  text("M  = ", width*0.5 + lpos - 7*texts, tpos - yoffset - texts + 5 + 2*texts * currentrows);
  textSize(texts);
  text("-1", width*0.5 + lpos - 5.3*texts, tpos - yoffset - texts + 5 + 2*texts * currentrows);
}

function matrixadd(m1, m2) {
  if (m1.length != m2.length || m1[0].length != m2[0].length) {
    console.log("Incompatable");
  } else {
    let m = create2DArray(m1.length, m1[0].length)
    for (let i = 0; i < m1.length; i++) {
      for (let j = 0; j < m2[0].length; j++) {
        m[i][j] = ((1000*m1[i][j]) + (1000*m2[i][j]))/1000;
      }
    }
    return m;
  }
}

function matrixmultiply(m1, m2) {
  if (m1[0].length != m2.length) {
    console.log("Incompatable");
  } else {
    let m = create2DArray(m1.length, m2[0].length)
    for (let rowindex = 0; rowindex < m1.length; rowindex++) {
      for (let colindex = 0; colindex < m2[0].length; colindex++) {
        let s = 0;
        for (let i = 0; i < m2.length; i++) {
          sd = (1000*m1[rowindex][i]*m2[i][colindex])/1000;
          s += (1000*sd)/1000;
        }
        m[rowindex][colindex] = s;
      }
    }
    return m;
  }
}

function inverse(m) {
  if (m.length != m[0].length) {
    notSquare = true;
  } else {
    notSquare = false;
    let d = det(m);
    if (d === 0) {
      singular = true;
    } else {
      singular = false;
      let c = cofactormatrix(m);
      let t = transpose(c);
      for (let i = 0; i < m.length; i++) {
        for (let j = 0; j < m.length; j++) {
          t[i][j] = t[i][j] / d;
          if (t[i][j] === -0) {
            t[i][j] = 0;
          }
        }
      }
      return t;
    }
  }
}

function det(m) {
  let d = 0;
  if (m.length === 1) {
    d = m[0][0];
  } else {
    let cof = order(m);
    for (let i = 0; i < m.length; i++) {
      let currentminor = minor(m, i, 0);
      d += cof[i][0] * currentminor;
    }
  }
  return d;
}

function cofactormatrix(m) {
  let ctemp = create2DArray(m.length);
  let c;
  for (let i = 0; i < m.length; i++) {
    for (let j = 0; j < m.length; j++) {
      ctemp[i][j] = minor(m, i, j);
      c = order(ctemp);
    }
  }
  return c;
}

function order(m) {
  let c = create2DArray(m.length);
  let n = negativesArray(m.length);
  for (let i = 0; i < m.length; i++) {
    for (let j = 0; j < m.length; j++) {
      c[i][j] = m[i][j] * n[i][j];
    }
  }
  return c;
}

function minor(m, iindex, jindex) {
  let p;
  let pmatrix = minormatrix(m, iindex, jindex);
  p = det(pmatrix);
  return p;
}

function minormatrix(m, iindex, jindex) {
  c = create2DArray(m.length - 1);
  var ci = 0;
  for (let i = 0; i < m.length; i++) {
    var cj = 0;
    if (i != iindex) {
      for (let j = 0; j < m.length; j++) {
        if (j != jindex) {
          c[ci][cj] = m[i][j];
          cj++;
        }
      }
      ci++;
    }
  }
  return c;
}

function create2DArray(rows, cols) {
  if (!cols) {
    cols = rows;
  }
  let a = new Array(rows);
  for (let i = 0; i < rows; i++) {
    a[i] = new Array(cols);
  }
  return a;
}

function transpose(m) {
  var b = create2DArray(m.length);
  for (let i = 0; i < m.length; i++) {
    for (let j = 0; j < m.length; j++) {
      b[j][i] = m[i][j];
    }
  }
  return b;
}

function negativesArray(n) {
  let m = create2DArray(n);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      m[i][j] = pow(-1, i+j);
    }
  }
  return m;
}
