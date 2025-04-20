var bgColourSlider;
var colourPicker;
var choice;

let currentEmoji = "✨"; 
let emojis = ["✨", "😄", "🔥", "🐝", "🍀", "🐬"];
let emojiSize; 

function setup(){
    createCanvas(720,400);
    background('pink'); 

    emojiSize = 30

// slider 
    colorMode(HSB, 100, 100);
    bgColourSlider = createSlider(0, 360, 0); 

// cats or dogs?
    choice = createRadio();
    choice.position(105, 150);
    choice.size(60);

    choice.option('Cats');
    choice.option('Dogs');
  
    choice.selected('Cats');  

// favourite colour?
    colourPicker = createColorPicker('white');
    colourPicker.position(418, 310)
}

function draw(){
// main rect
    fill('#00000'); 
    rect(50, 50, 610, 300);

// text 
    textSize(40);
    fill(0);
    text('GUI Experiment 😄', 195 , 100);

    textSize(15);
    text('Do you prefer cats or dogs?', 100, 135);
    text('Pastel Background Reset Slider', 100, 250);
    text('What is your favourite colour?', 410, 135);

    textSize(emojiSize);
    text(currentEmoji, mouseX, mouseY);

// cats or dogs? 
    if (choice.value() === 'Cats') {
        fill(80, 360, 100); 
    } else if (choice.value() === 'Dogs') {
        fill(0, 360, 100);
    }

    ellipse(190, 165, 40,40);

// slider
    bgColourSlider.position(105, 275);
    bgColourSlider.input(repaint);

// favourite colour?
    let c = colourPicker.value();

    fill(c);
    rect(410, 150, 200, 150 )
}

function repaint(){
    let bg = bgColourSlider.value();
    background(bg, 30, 110);
}

function mousePressed(){
    currentEmoji = random(emojis);
}

// emoji cursor friend resizing (UP arrow makes it BIGGER / DOWN arrow makes it SMALLER)

function keyPressed() {
    if (keyCode === UP_ARROW) {
      emojiSize += 10;
    } else if (keyCode === DOWN_ARROW) {
      emojiSize -= 10;
    }
}