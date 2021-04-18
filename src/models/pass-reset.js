const User = require("./user");

class PassReset{

    constructor(){
        this.userId= new User();
        this.token= '';
}
}
module.exports = PassReset;