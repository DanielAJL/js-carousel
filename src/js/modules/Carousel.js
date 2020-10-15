export default class Carousel {
	constructor(container, speed) {
		this.container = container;
		this.speed = `${speed}ms`;
		this.slides = Array.from(this.container.querySelectorAll('img'));

		this.nextSlide = this.nextSlide.bind(this);

		this.animating = false;
	}

	findActiveClass() {
		const active = this.slides.find(element => element.classList.contains('active'));
		return active;
	}

	nextSlide(direction) {
		if (this.animating) return;

		let next;
		const active = this.slides.indexOf(this.findActiveClass());
		this.findActiveClass().classList.remove('active');

		if (direction !== 'prev') { next = active < this.slides.length - 1 ? active + 1 : 0; }
		else { next = active === 0 ? this.slides.length - 1 : active - 1; }

		this.slides[next].classList.toggle('active');
		this.slides[next].style.animation = `slide-${direction} ${this.speed}`;
		this.animating = true;
		this.slides[next].addEventListener('animationend', () => {
			this.afterAnimating(this.slides[next]);
		});


	}

	afterAnimating(element) {
		element.style.animation = '';
		this.animating = false;
	}

	// Function for testing purposes.
	test() {
		// console.log(this);
	}
}