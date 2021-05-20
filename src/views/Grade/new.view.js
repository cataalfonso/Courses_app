
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
    console.table(this.controller.students);
    inquirer.prompt(this.studentPrompt).then((answers) => {
      let courses=this.controller.filterCoursesByStudent(answers.student);
      if (courses){
        this.relateCourse(courses);
      }else{
        console.log('El estudiante no existe')
      }
      //this.controller.add(answers);
      //console.log('Coursos', this.controller.filterCoursesByStudent(answers.student));
      //console.table(this.controller.items); 
      //console.log('Curso agregado exitosamente');
  });
}

  relateCourse(courses){
    console.log('Cursos del estudiante');
    console.table(courses);
  }

}
module.exports = NewView;
