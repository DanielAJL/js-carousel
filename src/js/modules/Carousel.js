// import '../../scss/partials/carousel.scss';
export default class Carousel {
	/**
	 * @description Create a carousel instance
	 * @param {HTMLElement} element element containing the 'carousel' class.
	 * @param {number} speed slide speed in ms.
	 * @param {boolean} auto automatically start sliding
	 * @example 
	 * const carousel = new Carousel(document.querySelector('.carousel'), 1000);
	 */
	constructor(element, speed, auto = false) {
		this.element = element;
		this.speed = speed;
		this.auto = auto;

		this.controls = this.generateControls();
		this.slides = Array.from(this.element.querySelectorAll('.slide'));
		this.animating = false;

		this.autoPlay(this.animating, auto);
	};

	autoPlay(animating, auto) {
		if (animating === false && auto === true) this.nextSlide('next');
	}

	generateControls() {
		for (let index = 0; index < 2; index++) {
			const button = document.createElement('button');
			const directionClass = index === 0 ? 'prev' : 'next';
			this.element.append(button);

			button.classList.add(directionClass, 'control');
			button.addEventListener('click', () => {
				this.auto = false;
				this.nextSlide(directionClass);
			});

		}
	};

	findCurrentSlide() {
		const currentSlide = this.slides.find(slide => slide.classList.contains('active'));
		return currentSlide;
	};

	nextSlide(direction) {
		if (this.animating) return;

		let next;
		const active = this.slides.indexOf(this.findCurrentSlide());
		const previousSlide = this.findCurrentSlide();


		if (direction === 'next') { next = active < this.slides.length - 1 ? active + 1 : 0; }
		else { next = active === 0 ? this.slides.length - 1 : active - 1; }

		this.slides[next].style.animation = `slide-${direction} ${this.speed}ms`;
		this.slides[next].classList.add('active', 'animating');
		this.animating = true;

		const callback = () => {
			this.afterAnimating(this.slides[next], previousSlide)
			this.slides[next].removeEventListener('animationend', callback);
		};
		this.slides[next].addEventListener('animationend', callback)
	};

	afterAnimating(activeSlide, previousSlide) {
		previousSlide.classList.remove('active', 'animating');
		activeSlide.style.animation = '';
		activeSlide.classList.remove('animating');

		this.animating = false;

		this.autoPlay(this.animating, this.auto);
	};

};