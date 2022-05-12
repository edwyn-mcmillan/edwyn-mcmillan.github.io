var isLoaded = false;

const s = (p) => {
  var imageWidth = 0;
  var imageHeight = 0;
  var images = [];
  var selector = 0;

  var a = 100;

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  // cycle through images
  p.keyPressed = function () {
    if (p.keyCode === p.LEFT_ARROW) {
      if (selector == 0) {
        selector = images.length - 1;
      } else {
        selector--;
      }
    } else if (p.keyCode === p.RIGHT_ARROW) {
      if (selector == images.length - 1) {
        selector = 0;
      } else {
        selector++;
      }
    }
  };

  // zoom in and out
  p.mouseWheel = function (event) {
    if (event.deltaY < 0 && imageWidth < 2540) {
      imageWidth += 100;
    } else if (event.deltaY > 0 && imageWidth > 375) {
      imageWidth -= 100;
    }
  };

  p.mouseClicked = function () {
    if (p.mouseX >= p.windowWidth - p.windowWidth * 0.1) {
      if (selector == images.length - 1) {
        selector = 0;
      } else {
        selector++;
      }
    }

    if (p.mouseX <= p.windowWidth * 0.1 && p.mouseY > p.windowHeight * 0.2) {
      if (selector == 0) {
        selector = images.length - 1;
      } else {
        selector--;
      }
    }
  };

  p.preload = function () {
    img_1 = p.loadImage("./images/1.png");
    img_2 = p.loadImage("./images/2.png");
    img_3 = p.loadImage("./images/7.jpg");
    img_4 = p.loadImage("./images/3.png");
    img_5 = p.loadImage("./images/9.jpg");
    img_6 = p.loadImage("./images/6.jpg");
    img_7 = p.loadImage("./images/8.jpg");
    img_8 = p.loadImage("./images/4.png");
    img_9 = p.loadImage("./images/5.png");
    images = [img_1, img_2, img_3, img_4, img_5, img_6, img_7, img_8, img_9];
  };

  p.setup = function () {
    isLoaded = true;
    p.createCanvas(p.windowWidth, p.windowHeight, p.P2D);
    p.colorMode(p.RGB, 255, 255, 255, 100);
    p.background(24, 24, 24);
    p.textFont("Fira Code");

    imageWidth = p.windowWidth / 1.3;
  };

  p.draw = function () {
    p.background(24, 24, 24);
    imageHeight = imageWidth * 0.675;
    p.translate(p.windowWidth / 2, p.windowHeight / 2);

    p.image(
      images[selector],
      0 - imageWidth / 2,
      0 - imageHeight / 2,
      imageWidth,
      imageHeight
    );

    // help text
    p.stroke(24, 24, 24, a);
    p.fill(24, 24, 24, a);
    p.rect(0 - imageWidth / 2, 0 - imageHeight / 2, imageWidth, imageHeight);
    a = a - 0.4;
    p.textSize(p.windowWidth / 55);
    p.fill(255, 255, 245, a);
    let arrowS = "← Use Arrow Keys →";
    let arrowW = p.textWidth(arrowS);
    let mouseS = "↕ Mouse Wheel Zoom ↕";
    let mouseW = p.textWidth(mouseS);
    p.text(arrowS, 0 - arrowW / 2, -40);
    p.text(mouseS, 0 - mouseW / 2, 40);

    p.fill(255, 255, 245, 100);
    p.textSize(p.windowWidth / 70);
    p.text(">", p.windowWidth * 0.45, 0);
    p.text("<", -p.windowWidth * 0.45, 0);
  };
};

const loading = (p) => {
  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight, p.P2D);
    p.colorMode(p.RGB, 255, 255, 255, 100);
    p.noStroke();

    p.frameRate(30);
  };

  p.draw = function () {
    p.background(24, 24, 24);
    p.translate(p.windowWidth / 2 - 100, p.windowHeight / 2);

    for (let i = 0; i < 1; i += 1 / 16.0) {
      var barheight = inOutSin(triangleWave(timeLoop(60, i * 60))) * 50;
      p.strokeWeight(4);
      p.stroke(255, 255, 245);
      p.point(i * 200, barheight);
    }

    if (isLoaded) {
      p.remove();
    }
  };

  timeLoop = function (totalFrames, offset) {
    return ((p.frameCount + offset) % totalFrames) / totalFrames;
  };

  triangleWave = function (t) {
    return t < 0.5 ? t * 2 : 2 - t * 2;
  };

  inOutSin = function (t) {
    return 0.5 - p.cos(p.PI * t) / 2;
  };
};

new p5(s, "c1"); // invoke p5
new p5(loading, "c2"); // invoke p5
