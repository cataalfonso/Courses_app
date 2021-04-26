const inquirer= require('inquirer');
const StudentController = require('../../controllers/student.controller');

class StudentsView{

    constructor(){
        this.controller = new StudentController();
        this.localOptionsPrompt = {
            type: 'rawlist',
            name: 'localOptions',
            message: 'Indique la operación que desea realizar:',
            choices: ['Nuevo registro', 'Eliminar registro', 'Actualizar registro', 'Consultar','Matricular'],
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
module.exports = StudentsView;