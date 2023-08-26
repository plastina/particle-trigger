let particles = [];
// const numParticles = 100;
const particleTypes = ["electron", "positron", "proton", "antiproton", "muon", "pion"];

function setup() {
  createCanvas(windowWidth, windowHeight);
  const particleButtons = selectAll(".particleButton");

  particleButtons.forEach(button => {
    button.mousePressed(() => fireParticle(button.elt.dataset.particle));
  });
}

function draw() {
  background(0, 7);

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
    xPosition = 10;
    yPosition = 500;
    xVelocity = 5;
    yVelocity = 3;
    Xacceleration = 1;
    Yacceleration = 0;

  } else if (particleType === "positron") {
    xPosition = 10;
    yPosition = 500;
    xVelocity = 20;
    yVelocity = 0.2;
    Xacceleration = 1;
    Yacceleration = 0.5;

  } else if (particleType === "proton") {
    xPosition = 10;
    yPosition = 500;
    xVelocity = 10;
    yVelocity = -1;

  } else if (particleType === "antiproton") {
    xPosition = 10;
    yPosition = 500;
    xVelocity = 10;
    yVelocity = -10;

  } else if (particleType === "muon") {
    xPosition = 10;
    yPosition = 500;
    xVelocity = 10;
    yVelocity = -10;

  } else if (particleType === "pion") {
    xPosition = 10;
    yPosition = 500;
    xVelocity = 10;
    yVelocity = -10;
    Xacceleration = 1;
    Yacceleration = 0.5;
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
      particle.acceleration.x = 0.5;
      particle.acceleration.y = 0.5;
      particle.velocity.y = -10;
    }

    if (particle.type === "positron" && particle.position.x > 500) {
      particle.acceleration.x = 0.5;
      particle.acceleration.y = 25;
      particle.velocity.y = -1;

    }

    if (particle.type === "proton" && particle.position.x > 500) {
      particle.velocity.x = 3;
      particle.velocity.y = 1;
      particle.acceleration.x = 5;
      particle.acceleration.y = -0.5;

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
      return color(0, 0, 255); // Azul
    case "positron":
      return color(255, 0, 0); // Vermelho
    case "proton":
      return color(0, 255, 0); // Verde
    case "antiproton":
      return color(255, 255, 0); // Amarelo
    case "muon":
      return color(255, 0, 255); // Magenta
    case "pion":
      return color(255, 255, 255); // Branco
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
    case "pion":
      return ".pion";
  }
}
