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
const shopModal = document.getElementById("shopModal");
shopBtn.addEventListener("click", () => {
  shopModal.style.display = "block";
});

// Close the shop modal when the user clicks outside of it
window.addEventListener("click", (event) => {
  if (event.target == shopModal) {
    shopModal.style.display = "none";
  }
});

// Close the shop modal when the user clicks the close button
const closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", () => {
  shopModal.style.display = "none";
});

// Function to display available items in the shop
function displayShopItems() {
  const shopItems = document.getElementById("shopItems");
  shopItems.innerHTML = ""; // Clear previous items

  // Loop through available items and display them
  for (const item of shopInventory) {
    const li = document.createElement("li");
    li.textContent = `${item.name} - Souls: ${item.price}`;
    li.addEventListener("click", () => {
      purchaseItem(item);
    });
    shopItems.appendChild(li);
  }
}

// Define shop inventory (items available for purchase)
const shopInventory = [
  { name: "Sword", price: 20, type: "weapon" },
  { name: "Shield", price: 15, type: "armor" },
  // Add more items as needed
];

// Function to handle item purchase
function purchaseItem(item) {
  if (player.souls >= item.price) {
    player.souls -= item.price; // Deduct souls from player
    if (item.type === "weapon") {
      player.weapon = item.name; // Replace player's weapon
      document.getElementById("player-weapon").innerText = item.name; // Update display
    } else if (item.type === "armor") {
      player.armor = item.name; // Replace player's armor
      document.getElementById("player-armor").innerText = item.name; // Update display
    }
    // Update player info (including souls)
    updatePlayerInfo();
    // Close the shop modal
    shopModal.style.display = "none";
  } else {
    alert("You don't have enough souls to purchase this item!");
  }
}

// Display shop items when the page loads
displayShopItems();
