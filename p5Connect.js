let total = 40;
let r;
const particles = [];

const loading = (p) => {
  class Particle {
    constructor(l_, index) {
      this.i = index;
      let velx = l_.x - p.windowWidth / 2;
      let vely = l_.y - p.windowHeight / 2;
      this.acc = p.createVector(velx, vely).normalize().mult(1);
      this.vel = p.createVector(velx, vely).normalize().mult(3);
      this.pos = l_;
      this.lifespan = 255.0;
      this.myc = (200, 100, 100, this.lifespan);
    }

    run() {
      this.update();
      this.acc.mult(0);
    }

    update() {
      this.vel.add(this.acc);
      this.pos.add(this.vel);
      this.lifespan -= p.random(0.4, 1.1);
    }

    connect(p_) {
      if (
        (this.acc.x < 0.1 && this.acc.y < 0.1) ||
        (this.acc.x > 0.1 && this.acc.y > 0.1) ||
        (this.acc.x < 0.1 && this.acc.y > 0.1) ||
        (this.acc.x < 0.1 && this.acc.y > 0.1) ||
        (this.acc.x < 0.1 && this.acc.y < 0.1) ||
        (this.acc.x > 0.1 && this.acc.y < 0.1)
      ) {
        let distance = this.pos.dist(p_.pos);
        let ld = p.map(this.lifespan, 255, 0, 20, 100);
        if (distance < 130 - this.lifespan / 3 && p_.pos !== this.pos) {
          p.stroke(10, 76, 150, ld);
          p.strokeWeight(0.3);
          p.line(this.pos.x, this.pos.y, p_.pos.x, p_.pos.y);
          p.strokeWeight(5);
          p.stroke(200, 10, 30, ld);
          p.point(this.pos.x, this.pos.y);
        }
      }
    }

    applyForce(f_) {
      this.acc.add(f_);
    }

    isDead() {
      if (this.lifespan < 0.0) {
        return true;
      } else {
        return false;
      }
    }
  }
  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight, p.P2D);
    p.colorMode(p.RGB, 255, 255, 255, 100);
    // p.noStroke();
    p.smooth(8);
    p.frameRate(60);

    for (let i = 0; i < total; i++) {
      r = Math.floor(p.random(30, 200));
      const x = r * p.cos(i);
      const y = r * p.sin(i);

      particles.push(
        new Particle(
          new p5.Vector(p.windowWidth / 2 + x, p.windowHeight / 2 + y),
          i
        )
      );
    }
  };

  p.draw = function () {
    p.background(24, 24, 24, 100);

    // if (particles.length < total) {
    //   let i = 0;
    //   particles.push(
    //     new Particle(new p5.Vector(p.windowWidth / 2, p.windowHeight / 2), i)
    //   );
    // }

    for (let i = particles.length - 1; i >= 0; i--) {
      let part = particles[i];
      for (let y = particles.length - 1; y >= 0; y--) {
        part.connect(particles[y]);
      }
      part.applyForce(p.createVector(p.random(-0.1, 0.1), p.random(-0.1, 0.1)));
      part.run();

      if (particles.length < 300) {
        let r = p.random(30, 200);
        let x = r * p.cos(i);
        let y = r * p.sin(i);
        if (p.frameCount % 100 === 0) {
          particles.push(
            new Particle(
              p.createVector(p.windowWidth / 2 + x, p.windowHeight / 2 + y),
              i
            )
          );
        }
      }

      if (part.isDead()) {
        particles.splice(i, 1);
      }
    }

    // saveFrame("pc-######.png");
  };
};

new p5(loading, "c2"); // invoke p5
