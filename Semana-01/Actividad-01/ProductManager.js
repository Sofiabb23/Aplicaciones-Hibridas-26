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

        // Validar ID 
        const exists = this.products.find(p => p.id === id);
        if (exists) {
            console.error("El producto con ese ID ya existe");
            return;
        }

        this.products.push(product);
    }

    
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



export default ProductManager;