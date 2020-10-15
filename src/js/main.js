import '../scss/main.scss';
import Carousel from './modules/Carousel';

const carouselContainers = Array.from(document.querySelectorAll(".carousel"));

carouselContainers.forEach(container => {

	// sliding speed in ms
	const carousel = new Carousel(container, 1500);

	const next = container.querySelector('.next');
	const prev = container.querySelector('.prev');

	next.addEventListener('click', () => { carousel.nextSlide('next'); });
	prev.addEventListener('click', () => { carousel.nextSlide('prev'); });
});