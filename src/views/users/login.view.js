const UsersController = require("../../controllers/users.controller");
const inquirer= require('inquirer');

const MSG_LOGIN_SUCCESS = 'Ingreso exitoso';

class LoginView{

    constructor(){
        this.controller = new UsersController();
    }

    get questions(){
        return [
            {
                type: 'input',
                name: 'login',
                message: "Ingrese el nombre de usuario",
            },
            {
                type: 'password',
                name: 'password',
                message: "Ingrese contraseña",
            },
        ];  
        
    }

    login(){
        inquirer.prompt(this.questions).then((answers) => {
            try{
                this.controller.loginUser(answers);
                console.log(MSG_LOGIN_SUCCESS);
            } catch(ex) {
                console.log(ex);
            }
        });
    }

}

module.exports= LoginView;