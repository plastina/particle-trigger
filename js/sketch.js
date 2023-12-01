let particles = [];
let temporaryParticles = [];

const particleTypes = ["electron", "positron", "proton", "antiproton", "muon", "photon", "pion", "kaon", "neutrino", "lambda", "d0"];

function setup() {
  createCanvas(windowWidth, windowHeight);

  const particleButtons = selectAll(".particleButton");
  particleButtons.forEach(button => {
    button.mousePressed(() => {
      clear();
      fireParticle(button.elt.dataset.particle)
    });
  });
}

function draw() {
  background(1, 0);
  drawParticles();
}


function fireParticle(particleType) {
  let xPosition;
  let yPosition;
  let xVelocity, yVelocity, Xacceleration, Yacceleration;

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
    Xacceleration = 0.5;

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
    xVelocity = 20;
    yVelocity = 0;
    // Xacceleration = 1;
    // Yacceleration = 0.5;

  } else if (particleType === "pion") {
    xPosition = 70;
    yPosition = 400;
    xVelocity = 10;
    yVelocity = 0;
    Xacceleration = 0.5;
    Yacceleration = 0;

  } else if (particleType === "kaon") {
    xPosition = 70;
    yPosition = 400;
    xVelocity = 10;
    yVelocity = 0;
    Xacceleration = 0.5;
    Yacceleration = 0;

  } else if (particleType === "neutrino") {
    xPosition = 70;
    yPosition = 400;
    xVelocity = 30;
    yVelocity = 5;

  } else if (particleType === "lambda") {
    xPosition = 70;
    yPosition = 400;
    xVelocity = 10;
    yVelocity = 0;
    Xacceleration = 0.5;
    Yacceleration = 0;

  } else if (particleType === "d0") {
    xPosition = 70;
    yPosition = 400;
    xVelocity = 10;
    yVelocity = 0;
    Xacceleration = 0.5;
    Yacceleration = 0;
  } else if (particleType === "d01") {
    xPosition = 70;
    yPosition = 400;
    xVelocity = 10;
    yVelocity = 0;
    Xacceleration = 0.5;
    Yacceleration = 0;
  } else if (particleType === "d02") {
    xPosition = 70;
    yPosition = 400;
    xVelocity = 10;
    yVelocity = 0;
    Xacceleration = 0.5;
    Yacceleration = 0;
  }

  let particle = {
    type: particleType,
    position: createVector(xPosition, yPosition),
    velocity: createVector(xVelocity, yVelocity),
    acceleration: createVector(Xacceleration, Yacceleration),
    lifespan: 60
  };

  particles.push(particle);
}

