var randonNumber1 = Math.floor(Math.random() * 6) + 1;

var randonDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource ="images/" + randomDiceImage;

var imagel = document.querySelectorAll("img")[0];

imagel.setAttribute("src", randomImageSource);