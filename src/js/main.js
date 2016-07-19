$(document).ready(function(){

    // Slider in header
    $('.top-slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        draggable: false,
        nextArrow: $('.arrow-right'),
        prevArrow: $('.arrow-left')
    });

    // Slider for future events
    $('.event-slider').slick({
        rows: 2,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: $('.arrow-event-right'),
        prevArrow: $('.arrow-event-left')
    });

    // Animation through wow.js
    var animateIn = new WOW({
        boxClass: 'animateIn',
        animateClass: 'animated fadeInUp',
        offset: 250,
        mobile: false
    });

    animateIn.init();

    // Gallery
    $('.gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true,
            preload: [1, 2]
        }
    });
});