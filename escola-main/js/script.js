const slideshowContainer = document.querySelector('.slideshow-container');
const slidesSections = document.querySelectorAll('.slides-section');
const dots = document.querySelectorAll('.dot');
const courseTabs = document.querySelectorAll('.course-tab');

let currentSection = 0;
let currentSlide = 0;

// Atualiza a visibilidade dos slides
function updateSlidesVisibility() {
  slidesSections.forEach((section, index) => {
    section.style.display = index === currentSection ? 'flex' : 'none';
  });
}

// Atualiza a navegação dos slides
function updateSlideshow() {
  const section = slidesSections[currentSection];
  section.style.transform = `translateX(${-currentSlide * 100}vw)`; // Ajusta para 100vw por slide
  updateDots();
}

// Atualiza os pontos de navegação
function updateDots() {
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === (currentSlide % 2));
  });
}

// Eventos para os pontos de navegação
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlide = index;
    updateSlideshow();
  });
});

// Eventos para os botões de navegação
document.querySelector('.prev').addEventListener('click', () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = 1; // Há dois slides por seção
  }
  updateSlideshow();
});

document.querySelector('.next').addEventListener('click', () => {
  currentSlide++;
  if (currentSlide > 1) { // Há dois slides por seção
    currentSlide = 0;
  }
  updateSlideshow();
});

// Eventos para os botões de curso
courseTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    currentSection = index;
    currentSlide = 0;
    updateSlidesVisibility();
    updateSlideshow();
    courseTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  });
});

// Inicializar a apresentação de slides
updateSlidesVisibility();
updateSlideshow();
