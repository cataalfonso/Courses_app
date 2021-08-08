const User = require("./user")

class Person{

    constructor(){
        this.firstName= '';
        this.lastName='';
        this.user= new User();
        this.telephone= '';
        this.adress= '';
        this.birthDate= new Date();
}
}
module.exports= Person;