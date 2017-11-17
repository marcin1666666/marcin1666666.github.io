$(document).ready(function () {
    addScrolled();
    smooth();
});

$(document).scroll(function () {
    addScrolled();
});

function addScrolled() {
    var height = $('#main-nav').height();
    var scroll = $(window).scrollTop();

    if (scroll > height) {
        $('#main-nav').addClass('transparent-background');
    } else {
        $('#main-nav').removeClass('transparent-background');
    }
}

//parallax function

$(window).scroll(function(){
    var scrollTop = $(this).scrollTop();
    $('.parallax').css('top', -(scrollTop * 2) + 'px');
});

//smooth menu

function smooth() {
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').animate({
            'scrollTop': $target.offset().top
        }, 2000, 'swing');

    });
}
