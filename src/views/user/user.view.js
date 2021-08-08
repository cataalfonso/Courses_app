const inquirer= require('inquirer');
const UserController = require('../../controllers/user.controller');

class UserView{

    constructor(){
        this.controller = new UserController();
        this.localOptionsPrompt = {
            type: 'rawlist',
            name: 'localOptions',
            message: 'Indique la operación que desea realizar:',
            choices: ['Eliminar registro', 'Actualizar registro', 'Consultar'],
          };
    }

    selectAction(currentUser){
        if (currentUser.type == 'Admin'){
            inquirer.prompt(this.localOptionsPrompt).then((answers) => {
                console.log('Elegiste la opción: ' + answers.localOptions);
                this.controller.selectAction(answers.localOptions);
            });   
        }
}
}
module.exports = UserView;