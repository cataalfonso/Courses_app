
const inquirer= require('inquirer');

class SearchView {

  constructor(_controller) {
    this.controller = _controller;
    this.choices = [{
      type: 'rawlist',
      name: 'criteria',
      message: "Elija el criterio por el que desea buscar",
      choices: ["id", "Login", "Tipo"]  
    }];

    this.id = [
      {
        type: 'input',
        name: 'id',
        message: "Ingrese el id",
      },

    ];

    this.login = [
      {
        type: 'input',
        name: 'login',
        message: "Ingrese el nombre de usuario",
      },
    ];

    this.type = [
      {
        type: 'rawlist',
        name: 'type',
        message: "Ingrese el tipo de usuario",
        choices: ['Admin', 'teacher', 'student'],
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
        case 'Login':
          inquirer.prompt(this.login).then((answers) => {
            items = this.controller.list('login', answers.login);
            console.table(items);
          });
          break;
        case 'Tipo':
          inquirer.prompt(this.type).then((answers) => {
            items = this.controller.list('type', answers.type);
            console.table(items);
          });
          break;
        
      }
    });
  }

}

module.exports = SearchView;
