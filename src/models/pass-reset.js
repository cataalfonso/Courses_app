const User = require("./user");

function PassReset(){
}
PassReset.prototype = {
    id: 0,
    userId: new User(),
    token: ''
}

module.exports = PassReset;