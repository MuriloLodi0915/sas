document.addEventListener('DOMContentLoaded', function () {
    
    var cursosLink = document.querySelector('a[href="#cursos"]');
    
   
    cursosLink.addEventListener('click', function (event) {
        event.preventDefault(); 
        

        var targetElement = document.querySelector('#cursos');
        var targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        
        // Calcula a nova posição de rolagem 
        var newScrollPosition = targetPosition - 100;
        
        // Faz a rolagem suave até a nova posição
        window.scrollTo({
            top: newScrollPosition,
            behavior: 'smooth'
        });
    });
});