const inquirer= require('inquirer');
const PersonController = require('../../controllers/person.controller');

class PersonView{

    constructor(){
        this.controller = new PersonController();
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
        }else{
            this.controller.updateOne(currentUser);
        }
}
}
module.exports = PersonView;