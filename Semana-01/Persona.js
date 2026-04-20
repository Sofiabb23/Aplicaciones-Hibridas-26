class Persona {
    // Atributos
    nombre = '';
    apellido = '';
    // Constructor
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        //console.log ('Hola desde el constructor');
    }
    // Métodos
    saludar() {
        //console.log(`Hola, mi nombre es ${this.nombre}`);
    }
}

export default Persona
