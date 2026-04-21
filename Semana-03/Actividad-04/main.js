import ProductManager from "./ProductManager.js";

const manager = new ProductManager("./products.json");

const run = async () => {

    await manager.addProduct({
        name: "Teclado",
        description: "Teclado Mecánico, 60%",
        price: 25000,
        stock: 25
    });

    await manager.addProduct({
        name: "Mouse",
        description: "Mouse Gamer Inalambrico",
        price: 15000,
        stock: 40
    });

    await manager.addProduct({
        name: "Monitor",
        description: "Monitor 24 pulgadas",
        price: 120000,
        stock: 10
    });

    console.log("Productos:");
    console.table(await manager.getProducts()); 

    console.log("Buscar ID 2:");
    console.table([await manager.getProductById(2)]); 

    console.log("Buscar ID 99:");
    const notFound = await manager.getProductById(99);
    if (notFound) console.table([notFound]); 

    console.log("Actualizar ID 2:");
    const updated = await manager.updateProductById(2, { price: 20000 });
    console.table([updated]);

    console.log("Eliminar ID 1:");
    await manager.deleteProductById(1);

    console.log("Productos finales:");
    console.table(await manager.getProducts());

    await manager.deleteProductById(999);
};

run();