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

document.title = articleFound.title;

titleArticle.innerText = articleFound.title;
imgOne.src = articleFound.image.one;
imgTwo.src = articleFound.image.two;
imgThree.src = articleFound.image.three;

dadContent.innerHTML = articleFound.contentHTML;
document.title = articleFound.title;
}



document.getElementById('img-author').src = `https://api.dicebear.com/8.x/personas/svg?seed=${'article' + id}&randomizeIds=true&body=rounded&eyes=glasses,happy,open,wink&hair=bobBangs,buzzcut,cap,curly,curlyBun,curlyHighTop,extraLong,fade,long,mohawk,pigtails,shortCombover,shortComboverChops,sideShave,straightBun,bald,balding,beanie,bobCut,bunUndercut&mouth=bigSmile,lips,smile,smirk&nose=mediumRound,smallRound&skinColor=623d36,92594b,d78774,b16a5b,e5a07e&backgroundColor=b6e3f4`;

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
  

  