$(".myBtn").click(function() {
    $('html,body').animate({
        scrollTop: $(".billboard").offset().top},
        'slow');
});


var owl= $('.owl-carousel');

var carouselOption={
    items:3,
    loop:true,
    margin:10,
    autoplay:false,
    nav:false,
    autoplayTimeout:400000,
    navigation:true,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:1
        },
        1440:{
            items:1
        },
       
    }

}
owl.owlCarousel(carouselOption);