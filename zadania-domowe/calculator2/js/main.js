//$(document).ready(function () {
//    display();
//    del();
//    equal();
//
//})
//
//function display() {
//    $('.keys').click(function () {
//        var value = $(this).html();
//        var oldVal = $('.text').val();
//        $('.text').val(oldVal + value);
//
//        if ($(this).hasClass('function')) {
//            $(".function").prop('disabled', true);
//        } else {
//            $(".function").prop('disabled', false);
//
//        }
//    });
//}
//
//function del() {
//    $('.reset').click(function () {
//        $('.text').val('');
//    });
//}
//
//function equal() {
//    $('.equal').click(function () {
//        var display = $('.text').val();
//        var equal = eval(display);
//        $('.text').val(equal);
//    });
//}



window.onload = function () {

    var current,
        screen,
        output,
        limit,
        zero,
        period,
        operator;

    screen = document.getElementById("result");

    var elem = document.querySelectorAll(".num");

    var len = elem.length;

    for (var i = 0; i < len; i++) {

        elem[i].addEventListener("click", function () {

            num = this.value;

            output = screen.innerHTML += num;

            limit = output.length;

            if (limit > 16) {

                alert("Sorry no more input is allowed");

            }

        }, false);

    }

    document.querySelector(".zero").addEventListener("click", function () {

        zero = this.value;

        if (screen.innerHTML === "") {

            output = screen.innerHTML = zero;
        } else if (screen.innerHTML === output) {

            output = screen.innerHTML += zero;

        }

    }, false);

    document.querySelector(".period").addEventListener("click", function () {

        period = this.value;

        if (screen.innerHTML === "") {

            output = screen.innerHTML = screen.innerHTML.concat("0.");

        } else if (screen.innerHTML === output) {

            screen.innerHTML = screen.innerHTML.concat(".");

        }

    }, false);


    document.querySelector("#eqn-bg").addEventListener("click", function () {

        if (screen.innerHTML === output) {
            screen.innerHTML = eval(output);
        } else {
            screen.innerHTML = "";
        }

    }, false);

    document.querySelector("#delete").addEventListener("click", function () {

        screen.innerHTML = "";

    }, false);


    var elem1 = document.querySelectorAll(".operator");

    var len1 = elem1.length;

    for (var i = 0; i < len1; i++) {

        elem1[i].addEventListener("click", function () {

            operator = this.value;

            if (screen.innerHTML === "") {

                screen.innerHTML = screen.innerHTML.concat("");
            } else if (output) {

                screen.innerHTML = output.concat(operator);

            }

        }, false);

    }
}
