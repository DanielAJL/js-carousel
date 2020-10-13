import '../scss/main.scss';
import Carousel from './modules/Carousel';

const carouselContainers = Array.from(document.querySelectorAll(".carousel"));

carouselContainers.forEach(container => {
	const carousel = new Carousel(container);
	carousel.generateSlides(4);


	carousel.test("See this? It's working.");
})
