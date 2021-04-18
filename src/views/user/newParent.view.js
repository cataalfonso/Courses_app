
const inquirer= require('inquirer');

class NewParentView {

  constructor(_controller) {
    this.controller =_controller;
    this.questions = [
      {
        type: 'rawlist',
        name: 'type',
        message: "Seleccione la persona para quien creará el usuario",
        choices: ['Estudiante', 'Profesor'],
      },
    ]
  }
  index(){
    inquirer.prompt(this.questions).then((answers) => {
      if (answers== 'Estudiante'){
        console.table(this.controller.students)
      }
      else {
        console.table(this.controller.teachers)
      };
     this.controller.parentLink(answers) 
    });
  }

}

module.exports = NewParentView;
