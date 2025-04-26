// stacking cards remix ref: https://codyhouse.co/tutorials/how-stacking-cards
// START //
class StackCards {
    constructor(element) {
      this.element = element;
      this.items = this.element.querySelectorAll('.js-stack-cards__item');
      this.scrolling = false;
      this.init();
    }
  
    init() {
      const observer = new IntersectionObserver(this.onIntersect.bind(this));
      observer.observe(this.element);
    }
  
    onIntersect(entries) {
      if (entries[0].isIntersecting) {
        window.addEventListener('scroll', this.onScroll.bind(this));
      } else {
        window.removeEventListener('scroll', this.onScroll.bind(this));
      }
    }
  
    onScroll() {
      if (!this.scrolling) {
        this.scrolling = true;
        window.requestAnimationFrame(this.animate.bind(this));
      }
    }
  
    animate() {
      const top = this.element.getBoundingClientRect().top;
      const cardHeight = this.items[0].offsetHeight;
      const marginY = 10;
  
      this.items.forEach((item, i) => {
        const offset = cardHeight + marginY;
        const scrolling = offset * i - top;
  
        item.style.transform = `translateY(${marginY * i}px)`; 
      });
  
      this.scrolling = false;
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const stackCardsElement = document.querySelector('.js-stack-cards');
    if (stackCardsElement) {
      new StackCards(stackCardsElement);
    }
  });
  // END //
  // stacking cards remix ref: https://codyhouse.co/tutorials/how-stacking-cards