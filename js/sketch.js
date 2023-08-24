let particles = [];
const numParticles = 100;
const particleTypes = ["electron", "proton", "neutrino", "photon"];


function setup() {
  createCanvas(windowWidth, windowHeight);
  const particleButtons = selectAll(".particleButton");

  particleButtons.forEach(button => {
    button.mousePressed(() => fireParticle(button.elt.dataset.particle));
  });
}

function draw() {
  background(0, 20);

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
    xPosition = 1;
    yPosition = 800;
    xVelocity = 10;
    yVelocity = -10;
    Xacceleration = 1;
    Yacceleration = 0.5;

  } else if (particleType === "proton") {
    xPosition = 5;
    yPosition = 600;
    xVelocity = 5;
    yVelocity = 1;
    Xacceleration = 1;
    Yacceleration = 0.5;

  } else if (particleType === "neutrino") {
    xPosition = 100;
    yPosition = 700;
    xVelocity = 10;
    yVelocity = -10;

  } else if (particleType === "photon") {
    xPosition = 300;
    yPosition = 500;
    xVelocity = 10;
    yVelocity = -10;

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
    
    if (particle.type === "electron" & particle.position.x > 200) {
        particle.acceleration.x = -1;
        particle.acceleration.y = -5;
        
    } particle.velocity.y += particle.acceleration.y;


    // Use a classe CSS com base no tipo de partícula
    // let particleClass = getParticleClass(particle.type);
    fill(getParticleColor(particle.type));
    ellipse(particle.position.x, particle.position.y, 10, 10);

    particle.position.add(particle.velocity);

    if (particle.position.y > height) {
      particles.splice(i, 1);
      i--;
    }
  }
}

function getParticleColor(particleType) {
  switch (particleType) {
    case "electron":
      return color(0, 0, 255); // Azul
    case "proton":
      return color(255, 0, 0); // Vermelho
    case "neutrino":
      return color(0, 255, 0); // Verde
  }
}

function getParticleClass(particleType) {
  switch (particleType) {
    case "electron":
      return ".electron";
    case "proton":
      return ".proton";
  }
}
