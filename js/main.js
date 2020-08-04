$(".myBtn").click(function() {
    $('html,body').animate({
        scrollTop: $(".billboard").offset().top},
        'slow');
});

$(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $("nav").addClass("active shadow-lg");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $("nav").removeClass("active shadow-lg");
    }
});

    
$(".navbar-toggler").click(function(e){
    e.preventDefault();
    $('.navbar-toggler').toggleClass("main");
  });

$.fn.carousel.TRANSITION_DURATION = 1000;

$('.carousel').carousel();

var owl= $('.owl-carousel');

var carouselOption={
   
    loop:true,
    margin:10,
    autoplay:false,
    autoplayTimeout:400000,
    navigation:true,
    autoplayHoverPause:true,
    responsive:{
        0:{
           items:1 
        },
        768:{
            items:3
        },
        1440:{
            items:3
        },
        576:{
            items:1,
            nav:true,
            
        }
       
    }

}
owl.owlCarousel(carouselOption);

