$(document).ready(function() {
    $(window).scroll(function() {
        if(this.scrollY > 20) {
            $('nav').addClass('sticky')
        } else {
            $('nav').removeClass('sticky')
        }
        if(this.scrollY > 500) {
            $('.scroll-up-btn').addClass('show')
        } else {
            $('.scroll-up-btn').removeClass('show')
        }
    })
})

// slide-up script

$('.scroll-up-btn').click(function() {
    $('html').animate({scrollTop: 0});
})

// Toggle script

$('.menu-btn').click(function() {
    $('ul').toggleClass('active')
    $('.menu-btn i').toggleClass('active')
})

// Typing animation script

var typed = new Typed(".typing", {
    strings: ["YouTuber", "Developer", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})

var typed = new Typed(".typing-2", {
    strings: ["YouTuber", "Developer", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})
$()

