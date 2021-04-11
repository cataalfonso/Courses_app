//poner en las vistas lo que tenga que preguntar para ingresar los datos
// un controlador para varias vistas, y la vista debe ser muy sencilla. El controlador dice cual vista se muestra.

const inquirer= require('inquirer');

//las acciones y logica de negocio van en el controlador
class NewView {

  constructor(_controller) {
    this.controller =_controller;
    this.addquestions = [
      {
        type: 'input',
        name: 'name',
        message: "Ingrese el nombre del  curso",
      },
      {
        type: 'input',
        name: 'duration',
        message: "Ingrese la duración del curso en meses",
      },
    ];
  }
  index(){
    inquirer.prompt(this.addquestions).then((answers) => {
      this.controller.add(answers);
      console.table(this.controller.items);
      console.log('Curso agregado exitosamente');
    });
  }

}

module.exports = NewView;
