//revisar

const inquirer= require('inquirer');

class UpdateView {

  constructor(_controller) {
    this.controller = _controller;
    this.questions = [
      {
        type: 'input',
        name: 'id',
        message: "Ingrese el id de la materia",
      },
      {
        type: 'input',
        name: 'name',
        message: "Ingrese el nombre de la materiao",
      },
      {
        type: 'rawList',
        name: 'course',
        message: "Ingrese el curso al que pertenece la materia",
        choices: this.controller.courses,// no está mostrando las opciones!! hay que ingresar el nombre
      },
    ];
  }
  index(){
    console.table(this.controller.items);
    inquirer.prompt(this.questions).then((answers) => {
      this.controller.update(answers.id, answers);
      console.table(this.controller.items);
      console.log('Curso actualizado exitosamente');
    });
  }

}

module.exports = UpdateView;
