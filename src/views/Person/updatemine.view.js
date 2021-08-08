const inquirer= require('inquirer');

class UpdateMineView {

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
  index(currentUser){ // aqui necesito relacionar el current user con los datos en la bd personas de ese current user
    console.table(this.controller.items);
    inquirer.prompt(this.questions).then((answers) => {
      this.controller.update(answers.id, answers);
      console.table(this.controller.items);
      console.log('Registro actualizado exitosamente');
    });
  }

}

module.exports = UpdateMineView;
