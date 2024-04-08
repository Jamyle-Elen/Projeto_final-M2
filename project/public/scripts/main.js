let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let auto = document.getElementById('auto');
let autoSlideInterval;

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

let timeRunning = 3000;
let timeAutoNext = 7000;

// auto.onclick = function() {
//     if(!autoSlideInterval) {
//         autoSlideInterval = setInterval(() => {
//             nextDom.click();
//         }, timeAutoNext);
//         auto.innerText = 'Pause';
//     } else {
//         clearInterval(autoSlideInterval);
//         autoSlideInterval = null;
//         auto.innerText = 'Auto';
//     }
// }

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
// add primeira miniatura como a ultima, garante que a miniatura referente a proxima img seja sempre mostrada por ultimo

// botoes next e prev
nextDom.onclick = function(){
    showSlider('next');    
}
prevDom.onclick = function(){
    showSlider('prev');    
}

// controla os intervalos de tempo para acontecer as animações das imagens e passar automaticamente
// setTimeout() inicializa automaticamente a passagem automatica apos um periodo de tempo espeficicado (la no inicio)
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)

// funçao que controla a transição entre as imagens do slider
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}