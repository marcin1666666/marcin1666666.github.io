$(document).ready(function () {

    downloadJson();

})

function downloadJson() {
    $('.download').click(function () {
        $.post("https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php", function (data) {
            $('.dane-programisty').html(data);
        });
    });
}
