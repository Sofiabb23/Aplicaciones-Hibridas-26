import ProductManager from "./ProductManager.js";

// Crear instancia correctamente
const manager = new ProductManager();

// Debug (opcional, pero útil)
console.log("Instancia:", manager);

// Agregar productos
manager.addProduct({
    id: 25,
    name: "Mochila",
    description: "Mochila para uso diario, mediana, con compartimentos",
    price: 25000,
    stock: 25
});

manager.addProduct({
    id: 35,
    name: "Bolso Facultad",
    description: "Bolso para Facultad, con compartimentos",
    price: 15000,
    stock: 40
});

manager.addProduct({
    id: 45,
    name: "Cartuchera ",
    description: "Cartuchera para uso diario, mediana, con dos compartimentos",
    price: 5000,
    stock: 20
});


// Mostrar todos los productos
console.log("Nuestros Productos:");
console.log(manager.getProducts());

// Buscar producto existente
console.log("Producto Especifico ID 1:");
console.log(manager.getProductById(35));

// Buscar producto inexistente
console.log("Producto ID no encontrado:");
console.log(manager.getProductById(99));