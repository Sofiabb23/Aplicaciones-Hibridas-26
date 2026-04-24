import fs from 'fs/promises'

//clase usuarios
class User {
    path = './data/users.json';
    list = []
    constructor(){

    }

    async readJson(){
        const data = await fs.readFile(this.path)
        const json = JSON.parse(data);
        this.users = json;
    }

    async saveJson(){
        const data = await JSON.stringify(this.list, null, 2);
        await fs.writeFile(this.path, data)
    }
    
    async save(user){
        const id = crypto.randomUUID();
        user.id = id;
        this.list.push(user);
        await this.saveJson();
        return id;
    }

    async find(){
        await this.readJson()
        return this.users
    }

    async findById(id){
        await this.readJson();
        const user = this.users.find( u => u.id === id);
        return user;
    }


    async deleteById( id ){
       await this.readJson();
     }
    async updateById( id, user){

    }

}

export default User