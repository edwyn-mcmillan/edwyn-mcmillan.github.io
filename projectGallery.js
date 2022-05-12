var imageWidth = 0;
var imageHeight = 0;
var images = [];
var selector = 0;

var a = 100;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// cycle through images
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    if (selector == 0) {
      selector = images.length - 1;
    } else {
      selector--;
    }
  } else if (keyCode === RIGHT_ARROW) {
    if (selector == images.length - 1) {
      selector = 0;
    } else {
      selector++;
    }
  }
}

// zoom in and out
function mouseWheel(event) {
  if (event.deltaY < 0 && imageWidth < 2540) {
      imageWidth += 100;
      imageHeight += 100;
  } else if (event.deltaY > 0 && imageWidth > 375) {
    imageWidth -= 100;
    imageHeight -= 100;
  }
}

function preload() {
  img_1 = loadImage("./images/sketches/cluster1.png");
  img_2 = loadImage("./images/sketches/cluster2.png");
  img_3 = loadImage("./images/sketches/particleConnect.jpg");
  img_4 = loadImage("./images/sketches/particleConnect1.jpg");
  img_5 = loadImage("./images/sketches/randomGrid.jpg");
  img_6 = loadImage("./images/sketches/spuriousSplines1.png");
  img_7 = loadImage("./images/sketches/spuriousSplines.png");
  img_8 = loadImage("./images/sketches/tree.jpg");
  img_9 = loadImage("./images/sketches/tree1.jpg");
  img_10 = loadImage("./images/sketches/connect.jpg");
  img_11 = loadImage("./images/sketches/connect1.jpg");
  img_12 = loadImage("./images/sketches/connect2.jpg");
  images = [img_12, img_11, img_10, img_1, img_2, img_3, img_4, img_5, img_6, img_7, img_8, img_9];
}

function setup() {
  createCanvas(windowWidth, windowHeight, P2D);
  colorMode(RGB, 255, 255, 255, 100);
  background(24, 24, 24);
  textFont("Fira Code");

  if (windowWidth > windowHeight) {
      imageWidth = windowHeight / 1.3;
      imageHeight = windowHeight / 1.3;
  } else {
      imageWidth = windowWidth / 1.3;
      imageHeight = windowWidth /1.3;
  }

}

function draw() {
  background(24, 24, 24);
  translate(windowWidth / 2, windowHeight / 2);
  fill(255, 255, 244);
  stroke(255, 255, 244);
  rect(
    -20 - imageWidth / 2,
    -20 - imageHeight / 2,
    imageWidth + 40,
    imageHeight + 40
  );
  image(
    images[selector],
    0 - imageWidth / 2,
    0 - imageHeight / 2,
    imageWidth,
    imageHeight
  );

  // help text
  stroke(24, 24, 24, a);
  fill(24, 24, 24, a);
  rect(0 - imageWidth / 2, 0 - imageHeight / 2, imageWidth, imageHeight);
  a = a - 0.4;
  textSize(windowWidth / 55);
  fill(255, 255, 245, a);
  let arrowS = "← Use Arrow Keys →";
  let arrowW = textWidth(arrowS);
  let mouseS = "↕ Mouse Wheel Zoom ↕";
  let mouseW = textWidth(mouseS);
  text(arrowS, 0 - arrowW / 2, -40);
  text(mouseS, 0 - mouseW / 2, 40);
}
