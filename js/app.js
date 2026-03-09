document.addEventListener("DOMContentLoaded", function(){

// LIST OF GAMES (MATCH YOUR FOLDERS)

const games = [
"2048",
"chroma",
"cookie-clicker",
"doodle-jump",
"geometry-dash",
"moto-classic-version",
"moto-winter-version",
"pacman",
"slope",
"slope-2"
];

const gameGrid = document.getElementById("gameGrid");


// LOAD GAMES

function loadGames(){

gameGrid.innerHTML = "";

games.forEach(game => {

let card = document.createElement("div");
card.className = "card";

let title = game.replaceAll("-", " ");

card.innerHTML = `
<a href="games/${game}/index.html">${title}</a>
`;

gameGrid.appendChild(card);

});

}

loadGames();


// SEARCH FUNCTION

window.searchGames = function(){

let input = document.getElementById("search").value.toLowerCase();
let cards = document.querySelectorAll(".card");

cards.forEach(card => {

let text = card.innerText.toLowerCase();

if(text.includes(input)){
card.style.display = "flex";
}else{
card.style.display = "none";
}

});

};


// RANDOM GAME

window.randomGame = function(){

let randomIndex = Math.floor(Math.random() * games.length);

let game = games[randomIndex];

window.location.href = `games/${game}/index.html`;

};

});