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
        }, 2500, 'swing');

    });
}

//slider function

var index = 1;

function plusIndex(n) {
    index = index + 1;
    showImage(index);
}

showImage(1);

function showImage(n) {
    var i;
    var x = document.getElementsByClassName('slides');
    if (n > x.length) {
        index = 1
    };
    if (n < 1) {
        index = x.length
    };
    for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
    }

    x[index - 1].style.display = 'block';
}
autoShow();

function autoShow() {

    var i;
    var x = document.getElementsByClassName('slides');
    for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
    }
    if (index > x.length) {
        index = 1
    }

    x[index - 1].style.display = 'block';
    index++;
    setTimeout(autoShow, 5000);
}
