import { articles } from "../../data/database.js";

window.addEventListener("scroll", function () {
  let element = document.querySelector(".scroll-element");
  let position = element.getBoundingClientRect();

  if (position.top < window.innerHeight && position.bottom >= 0) {
    element.classList.add("visible");
  } else {
    element.classList.remove("visible");
  }

  let articles = document.querySelectorAll(".article");
  articles.forEach(function (article) {
    let articlePosition = article.getBoundingClientRect();

    if (
      articlePosition.top < window.innerHeight &&
      articlePosition.bottom >= 0
    ) {
      article.classList.add("visible");
    } else {
      article.classList.remove("visible");
    }
  });
});

const articleTag = document.getElementsByClassName("initial-article")[0];

function createArticle(article) {
  let articleElement = document.createElement("article");
  articleElement.classList.add("article");

  let imageElement = document.createElement("img");
  imageElement.setAttribute("src", article.image.one);
  imageElement.setAttribute("alt", "Imagem do Post");

  let contentElement = document.createElement("div");
  contentElement.classList.add("content");

  let categoryElement = document.createElement("span");
  categoryElement.classList.add("category");
  categoryElement.textContent = article.category;

  let titleElement = document.createElement("h1");
  titleElement.classList.add("article-title");
  titleElement.textContent = article.title;

  let descriptionElement = document.createElement("p");
  descriptionElement.classList.add("article-paragraph");
  descriptionElement.textContent = article.description;

  let linkElement = document.createElement("a");
  linkElement.setAttribute(
    "href",
    `../post/unicArticle.html?id=${article.id}`
  );

  let buttonElement = document.createElement("button");
  buttonElement.setAttribute("id", article.id);
  buttonElement.textContent = "Leia Mais >";

  linkElement.appendChild(buttonElement);

  contentElement.appendChild(categoryElement);
  contentElement.appendChild(titleElement);
  contentElement.appendChild(descriptionElement);
  contentElement.appendChild(linkElement);
  articleElement.appendChild(imageElement);
  articleElement.appendChild(contentElement);

  articleTag.appendChild(articleElement);
}

articles.forEach((article) => createArticle(article));

window.scrollBy(0, 0.8);
