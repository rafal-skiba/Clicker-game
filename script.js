function getRandomNumber(min, max) {
    return min + Math.floor((max - min) * Math.random());
}

function getNumberWithUnits(number, units) {
    return number + units
}

function insertValue(value, placeID) {
    let place = document.getElementById(placeID);
    place.innerText = value;
}



let button = document.getElementById("the-button");
let counter = 0;
let timeLimit = 10;

button.addEventListener("click", function() {
    counter++;
    let buttonWidth = button.offsetWidth;
    let buttonHeight = button.offsetHeight;
    let leftRandom = getRandomNumber(0, button.parentElement.offsetWidth);

button.style.marginLeft = getNumberWithUnits(leftRandom - buttonWidth, "px");
    insertValue(counter, "score")

} )



let intervalID = setInterval(function () {
    timeLimit--;

    if (timeLimit === 0) {
        clearInterval(intervalID);
        button.disabled = true;
    }

    insertValue(timeLimit, "time")
}, 1000)