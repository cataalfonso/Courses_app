
const inquirer= require('inquirer');

class NewView {

  constructor(_controller) {
    this.controller =_controller;
    this.addquestions = [
      {
        type: 'input',
        name: 'login',
        message: "Ingrese el nombre de usuario",
      },
      {
        type: 'input',
        name: 'password',
        message: "Ingrese la conraseña",
      },
      {
        type: 'rawlist',
        name: 'type',
        message: "Ingrese el tipo de usuario",
        choices: ['Admin', 'teacher', 'student'],
      },
    ]
    this.idParent={
        type: 'input',
        name: 'idParent',
        message: "Ingrese el id para el cual creará el usuario (ver tabla)",
    }
  }

  index(type){
    inquirer.prompt(this.idParent).then((answers1) => {
      inquirer.prompt(this.addquestions).then((answers) => {
        this.controller.add(type, answers1.idParent, answers);
        console.table(this.controller.items);
      console.log('Registro agregado exitosamente');
      });  
    });
  } 
}  

module.exports=NewView;