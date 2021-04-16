const inquirer= require('inquirer');

class UpdateView {

  constructor(_controller) {
    this.controller = _controller;
    this.questions = [
      {
        type: 'input',
        name: 'id',
        message: "Ingrese el id",
      },
      {
        type: 'input',
        name: 'login',
        message: "Ingrese el nombre de usuario",
      },
      {
        type: 'input',
        name: 'password',
        message: "Ingrese la conraseña",
      },
      {
        type: 'rawlist',
        name: 'type',
        message: "Ingrese el tipo de usuario",
        choices: ['Admin', 'teacher', 'student'],
      },
      
    ];
  }
  index(){
    console.table(this.controller.items);
    inquirer.prompt(this.questions).then((answers) => {
      this.controller.update(answers.id, answers);
      console.table(this.controller.items);
      console.log('Registro actualizado exitosamente');
    });
  }

}

module.exports = UpdateView;
