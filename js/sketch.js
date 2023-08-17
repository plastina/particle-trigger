let particles = [];
const numParticles = 100;
const gravity = 0.1;

const particleTypes = {
  electron: {
    velocity: createVector(5, -10),
    trajectory: createVector(1, 0.2) // Trajetória para o elétron
  },
  proton: {
    velocity: createVector(3, -8),
    trajectory: createVector(1, 0.5) // Defina a trajetória para o próton
  }, // Vermelho
};



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

  if (particleType === "electron") {
    xPosition = 1;
    yPosition = 800;
  } else if (particleType === "proton") {
    xPosition = 5;
    yPosition = 600;
  } else if (particleType === "neutrino") {
    xPosition = 100;
    yPosition = 700;
  } else if (particleType === "photon") {
    xPosition = 300;
    yPosition = 500;
  } // Adicione mais casos para outras partículas aqui


  let particle = {
    type: particleType,
    position: createVector(xPosition, yPosition),
    velocity: createVector(5, -10),
  };

  particles.push(particle);
}

function drawParticles() {
  noStroke();

  for (let i = 0; i < particles.length; i++) {
    let particle = particles[i];

    // Use a cor com base no tipo de partícula
    fill(getParticleColor(particle.type));

    ellipse(particle.position.x, particle.position.y, 10, 10);

    particle.position.add(particle.velocity);
    particle.velocity.y += gravity;

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
  }
}
