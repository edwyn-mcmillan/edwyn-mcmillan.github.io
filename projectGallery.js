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
      imageHeight += 100;
    } else if (event.deltaY > 0 && imageWidth > 375) {
      imageWidth -= 100;
      imageHeight -= 100;
    }
  };

  p.preload = function () {
    img_1 = p.loadImage("./images/sketches/cluster1.jpg");
    img_2 = p.loadImage("./images/sketches/cluster2.jpg");
    img_3 = p.loadImage("./images/sketches/particleConnect.jpg");
    img_4 = p.loadImage("./images/sketches/particleConnect1.jpg");
    img_5 = p.loadImage("./images/sketches/randomGrid.jpg");
    img_6 = p.loadImage("./images/sketches/spuriousSplines1.png");
    img_7 = p.loadImage("./images/sketches/spuriousSplines.png");
    img_8 = p.loadImage("./images/sketches/tree.jpg");
    img_9 = p.loadImage("./images/sketches/tree1.jpg");
    img_10 = p.loadImage("./images/sketches/connect.jpg");
    img_11 = p.loadImage("./images/sketches/connect1.jpg");
    img_12 = p.loadImage("./images/sketches/connect2.jpg");
    images = [
      img_12,
      img_11,
      img_10,
      img_1,
      img_2,
      img_3,
      img_4,
      img_5,
      img_6,
      img_7,
      img_8,
      img_9,
    ];
  };

  p.setup = function () {
    isLoaded = true;
    p.createCanvas(p.windowWidth, p.windowHeight, p.P2D);
    p.colorMode(p.RGB, 255, 255, 255, 100);
    p.background(24, 24, 24);
    p.textFont("Fira Code");

    if (p.windowWidth > p.windowHeight) {
      imageWidth = p.windowHeight / 1.3;
      imageHeight = p.windowHeight / 1.3;
    } else {
      imageWidth = p.windowWidth / 1.3;
      imageHeight = p.windowWidth / 1.3;
    }
  };

  p.draw = function () {
    p.background(24, 24, 24);
    p.translate(p.windowWidth / 2, p.windowHeight / 2);
    // fill(255, 255, 244);
    // stroke(255, 255, 244);
    // rect(
    //   -20 - imageWidth / 2,
    //   -20 - imageHeight / 2,
    //   imageWidth + 40,
    //   imageHeight + 40
    // );
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
  };
};

const loading = (p) => {
  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight, p.P2D);
    p.ellipseMode(p.RADIUS);
    p.colorMode(p.HSB, 100, 100, 100);
    p.noStroke();
  };

  p.draw = function () {
    p.background(24, 24, 24);
    p.translate(p.windowWidth / 2, p.windowHeight / 2);

    var count = 36;
    for (let i = 0; i < count; i++) {
      var rotation = p.map(i, 0, count, 0, 2 * p.PI);
      var phi = p.map(i, 0, count, 0, 4 * p.PI);
      var rx = 200;
      var ry = rx * p.abs(p.cos(rotation) * 0.5);
      var radius = 7;
      var h = p.map(i, 0, count, 0, 200) % 100;
      var s = 90;
      var b = 70;

      p.push();
      p.rotate(rotation);

      var smoothCount = 6;
      for (let j = 0; j < smoothCount; j++) {
        var deltaTheta = p.PI / 150;
        var theta = p.radians(2.5 * p.frameCount) + j * deltaTheta;
        var x = rx * p.cos(theta - phi);
        var y = ry * p.sin(theta - phi);
        var alpha = 100 * p.sin(p.map(j, 0, smoothCount, 0, p.PI));

        p.fill(h, s, b, alpha);
        p.ellipse(x, y, radius, radius);
      }
      p.pop();
    }
    if (isLoaded) {
      p.remove();
    }
  };
};

new p5(s, "c1"); // invoke p5
new p5(loading, "c2"); // invoke p5
