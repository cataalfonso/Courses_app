const CourseController = require("../../controllers/course.controller");
const inquirer= require('inquirer');

class SearchView {

  constructor(_controller) {
    this.controller = _controller;
    this.choices = [{
      type: 'rawlist',
      name: 'criteria',
      message: "Elija el criterio por el que desea buscar",
      choices: ["id", "name", "duration"]  
    }];

    this.id = [
      {
        type: 'input',
        name: 'id',
        message: "Ingrese el id del  curso",
      },

    ];

    this.name = [
      {
        type: 'input',
        name: 'name',
        message: "Ingrese el nombre del  curso",
      },
    ];

    this.duration = [
      {
        type: 'input',
        name: 'duration',
        message: "Ingrese la duración del curso en meses",
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
          });
          break;
        case 'name':
          inquirer.prompt(this.name).then((answers) => {
            items = this.controller.list('name', answers.name);
          });
          break;
        case 'duration':
          inquirer.prompt(this.duration).then((answers) => {
            items = this.controller.list('duration', answers.duration);
          });
          break;
      }
      console.table(items);
    });
  }

}

module.exports = SearchView;
