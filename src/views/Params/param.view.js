const inquirer= require('inquirer');
const ParamController = require('../../controllers/param.controller');

class ParamView{

    constructor(){
        this.controller = new ParamController();
        this.localOptionsPrompt = {
            type: 'rawlist',
            name: 'localOptions',
            message: 'Indique la operación que desea realizar:',
            choices: ['Nuevo registro', 'Eliminar registro', 'Actualizar registro', 'Consultar'],
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
module.exports = ParamView;