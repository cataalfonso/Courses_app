
const inquirer= require('inquirer');

class SearchView {

  constructor(_controller) {
    this.controller = _controller;
    this.choices = [{
      type: 'rawlist',
      name: 'criteria',
      message: "Elija el criterio por el que desea buscar",
      choices: ["student", "course", "subject"]  
    }];

    this.student = [
      {
        type: 'input',
        name: 'student',
        message: "Ingrese el id del estudiante",
      },

    ];

    this.course = [
      {
        type: 'input',
        name: 'course',
        message: "Ingrese el id del  curso",
      },
    ];

    this.subject = [
      {
        type: 'input',
        name: 'subject',
        message: "Ingrese el id de la materia",
      },
    ];

  }
  index(){
    let items = [];
    let groups = [];
    let groupItems = [];
    inquirer.prompt(this.choices).then((answers) => {
      switch (answers.criteria) {
        case 'student':
          inquirer.prompt(this.student).then((answers) => {
            items = this.controller.list('student', answers.student);
            groups=this.controller.groupList('course', items);
            groups.forEach(element=>{
              console.group('course:', element);
              groupItems=items.filter((item)=>item.course === element);
              console.table(this.controller.shortenList('course', groupItems));
              console.groupEnd();
            })
          });
          break;
        case 'course':
          inquirer.prompt(this.course).then((answers) => {
            items = this.controller.list('course', answers.course);
            groups=this.controller.groupList('subject', items);
            groups.forEach(element=>{
              console.group('subject:', element);
              groupItems=items.filter((item)=>item.subject === element);
              console.table(this.controller.shortenList('subject', groupItems));
              console.groupEnd();
            })
          });
          break;
        case 'subject':
          inquirer.prompt(this.subject).then((answers) => {
            items = this.controller.list('subject', answers.subject);
            groups=this.controller.groupList('student', items);
            groups.forEach(element=>{
              console.group('student:', element);
              groupItems=items.filter((item)=>item.student === element);
              console.table(this.controller.shortenList('student', groupItems));
              console.groupEnd();
            })
          });
          break;
        
      }
      // console.table(items) este no funciona, imprime la tabla antes de hacer la consulta, llevo el console.table a cada criterio
    });
  }

}

module.exports = SearchView;
