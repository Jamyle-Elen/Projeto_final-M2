document.addEventListener('DOMContentLoaded', function() {
    let carouselListDom = document.querySelector('.carousel .list');

    console.log("DOM carregado");

    document.getElementById('next').addEventListener('click', function() {
        console.log("Clicou em Next");
        let currentScroll = carouselListDom.scrollLeft;
        let itemWidth = carouselListDom.querySelector('.item').offsetWidth;
        let nextScroll = currentScroll + itemWidth;
        carouselListDom.scrollTo({
            left: nextScroll,
            behavior: 'smooth'
        });
    });

    document.getElementById('prev').addEventListener('click', function() {
        console.log("Clicou em Prev");
        let currentScroll = carouselListDom.scrollLeft;
        let itemWidth = carouselListDom.querySelector('.item').offsetWidth;
        let nextScroll = currentScroll - itemWidth;
        carouselListDom.scrollTo({
            left: nextScroll,
            behavior: 'smooth'
        });
    });
});
