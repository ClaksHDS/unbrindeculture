let imagePosition = 0;
const images = document.getElementsByClassName('carousel-item');
const totalImages = images.length;

document.getQuerySelector('.next-button').addEventListener('click', function () {
        moveToNextImage();
    });

document.getQuerySelector('.prev-button').addEventListener('click', function () {
        moveToPrevImage();
    });


function updateImagePosition() {
    for (let image of images) {
        image.classList.remove('carousel-item--visible');
        image.classList.add('carousel-item--hidden');
    }
    images[imagePosition].classList.add('carousel-item--visible');
}

function moveToNextImage() {
    if (imagePosition === totalImages -1) {
        imagePosition = 0;
    } else {
        imagePosition++;
    }
    updateImagePosition();
}

function moveToPrevImage() {
    if (imagePosition === 0) {
        imagePosition = totalImages -1;
    } else {
        imagePosition--;
    }
    updateImagePosition();
}