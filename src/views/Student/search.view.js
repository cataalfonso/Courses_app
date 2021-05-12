
const inquirer= require('inquirer');

class SearchView {

  constructor(_controller) {
    this.controller = _controller;
    this.choices = [{
      type: 'rawlist',
      name: 'criteria',
      message: "Elija el criterio por el que desea buscar",
      choices: ["id", "Nombre", "Apellido"]  
    }];

    this.id =[
      {
        type: 'input',
        name: 'id',
        message: "Ingrese el id",
      },

    ];

    this.firstName = [
      {
        type: 'input',
        name: 'firstName',
        message: "Ingrese el nombre",
      },
    ];

    this.lastName = [
      {
        type: 'input',
        name: 'lastName',
        message: "Ingrese el apellido",
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
        case 'Nombre': 
          inquirer.prompt(this.firstName).then((answers) => {
            items = this.controller.listPersons('firstName', answers.firstName);
            console.log(items);
          });
          break;
        case 'Apellido': 
          inquirer.prompt(this.lastName).then((answers) => {
            items = this.controller.listPersons('lastName', answers.lastName);
            console.log(items);
          });
          break;
        
      }
    });
  }

}

module.exports = SearchView;
