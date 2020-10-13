import '../scss/main.scss';
import Carousel from './modules/Carousel';

const carouselContainers = Array.from(document.querySelectorAll(".carousel"));

carouselContainers.forEach(container => {
	const carousel = new Carousel(container);
	const next = container.querySelector('.next');
	const prev = container.querySelector('.prev');

	next.addEventListener('click', carousel.goNextSlide);
	prev.addEventListener('click', carousel.goPrevSlide);

	carousel.test();
})
