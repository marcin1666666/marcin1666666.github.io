$(document).ready(function () {
    smooth();
});

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


//menu function

function myFunction() {
    document.getElementById("menu-icon").classList.toggle("change");
}

function display_menu() {
    document.getElementById("hide").classList.toggle("visible");
}
