const NUM_FRAMES = 38;

let marginX, marginY; 
let pg;
let myFont;

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
  let gh = constrain(graphicHeight, 60,  80);
  pg = createGraphics(gw, gh);


  background(24, 24, 24);


  // ---- noise waves ----
  let t = 1.0 * frameCount / NUM_FRAMES;
  let m = 115;

  marginX = windowWidth / 4.2;
  marginY = windowHeight / 2.5;

  stroke(255, 255, 244, 70);
  strokeWeight(1.5);
  for (let i = 0; i < m; i++){
    for (let j = 0; j < m; j++){
      let x = map(i, 0, m - 1, marginX, windowWidth - marginX);
      let y = map(j, 0, m - 1, marginY, windowHeight - marginY)
      let dx = 20.0 * periodic(t - offset(x, y), 1, x, y);
      let dy = 20.0 * periodic(t - offset(x, y), 123, x, y);
      point(x + dx, y + dy);
    }
  }

  // ---- heading graphic ----
  pg.background(24, 24, 24);
  pg.fill(255, 255, 244);
  pg.textFont(myFont);
  let fs = windowWidth;
  let fontSize = map(fs, 0, windowWidth, 16, 26)
  pg.textSize(fontSize);
  pg.textAlign(CENTER, CENTER);
  pg.text("Edwyn McMillan", gw / 2, gh / 2);

  if (windowWidth >= windowHeight) {
    image(pg, width / 20, height / 20);
  } else {
    image(pg, (width / 2) - (gw / 2), height / 20);
  }

}

function periodic(p_, seed_, x_, y_) {
  // loop through perlin noise space
  let radius = 1.3;
  let scale = 0.018;
  return 1.0 * noise.noise4D(seed_ + radius * cos(TWO_PI * p_), radius * sin(TWO_PI * p_), scale * x_, scale * y_);
}

function offset(x_, y_) {
  return 0.015 * dist(x_, y_, windowWidth / 2, windowHeight / 2);
}