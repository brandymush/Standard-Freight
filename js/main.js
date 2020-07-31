$(".myBtn").click(function() {
    $('html,body').animate({
        scrollTop: $(".billboard").offset().top},
        'slow');
});