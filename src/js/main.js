import '../scss/main.scss';
import Carousel from './modules/Carousel';

const carouselContainers = Array.from(document.querySelectorAll(".carousel"));

carouselContainers.forEach(container => {
	const carousel = new Carousel(container, 3000, true);
});