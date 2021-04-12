
const inquirer= require('inquirer');

class SearchView {

  constructor(_controller) {
    this.controller = _controller;
    this.choices = [{
      type: 'rawlist',
      name: 'criteria',
      message: "Elija el criterio por el que desea buscar",
      choices: ["id", "valor", "descripción"]  
    }];

    this.id = [
      {
        type: 'input',
        name: 'id',
        message: "Ingrese el id del parámetro",
      },

    ];

    this.value = [
      {
        type: 'input',
        name: 'value',
        message: "Ingrese el valor del parámetro",
      },
    ];

    this.description = [
      {
        type: 'input',
        name: 'description',
        message: "Ingrese la descripción del parámetro",
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
        case 'valor':
          inquirer.prompt(this.value).then((answers) => {
            items = this.controller.list('value', answers.value);
            console.table(items);
          });
          break;
        case 'descripción':
          inquirer.prompt(this.description).then((answers) => {
            items = this.controller.list('description', answers.description);
            console.table(items);
          });
          break;
        
      }
    });
  }

}

module.exports = SearchView;
