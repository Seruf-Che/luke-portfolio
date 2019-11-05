svg4everybody();

/*Gallery Image Height*/
$(function(){
  $('.gallery__img').height($('.gallery__img').width()/1.315);

  $(window).resize(function(){
    $('.gallery__img').height($('.gallery__img').width()/1.315);
  });
});

/*Hamburger menu*/

$(document).ready(function(){
    $('.hamburger').addClass('hamburger--enable');
    $('#main-nav').addClass('menu__main--closed');
    $('.hamburger').click(function(){
        $(this).toggleClass('hamburger--open');
        $('#main-nav').toggleClass('menu__main--closed');
    });
});

/*one page scroll*/
$('#main-nav').onePageNav({
	changeHash: false,
	scrollSpeed: 500,
	scrollThreshold: 0.5,
	filter: '',
	easing: 'swing'
});

/*fixed header on scroll*/
window.onscroll = function() {fixHeader()};
var header = document.getElementById("header");
var sticky = header.offsetTop;
function fixHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("menu--fixed");
  } else {
    header.classList.remove("menu--fixed");
  }
}

/*OWL CAROUSEL*/
$(document).ready(function(){
  $(".heading-slider").owlCarousel({
    items: 1,
    margin: 0,
    loop: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 8000,
    dotsClass: 'page-heading__controls controls',
    dotClass: 'controls__item'
  });
  $(".testimonials").owlCarousel({
    items: 1,
    margin: 0,
    loop: true,
    nav: true,
    navText: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 8000,
    startPosition: 2,
    navContainerClass: 'testimonials__nav',
    navClass: ['testimonials__arrow testimonials__arrow--left','testimonials__arrow testimonials__arrow--right'],
    dotsClass: 'testimonials__controls',
    dotClass: 'testimonials__dot'
  });
});
