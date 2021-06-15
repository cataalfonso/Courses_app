
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
    let itemGrade=[];
    console.log('Estudiantes y cursos');
    console.log(JSON.stringify(this.controller._students,null,2));
    inquirer.prompt(this.studentPrompt).then((answers) => {
        itemGrade.push(answers);
        console.log('my array de respuestas ', itemGrade);
        this.selectCourseByStudent(answers.student, itemGrade);
  });
}

selectCourseByStudent(studentId, itemGrade){
  try{
    //console.log('envio el id de estudiante', studentId);
    let enrolledCourses= this.controller.validateStudent(studentId);
    console.log('Cursos del estudiante');
    console.log(enrolledCourses);
    inquirer.prompt(this.coursePrompt).then((answers) => {
      itemGrade.push(answers);
      console.log('my array de respuestas ', itemGrade);
      this.selectSubjectByCourse(answers.course, enrolledCourses, itemGrade);
    });
  } catch (ex) {
    console.log(ex);
    itemGrade.pop();
    this.index();
  }         
}

selectSubjectByCourse(courseId, courseList, itemGrade){
  try{
    let courseSubjects= this.controller.validateCourse(courseId, courseList);
    console.log('Materias');
    console.log(courseSubjects);
    inquirer.prompt(this.subjectPrompt).then((answers) => {
      itemGrade.push(answers);
      console.log('my array de respuestas ', itemGrade);
      this.enterGrade(answers.subject, courseSubjects, itemGrade)
    }); 
  } catch (ex){
    console.log(ex);
    itemGrade.pop();
    //this.selectCourseByStudent(itemGrade);
    this.index();
  };
}

enterGrade(subjectId, subjectList, itemGrade){
  try{
  inquirer.prompt(this.gradePrompt).then((answers) => {
    itemGrade.push(answers);
    console.log('my array de respuestas ', itemGrade);
    this.controller.add(itemGrade);
    console.table(this.controller.items);
    console.log(MSG_SAVED_SUCCESS);
}); 
  } catch(ex){
    console.log(ex);
    itemGrade.pop();
    this.enterGrade(subjectId, subjectList, itemGrade);
  }
}


}
module.exports = NewView;
