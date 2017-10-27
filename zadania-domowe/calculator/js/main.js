$(document).ready(function () {
    display();
    del();
    equal();

})

function display() {
    $('.keys').click(function () {
        var value = $(this).html();
        var oldVal = $('.text').val();
        $('.text').val(oldVal + value);

        if ($(this).hasClass('function')) {
            $(".function").prop('disabled', true);
        } else {
            $(".function").prop('disabled', false);

        }
    });
}

function del() {
    $('.reset').click(function () {
        $('.text').val('');
    });
}

function equal() {
    $('.equal').click(function () {
        var display = $('.text').val();
        var equal = eval(display);
        $('.text').val(equal);
    });
}