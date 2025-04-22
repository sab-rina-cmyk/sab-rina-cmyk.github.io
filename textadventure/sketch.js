/// MY OVERALL GOALS ///

// To-do list input
// time estimate info
// motivational quote generator 
// minimalistic & clean vibe
// tasks that cross off 
// tasks that move the the bottom of the list when completed


var timeSelect;
var quoteButton;
var quotePopup;

let input;
let button;
let list;
let controlPanel;
let quoteWrapper;
let body;

const quotes = [
  "You got this—like, totally got this.",
  "Crush tasks, eat snacks, repeat.",
  "Progress is progress—even if it’s in pajama pants.",
  "If you’re overwhelmed, take a dance break.",
  "One step at a time (or slide… sliding counts).",
  "Your future self is already high-fiving you.",
  "Make it fun, or make it done and move on!",
  "Keep it up—you're basically a productivity wizard."
];
console.log(quotes)

function setup() {
  noCanvas();

  body = select('body');
  body.style('background-color', '#f8f4f0');
  body.style('padding', '40px');
  body.style('font-family', '"Noto Sans", sans-serif');
  body.style('color', '#3a3a3a');

  let heading = createElement('h1', 'The Ultimate To-Do List');
  heading.style('text-align', 'center');
  heading.style('margin-bottom', '32px');
  heading.style('font-size', '32px');
  heading.style('color', '#2e2e2e');
  heading.style('font-weight', '600');

  controlPanel = createDiv();
  controlPanel.style('margin-bottom', '24px');
  controlPanel.style('display', 'flex');
  controlPanel.style('gap', '12px');
  controlPanel.style('flex-wrap', 'wrap');
  controlPanel.style('justify-content', 'center');

  input = createInput();
  input.attribute('placeholder', 'Add a task...');
  input.style('padding', '10px 12px');
  input.style('font-size', '15px');
  input.style('border', '1px solid #ccc');
  input.style('border-radius', '15px');
  input.style('background-color', '#ffffff');
  controlPanel.child(input);

  timeSelect = createSelect();
  timeSelect.option('Time estimate');
  ['10 min', '30 min', '1 hour', '2 hours', 'Half day', 'Full day'].forEach(opt => timeSelect.option(opt));
  timeSelect.style('padding', '10px 12px');
  timeSelect.style('font-size', '15px');
  timeSelect.style('border', '1px solid #ccc');
  timeSelect.style('border-radius', '15px');
  timeSelect.style('background-color', '#ffffff');
  controlPanel.child(timeSelect);

  button = createButton('Add');
  button.mousePressed(addToList);
  button.style('padding', '10px 16px');
  button.style('font-size', '15px');
  button.style('background-color', '#e0d8cf');
  button.style('color', '#333');
  button.style('border', 'none');
  button.style('border-radius', '15px');
  button.style('cursor', 'pointer');
  controlPanel.child(button);

  quoteButton = createButton('Get Motivation');
  quoteButton.mousePressed(showQuotePopup);
  quoteButton.style('padding', '10px 16px');
  quoteButton.style('font-size', '15px');
  quoteButton.style('background-color', '#f1e1d0');
  quoteButton.style('color', '#333');
  quoteButton.style('border', 'none');
  quoteButton.style('border-radius', '15px');
  quoteButton.style('cursor', 'pointer');
  controlPanel.child(quoteButton);

  list = createDiv();
  list.style('display', 'flex');
  list.style('flex-direction', 'column');
  list.style('gap', '12px');
  list.style('border', '2px solid #e0d8cf');
  list.style('padding', '20px');
  list.style('border-radius', '15px');
  list.style('background-color', '#ffffff');
  list.style('box-shadow', '0 4px 12px rgba(0, 0, 0, 0.1)');

  quoteWrapper = createDiv();
  quoteWrapper.style('position', 'fixed');
  quoteWrapper.style('top', '0');
  quoteWrapper.style('left', '0');
  quoteWrapper.style('width', '100vw');
  quoteWrapper.style('height', '100vh');
  quoteWrapper.style('display', 'none');
  quoteWrapper.style('justify-content', 'center');
  quoteWrapper.style('align-items', 'center');
  quoteWrapper.style('background-color', 'rgba(0,0,0,0.4)');
  quoteWrapper.style('z-index', '1000');

  quotePopup = createDiv();
  quotePopup.style('position', 'relative');
  quotePopup.style('background-color', '#ffffff');
  quotePopup.style('padding', '30px 40px');
  quotePopup.style('border-radius', '15px');
  quotePopup.style('box-shadow', '0 4px 12px rgba(0, 0, 0, 0.2)');
  quotePopup.style('text-align', 'center');
  quoteWrapper.child(quotePopup);

  let quoteText = createP('Here’s a dose of motivation!');
  quoteText.id('quoteText');
  quoteText.style('font-size', '18px');
  quoteText.style('color', '#333');
  quotePopup.child(quoteText);

  let closeButton = createButton('✖️');
  closeButton.mousePressed(() => quoteWrapper.hide());
  closeButton.style('position', 'absolute');
  closeButton.style('top', '10px');
  closeButton.style('right', '10px');
  closeButton.style('font-size', '20px');
  closeButton.style('background', 'transparent');
  closeButton.style('border', 'none');
  closeButton.style('cursor', 'pointer');
  quotePopup.child(closeButton);

  document.body.appendChild(quoteWrapper.elt);
}

function addToList() {
  let value = input.value().trim();
  let timeEstimate = timeSelect.value();

  if (value !== "" && timeEstimate !== 'Time estimate') {
    let itemContainer = createDiv();
    itemContainer.style('display', 'flex');
    itemContainer.style('align-items', 'center');
    itemContainer.style('gap', '12px');
    itemContainer.style('padding', '12px 16px');
    itemContainer.style('background-color', '#ffffff');
    itemContainer.style('border-radius', '15px');
    itemContainer.style('box-shadow', '0 2px 6px rgba(0,0,0,0.05)');

    let checkbox = createCheckbox('', false);
    checkbox.style('transform', 'scale(1.2)');
    checkbox.style('margin', '0');
    checkbox.parent(itemContainer);

    let fullText = `${value} (${timeEstimate})`;
    let text = createSpan(fullText);
    text.style('font-size', '15px');
    text.style('color', '#3a3a3a');
    text.parent(itemContainer);

    let deleteButton = createButton('✖️');
    deleteButton.style('padding', '6px 8px');
    deleteButton.style('background-color', '#f8f4f0');
    deleteButton.style('border', '1px solid #ccc');
    deleteButton.style('border-radius', '15px');
    deleteButton.style('cursor', 'pointer');
    deleteButton.mousePressed(() => itemContainer.remove());
    deleteButton.parent(itemContainer);

    checkbox.changed(() => {
      if (checkbox.checked()) {
        text.style('text-decoration', 'line-through');
        text.style('color', '#999');
        itemContainer.addClass('completed');
        moveToBottom(itemContainer);
        itemContainer.style('background-color', '#e0d8cf');
      } else {
        text.style('text-decoration', 'none');
        text.style('color', '#3a3a3a');
        itemContainer.removeClass('completed');
        itemContainer.style('background-color', '#ffffff');
      }
    });

    itemContainer.parent(list);
    input.value('');
    timeSelect.selected('Time estimate');
  }
}

function moveToBottom(task) {
  task.remove();
  task.parent(list);
}

function showQuotePopup() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  select('#quoteText').html(randomQuote);
  quoteWrapper.show();
}

function keyPressed() {
  if (keyCode === ENTER) {
    addToList(); 
  }
}