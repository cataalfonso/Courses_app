const inquirer= require('inquirer');

class DeleteView {

  constructor(_controller) {
    this.controller = _controller;
    this.questions = [
      {
        type: 'input',
        name: 'id',
        message: "Ingrese el id del registro que desea eliminar",
      },
    ];
  }

  index(){
    console.table(this.controller.items);
    inquirer.prompt(this.questions).then((answers) => {
      this.controller.remove(answers.id);
      console.log(this.controller.items);
      console.log('Registro eliminado exitosamente');
    });
  }

}

module.exports = DeleteView;
