class parallaxTiltEffect {
  constructor({element, tiltEffect}) {
      this.element = element;
      this.container = this.element.querySelector(".container");
      this.size = [300, 360];
      [this.w, this.h] = this.size;

      this.tiltEffect = tiltEffect;
      this.mouseOnComponent = false;

      this.handleMouseMove = this.handleMouseMove.bind(this);
      this.handleMouseEnter = this.handleMouseEnter.bind(this);
      this.handleMouseLeave = this.handleMouseLeave.bind(this);
      this.defaultStates = this.defaultStates.bind(this);
      this.setProperty = this.setProperty.bind(this);
      this.init = this.init.bind(this);

      this.init();
  }

  handleMouseMove(event) {
      const {offsetX, offsetY} = event;
      let X, Y;

      if (this.tiltEffect === "reverse") {
          X = ((offsetX - (this.w/2)) / 3) / 3;
          Y = (-(offsetY - (this.h/2)) / 3) / 3;
      } else if (this.tiltEffect === "normal") {
          X = (-(offsetX - (this.w/2)) / 3) / 3;
          Y = ((offsetY - (this.h/2)) / 3) / 3;
      }

      this.setProperty('--rY', X.toFixed(2));
      this.setProperty('--rX', Y.toFixed(2));
      this.setProperty('--bY', (80 - (X/4).toFixed(2)) + '%');
      this.setProperty('--bX', (50 - (Y/4).toFixed(2)) + '%');
  }

  handleMouseEnter() {
      this.mouseOnComponent = true;
      this.container.classList.add("container--active");
  }

  handleMouseLeave() {
      this.mouseOnComponent = false;
      this.defaultStates();
  }

  defaultStates() {
      this.container.classList.remove("container--active");
      this.setProperty('--rY', 0);
      this.setProperty('--rX', 0);
      this.setProperty('--bY', '70%');
      this.setProperty('--bX', '30%');
  }

  setProperty(p, v) {
      return this.container.style.setProperty(p, v);
  }

  init() {
      this.element.addEventListener('mousemove', this.handleMouseMove);
      this.element.addEventListener('mouseenter', this.handleMouseEnter);
      this.element.addEventListener('mouseleave', this.handleMouseLeave);
  }
}

const $$ = e => document.querySelectorAll(e);
const wraps = $$('.wrap--1');

wraps.forEach(wrap => {
  new parallaxTiltEffect({
      element: wrap,
      tiltEffect: 'reverse'
  });
});

// Add scroll functionality to buttons
const leftButton = document.querySelector('.scroll-btn.left');
const rightButton = document.querySelector('.scroll-btn.right');
const apresSection = document.querySelector('.apres');

leftButton.addEventListener('click', () => {
  apresSection.scrollBy({
      left: -300, // Ajuste a quantidade de rolagem
      behavior: 'smooth'
  });
});

rightButton.addEventListener('click', () => {
  apresSection.scrollBy({
      left: 300, // Ajuste a quantidade de rolagem
      behavior: 'smooth'
  });
});
