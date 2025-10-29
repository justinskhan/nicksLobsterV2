const cart = JSON.parse(localStorage.getItem("cart")) || [];
const container = document.getElementById("cart-items");
const totalDisplay = document.getElementById("total");

function renderCart() {
  container.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    const div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>$${item.price.toFixed(2)}</p>
      <button class="remove-btn" data-index="${index}">Remove</button>
    `;
    container.appendChild(div);
  });

  totalDisplay.textContent = `Total: $${total.toFixed(2)}`;
  localStorage.setItem("cart", JSON.stringify(cart));
}

container.addEventListener("click", e => {
  if (e.target.classList.contains("remove-btn")) {
    const index = e.target.dataset.index;
    cart.splice(index, 1);
    renderCart();
  }
});

renderCart();