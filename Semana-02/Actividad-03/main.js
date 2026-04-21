import ProductManager from "./ProductManager.js";

const manager = new ProductManager();


manager.addProduct({
    name: "Teclado",
    description: "Teclado Mecánico",
    price: 25000,
    stock: 25
});

manager.addProduct({
    name: "Mouse",
    description: "Mouse Gamer",
    price: 15000,
    stock: 40
});

manager.addProduct({
    name: "Monitor",
    description: "Monitor 24 pulgadas",
    price: 120000,
    stock: 10
});

console.log(manager.getProducts());

console.log(manager.getProductById(2));
console.log(manager.getProductById(99));