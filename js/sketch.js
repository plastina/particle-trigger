let particles = [];
// const numParticles = 100;
const particleTypes = ["electron", "positron", "proton", "antiproton", "muon", "photon"];

function setup() {
  createCanvas(windowWidth, windowHeight);
  const particleButtons = selectAll(".particleButton");
  particleButtons.forEach(button => {
    button.mousePressed(() => fireParticle(button.elt.dataset.particle));

  });
}

function draw() {
  background(1, 0);
  drawParticles();
}

function fireParticle(particleType) {
  let xPosition;
  let yPosition;
  let xVelocity;
  let yVelocity;
  let Xacceleration;
  let Yacceleration;

  if (particleType === "electron") {
    xPosition = 70;
    yPosition = 400;
    xVelocity = 10;
    yVelocity = 2;
    Xacceleration = 1;
    Yacceleration = -0.3;

  } else if (particleType === "positron") {
    xPosition = 70;
    yPosition = 400;
    xVelocity = 10;
    yVelocity = -1;
    Xacceleration = 1;
    Yacceleration = 0.3;

  } else if (particleType === "proton") {
    xPosition = 70;
    yPosition = 400;
    xVelocity = 10;
    yVelocity = 0;
    Xacceleration = 0.5;
    Yacceleration = 0;

  } else if (particleType === "antiproton") {
    xPosition = 70;
    yPosition = 400;
    xVelocity = 10;
    yVelocity = 1;

  } else if (particleType === "muon") {
    xPosition = 70;
    yPosition = 400;
    xVelocity = 5;
    yVelocity = 1;
    Xacceleration = 1;
    Yacceleration = 0;

  } else if (particleType === "photon") {
    xPosition = 70;
    yPosition = 400;
    xVelocity = 1;
    yVelocity = 0;
    // Xacceleration = 1;
    // Yacceleration = 0.5;
  }

  let particle = {
    type: particleType,
    position: createVector(xPosition, yPosition),
    velocity: createVector(xVelocity, yVelocity),
    acceleration: createVector(Xacceleration, Yacceleration)
  };

  particles.push(particle);
}

function drawParticles() {
  noStroke();

  for (let i = 0; i < particles.length; i++) {
    let particle = particles[i];
    particle.velocity.x += particle.acceleration.x;

    if (particle.type === "electron" && particle.position.x > 500) {
      particle.acceleration.x = 0;
      particle.acceleration.y = 0;
      particle.velocity.y = -5;
      particle.velocity.x = 15;


      if (particle.position.x > 1000) {
        particles.splice(i, 1);
        i--;
      }

    }

    if (particle.type === "positron" && particle.position.x > 500) {
      particle.acceleration.x = 0;
      particle.acceleration.y = 5;
      particle.velocity.y = -1;
      particle.velocity.x = 15;


      if (particle.position.x > 1000) {
        particles.splice(i, 1);
        i--;
      }

    }

    if (particle.type === "proton" && particle.position.x > 500) {
      particle.velocity.x = 3;
      particle.velocity.y = 1;
      particle.acceleration.x = 5;
      particle.acceleration.y = -0.5;


      if (particle.position.x > 1100) {
        particles.splice(i, 1);
        i--;
      }
    }

    if (particle.type === "antiproton" && particle.position.x > 500) {
      particle.velocity.x = 3;
      particle.velocity.y = -1;
      particle.acceleration.x = 5;
      particle.acceleration.y = -0.5;


      if (particle.position.x > 1100) {
        particles.splice(i, 1);
        i--;
      }
    }

    if (particle.type === "photon" && particle.position.x > 500) {
      particle.velocity.x = 20;


      if (particle.position.x > 1000) {
        particles.splice(i, 1);
        i--;
      }
    }


    particle.velocity.y += particle.acceleration.y;

    // Use a classe CSS com base no tipo de partícula
    fill(getParticleColor(particle.type));
    ellipse(particle.position.x, particle.position.y, 10, 10);

    particle.position.add(particle.velocity);

    // if (particle.position.y > height) {
    //   particles.splice(i, 1);
    //   i--;
    // }
  }
}

function getParticleColor(particleType) {
  switch (particleType) {
    case "electron":
      return color(65,105,225);
    case "positron":
      return color(0,0,139);
    case "proton":
      return color(244,164,96);
    case "antiproton":
      return color(255,222,173);
    case "muon":
      return color(0,100,0);
    case "photon":
      return color(50,205,50);
  }
}

function getParticleClass(particleType) {
  switch (particleType) {
    case "electron":
      return ".electron";
    case "positron":
      return ".positron";
    case "proton":
      return ".proton";
    case "antiproton":
      return ".antiproton";
    case "muon":
      return ".muon";
    case "photon":
      return ".photon";
  }
}
