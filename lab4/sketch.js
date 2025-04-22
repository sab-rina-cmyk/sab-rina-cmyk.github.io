var sillyBo;
var sleepyBo;

function setup(){
    createCanvas(windowWidth, windowHeight);
    imageMode(CENTER);
    sillyBo = loadImage('sillybo.jpeg');
    sleepyBo = createVideo('sleepybo.mp4');
    sleepyBo.hide();
}

function draw(){
    background('pink');
    let newWidth = sillyBo.width / 12;
    let newHeight = sillyBo.height / 12;
    image(sillyBo, width/2, height/2, newWidth, newHeight);
    image(sleepy)
   
}

function mousePressed(){
    
}


function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}