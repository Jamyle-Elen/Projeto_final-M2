const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('#menu');

hamburger.addEventListener('click', () => {
	menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});