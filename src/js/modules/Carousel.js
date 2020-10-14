export default class Carousel {
	constructor(container, speed) {
		this.container = container;
		this.speed = `${speed}ms`;
		this.slides = Array.from(this.container.querySelectorAll('img'));

		this.nextSlide = this.nextSlide.bind(this);
	}

	findActiveClass() {
		const active = this.slides.find(element => element.classList.contains('active'));
		return active;
	}

	nextSlide(direction) {
		let next = null;
		const active = this.slides.indexOf(this.findActiveClass());
		this.findActiveClass().classList.remove('active');
		if (direction !== 'prev') {
			next = active < this.slides.length - 1 ? active + 1 : 0;
		} else {
			next = active === 0 ? this.slides.length - 1 : active - 1;
		}

		this.slides[next].classList.toggle('active');
		this.slides[next].style.animation = `slide-${direction} ${this.speed}`;
	}


	// Function for testing purposes.
	test() {
		console.log(this);
	}
}