const inquirer= require('inquirer');

class UpdateView {

  constructor(_controller) {
    this.controller = _controller;
    this.questions = [
      {
        type: 'input',
        name: 'id',
        message: "Ingrese el id de la nota",
      },
      {
        type: 'input',
        name: 'concept',
        message: "Describa el concepto de la nota",
      },
      {
        type: 'number',
        name: 'value',
        message: "Ingrese el valor de la nota",
      },
    ];
  }
  index(){
    console.table(this.controller.items);
    inquirer.prompt(this.questions).then((answers) => {
      this.controller.update(answers);
      console.table(this.controller.items);
      console.log('Nota actualizada correctamente');
    });
  }

}

module.exports = UpdateView;
