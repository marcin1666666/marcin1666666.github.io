'strict mode';


var circles = document.querySelectorAll('.circle');


console.log(circles);

for (var i = 0; i < circles.length; i++) {
	circles[i].onclick = function () {
		this.firstElementChild.classList.toggle('visible');
	}
}