function drawParticles() {
  // noStroke();

  for (let i = 0; i < particles.length; i++) {
    let particle = particles[i];
    particle.velocity.x += particle.acceleration.x;

    if (particle.type === "electron" && particle.position.x > 965) {
      particle.acceleration.x = 0;
      particle.acceleration.y = 0;
      particle.velocity.y = -5;
      particle.velocity.x = 15;
      createTemporallyParticles(particle);
      particles.splice(i, 1);
      i--;
      drawTemporallyParticles();

    }

  // Limpa o array de partículas antes de desenhar as temporárias




    if (particle.type === "positron" && particle.position.x > 500) {
      particle.acceleration.x = 0;
      particle.acceleration.y = 5;
      particle.velocity.y = -1;
      particle.velocity.x = 15;

      if (particle.position.x > 1000) {
        createTemporallyParticles(particle);
        particles.splice(i, 1);
        i--;
        drawTemporallyParticles();

      }
    }

    if (particle.type === "proton" && particle.position.x > 500) {
      particle.velocity.x = 15;
      particle.velocity.y = 2;
      particle.acceleration.x = 5;
      particle.acceleration.y = -0.5;

      if (particle.position.x > 1040) {
        createTemporallyParticles(particle);
        particles.splice(i, 1);
        i--;
        drawTemporallyParticles();

      }
    }

    if (particle.type === "antiproton" && particle.position.x > 500) {
      particle.velocity.x = 15;
      particle.velocity.y = -2;
      particle.acceleration.x = 5;
      particle.acceleration.y = -0.5;

      if (particle.position.x > 1100) {
        createTemporallyParticles(particle);
        particles.splice(i, 1);
        i--;
        drawTemporallyParticles();

      }
    }

    if (particle.type === "photon" && particle.position.x > 500) {
      particle.velocity.x = 20;

      if (particle.position.x > 940) {
        createTemporallyParticles(particle);
        particles.splice(i, 1);
        i--;
        drawTemporallyParticles();

      }
    }

    if (particle.type === "pion" && particle.position.x > 500) {
      particle.velocity.x = 15;
      particle.velocity.y = 5;
      particle.acceleration.x = 5;
      particle.acceleration.y = -7;

      if (particle.position.x > 1040) {
        createTemporallyParticles(particle);
        particles.splice(i, 1);
        i--;
        drawTemporallyParticles();

      }
    }

    if (particle.type === "kaon" && particle.position.x > 500) {
      particle.velocity.x = 17;
      particle.velocity.y = 5;
      particle.acceleration.x = 5;
      particle.acceleration.y = -3;

      if (particle.position.x > 1040) {
        createTemporallyParticles(particle);
        particles.splice(i, 1);
        i--;
        drawTemporallyParticles();

      }
    }

    if (particle.type === "lambda" && particle.position.x > 500) {
      let particle1 = {
        type: "proton",
        position: createVector(particle.position.x, particle.position.y),
        velocity: createVector(5, 0),
        acceleration: createVector(1, 0)
      };
      particles.push(particle1);

      let particle2 = {
        type: "pion",
        position: createVector(particle.position.x, particle.position.y),
        velocity: createVector(5, 0),
        acceleration: createVector(1, 0)
      };
      particles.push(particle2);

      particles.splice(i, 1);
      i--;
    }

    if (particle.type === "d0" && particle.position.x > 120) {
      particles.splice(i, 1);
      i--;

      // Crie duas novas partículas genéricas
      let particle3 = {
        type: "d1",
        position: createVector(particle.position.x, particle.position.y),
        velocity: createVector(30, 3),
        acceleration: createVector(0, 0),
      };
      let particle4 = {
        type: "d1",
        position: createVector(particle.position.x, particle.position.y),
        velocity: createVector(30, -3),
        acceleration: createVector(0, 0),
      };

      particles.push(particle3);
      particles.push(particle4);
    }

    // Dentro do loop principal, verifique se as partículas "d1" atingiram a posição x igual a 500 e remova-as.
    for (let i = 0; i < particles.length; i++) {
      let particle = particles[i];

      if (particle.type === "d1" && particle.position.x > 1100) {
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
      return color(65, 105, 225);
    case "positron":
      return color(0, 0, 139);
    case "proton":
      return color(244, 164, 96);
    case "antiproton":
      return color(255, 222, 173);
    case "muon":
      return color(0, 100, 0);
    case "photon":
      return color(220, 154, 216);
    case "pion":
      return color(250, 210, 35);
    case "kaon":
      return color(200, 203, 42);
    case "neutrino":
      return color(0, 0, 0);
    case "lambda":
      return color(244, 164, 96);
    case "d0":
      return color(0, 0, 0);
    case "d1":
      return color(0, 0, 0);
  }
}

function createTemporallyParticles(particle) {
  for (let j = 0; j < 40; j++) {
    let temporaryParticle = {
      type: particle.type,
      position: createVector(particle.position.x, particle.position.y),
      velocity: createVector(random(5, 40), random(-10, 10)), // Velocidade aleatória
      lifespan: 60 // Tempo de vida da partícula temporária em quadros (ajuste conforme necessário)
    };

    temporaryParticles.push(temporaryParticle);
  }
}

function drawTemporallyParticles() {
  for (let i = 0; i < temporaryParticles.length; i++) {
    let temporaryParticle = temporaryParticles[i];

    temporaryParticle.position.add(temporaryParticle.velocity);
    temporaryParticle.lifespan--;

    stroke(getParticleColor(temporaryParticle.type)); // Define a cor da linha
    strokeWeight(2); // Ajusta a largura da linha conforme necessário
    let nextX = temporaryParticle.position.x + temporaryParticle.velocity.x;
    let nextY = temporaryParticle.position.y + temporaryParticle.velocity.y;
    line(temporaryParticle.position.x, temporaryParticle.position.y, nextX, nextY);

    if (temporaryParticle.lifespan <= 0) {
      temporaryParticles.splice(i, 1);
      i--;
    }
  }
  temporaryParticles = [];
}
