//Actividad-02 FileSystem  
//Sofia Brandan

import os from 'os';
import fs from 'fs/promises';

fs.readFile('nota1.txt', 'utf-8')
.then (nota1 => {
    return fs.readFile ('nota2.txt', 'utf-8')
        .then(nota2 => {
            const FraseFinal = (nota1 + nota2).toUpperCase();

            return fs.writeFile('notaFinal.txt', FraseFinal)
        });
})
.then( () => console.log('Frase Creada ✓'))



// Parte 2 - Archivo JSON //

// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus());

const datos = {
  Cpu: os.cpus()[0].model,
  Plataforma: os.platform(),
  Arquitectura: os.arch()
};


fs.writeFile('datos.json', JSON.stringify(datos, null, 2))
  .then(() => fs.readFile('datos.json', 'utf-8'))
  .then(data => {
    console.table(JSON.parse(data));
  })
  .catch(error => console.error(error));