const inquirer = require('inquirer');
const SubjectController = require('../../controllers/subject.controller');

class SubjectView {

    constructor() {
        this.controller = new SubjectController();
        this.localOptionsPrompt = {
            type: 'rawlist',
            name: 'localOptions',
            message: 'Indique la operación que desea realizar:',
            choices: ['Nuevo registro', 'Eliminar registro', 'Actualizar registro', 'Consultar'],
        };
    }
    selectAction() {
        inquirer.prompt(this.localOptionsPrompt).then((answers) => {
            console.log('Elegiste la opción: ' + answers.localOptions);
            this.controller.selectAction(answers.localOptions);
        });
    }

}
module.exports = SubjectView;