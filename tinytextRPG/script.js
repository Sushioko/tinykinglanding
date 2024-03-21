// Load weapon definitions
const script = document.createElement("script");
script.src = "weapons.js";
document.head.appendChild(script);

// Function to handle attack when the button is clicked
function attack() {
  const initialEnemyHP = parseInt(document.getElementById("enemy-hp").innerText);

  playerAttack();
  if (initialEnemyHP > 0) {
    enemyAttack();
  }
}

// Function to perform player's attack
function playerAttack() {
  const playerDamage = calculateDamage();
  const enemyHPElement = document.getElementById("enemy-hp");

  // Update enemy's HP
  let currentEnemyHP = parseInt(enemyHPElement.innerText);
  currentEnemyHP -= playerDamage;
  enemyHPElement.innerText = Math.max(0, currentEnemyHP); // Prevent negative health

  // Check for enemy defeat
  if (currentEnemyHP <= 0) {
    const soulsGained = Math.abs(currentEnemyHP); // Calculate souls gained from negative health
    addSouls(soulsGained); // Give the player souls
    document.getElementById("actions").innerHTML = "";
    return; // Exit attack function early
  }
}

// Function to perform enemy's attack
function enemyAttack() {
  const enemyDamage = calculateDamage();
  const playerHPElement = document.getElementById("player-hp");

  // Update player's HP
  let currentPlayerHP = parseInt(playerHPElement.innerText);
  currentPlayerHP -= enemyDamage;
  playerHPElement.innerText = Math.max(0, currentPlayerHP); // Prevent negative health

  // Check for player defeat
  if (currentPlayerHP <= 0) {
    document.getElementById("actions").innerHTML = "";
    return; // Exit attack function early
  }
}

// Function to calculate damage
function calculateDamage() {
  return Math.floor(Math.random() * 3) + 1; // Player starts with fists, dealing 1-3 damage
}

// Function to update player information (including souls)
function updatePlayerInfo() {
  document.getElementById("player-name").innerText = player.name;
  document.getElementById("player-hp").innerText = player.hp;
  document.getElementById("player-souls").innerText = player.souls;
  document.getElementById("player-level").innerText = player.level;
  document.getElementById("player-exp").innerText = player.exp;
}

// Shop functionality

// Open the shop modal
const shopBtn = document.getElementById("shopBtn");
const shopModal = document
