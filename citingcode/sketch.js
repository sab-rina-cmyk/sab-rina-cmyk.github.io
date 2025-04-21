// 3D model I created in Fusion 360 for my Interaction Design Class 
let verdoirModel;

function preload() {
  verdoirModel = loadModel('verdoirmodel.obj', true);
}

function setup() {
  noCanvas();
  removeElements();
  angleMode(DEGREES);

// General formatting reference:  https://www.w3schools.com/css/css_website_layout.asp 
// createDiv reference:  https://p5js.org/tutorials/creating-styling-html/

  // Layout wrapper
  let layout = createDiv().id('layout');
  layout.style('display', 'flex');
  layout.style('flex-direction', 'column');
  layout.style('height', '100vh');
  layout.style('font-family', 'Monospace');

  // Header
  let header = createDiv('VERDOIR');
  header.parent(layout);
  header.style('padding', '20px');
  header.style('background', '#406355');
  header.style('color', 'white');
  header.style('font-size', '40px');
  header.style('text-align', 'center');
  header.style('font-weight', 'bold')
  header.style('letter-spacing', '10px')
  header.style('font-family', 'Verdana')
  
  // Content row
  let content = createDiv().id('content');
  content.parent(layout);
  content.style('display', 'flex');
  content.style('flex-grow', '1');

  // The Sidebar
  let sidebar = createDiv().id('sidebar');
  sidebar.parent(content);
  sidebar.style('width', '300px');
  sidebar.style('background', '#c2cfc8');
  sidebar.style('padding', '20px');
  sidebar.style('box-shadow', '2px 0 5px rgba(0,0,0,0.1)');
  sidebar.style('overflow-y', 'auto');


  // Paragraph descriptions
  createElement('h2', 'What is VERDOIR?').parent(sidebar);
  createP('A smart planter designed to let you grow your favourite cooking herbs in any indoor setting!').parent(sidebar);

  // Incorperating image reference: https://p5js.org/reference/p5/createImg/

  let productImage = createImg('verdoir.jpg', 'VERDOIR product image');
  productImage.parent(sidebar);
  productImage.style('width', '100%');
  productImage.style('margin', '20px 0');
  productImage.style('border-radius', '8px');

  createElement('h3', 'Design Features').parent(sidebar);
  
  // reference for createElement : https://p5js.org/reference/p5/createElement/

  let featuresList = createElement('ul');
  featuresList.parent(sidebar); // attach to the sidebar right after the subheading
  featuresList.style('padding-left', '20px');

  createElement('li', 'Cozy, minimalist design').parent(featuresList);
  createElement('li', 'Automatically adjusting LED grow lights').parent(featuresList);
  createElement('li', 'Reminders for when you need to water').parent(featuresList);

  // Planter orbit area 
  
  let main = createDiv().id('main');
  main.parent(content);
  main.style('flex-grow', '1');
  main.style('position', 'relative');

  let canvas = createCanvas(700, 700, WEBGL);
  canvas.parent(main);
}

function draw() {
  background('#ffffff');
 
 // incorperating 3D model and making it orbit/ continuously rotate reference: https://p5js.org/tutorials/custom-geometry/

  orbitControl();
  normalMaterial();
  push();

// rotating model! 
push();
translate(0, -25);
scale(2);
rotateZ(180);
rotateY(millis() * 0.01);
model(verdoirModel);
pop();
}
