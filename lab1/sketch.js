function setup(){
    createCanvas(windowWidth,windowHeight);
}

function draw() {
  background('#abdbe3');
  
  for (let circleY = 75; circleY <= 10000; circleY += 75) {
    for (let circleX = 75; circleX <= 10000; circleX += 75) {
      circle(circleX, circleY, 48);
      fill(random(200), random(20), random(255));
      strokeWeight(14)
      stroke('#000043')
    } 
  }
  if(mouseX < 500){
    rect(mouseX,mouseY,40,40);
}else{
    rect(mouseX, mouseY, 100,100);
}

}
