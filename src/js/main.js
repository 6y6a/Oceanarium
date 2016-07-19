$(document).ready(function(){

    // Slider in header
    $('.top-slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        draggable: false,
        nextArrow: $('.arrow-right'),
        prevArrow: $('.arrow-left'),
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false
            }
        }]
    });

    // Slider for future events
    $('.event-slider').slick({
        rows: 2,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: $('.arrow-event-right'),
        prevArrow: $('.arrow-event-left'),
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    rows: 1
                }
            },
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
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

    // Responsive menu
    $('.menu').slicknav();
});