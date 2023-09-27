
var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;
var randomDiceImg1 = "dice" + randomNumber1;

var randomSource1 = "./images/" + randomDiceImg1 + ".png";

document.querySelector(".img1").setAttribute("src",randomSource1);


var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;
var randomDiceImg2 = "dice" + randomNumber2;

var randomSource2 = "./images/" + randomDiceImg2 + ".png";

document.querySelector(".img2").setAttribute("src",randomSource2);

if(randomNumber1 > randomNumber2){

    document.querySelector("h1").textContent = "🏆Player 1 Wins";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").textContent = "Player 2 Wins🏆";
}
else {
    document.querySelector("h1").textContent = " 🍻Its a DRAW🍻 ";
}
