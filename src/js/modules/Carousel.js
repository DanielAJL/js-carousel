export default class Carousel {
	constructor(container) {
		this.container = container;
	}
	generateSlides(amount) {
		for (let idx = 0; idx < amount; idx++) {
			const element = document.createElement('div');
			this.container.appendChild(element);
		}

	}

	// Function for testing purposes.
	test(str) {
		console.log(`${str}`);

	}
}