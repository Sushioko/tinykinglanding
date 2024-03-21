// Define an array to store the log entries
const logEntries = [];

// Function to log the action
function logAction(action) {
  // Add the action to the beginning of the log entries array
  logEntries.unshift(action);

  // Limit the log to the last 5 entries
  if (logEntries.length > 5) {
    logEntries.pop(); // Remove the oldest entry
  }

  // Update the log display
  updateLogDisplay();
}

// Function to update the log display
function updateLogDisplay() {
  const logElement = document.getElementById("log");
  logElement.innerHTML = ""; // Clear the log display

  // Iterate through the log entries and add them to the log display
  logEntries.forEach(entry => {
    const p = document.createElement("p");
    p.textContent = entry;
    logElement.appendChild(p);
  });
}

// Function to log an attack
function logAttack(attacker, defender, damage) {
  const action = `${attacker} attacked ${defender} for ${damage} damage.`;
  logAction(action);
}

// Function to log soul gain
function logSoulGain(amount) {
  const action = `Player gained ${amount} souls.`;
  logAction(action);
}

// Function to log level up
function logLevelUp(level) {
  const action = `Player leveled up to level ${level}!`;
  logAction(action);
}

// Function to perform player's attack
function playerAttack() {
  const playerDamage = calculateDamage();
  const enemyHPElement = document.getElementById("enemy-hp");

  // Update enemy's HP
  let currentEnemyHP = parseInt(enemyHPElement.innerText);
  currentEnemyHP -= playerDamage;
  enemyHPElement.innerText = Math.max(0, currentEnemyHP); // Prevent negative health

  logAttack(player.name, randomEnemy.name, playerDamage);

  // Check for enemy defeat
  if (currentEnemyHP <= 0) {
    const soulsGained = Math.abs(currentEnemyHP); // Calculate souls gained from negative health
    addSouls(soulsGained); // Give the player souls
    logSoulGain(soulsGained);
    logAction(`You defeated ${randomEnemy.name} and gained ${soulsGained} souls!`);
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

  logAttack(randomEnemy.name, player.name, enemyDamage);

  // Check for player defeat
  if (currentPlayerHP <= 0) {
    logAction("You were defeated!");
    document.getElementById("actions").innerHTML = "";
    return; // Exit attack function early
  }
}

// Function to calculate damage
function calculateDamage() {
  return Math.floor(Math.random() * 10) + 1;
}

// Function to handle attack when the button is clicked
function attack() {
  playerAttack();
  enemyAttack();
}

// Load player information
updatePlayerInfo();

// Load enemy information
const randomEnemy = enemies[Math.floor(Math.random() * enemies.length)];
document.getElementById("enemy-name").innerText = randomEnemy.name;
document.getElementById("enemy-hp").innerText = randomEnemy.hp;

// Load weapons information
const weaponsList = document.getElementById("weapons-list");
weapons.forEach(weapon => {
  const li = document.createElement("li");
  li.textContent = `${weapon.name} (Damage: ${weapon.damage})`;
  weaponsList.appendChild(li);
});
