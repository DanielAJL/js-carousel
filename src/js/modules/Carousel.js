export default class Carousel {
	/**
 * @param {HTMLElement} element element containing the 'carousel' class.
 * @param {number} speed slide speed in ms.
 */
	constructor(element, speed) {
		this.element = element;
		this.speed = speed;
		this.slides = Array.from(this.element.querySelectorAll('.slide'));

		this.nextSlide = this.nextSlide.bind(this);

		this.animating = false;
	};

	findActiveClass() {
		const active = this.slides.find(element => element.classList.contains('active'));
		return active;
	};

	nextSlide(direction) {
		if (this.animating) return;

		let next;
		const active = this.slides.indexOf(this.findActiveClass());
		const previousSlide = this.findActiveClass();

		if (direction !== 'prev') { next = active < this.slides.length - 1 ? active + 1 : 0; }
		else { next = active === 0 ? this.slides.length - 1 : active - 1; }

		this.slides[next].classList.toggle('active');
		this.slides[next].classList.toggle('animating');

		this.slides[next].style.animation = `slide-${direction} ${this.speed}ms`;
		console.log(this.slides[next]);
		this.animating = true;
		this.slides[next].addEventListener('animationend', () => {
			this.afterAnimating(this.slides[next], previousSlide);
		});

	};

	afterAnimating(activeSlide, previousSlide) {
		activeSlide.style.animation = '';

		previousSlide.classList.remove('active');
		activeSlide.classList.remove('animating');

		activeSlide.removeEventListener('animationend', this.afterAnimating);
		this.animating = false;
	};
};