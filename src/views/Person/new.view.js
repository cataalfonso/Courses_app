
const inquirer= require('inquirer');

class NewView {

  constructor(_controller) {
    this.controller =_controller;
    this.addquestions = [
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
        choices: ['Admin', 'teacher'],
        default: 'teacher',
      },
      {
        type: 'input',
        name: 'firstName',
        message: "Ingrese los nombres",
      },
      {
        type: 'input',
        name: 'lastName',
        message: "Ingrese el apellido",
      },
      {
        type: 'input',
        name: 'telephone',
        message: "Ingrese el número de teléfono",
      },
      {
        type: 'input',
        name: 'adress',
        message: "Ingrese la dirección",
      },
      {
        type: 'input',
        name: 'brthDate',
        message: "Ingrese fecha de nacimiento",
      },
    ];
  }
  index(){
    inquirer.prompt(this.addquestions).then((answers) => {
      this.controller.add(answers);
      console.log(this.controller.items);
      console.log('Registro agregado exitosamente');
    });
  }

}

module.exports = NewView;
