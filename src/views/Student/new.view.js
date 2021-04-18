
const inquirer= require('inquirer');

class NewView {

  constructor(_controller) {
    this.controller =_controller;
    this.addquestions = [
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
        name: 'brthdate',
        message: "Ingrese fecha de nacimiento",
      },
      {
        type: 'input',
        name: 'emergencyContactName',
        message: "Ingrese nombre del contacto de emergencia",
      },
      {
        type: 'input',
        name: 'emergencyContactTel',
        message: "Ingrese teléfono del contacto de emergencia",
      },
    ];
  }
  index(){
    inquirer.prompt(this.addquestions).then((answers) => {
      this.controller.add(answers);
      console.table(this.controller.items);
      console.log('Registro agregado exitosamente');
    });
  }

}

module.exports = NewView;
