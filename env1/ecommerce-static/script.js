let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " added to cart!");
}

if (document.getElementById("cart-list")) {
  let cartList = document.getElementById("cart-list");
  let total = 0;

  cart.forEach(item => {
    let li = document.createElement("li");
    li.innerText = `${item.name} - ₹${item.price}`;
    cartList.appendChild(li);
    total += item.price;
  });

  document.getElementById("total").innerText = total;
}