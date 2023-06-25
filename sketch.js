const NUM_FRAMES = 38;

let marginX, marginY;
let pg;
let myFont;

const NAME = "Edwyn McMillan";
let printName = NAME;

const specialChar = [
  "▣",
  "◁",
  "▶",
  "♠",
  "☎",
  "〒",
  "の",
  "ō",
  "▲",
  "↕",
  "▒",
  "1",
  "0",
  "E",
  "d",
  "w",
  "y",
  "n",
  " ",
  "M",
  "c",
  "M",
  "i",
  "a",
  "n",
];

const nameArr = [
  "E",
  "d",
  "w",
  "y",
  "n",
  " ",
  "M",
  "c",
  "M",
  "i",
  "l",
  "l",
  "a",
  "n",
];

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function preload() {
  myFont = loadFont("./font/FIRACODE-LIGHT.TTF");
}

function setup() {
  createCanvas(windowWidth, windowHeight, P2D);
  smooth(8);
  colorMode(RGB);
  background(24, 24, 24);

  noise = new OpenSimplexNoise(Date.now());
}

function draw() {
  // ---- set heading graphic size ----
  let graphicWidth = windowWidth / 4;
  let graphicHeight = windowHeight / 17;
  let gw = constrain(graphicWidth, 300, 410);
  let gh = constrain(graphicHeight, 60, 80);
  pg = createGraphics(gw, gh);

  background(24, 24, 24);

  // ---- noise waves ----
  let t = (1.0 * frameCount) / NUM_FRAMES;
  let m = 90;

  marginX = windowWidth / 4.2;
  marginY = windowHeight / 2.5;

  stroke(255, 255, 244, 80);
  strokeWeight(1.8);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < m; j++) {
      let x = map(i, 0, m - 1, marginX, windowWidth - marginX);
      let y = map(j, 0, m - 1, marginY, windowHeight - marginY);
      let dx = 20.0 * periodic(t - offset(x, y), 1, x, y);
      let dy = 20.0 * periodic(t - offset(x, y), 200, x, y);
      point(x + dx, y + dy);
    }
  }

  // ---- heading graphic ----
  pg.background(24, 24, 24);
  pg.fill(255, 255, 244);
  pg.textFont(myFont);
  let fs = windowWidth;
  let fontSize = map(fs, 0, windowWidth, 16, 26);
  pg.textSize(fontSize);
  pg.textAlign(CENTER, CENTER);

  let mSpeed = abs(winMouseX - pwinMouseX);
  const charIndex = Math.floor(random(NAME.length));

  if (mSpeed < 1) {
    if (printName != NAME) {
      let opName = printName.split("");
      opName[charIndex] = NAME[charIndex];
      printName = opName.join("");
    }
    pg.text(printName, gw / 2, gh / 2);
  } else {
    let nameArr = printName.split("");
    nameArr[charIndex] = specialChar[Math.floor(random(specialChar.length))];
    printName = nameArr.join("");

    pg.text(printName, gw / 2, gh / 2);
  }

  if (windowWidth < windowHeight) {
    image(pg, width / 100, height / 40);
  } else {
    image(pg, width / 2 - gw / 2, height / 40);
  }
}

function periodic(p_, seed_, x_, y_) {
  // loop through perlin noise space
  let radius = map(windowWidth, 545, 2560, 0.6, 0.2);
  let scale = 0.018;
  return (
    1.0 *
    noise.noise4D(
      seed_ + radius * cos(TWO_PI * p_),
      radius * sin(TWO_PI * p_),
      scale * x_,
      scale * y_
    )
  );
}

function offset(x_, y_) {
  return 0.013 * dist(x_, y_, windowWidth / 2, windowHeight / 2);
}
