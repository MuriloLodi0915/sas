const page1Image = document.querySelector('.page2-image');
const page1ImageContainer = document.querySelector('.page2-image-container');

// Define o valor do deslocamento e o fator de velocidade
const scrollOffset = 1450; // Ajuste conforme necessário
const speedFactor = 0.3; // Ajuste o fator de velocidade (menor que 1 para mais lento)

window.addEventListener('scroll', () => {

  const scrollPosition = window.scrollY;
  

  const containerOffsetTop = page1ImageContainer.offsetTop;
  const containerHeight = page1ImageContainer.offsetHeight;
  
  const imageHeight = page1Image.offsetHeight;
  
  const maxScroll = imageHeight - containerHeight;
  
  if (scrollPosition >= containerOffsetTop + scrollOffset && scrollPosition <= containerOffsetTop + maxScroll + scrollOffset) {
    const scrollDistance = scrollPosition - containerOffsetTop - scrollOffset;
    const adjustedScroll = scrollDistance * speedFactor;
    

    page1Image.style.transform = `translateY(-${adjustedScroll}px)`;
  }
});
