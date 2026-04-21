import fs from 'fs/promises'




class User {
    path = './data/users.json';
    list = []
    constructor(){

    }

    async save(user){
        this.list.push(user);
        const data = JSON.stringify(this.list)
        await fs.writeFile(this.path, data)

    }

     get() {
        return this.users
    }

}

export default User