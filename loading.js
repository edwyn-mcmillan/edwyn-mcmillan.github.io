const loading = (p) => {
  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight, p.P2D);
    p.colorMode(p.RGB, 255, 255, 255, 100);
    p.noStroke();
    p.smooth(8);

    p.frameRate(60);
  };

  p.draw = function () {
    p.background(24, 24, 24);
    let count;
    let barHeight;
    p.translate(p.windowWidth * 0.015, p.windowHeight / 1.4);
    for (let i = 0; i < 1; i += 1 / count) {
      count = 32;
      barHeight = inOutSin(triangleWave(timeLoop(60, i * 60))) * (p.windowHeight * 2);
      p.strokeWeight(4);
      p.stroke(255, 255, 245, 35);
      p.point(i * p.windowWidth, barHeight);
      p.point(i * p.windowWidth, barHeight * 0.1);
      p.point(i * p.windowWidth, barHeight * 2);
      p.point(i * p.windowWidth, barHeight / 2);
      p.point(i * p.windowWidth, -barHeight);
      p.point(i * p.windowWidth, -barHeight * 2);
      p.point(i * p.windowWidth, -barHeight / 2);
    }
  };

  timeLoop = function (totalFrames, offset) {
    return ((p.frameCount / 15 + offset) % totalFrames) / totalFrames;
  };

  triangleWave = function (t) {
    return t < 0.5 ? t * 2 : 2 - t * 2;
  };

  inOutSin = function (t) {
    return 0.5 - p.cos(p.PI * t) / 2;
  };
};

new p5(loading, "c2"); // invoke p5
