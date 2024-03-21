// Define shop inventory
const shopInventory = [
  { name: "Sword", price: 20, type: "weapon" },
  { name: "Shield", price: 15, type: "armor" }
  // Add more items as needed
];

// Function to display available items in the shop
function displayShopItems() {
  const shopItems = document.getElementById("shopItems");
  shopItems.innerHTML = ""; // Clear previous items

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
  // Logic for purchasing item
}
