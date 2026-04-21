import express, { json } from 'express';
import ProductManager from "./ProductManager.js";
import chalk from "chalk";

const PORT = 4000;

const productManager = new ProductManager("./products.json");

const app = express();
app.use(express.json());


app.get('/', (req, res) => {
    res.send('<h1> API REST - Productos </h1>');
});


app.get('/api/products', async (req, res) => {
    try {
        const products = await productManager.getProducts();
        console.log(products);

        res.json({
            status: 'Ok',
            data: products
        });

    } catch (error) {
        res.status(500).json({
            status: 'Error',
            data: []
        });
        console.error(error);
    }
});

app.get('/api/products/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        const product = await productManager.getProductById(id);

        if (!product) {
            return res.status(404).json({
                status: 'error',
                data: "Producto no encontrado"
            });
        }

        res.json({
            status: 'Ok',
            data: product
        });

    } catch (error) {
        res.status(500).json({
            status: 'error',
            data: null
        });
        console.error(error);
    }
});


// servidor
app.listen(PORT, () => {
    console.log(chalk.green(`Servidor Web en el puerto ${PORT}`));
});