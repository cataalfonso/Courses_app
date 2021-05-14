 //revisar
const inquirer = require('inquirer');

const MSG_SAVED_SUCCESS= 'Registro guardado exitosamente';

class NewView {

  constructor(_controller) {
    this.controller = _controller;
    this.addquestions = [
      {
        type: 'rawlist',
        name: 'course',
        message: "Seleccione el curso al que pertenece la materia",
        choices: this.controller.courses,
      },
      {
        type: 'input',
        name: 'name',
        message: "Ingrese el nombre de la materia",
      },
    ];
  }

  index() {
    inquirer.prompt(this.addquestions).then((answers) => {
      try {
        this.controller.add(answers);
        console.table(this.controller.items);
        console.log(MSG_SAVED_SUCCESS);
      } catch (ex) {
        console.log(ex);
        this.index();
      }
  });
}

}
module.exports = NewView;
