// Define player information including souls
const player = {
  name: "Fallen King",
  hp: 100,
  souls: 0, // Initialize souls
  level: 1, // Initialize level
  exp: 0, // Initialize experience
  weapon: "Fists", // Initialize weapon
  armor: "None" // Initialize armor
};

// Function to update player info including souls
function updatePlayerInfo() {
  document.getElementById("player-name").innerText = player.name;
  document.getElementById("player-hp").innerText = player.hp;
  document.getElementById("player-souls").innerText = player.souls;
  document.getElementById("player-level").innerText = player.level;
  document.getElementById("player-exp").innerText = player.exp;
  document.getElementById("player-weapon").innerText = player.weapon;
  document.getElementById("player-armor").innerText = player.armor;
}
