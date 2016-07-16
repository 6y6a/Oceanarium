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


    // Animation through wow.js
    var animateIn = new WOW({
        boxClass: 'animateIn',
        animateClass: 'animated fadeInUp',
        offset: 300,
        mobile: false
    });

    animateIn.init();
});