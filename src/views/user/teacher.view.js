const inquirer = require('inquirer');


class TeacherView {
    constructor(_controller){
        this.controller = _controller
        this.optionsPrompt = {
            type: 'rawlist',
            name: 'globalOptions',
            message: 'Indique qué desea hacer:',
            choices: [
                'Cursos',
                'Materias',
                'Notas', 
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

module.exports = TeacherView;