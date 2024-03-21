// Define shop inventory (items available for purchase)
const shopInventory = [
  { name: "Sword", price: 20, type: "weapon" },
  { name: "Shield", price: 15, type: "armor" },
  // Add more items as needed
];

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
