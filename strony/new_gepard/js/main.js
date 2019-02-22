$(document).ready(function () {
    scroll();
});

$(window).scroll(function(scroll){
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
        $("header").addClass('scrolled');
    }
    else {
        $("header").removeClass('scrolled');
    }
});