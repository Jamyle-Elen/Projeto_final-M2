document.addEventListener("DOMContentLoaded", function() {
    var slideIndex = 0;
    var slides = document.querySelectorAll('.carousel-slide');
    var totalSlides = slides.length;
    var prevBtn = document.querySelector('.carousel-prev');
    var nextBtn = document.querySelector('.carousel-next');
  
    function showSlide(index) {
      // Esconde todos os slides
      for (var i = 0; i < totalSlides; i++) {
        slides[i].style.display = 'none';
      }
      // Exibe o slide atual
      slides[index].style.display = 'block';
    }
  
    function nextSlide() {
      slideIndex++;
      if (slideIndex >= totalSlides) {
        slideIndex = 0; // Volta ao primeiro slide se chegar ao último
      }
      showSlide(slideIndex);
    }
  
    function prevSlide() {
      slideIndex--;
      if (slideIndex < 0) {
        slideIndex = totalSlides - 1; // Volta ao último slide se chegar ao primeiro
      }
      showSlide(slideIndex);
    }
  
    // Exibe o primeiro slide ao carregar a página
    showSlide(slideIndex);
  
    // Adiciona os eventos de clique aos botões de navegação
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
  });
  