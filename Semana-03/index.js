import express from 'express';
import User from "./models/User.js";
import chalk from "chalk";
//console.log( chalk.green('Node 35') );
const PORT = 3000

const userModel = new User();

const app = express();

app.get('/', (request, response) => {
    response.send('<h1> API REST hola desde el cambio </h1>');
})

app.get('/api/users', async (req,res) => {
    try{
        const users = await userModel.find();
        console.log(users);
        res.json({ status: 'Ok', data: users});
    } catch (error) {
        res.status(500)({ status: 'Error', data: []});
        console.error(error);
    }
    
})

app.post('/api/users', (req,res) => {
    try{
        console.log('POST');
        res.json({ status: 'Ok', data: []});

    } catch (error) {
        res.status(500)({ status: 'Error', data: []});
        console.error(error);
    }

    
})


app.listen( PORT, () => {
    console.log( chalk.green(`Servidor Web en el puerto ${PORT}`));
})