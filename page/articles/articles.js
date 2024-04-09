window.addEventListener('scroll', function() {
    var element = document.querySelector('.scroll-element');
    var position = element.getBoundingClientRect();

    if (position.top < window.innerHeight && position.bottom >= 0) {
        element.classList.add('visible');
    } else {
        element.classList.remove('visible');
    }

    var articles = document.querySelectorAll('.article');
    articles.forEach(function(article) {
        var articlePosition = article.getBoundingClientRect();

        if (articlePosition.top < window.innerHeight && articlePosition.bottom >= 0) {
            article.classList.add('visible');
        } else {
            article.classList.remove('visible');
        }
    });
});

window.scrollBy(0, 0.8);
