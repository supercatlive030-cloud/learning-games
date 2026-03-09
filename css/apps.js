// LIST OF GAMES (MATCH YOUR FOLDER NAMES)

const games = [
"2048",
"chroma",
"cookie-clicker",
"doodle-jump",
"geometry-dash",
"moto-classic",
"moto-winter",
"pacman",
"retro-bowl2",
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
<a href="games/${game}/index.html">
${title}
</a>
`;

gameGrid.appendChild(card);

});

}

loadGames();


// SEARCH FUNCTION

function searchGames(){

let input = document.getElementById("search").value.toLowerCase();

let cards = document.querySelectorAll(".card");

cards.forEach(card => {

let text = card.innerText.toLowerCase();

if(text.includes(input)){
card.style.display = "block";
}else{
card.style.display = "none";
}

});

}


// RANDOM GAME

function randomGame(){

let randomIndex = Math.floor(Math.random() * games.length);

let game = games[randomIndex];

window.location.href = `games/${game}/index.html`;

}