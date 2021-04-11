const inquirer = require('inquirer');


class StudentView {
    constructor(_controller){
        this.controller = _controller
        this.optionsPrompt = {
            type: 'rawlist',
            name: 'globalOptions',
            message: 'Indique qué desea hacer:',
            choices: [
            'Información de materias',
            'Información de notas', 
            'Actualizar su perfil',]
        };
    }
    selectAction() {
        inquirer.prompt(this.optionsPrompt).then((answers) => {
            console.log('Elegiste la opción: ' + answers.globalOptions);
            this.controller.selectAction(answers.globalOptions);
        });

    }
}

module.exports = StudentView;