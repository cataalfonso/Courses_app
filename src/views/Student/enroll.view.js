const inquirer = require('inquirer');
const CouserXstudentController = require('../../controllers/courseXstudent.controller');

const MSG_SAVED_SUCCESS = 'Registro guardado exitosamente';

class EnrollView {

  constructor(_studentId) {
    this.controller = new CouserXstudentController();
    this.student = _studentId;
    this.questions = [
      {
        type: 'input',
        name: 'id_student',
        message: "Confirme identificación del estudiante",
        default: this.student,
      },
      {
        type: 'input',
        name: 'id_course',
        message: "Ingrese el id de curso",
      },

    ];
  }


  index() {
    console.log('Estudiantes');
    console.table(this.controller.students);
    console.log('Cursos');
    console.table(this.controller.courses);
    inquirer.prompt(this.questions).then((answers) => {
      try {
        this.controller.add(answers);
        console.table(this.controller.items);
        console.log(MSG_SAVED_SUCCESS);
      } catch (ex) {
        console.log(ex);
        this.index();
      }
    });
  }
}

module.exports = EnrollView;
