const inquirer= require('inquirer');

class DeleteView {

  constructor(_controller) {
    this.controller = _controller;
    this.questions = [
      {
        type: 'input',
        name: 'id',
        message: "Ingrese el id del parámetro que desea eliminar",
      },
    ];
  }

  index(){
    console.table(this.controller.items);
    inquirer.prompt(this.questions).then((answers) => {
      this.controller.remove(answers.id);
      console.table(this.controller.items);
      console.log('Parámetro eliminado exitosamente');
    });
  }

}

module.exports = DeleteView;
