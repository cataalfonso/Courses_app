
const inquirer = require('inquirer');

const MSG_SAVED_SUCCESS= 'Registro guardado exitosamente';

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
        message: "Ingrese el id del curso para el cual desea ingresar notas",
      },
    ];
    this.subjectPrompt=[
      {
        type: 'input',
        name: 'subject',
        message: "Ingrese el id dela materia para la cual desea ingresar notas",
      },
    ];
    this.gradePrompt=[
      {
        type: 'input',
        name: 'concept',
        message: "Describa el concepto de la nota",
      },
      {
        type: 'input',
        name: 'value',
        message: "Ingrese el valor de la nota",
      },
    ];
  }

  index() {
    console.log('Estudiantes y cursos');
    console.log(JSON.stringify(this.controller._students,null,2));
    inquirer.prompt(this.studentPrompt).then((answers) => {
      try {
        console.log('este es el id del estudiante', answers.student);
        let enrolledCourses= this.controller.validateStudent(answers.student);
        console.log('Cursos del estudiante');
        console.log(enrolledCourses);
        inquirer.prompt(this.coursePrompt).then((answers) => {
          try{
            let courseSubjects= this.controller.validateCourse(answers.course, enrolledCourses);
            console.log('Materias');
            console.log(courseSubjects);
            inquirer.prompt(this.gradePrompt).then((answers) => {
                this.controller.add(answers);
                console.table(this.controller.items);
                console.log(MSG_SAVED_SUCCESS);
            }); 
          } catch (ex){
            console.log(ex);
            //this.index();
          };
        });  
      } catch (ex) {
        console.log(ex);
        this.index();
      }

  });
}


}
module.exports = NewView;
