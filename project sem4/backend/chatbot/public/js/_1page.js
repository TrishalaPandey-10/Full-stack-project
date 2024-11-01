
let currentImageIndex = 0;
        const images = document.querySelectorAll('.owl-carousel-item');

        function showImage(index) {
images.forEach(image => image.style.display = 'none');
images[index].style.display = 'block';
}

        function changeSlide(n) {
        currentImageIndex = (currentImageIndex + n + images.length) % images.length;
        showImage(currentImageIndex);
        }

        showImage(currentImageIndex); // Display initial image

// Automatic slideshow
        let slideshowInterval = setInterval(() => changeSlide(1), 3000); // Change image every 3 seconds

// Pause slideshow on hover
         document.getElementById('slideshow').addEventListener('mouseenter', () => clearInterval(slideshowInterval));
        document.getElementById('slideshow').addEventListener('mouseleave', () => slideshowInterval = setInterval(() => changeSlide(1), 3000));
        