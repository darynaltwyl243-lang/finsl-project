let cart = JSON.parse(localStorage.getItem("cart")) || [];

let cartItems = document.getElementById("cartItems");

let total = 0;

cart.forEach(function(product){

    cartItems.innerHTML += `
      <tr> 
        <td><img src="${product.image}" width="60"></td>
        <td>${product.name}</td>
        <td>$${product.price}</td>
      </tr>
    `;

    total += product.price;
});


document.getElementById("total").innerText = "Total: $" + total;


function confirmOrder() {
    alert("Order Confirmed ✅");
    localStorage.removeItem("cart");
    location.reload();
}





