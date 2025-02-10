var x = 1;
var y = 1;
var d = 10;
var ySpeed = 1;
var xSpeed = 1;

function setup(){
    createCanvas(1000,50);
    strokeWeight (0.1)
    background("#715f82");
}

function draw(){
   
    circle(x,y,d);

    y = y + ySpeed;
    x = x + xSpeed;

    if (x<1 || x>width) {
        xSpeed=xSpeed * -1;
    }
    if (y<1 || y>height) {
        ySpeed=ySpeed * -1 ;
    }
} 

console.log(x);
console.log(y);
console.log(x + y)