class ProductManager {
    constructor() {
        this.products = [];
        this.nextId = 1; // contador de IDs
    }

    addProduct(product) {
        const { name, description, price, stock } = product;


        if (!name || !description || price === undefined || stock === undefined) {
            console.error("Todos los campos son obligatorios");
            return;
        }

        const newProduct = {
            id: this.nextId, // se asigna automáticamente
            name,
            description,
            price,
            stock
        };

        this.products.push(newProduct);

        this.nextId++; // incrementa para el próximo
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(p => p.id === id);

        if (!product) {
            console.error("No encontrado");
            return null;
        }

        return product;
    }
}

export default ProductManager;