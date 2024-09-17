const navegacaoEsquerda = document.querySelector('.navegacao-esquerda');
const navegacaoDireita = document.querySelector('.navegacao-direita');
const apres = document.querySelector('.apres');

navegacaoEsquerda.addEventListener('click', () => {
  apres.scrollBy({
    top: 0,
    left: -360,
    behavior: 'smooth'
  });
});

navegacaoDireita.addEventListener('click', () => {
  apres.scrollBy({
    top: 0,
    left: 330,
    behavior: 'smooth'
  });
});