let spinningCat;
let speedSlider;
let audio;
let isSpacebarPressed = false;

let currentIndex = 0;
let landscapes = [];
let bgButton;
let instructionText;

var particles = [];

//  3D model import and styling reference: https://p5js.org/tutorials/custom-geometry/
//  3D model credits "Maxwell the cat (Dingus)": (https://skfb.ly/oJrFP) by bean(alwayshasbean) is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).

function preload() {
  spinningCat = loadModel('spinningCat.obj', true);
  audio = createAudio('audio.mp3');

// creating an image array reference: https://editor.p5js.org/jrbrown5/sketches/rJXQ7ZTjQ

  landscapes[0] = loadImage('beach.jpg');
  landscapes[1] = loadImage('forest.jpg');
  landscapes[2] = loadImage('city.jpg');
  landscapes[3] = loadImage('desert.jpg');
  landscapes[4] = loadImage('mountains.jpg');
  landscapes[5] = loadImage('country.jpg');
}


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  menuDiv = createDiv();
  menuDiv.style('position', 'absolute');
  menuDiv.style('top', '50px');
  menuDiv.style('left', '10px');
  menuDiv.style('padding', '10px');
  menuDiv.style('background', 'rgba(255, 255, 255, 0.95)');
  menuDiv.style('border-radius', '10px');
  menuDiv.style('box-shadow', '0 0 10px rgba(0,0,0,0.2)');
  menuDiv.style('width', '200px');

  let title = createElement('h3', 'Cat Controller');
  title.parent(menuDiv);
  title.style('margin', '0 0 10px 0');
  title.style('font-size', '18px');
  title.style('text-align', 'center');

  bgButton = createButton('New Destination');
  bgButton.parent(menuDiv);
  bgButton.style('width', '100%');
  bgButton.style('margin-bottom', '10px');
  bgButton.mousePressed(changeBackground);

  let speedLabel = createDiv('Spin Speed');
  speedLabel.parent(menuDiv);
  speedLabel.style('margin-bottom', '4px');

  speedSlider = createSlider(0.1, 5, 1, 0.1);
  speedSlider.parent(menuDiv);
  speedSlider.style('width', '100%');

  instructionText = createDiv('Hold spacebar for a happy cat!');
  instructionText.parent(menuDiv);
  instructionText.style('font-size', '14px');
  instructionText.style('text-align', 'center');
  instructionText.style('margin-top', '10px');
  instructionText.style('color', '#333');
  instructionText.style('line-height', '1.5');

  angleMode(DEGREES);
}

function draw() {
  background('#4d5d53');
  normalMaterial();

  let img, drawWidth, drawHeight;
  if (landscapes.length > 0) {
    img = landscapes[currentIndex];
    let imgAspect = img.width / img.height;
    let canvasAspect = width / height;

    if (canvasAspect > imgAspect) {
      drawWidth = width * 2;
      drawHeight = drawWidth / imgAspect;
    } else {
      drawHeight = height * 2;
      drawWidth = drawHeight * imgAspect;
    }

    push();
    translate(0, 0, -1000);
    noStroke();
    texture(img);

    rectMode(CENTER);
    rect(0, 0, drawWidth, drawHeight, 50); 
    pop();
  }

  push();
  scale(2);
  rotateZ(180);
  rotateY(270);

  if (isSpacebarPressed) {
    let speed = speedSlider.value();
    rotateY(millis() * 0.5 * speed);
    model(spinningCat);
  } else {
    model(spinningCat); 
  }

  pop();

// particle creation reference: https://editor.p5js.org/MOQN/sketches/iYrdK_i2Q_ 

  if (isSpacebarPressed) {
    let centerX = 0; 
    let centerY = 0; 
    let numParticles = 2; 

    for (let i = 0; i < numParticles; i++) {
      particles.push(new Particle(centerX, centerY));
    }
  }

  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].display();
    if (particles[i].isDead()) {
      particles.splice(i, 1);
    }
  }
}

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = random(10, 20);
    this.angle = random(0, 360); 
    this.speed = random(2, 6); 
    this.lifespan = 255;

    let colors = [
      color(255, 100, 100),
      color(100, 255, 100),
      color(100, 100, 255),
      color(255, 255, 100)
    ];
    this.color = random(colors);

    this.speedX = this.speed * cos(this.angle);
    this.speedY = this.speed * sin(this.angle);
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.lifespan -= 2;
  }

  display() {
    fill(this.color.levels[0], this.color.levels[1], this.color.levels[2], this.lifespan);
    noStroke();
    ellipse(this.x, this.y, this.size, this.size);
  }

  isDead() {
    return this.lifespan <= 0;
  }
}

function changeBackground() {
  currentIndex = (currentIndex + 1) % landscapes.length;
}

function keyPressed() {
  if (keyCode === 32 && !isSpacebarPressed) {
    isSpacebarPressed = true;
    audio.loop();
    audio.play();
  }
}

function keyReleased() {
  if (keyCode === 32) {
    isSpacebarPressed = false;
    audio.stop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
