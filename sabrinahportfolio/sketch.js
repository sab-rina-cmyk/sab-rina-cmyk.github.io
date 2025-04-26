// adding new fonts into my document: https://helpx.adobe.com/ca/fonts/using/css-selectors.html

// header animation remix reference: https://happycoding.io/tutorials/p5js/for-loops/spooky-text
// START //
let header = ['SABRINA', 'HUFFMAN'];
let spans = [];
const ySpeed = 0.1;
const amplitude = 15;
const verticalLetterSpacing = 5;
let isHovered = false;

function setup() {
    noCanvas();
    const container = select('#wiggle-header');
  
    header.forEach((word, index) => {
      const wordSpan = createSpan();
      wordSpan.parent(container);
      wordSpan.style('display', 'inline-block');
      wordSpan.style('margin', '0 1rem');
      wordSpan.class('word-group');
  
      for (let i = 0; i < word.length; i++) {
        let letterSpan = createSpan(word[i]);
        letterSpan.parent(wordSpan);
        letterSpan.style('display', 'inline-block');
        letterSpan.style('font-size', '6rem');
        letterSpan.style('font-family', 'puffin-display-soft, sans-serif');
        letterSpan.style('color', '#333');
        letterSpan.style('font-size', '10rem');
        spans.push(letterSpan);
      }
  
      if (index === 0) {
        const br = createElement('br');
        br.parent(container);
      }
    });

  container.mouseOver(() => isHovered = true);
  container.mouseOut(() => {
    isHovered = false;
    resetPositions();
  });

 const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  });

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
}

function draw() {

  // This is my favourite block of code! I think the wiggle animation gives my portfolio a playful vibe. 
  // It took a while to get right but I'm pround of myself for getting it to finally work!

  if (isHovered) {
    for (let i = 0; i < spans.length; i++) {
      const offset = i * verticalLetterSpacing;
      const y = sin((frameCount - offset) * ySpeed) * amplitude;
      spans[i].style('transform', `translateY(${y}px)`);
    }
  }
}
// // END //
// header animation remix reference: https://happycoding.io/tutorials/p5js/for-loops/spooky-text
