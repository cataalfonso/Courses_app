const User = require("./user");

class PassReset{

    constructor(){
        this.id= 0;
        this.userId= new User();
        this.token= '';
}
}
module.exports = PassReset;