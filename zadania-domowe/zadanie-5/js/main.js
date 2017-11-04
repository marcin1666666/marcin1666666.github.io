$(document).ready(function () {

    downloadJson();

});

function downloadJson() {
    $('.download').click(function () {
        $.getJSON("https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php", function (data) {
            if ($('#dane-programisty').length < 1) {
                $('body').append('<div id="dane-programisty"></div>');
            } else {
                $('#dane-programisty').html("");
            }
            $.each(data, function (index, element) {
                $('#dane-programisty').append('<p>' + index + ': ' + element + '<p>');
            });
        });
    });
}