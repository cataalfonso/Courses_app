const inquirer= require('inquirer');
const CourseController = require('../../controllers/course.controller');
const CouserXstudentController = require('../../controllers/courseXstudent.controller');

class EnrollView {

  constructor(_controller,_studentId) {
    this.controller = new CouserXstudentController();
    this.student= _studentId;
    this.courses= new CourseController();
    this.questions = [
      {
        type: 'input',
        name: 'id_course',
        message: "Ingrese el id de curso",
      },
    ];
  }

  index(){
    console.table(this.courses.items);
    inquirer.prompt(this.questions).then((answers) => {
      this.controller.add(this.student, answers.id_course);
      console.table(this.controller.items);
      console.log('Registro actualizado exitosamente');
    });
  }

}

module.exports = EnrollView;
