window.onload = function () {

    var screen,
        current = '',
        globalLimit = 10;

    screen = document.getElementById("result");

    var numElements = document.querySelectorAll(".num");

    for (var i = 0; i < numElements.length; i++) {

        numElements[i].addEventListener("click", function () {

            var num = this.value;

            screen.innerHTML += num;
            current += num;

            var limit = screen.innerHTML.length;

            if (limit > globalLimit) {

                alert("Osiągnąłeś limit wyświetlacza!");

            }

        }, false);

    }

    document.querySelector(".zero").addEventListener("click", function () {

        var zero = this.value;

        if (parseFloat(screen.innerHTML) !== 0 || current.indexOf('.') !== -1) {

            screen.innerHTML += zero;
            current += zero;
        } else {
            current = '0';
        }

    }, false);

    document.querySelector(".period").addEventListener("click", function () {

        if (current === '') {

            screen.innerHTML = screen.innerHTML + "0.";

            current = "0.";

        } else if (current && current.indexOf('.') === -1) {

            screen.innerHTML = screen.innerHTML + ".";

            current = current + ".";
        }


    }, false);


    document.querySelector("#percent").addEventListener("click", function () {

        if (current !== '') {
            var screenCopy = screen.innerHTML;
            var first = parseFloat(screenCopy.replace(new RegExp(current + '$'), ''));
            screen.innerHTML = first * parseFloat(current) / 100;
            current = '';
        }

    }, false);

    document.querySelector("#eqn-bg").addEventListener("click", function () {

        if (current !== '') {
            screen.innerHTML = eval(screen.innerHTML);
        } else {
            screen.innerHTML = "";
        }

        current = '';

    }, false);

    document.querySelector("#delete").addEventListener("click", function () {

        screen.innerHTML = "";
        current = '';

    }, false);


    var operatorElements = document.querySelectorAll(".operator");

    for (var i = 0; i < operatorElements.length; i++) {

        operatorElements[i].addEventListener("click", function () {

            var operator = this.value;

            if (screen.innerHTML === "") {

                screen.innerHTML = screen.innerHTML.concat("");

            } else if (current !== '') {

                screen.innerHTML = screen.innerHTML.concat(operator);

            }

            current = '';

        }, false);

    }
}
