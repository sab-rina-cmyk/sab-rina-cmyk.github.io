// click your mouse for a silly surprise!

var sleepyBo;
let sillyBo;

let sillyX, sillyY;
let sillyXSpeed, sillyYSpeed;
let isBouncing = false;

function preload() {
  sillyBo = loadImage('sillybo.jpeg'); 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);


  sleepyBo = createVideo('sleepybo.mp4'); 
  sleepyBo.hide();
  sleepyBo.volume(0); 
  sleepyBo.loop();

  
  sillyX = random(width);
  sillyY = random(height);
  sillyXSpeed = random(2, 5);
  sillyYSpeed = random(2, 5);
}

function draw() {
  background('pink');

  textSize(32);
  textFont('Comic Sans MS');
  textAlign(CENTER, TOP);
  fill(255); 
  text("☆ SLEEPY BO CAM ☆", width / 2, 30);
  

  textSize(18);  
  text("Click anywhere for a silly surprise!", width / 2, 70); 

  let newWidth = sillyBo.width / 30;
  let newHeight = sillyBo.height / 30;


  if (isBouncing) {
    sillyX += sillyXSpeed;
    sillyY += sillyYSpeed;

 
    if (sillyX < newWidth / 2 || sillyX > width - newWidth / 2) {
      sillyXSpeed *= -1;
    }
    if (sillyY < newHeight / 2 || sillyY > height - newHeight / 2) {
      sillyYSpeed *= -1;
    }
  }

 
  image(sillyBo, sillyX, sillyY, newWidth, newHeight);

  image(sleepyBo, width / 2, height / 2, 800, 400);
}

function mousePressed() {
  isBouncing = true;
  sleepyBo.volume(1); 
  sleepyBo.play();

  sillyXSpeed = random(2, 5) * (random() < 0.5 ? -1 : 1);
  sillyYSpeed = random(2, 5) * (random() < 0.5 ? -1 : 1);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
