// my cat, Bo, has a profile in this!

var cats = [];
var currentCat;
let buttonX, buttonY, buttonW = 120, buttonH = 30;

function preload() {
  loadJSON("data.json", (data) => {
    cats = data.cats;
  });
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(16);
  textAlign(LEFT, TOP);
  noLoop();
  generateCat();
  
}

function generateCat() {
  
  if (cats.length === 0) return;
  console.log(cats)

  background("#fde9b0 ");

  textAlign(LEFT, TOP); 
  currentCat = random(cats);

  fill("#444");
  text(`Name: ${currentCat.name}`, 20, 30);
  text(`Breed: ${currentCat.breed}`, 20, 60);
  text(`Age: ${currentCat.age} years`, 20, 90);
  text(`Color: ${currentCat.color}`, 20, 120);
  text(`Personality: ${currentCat.personality}`, 20, 150);


  drawButton();
}

function drawButton() {
  buttonX = width / 2 - buttonW / 2;
  buttonY = height - 80;

  fill("#9db893");
  rect(buttonX, buttonY, buttonW, buttonH, 8);

  fill("#000");
  textAlign(CENTER, CENTER);
  text("New Cat", buttonX + buttonW / 2, buttonY + buttonH / 2);

  textAlign(LEFT, TOP); 
}

function mousePressed() {
  if (
    mouseX > buttonX &&
    mouseX < buttonX + buttonW &&
    mouseY > buttonY &&
    mouseY < buttonY + buttonH
  ) {
    generateCat();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  generateCat();
}
