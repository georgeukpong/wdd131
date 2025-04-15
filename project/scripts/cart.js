document.addEventListener("DOMContentLoaded", function () {
  const cartItems = [];
  const cartList = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  const addToCartButtons = document.querySelectorAll(".add-to-cart");

  addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
      const productId = button.dataset.id;
      const productElement = button.closest(".product");
      const name = productElement.querySelector("p").textContent;
      const price = parseInt(productElement.querySelector(".price").textContent.replace("₦", "").replace(",", ""));

      // Add to cart array
      cartItems.push({ id: productId, name, price });
      renderCart();
    });
  });

  function renderCart() {
    cartList.innerHTML = "";
    let total = 0;

    cartItems.forEach((item, index) => {
      const li = document.createElement("li");
      li.innerHTML = `${item.name} - ₦${item.price.toLocaleString()} <button class="remove-item" data-index="${index}">Remove</button>`;
      cartList.appendChild(li);
      total += item.price;
    });

    cartTotal.textContent = `₦${total.toLocaleString()}`;

    // Add event listeners to remove buttons
    const removeButtons = document.querySelectorAll(".remove-item");
    removeButtons.forEach(button => {
      button.addEventListener("click", () => {
        const index = parseInt(button.dataset.index);
        cartItems.splice(index, 1);
        renderCart();
      });
    });
  }

  // Clear all items
  document.getElementById("clear-cart").addEventListener("click", () => {
    cartItems.length = 0;
    renderCart();
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const productList = [
    "Elegant Ankara Maxi",
    "Classic Isi Agu",
    "Naija Streetwear",
    "Royal Agbada Vibes",
    "Modern Gele Wrap",
    "Traditional Beaded Set",
    "Kente Tunic Top",
    "Adire Print Skirt"
  ];

  const selectElement = document.getElementById("product");

  productList.forEach(product => {
    const option = document.createElement("option");
    option.value = product;
    option.textContent = product;
    selectElement.appendChild(option);
  });
});


