import express, { json } from 'express';
import User from "./models/User.js";
import chalk from "chalk";

const PORT = 3000;

const userModel = new User();

const app = express();
app.use( express.json());
app.get('/', (request, response) => {
    response.send('<h1> API REST - Corregido  </h1>');
})

app.get('/api/users', async (req, res) => {
    try {
        const users = await userModel.find();
        console.log(users);
        res.json({ status: 'ok', data: users});
    } catch (error) {
        res.status(500).json({ status: 'error', data: []});
        console.error(error);
    }

})

app.post('/api/users', async (req, res) => {
    try {
        const { name, email } = req.body;
        const id = await userModel.save({ name, email});
        res.json({ status: 'ok', data: id});
    } catch (error) {        
        res.status(500).json({ status: 'error', data: []});
        console.error(error);
    }

})


app.listen( PORT, () => {
    console.log( chalk.green(`Servidor Web en el puerto ${PORT}`) );
})