const inquirer= require('inquirer');

class UpdateView {

  constructor(_controller) {
    this.controller = _controller;
    this.questions = [
      {
        type: 'input',
        name: 'id',
        message: "Ingrese el id del  curso",
      },
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
    console.table(this.controller.items);
    inquirer.prompt(this.questions).then((answers) => {
      this.controller.update(answers.id, answers);
      console.table(this.controller.items);
      console.log('Parámetro actualizado exitosamente');
    });
  }

}

module.exports = UpdateView;
