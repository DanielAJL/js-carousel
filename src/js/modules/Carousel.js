export default class Carousel {
	constructor(container) {
		this.container = container;
		this.slides = Array.from(this.container.querySelectorAll('img'));

		this.goNextSlide = this.goNextSlide.bind(this);
		this.goPrevSlide = this.goPrevSlide.bind(this);
	}

	findActiveClass() {
		const active = this.slides.find(element => element.classList.contains('active'));
		return active;
	}

	goNextSlide() {
		const active = this.slides.indexOf(this.findActiveClass());
		this.findActiveClass().classList.remove('active');
		const next = active < this.slides.length - 1 ? active + 1 : 0;
		this.slides[next].classList.toggle('active');
		this.slides[next].style.animation = "slide-left 0.5s";
	}

	goPrevSlide() {
		const active = this.slides.indexOf(this.findActiveClass());
		this.findActiveClass().classList.remove('active');
		const next = active === 0 ? this.slides.length - 1 : active - 1;
		this.slides[next].classList.toggle('active');
		this.slides[next].style.animation = "slide-right 0.5s";
	}


	// Function for testing purposes.
	test() {
		console.log(this);
	}
}