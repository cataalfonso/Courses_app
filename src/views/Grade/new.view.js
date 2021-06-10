
const inquirer = require('inquirer');

class NewView {

  constructor(_controller) {
    this.controller = _controller;
    this.studentPrompt = [
      {
        type: 'input',
        name: 'student',
        message: "Ingrese el id del estudiante",
      },
    ];
    this.coursePrompt=[
      {
        type: 'input',
        name: 'course',
        message: "Ingrese el curso para el cual desea ingresar notas",
      },
    ];
  }

  index() {
    console.log('Estudiantes y cursos');
    console.log(JSON.stringify(this.controller._students,null,2));
    inquirer.prompt(this.studentPrompt).then((answers) => {
      try {
        this.controller.filterCoursesByStudent(answers.student);
        console.log('Cursos del estudiante');
        //console.log(courses);

      } catch (ex) {
        console.log(ex);
       // this.index();
      }

      
      
      //this.controller.add(answers);
      //console.log('Coursos', this.controller.filterCoursesByStudent(answers.student));
      //console.table(this.controller.items); 
      //console.log('Curso agregado exitosamente');
  });
}


}
module.exports = NewView;
