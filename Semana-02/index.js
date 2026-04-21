import User from "./models/User.js";

console.log('Inicio');
const userModel = new User();

const user1 = {
    name: "Jose",
    email: "jose@davinci.edu.ar"
}

const user2 = {
    name: "Sofia",
    email: "sofia@davinci.edu.ar"
}

//userModel.save( user1);
//userModel.save( user2);


console.log('Fin');

userModel.find().then( users => {
console.table(users);
})

userModel.findById('35f3167b-5cb7-4eea-80dd-433600d5448c').then( user => {
    console.log({user});
})