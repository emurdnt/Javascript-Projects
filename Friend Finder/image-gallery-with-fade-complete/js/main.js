var targetImage = document.querySelector('.target-image');
var controlsDiv = document.querySelector('.controls');
var currentImage = 0;
var opacity = 1; // cuz the targetImage is visible on load
var intervalId;
var images = [
	'img/beach1.jpg',
	'img/beach2.jpg',
	'img/beach3.jpg'
];

controlsDiv.addEventListener('click', controlsHandler);
document.addEventListener('keydown', documentHandler);

// TODO: create a fadeOut function. Incrementally decreases the opacity until
// it reaches 0; once opacity is 0, switch to the new image and fadeIn()
function fadeOut() {
	if (opacity > 0) {
		opacity = opacity - 0.05;
		targetImage.style.opacity = opacity;
		// fade some more....
		requestAnimationFrame(fadeOut);
	} else {
		console.log('targetImage is transparent');
		// image is transparent, swap to the next image
		targetImage.src = images[currentImage];
		// fade it back in 
		fadeIn();
	}
}

// TODO: create a fadeIn() function
// Incrementally increases the opacity until it reaches 1
function fadeIn() {
	if (opacity < 1) {
		opacity = opacity + 0.05;
		targetImage.style.opacity = opacity;
		// fade some more....
		requestAnimationFrame(fadeIn);
	} else {
		console.log('targetImage is opaque');
	}
}

function moveSlide(dir) {
	// try to advance the current image
	currentImage += dir;
	// check for before the first, or after the last...
	if (currentImage < 0) {
		currentImage = images.length - 1;
	} else if (currentImage === images.length) {
		currentImage = 0;
	}

	// TODO: make adjustmetns in order to manage the fade out and fade in of the image
	fadeOut();
}

function documentHandler(evt) {
	switch (evt.code) {
		case 'ArrowRight':
			// next image
			moveSlide(+1);
			break;
		case 'ArrowLeft':
			// prev image
			moveSlide(-1);
			break;
	}
}

function controlsHandler(evt) {
	// Determine the next index for image to show
	switch (evt.target.className) {
		case 'btn-prev':
			moveSlide(-1);
			break;
		case 'btn-next':
			moveSlide(+1);
			break;
	}
}

// TODO: preload known images
(function (imageArray) {
	var img;
	var idx;
	for (idx = 0; idx < imageArray.length; idx += 1) {
		img = new Image(); // document.createElement('img')
		img.src = imageArray[idx];
	}
}(images));