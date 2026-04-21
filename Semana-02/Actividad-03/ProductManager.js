import fs from "fs/promises";

class ProductManager {
    constructor(path) {
        this.path = path;
        this.products = [];
        this.nextId = 1;
    }

    //Cargar productos
    async loadProducts() {
        try {
            const data = await fs.readFile(this.path, "utf-8");
            this.products = JSON.parse(data);

            if (this.products.length > 0) {
                this.nextId = Math.max(...this.products.map(p => p.id)) + 1;
            }
        } catch (error) {
            // Si el archivo no existe, lo creamos vacío
            await fs.writeFile(this.path, "[]");
            this.products = [];
        }
    }

    //Guardar productos
    async saveProducts() {
        await fs.writeFile(this.path, JSON.stringify(this.products, null, 2));
    }

    //Agregar producto
    async addProduct(product) {
        await this.loadProducts();

        const { name, description, price, stock } = product;

        if (!name || !description || price === undefined || stock === undefined) {
            console.error("Todos los campos son obligatorios");
            return;
        }

        const newProduct = {
            id: this.nextId++,
            name,
            description,
            price,
            stock
        };

        this.products.push(newProduct);
        await this.saveProducts();
    }

    //Obtener productos
    async getProducts() {
        await this.loadProducts();
        return this.products;
    }

    //Buscar por ID
    async getProductById(id) {
        await this.loadProducts();

        const product = this.products.find(p => p.id === id);

        if (!product) {
            console.error("Not found");
            return null;
        }

        return product;
    }

    //Eliminar producto
    async deleteProductById(id) {
        await this.loadProducts();

        const index = this.products.findIndex(p => p.id === id);

        if (index === -1) {
            console.error("Not found");
            return;
        }

        this.products.splice(index, 1);
        await this.saveProducts();
    }

    //Actualizar producto
    async updateProductById(id, updatedData) {
        await this.loadProducts();

        const index = this.products.findIndex(p => p.id === id);

        if (index === -1) {
            console.error("Not found");
            return {};
        }

        this.products[index] = {
            ...this.products[index],
            ...updatedData,
            id
        };

        await this.saveProducts();
        return this.products[index];
    }
}

export default ProductManager;