$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Data analyst","YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Data analyst","YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});



// Smooth Scroll:
$('.navbar .menu li a').on('click', function(e){
    e.preventDefault();
    var targetId = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(targetId).offset().top - 50
    }, 100);
});


// Active Navigation Link:
$(window).scroll(function(){
    var scrollPos = $(document).scrollTop() + 80;
    $('.navbar .menu li a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.navbar .menu li a').removeClass("active");
            currLink.addClass("active");
        }
    });
});


// Form Validation:

$('form').submit(function(e) {
    var isValid = true;
    $('form input[required]').each(function() {
        if ($.trim($(this).val()) === '') {
            isValid = false;
            $(this).addClass('error');
        } else {
            $(this).removeClass('error');
        }
    });
    if (!isValid) {
        e.preventDefault();
        // You can also display an error message
        alert('Please fill out all required fields.');
    }
});


// Scroll Reveal Animation:
// Initialize AOS
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});



