(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();

    document.getElementById("floating-links").innerHTML = `
    <a href="https://api.whatsapp.com/send?phone=919010495143&text=Hi%2C%20I%20am%20interested" class="whatsapp-button" target="_blank" style="
position: fixed;
right: 15px;
bottom: 140px;
color: #fff;
background-color: #25d366;
border-radius: 15px;
z-index: 1000;
">
<img src="https://i.ibb.co/VgSspjY/whatsapp-button.png" alt="whatsapp"/>
</a>
<a href="https://youtube.com/@AIOCSAllIndiaOCSangam" target="_blank" style="
position: fixed;
right: 15px;
bottom: 280px;
color: #fff;

background-color: #BDBDBD;
border-radius: 15px;
padding: 5px 0px;
z-index: 1000;
">
<img src="/img/Youtube.png" alt="youtube" width="60px"/>
</a>
<a href="https://www.facebook.com/profile.php?id=100090060027465&mibextid=ZbWKwL" target="_blank" style="
position: fixed;
right: 15px;
bottom: 210px;
color: #fff;
border-radius: 15px;
z-index: 1000;
">
<img src="/img/messenger.png" alt="messenger" width="60px"/>
</a>`;

    // Fixed Navbar
    $(window).scroll(function () {
        if ($(window).width() < 992) {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-dark shadow');
            } else {
                $('.fixed-top').removeClass('bg-dark shadow');
            }
        } else {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-dark shadow').css('top', -45);
            } else {
                $('.fixed-top').removeClass('bg-dark shadow').css('top', 0);
            }
        }
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Causes progress
    $('.causes-progress').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, { offset: '80%' });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        autoplayTimeout: 2000,
        smartSpeed: 500,
        center: true,
        dots: true,
        loop: true,
        nav: false,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            }
        }
    });


})(jQuery);

