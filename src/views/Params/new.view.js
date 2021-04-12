
const inquirer= require('inquirer');

class NewView {

  constructor(_controller) {
    this.controller =_controller;
    this.addquestions = [
      {
        type: 'input',
        name: 'value',
        message: "Ingrese el valor del parámetro",
      },
      {
        type: 'input',
        name: 'description',
        message: "Ingrese la descripción del parámetro",
      },
    ];
  }
  index(){
    inquirer.prompt(this.addquestions).then((answers) => {
      this.controller.add(answers);
      console.table(this.controller.items);
      console.log('Parámetro agregado exitosamente');
    });
  }

}

module.exports = NewView;
