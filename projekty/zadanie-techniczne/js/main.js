// menu display/hide

var secondaryList = document.querySelectorAll('.main_item');

console.log(secondaryList);

for (var i = 0; i < secondaryList.length; i++) {

    secondaryList[i].onclick = function () {

        var currentElement = this;
        for (var j = 0; j < secondaryList.length; j++) {
            if (secondaryList[j] != currentElement) {
                secondaryList[j].classList.remove('active');
                secondaryList[j].lastElementChild.classList.remove('visible');
            }
        }
        this.classList.toggle('active');
        this.lastElementChild.classList.toggle('visible');
    }
}

// tooltip display/hide

var tooltipText = document.querySelectorAll('.circle');

console.log(tooltipText);

for (var i = 0; i < tooltipText.length; i++) {

    tooltipText[i].onclick = function () {

        var currentElement = this;
        for (var t = 0; t < tooltipText.length; t++) {
            if (tooltipText[t] != currentElement) {
                tooltipText[t].lastElementChild.classList.remove('visible');
            }
        }
        this.firstElementChild.classList.toggle('visible');
    }
}

// Close the menu if the user clicks outside of it
// Close the tooltip if the user clicks outside of it
window.addEventListener('click', function (e) {

    var targetEl = e.target || e.srcElement;
    var isClickedInMenu = false;

    if (findAncestor(targetEl, 'main_item')) {
        isClickedInMenu = true;
    }

    if (isClickedInMenu === false) {
        var secondaryList = document.querySelectorAll('.main_item');
        for (var j = 0; j < secondaryList.length; j++) {
            secondaryList[j].classList.remove('active');
            secondaryList[j].lastElementChild.classList.remove('visible');
        }
    }

    var isClickedInTooltip = false;

    if (findAncestor(targetEl, 'circle')) {
        isClickedInTooltip = true;
    }

    if (isClickedInTooltip === false) {
        var tooltipText = document.querySelectorAll('.tooltiptext');
        for (var t = 0; t < tooltipText.length; t++) {
            tooltipText[t].classList.remove('visible');
        }
    }
});

function findAncestor(el, cls) {
    while (!el.classList.contains(cls) && (el = el.parentElement));
    return el;
}
