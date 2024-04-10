import { articles } from "../../data/database.js";

let id = location.search.replace('?id=', '')
console.log(id);

let index = articles.findIndex(function (article) {
  return article.id == id;
});
console.log(index)
if (index == -1) {
  window.location.href = "../../page/articles/articles.html"
}else {
  let articleFound = articles[index];
console.log(articleFound);

const imgOne = document.getElementById('img1');
const imgTwo = document.getElementById('img2');
const imgThree = document.getElementById('img3');
const dadContent = document.getElementById('content');
const titleArticle = document.getElementById('title');

titleArticle.innerText = articleFound.title;
imgOne.src = articleFound.image.one;
imgTwo.src = articleFound.image.two;
imgThree.src = articleFound.image.three;

dadContent.innerHTML = articleFound.contentHTML;

}








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
  

  