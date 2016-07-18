$(document).ready(function(){

    // Slider in header
    $('.top-slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        draggable: false,
        nextArrow: $('.arrow-right'),
        prevArrow: $('.arrow-left')
    });

    // Slider for future events
    $('.event-slider').slick({
        draggable: false,
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
        offset: 300,
        mobile: false
    });

    animateIn.init();
});