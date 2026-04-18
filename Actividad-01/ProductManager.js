class ProductManager {
    constructor() {
        this.products = [];
    }

    // Agregar producto
    addProduct(product) {
        const { id, name, description, price, stock } = product;

        // Validar campos obligatorios
        if (!id || !name || !description || !price || !stock) {
            console.error("Todos los campos son obligatorios");
            return;
        }

        // Validar ID único
        const exists = this.products.find(p => p.id === id);
        if (exists) {
            console.error("El producto con ese ID ya existe");
            return;
        }

        this.products.push(product);
    }

    // Obtener todos los productos
    getProducts() {
        return this.products;
    }

    // Buscar por ID
    getProductById(id) {
        const product = this.products.find(p => p.id === id);

        if (!product) {
            console.error("Not found");
            return;
        }

        return product;
    }
}

// 🔥 MUY IMPORTANTE: exportar la CLASE (no una instancia)
export default ProductManager;