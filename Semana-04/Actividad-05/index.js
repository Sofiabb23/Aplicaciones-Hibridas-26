import express from "express";
import ProductManager from "./models/ProductManager.js";
import chalk from "chalk";

const PORT = 4000;

const app = express();
app.use(express.json());

const productManager = new ProductManager("./data/products.json");

    app.get("/", (req, res) => {
        res.send("<h1>API REST - Productos Tecnologicos</h1>");
    });

//Obtener productos
    app.get("/api/products", async (req, res) => {
        try {
            const products = await productManager.getProducts();

            res.json({
                status: "Ok", data: products
            });

        } catch (error) {
            console.error(error);
            res.status(500).json({ status: "error", data: [] });
        }
    });

// Obtener producto por ID
    app.get("/api/products/:id", async (req, res) => {
        try {
            const id = parseInt(req.params.id);
            const product = await productManager.getProductById(id);
            if (!product) {
            return res.status(404).json({
                status: "error", data: "Product not found"
            });
            }
            res.json({ 
                status: "ok", data: product
            });

        } catch (error) {
            console.error(error);
            res.status(500).json({ status: "error", data: null });
        }
    });

// Agregar Producto
    app.post("/api/products", async (req, res) => {
        try {
            const { name, description, price, stock } = req.body;

            if (!name || !description || price === undefined || stock === undefined) {
                return res.status(400).json({
                    status: "error", data: "Todos los campos son obligatorios"
                });
            }

        await productManager.addProduct({ name, description, price, stock });

        res.status(201).json({ 
            status: "ok", data: "Producto Agregado"
        });

        } catch (error) {
            console.error(error);
            res.status(500).json({ status: "error", data: null });
        }
    });

// Actualizar
    app.put("/api/products/:id", async (req, res) => {
        try {
            const id = parseInt(req.params.id);
            const updatedData = req.body;

            const updated = await productManager.updateProductById(id, updatedData);

            if (!updated || Object.keys(updated).length === 0) {
                return res.status(404).json({
                    status: "error", data: "Product not found"
                });
            }

            res.json({
                status: "ok", data: updated
            });

        } catch (error) {
            console.error(error);
            res.status(500).json({ status: "error", data: null });
        }
    });

// Eliminar producto
    app.delete("/api/products/:id", async (req, res) => {
        try {
            const id = parseInt(req.params.id);

            const product = await productManager.getProductById(id);

            if (!product) {
                return res.status(404).json({
                    status: "error", data: "Product not found"
                });
            }

            await productManager.deleteProductById(id);

            res.json({
                status: "ok", data: "Producto Eliminado"
            });

        } catch (error) {
            console.error(error);
            res.status(500).json({ status: "error", data: null });
        }
    });


app.listen(PORT, () => {
    console.log(chalk.green(`Servidor Web en el puerto ${PORT}`));
});