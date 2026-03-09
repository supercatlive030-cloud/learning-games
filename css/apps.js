// SEARCH FUNCTION

function searchGames() {

let input = document.getElementById("search").value.toLowerCase();
let cards = document.querySelectorAll(".card");

cards.forEach(function(card){

let text = card.innerText.toLowerCase();

if(text.includes(input)){
card.style.display = "block";
}else{
card.style.display = "none";
}

});

}


// RANDOM GAME BUTTON

function randomGame(){

let games = document.querySelectorAll(".card a");

let random = Math.floor(Math.random() * games.length);

window.location.href = games[random].href;

}


// CARD ANIMATION

document.addEventListener("DOMContentLoaded", function(){

document.querySelectorAll(".card").forEach(card => {

card.addEventListener("mouseenter", () => {
card.style.boxShadow = "0 0 15px #00ff9c";
});

card.addEventListener("mouseleave", () => {
card.style.boxShadow = "none";
});

});

});