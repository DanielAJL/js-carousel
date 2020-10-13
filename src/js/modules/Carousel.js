export default class Carousel {
	constructor(container) {
		this.container = container;
		this.slides = Array.from(this.container.children);
		this.activeSlide = this.findActiveClass(this.slides);
	}

	findActiveClass(arr) {
		const result = arr.find(element => element.classList.contains('active'));
		return result;
	}

	// Function for testing purposes.
	test() {
		console.log(this.slides);
		console.log(this.activeSlide);
		console.log(this.slides.indexOf(this.activeSlide));

	}
}