'strict mode';


var circles = document.querySelectorAll('.circle');

console.log(circles);

for (var i = 0; i < circles.length; i++) {
	circles[i].onclick = function () {
		this.firstElementChild.classList.toggle('visible');
	}
}

var secondaryList = document.querySelectorAll('.main_item');

console.log(secondaryList);

    for (var i = 0; i <secondaryList.length; i++) {
        secondaryList[i].onclick = function() {
            this.lastElementChild.classList.toggle('visible')
        }
    }
