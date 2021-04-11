const inquirer= require('inquirer');
const CourseController = require('../../controllers/course.controller');

class CourseView{

    constructor(){
        this.controller = new CourseController();
        this.localOptionsPrompt = {
            type: 'rawlist',
            name: 'localOptions',
            message: 'Indique la operación que desea realizar:',
            choices: ['Nuevo registro', 'Eliminar registro', 'Actualizar registro', 'Consultar'],
          };
    }
    selectAction(){
        inquirer.prompt(this.localOptionsPrompt).then((answers) => {
            console.log('Elegiste la opción: ' + answers.localOptions);
            this.controller.selectAction(answers.localOptions);
        });
    }
}
module.exports = CourseView;