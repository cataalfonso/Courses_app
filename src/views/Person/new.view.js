
const inquirer= require('inquirer');

class NewView {

  constructor(_controller) {
    this.controller =_controller;
    this.addquestions = [
     
      //this.user= new User(); pendiente conectarlo con la lista de usuarios
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
