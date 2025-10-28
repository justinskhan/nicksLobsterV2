const menuItems = [
  { id: 1, name: "Nick's Lobster Roll", price: 42, image: "images/lobsterRoll.webp" },
  { id: 2, name: "Lobster Tail", price: 50, image: "images/lobsterTail.webp" },
  { id: 3, name: "Fried Calamari", price: 20, image: "images/friedCalamari.avif" },
  { id: 4, name: "Mussels", price: 22, image: "images/mussels.avif" },
  { id: 5, name: "Clams Oreganata", price: 30, image: "images/clamsOreganata.jpeg" },
  { id: 6, name: "Grilled Branzino", price: 38, image: "images/grilledBranzino.jpg" },
  { id: 7, name: "Stuffed Shrimp", price: 44, image: "images/stuffedShrimp.jpg" },
  { id: 8, name: "NY Strip Steak", price: 40, image: "images/steak.avif" },
  { id: 9, name: "Surf and Turf", price: 96, image: "images/surfTurf.avif" }
];

const container = document.createElement("div");
container.classList.add("menu-container");

menuItems.forEach(item => {
  const card = document.createElement("div");
  card.classList.add("menu-item");
  card.innerHTML = `
    <img src="${item.image}" alt="${item.name}">
    <h3>${item.name}</h3>
    <p>$${item.price.toFixed(2)}</p>
    <button class="add-to-cart" data-id="${item.id}">Add to Cart</button>
  `;
  container.appendChild(card);
});

document.body.insertBefore(container, document.querySelector(".footerContainer"));

const cart = JSON.parse(localStorage.getItem("cart")) || [];

document.querySelectorAll(".add-to-cart").forEach(btn => {
  btn.addEventListener("click", () => {
    const id = parseInt(btn.dataset.id);
    const item = menuItems.find(i => i.id === id);
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${item.name} added to cart`);
  });
});