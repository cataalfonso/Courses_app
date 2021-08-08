//Revisar
const inquirer= require('inquirer');

class SearchView {

  constructor(_controller) {
    this.controller = _controller;
    this.choices = [{
      type: 'rawlist',
      name: 'criteria',
      message: "Elija el criterio por el que desea buscar",
      choices: ["id", "name", "course"]  
    }];

    this.id = [
      {
        type: 'input',
        name: 'id',
        message: "Ingrese el id de la materia",
      },

    ];

    this.name = [
      {
        type: 'input',
        name: 'name',
        message: "Ingrese el nombre de la materia",
      },
    ];

    this.course = [
      {
        type: 'input',
        name: 'course',
        message: "Ingrese el id del curso al que pertenece la materia",
      },
    ];

  }
  index(){
    let items = [];
    inquirer.prompt(this.choices).then((answers) => {
      switch (answers.criteria) {
        case 'id':
          inquirer.prompt(this.id).then((answers) => {
            items = this.controller.list('id', answers.id);
            console.table(items);
          });
          break;
        case 'name':
          inquirer.prompt(this.name).then((answers) => {
            items = this.controller.list('name', answers.name);
            console.table(items);
          });
          break;
        case 'course':
          inquirer.prompt(this.course).then((answers) => {
            items = this.controller.list('course', answers.course);
            console.table(items);
          });
          break;
        
      }
      // console.table(items) este no funciona, imprime la tabla antes de hacer la consulta, llevo el console.table a cada criterio
    });
  }

}

module.exports = SearchView;
