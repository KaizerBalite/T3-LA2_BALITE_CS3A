let cart = [];
let total = 0;

function addToCart(item, price) {
  cart.push({ item, price });
  total += price;
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const totalEl = document.getElementById("total");

  cartItems.innerHTML = "";

  cart.forEach(entry => {
    const li = document.createElement("li");
    li.textContent = `${entry.item} - ₱${entry.price}`;
    cartItems.appendChild(li);
  });

  totalEl.textContent = total;
}