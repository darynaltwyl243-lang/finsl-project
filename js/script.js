let cart = JSON.parse(localStorage.getItem("cart")) || [];

let btns = document.querySelectorAll(".addBtn");

let cartCount = document.querySelector(".cart-count");

cartCount.innerText = cart.length;

let products = [
    { id: 1, name: "Gucci Bag", price: 120, image: "images/1.jpeg" },
    { id: 2, name: "Louis Vuitton Bag", price: 130, image: "images/2.jpeg" },
    { id: 3, name: "Prada Bag", price: 140, image: "images/3.jpeg" },
    { id: 4, name: "Chanel Bag", price: 150, image: "images/4.jpeg" },
    { id: 5, name: "Hermes Bag", price: 160, image: "images/5.jpeg" },
    { id: 6, name: "Dior Bag", price: 170, image: "images/6.jpeg" },
    { id: 7, name: "Fendi Bag", price: 180, image: "images/7.jpeg" },
    { id: 8, name: "Armani Bag", price: 190, image: "images/8.jpeg" },
    { id: 9, name: "Calvin Klein Bag", price: 200, image: "images/9.jpeg" },
    { id: 10, name: "Michael Kors Bag", price: 210, image: "images/10.jpeg" },
    { id: 11, name: "Coach Bag", price: 220, image: "images/11.jpeg" },
    { id: 12, name: "Versace Bag", price: 230, image: "images/12.jpeg" }
];


btns.forEach(function (btn, index) {

    btn.onclick = function () {

        let product = products[index];
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        cartCount.innerText = cart.length;

        let check = btn.parentElement.querySelector(".check");
        check.style.display = "block";

    };

});