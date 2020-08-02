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

    

      



var owl= $('.owl-carousel');

var carouselOption={
   
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
            items:3
        },
        1440:{
            items:3
        },
        576:{
            items:1
        }
       
    }

}
owl.owlCarousel(carouselOption);

