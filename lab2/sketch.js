var billy = {
    x: 80,
    y: 100,
    w: 100,
    h: 40,
    xSpeed: -1,
    ySpeed: 9,
    colour:"#FF7F50",
    draw: function(){
        fill( this.colour)
        ellipse(this.x, this.y, this.w, this.h);
    },
    move: function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        if(this.x < 0 || this.x > width){
            this.xSpeed *= -1;
        }
        if (this.y > height || this.y < 0){ 
            this.ySpeed *= -1;
        }
    }
};

var bob = {
    x: 10,
    y: 20,
    d: 100,
    xSpeed: -1000,
    ySpeed: -1,
    colour:"#DA70D6",
    stroke:"white",
    draw: function(){
        fill(this.colour)
        stroke(this.stroke)
        circle(this.x, this.y, this.d);
    },
    move: function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        if(this.x < 9 || this.x > width){
            this.xSpeed *= -1;
        }
        if (this.y > height || this.y < 7){ 
            this.ySpeed *= -1;
        }
    }
};

var joe = {
    x: 10,
    y: 20,
    w: 100,
    h: 39,
    xSpeed: 10,
    ySpeed: 10,
    colour:"#DAF7A6",
    draw: function(){
        fill(this.colour)
        rect(this.x, this.y, this.w, this.h);
    },
    move: function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        if(this.x < 0 || this.x > width){
            this.xSpeed *= -1;
        }
        if (this.y > height || this.y < 0){ 
            this.ySpeed *= -1;
        }
    }
};

var steve = {
    x: 10,
    y: 200,
    w: 100,
    h: 100,
    xSpeed: -2,
    ySpeed: -1,
    colour:"#1abc9c ",
    draw: function(){
        fill(this.colour)
        rect(this.x, this.y, this.w, this.h);
    },
    move: function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        if(this.x < 0 || this.x > width){
            this.xSpeed *= -1;
        }
        if (this.y > height || this.y < 0){ 
            this.ySpeed *= -1;
        }
    }
};

function setup() {
    createCanvas (400, 500);
}

function draw() {
    background('#D8BFD8');
    billy.draw();
    billy.move();
    bob.draw();
    bob.move();
    joe.draw();
    joe.move();
    steve.draw();
    steve.move();

}