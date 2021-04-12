const inquirer = require('inquirer');


class AdminView {
    constructor(_controller){
        this.controller = _controller
        this.optionsPrompt = {
            type: 'rawlist',
            name: 'globalOptions',
            message: 'Indique qué desea hacer:',
            choices: [
              'Cursos',
              'Notas',
              'Parametros',
              'Pass-Reset',
              'Profesores',
              'Estudiantes',
              'Materias',
              'Usuarios', ]
          };
    }
    selectAction(role) {
        inquirer.prompt(this.optionsPrompt).then((answers) => {
            console.log('Elegiste la opción: ' + answers.globalOptions);
            this.controller.selectAction(role, answers.globalOptions);
        });

    }
}

module.exports = AdminView;

