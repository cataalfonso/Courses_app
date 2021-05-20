const inquirer = require('inquirer');
const GradeController = require('../../controllers/grade.controller');

class GradeView {

    constructor() {
        this.controller = new GradeController();
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
module.exports = GradeView;