let cart = [];
let shirt = {
    name: "Men's Blue T-Shirt",
    color: "blue",
    size: "l",
    cost: 15
}

const catalogDom = document.getElementById("catalog");
catalogDom.innerHTML = "<h3>" + shirt.name + "</h3><p>$" + shirt.cost + "</p>";