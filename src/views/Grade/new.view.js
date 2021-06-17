
const inquirer = require('inquirer');

const MSG_SAVED_SUCCESS = 'Registro guardado exitosamente';

class NewView {

  constructor(_controller) {
    this.controller = _controller;
    this.itemGrade = {};
    this.studentPrompt = [
      {
        type: 'input',
        name: 'student',
        message: "Ingrese el id del estudiante",
      },
    ];
    this.coursePrompt = [
      {
        type: 'input',
        name: 'course',
        message: "Ingrese el id del curso para el cual desea ingresar notas",
      },
    ];
    this.subjectPrompt = [
      {
        type: 'input',
        name: 'subject',
        message: "Ingrese el id dela materia para la cual desea ingresar notas",
      },
    ];
    this.gradePrompt = [
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
    console.log('Estudiantes');
    console.table(this.controller._students);
    inquirer.prompt(this.studentPrompt).then((answers) => {
      this.itemGrade.student = answers.student
      //console.log('my array de respuestas ', this.itemGrade);
      try {
        this.controller.validateStudent(answers.student);
        this.selectCourseByStudent();
      } catch (ex) {
        console.log(ex);
        this.index();
      }
    });
  }

  selectCourseByStudent() {
    try {
      //console.log('envio el id de estudiante', studentId);
      let enrolledCourses = this.controller.filterCoursesByStudent(this.itemGrade.student);
      console.log('Cursos del estudiante');
      console.table(enrolledCourses);
      inquirer.prompt(this.coursePrompt).then((answers) => {
        this.itemGrade.course = answers.course;
        //console.log('my array de respuestas ', this.itemGrade);
        try {
          this.controller.validateItem(answers.course, enrolledCourses);
          this.selectSubjectByCourse();
        } catch (ex) {
          console.log(ex);
          this.selectCourseByStudent();
        }
      });
    } catch (ex) {
      console.log(ex);
      this.index();
    }
  }

  selectSubjectByCourse() {
    try {
      let subjectList = this.controller.filterSubjectsByCourses(this.itemGrade.course);
      console.log('Materias');
      console.table(subjectList);
      inquirer.prompt(this.subjectPrompt).then((answers) => {
        this.itemGrade.subject = answers.subject
        //console.log('my array de respuestas ', this.itemGrade);
        try{
          this.controller.validateItem(answers.subject, subjectList);
          this.enterGrade();
        } catch (ex){
          console.log(ex);
          this.selectSubjectByCourse();
        } ; 
      });
    } catch (ex) {
      console.log(ex);
      this.selectCourseByStudent();
    };
  }

  enterGrade() {
    try {
      inquirer.prompt(this.gradePrompt).then((answers) => {
        this.itemGrade.concept = answers.concept;
        this.itemGrade.value = answers.value;
        //console.log('my array de respuestas ', this.itemGrade);
        this.controller.add(this.itemGrade);
        console.log(MSG_SAVED_SUCCESS);
        console.log(this.itemGrade);
        
      });
    } catch (ex) {
      console.log(ex);
      this.enterGrade();
    }
  }


}
module.exports = NewView;
