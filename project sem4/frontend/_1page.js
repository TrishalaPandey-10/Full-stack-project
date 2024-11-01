// $(document).ready(function() {
//     $('.owl-carousel.header-carousel').owlCarousel({
//         items: 1,
//         loop: true,
//         autoplay: true,
//         autoplayTimeout: 1000, // Change slide every 3 seconds
//         autoplayHoverPause: true,
//         animateOut: 'fadeOut',
//         animateIn: 'fadeIn',
//         nav: true,
//         navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
//         dots: true,
//         responsive: {
//             0: {
//                 items: 1
//             },
//             576: {
//                 items: 1
//             },
//             768: {
//                 items: 1
//             },
//             992: {
//                 items: 1
//             }
//         }
//     });
// });
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
        