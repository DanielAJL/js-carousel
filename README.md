# A JS Carousel

Let's try to make a JS carousel.
<br><br>

# Usage

Install dependencies

```
npm install
```

Run dev server - http://localhost:3000

```
npm run dev
```

Build assets for production

```
npm run build
```
<br><br>


# The HTML Part:

1. Create an element with the class ```.carousel```.

```html
<div class="carousel"></div>
```

2. Add your slide divs and give them the ```.slide``` class. The slide containing the ```.active``` class will be the first slide visible.

```html
<div class="carousel">
	<div class="slide active"></div>
	<div class="slide"></div>
	<div class="slide"></div>
</div>
```

3. If you want, you can add content to your slides.

```html
<div class="carousel">
	<div class="slide active">
		<div class="caption">
			<h2>Placeholder Title.</h2>
			<p>Placeholder paragraph</p>
		</div>
	</div>
		<div class="slide">
			<img src="../path/example.jpg" alt="example.jpg">
			<div class="caption">
				<h2>Placeholder Title.</h2>
				<p>Placeholder paragraph</p>
			</div>
		</div>
		<div class="slide">
		<div class="caption">
			<h2>Placeholder Title.</h2>
			<p>Placeholder paragraph</p>
		</div>
	</div>
</div>
```
<br><br>
# The JavaScript Part:


More coming soon...