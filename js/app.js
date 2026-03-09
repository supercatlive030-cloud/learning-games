const games = [
{ name: "2048", folder: "2048" },
{ name: "Chrome Dino", folder: "chrome" },
{ name: "Cookie Clicker", folder: "cookie-clicker" },
{ name: "Doodle Jump", folder: "doodle-jump" },
{ name: "Geometry Dash", folder: "geometry-dash" },
{ name: "Pacman", folder: "pacman" },
{ name: "Slope", folder: "slope" }
];

const grid = document.getElementById("gameGrid");

function loadGames(list){
grid.innerHTML = "";

list.forEach(game => {

const card = document.createElement("div");
card.className = "card";

card.innerHTML = `
<a href="games/${game.folder}/index.html">
${game.name}
</a>
`;

grid.appendChild(card);

});
}

function searchGames(){

const search = document
.getElementById("search")
.value
.toLowerCase();

const filtered = games.filter(game =>
game.name.toLowerCase().includes(search)
);

loadGames(filtered);

}

function randomGame(){

const random = games[
Math.floor(Math.random()*games.length)
];

window.location =
`games/${random.folder}/index.html`;

}

loadGames(games);