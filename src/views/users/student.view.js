const inquirer = require('inquirer');


class StudentView {
    constructor(_controller){
        this.controller = _controller
        this.optionsPrompt = {
            type: 'rawlist',
            name: 'globalOptions',
            message: 'Indique qué desea hacer:',
            choices: [
            'Materias',
            'Notas', 
            'Actualizar su perfil',]
        };
    }
    selectAction(currentUser) {
        inquirer.prompt(this.optionsPrompt).then((answers) => {
            console.log('Elegiste la opción: ' + answers.globalOptions);
            this.controller.selectAction(currentUser, answers.globalOptions);
        });

    }
}

module.exports = StudentView;