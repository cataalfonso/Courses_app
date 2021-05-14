const CtxCourses = require('../context/ctx-courses');
const CourseView = require('../views/Course/course.view');
const SearchView = require('../views/Course/search.view');
const ParamView = require('../views/Params/param.view');
const PersonView = require('../views/Person/person.view');
const StudentsView = require('../views/Student/student.view');
const SubjectView = require('../views/Subject/subject.view');
const UserView = require('../views/user/user.view');
const AdminView = require('../views/users/admin.view');
const StudentView = require('../views/users/student.view');
const TeacherView = require('../views/users/teacher.view');
const CourseController = require('./course.controller');


const MSG_LOGIN_FAILED = 'Usuario o contraseña incorrectos';

class UsersController {
  constructor() {
    this.logged = false;
    this.context = new CtxCourses();
  }

  loginUser(data) {
    const index = this.context.users.findIndex((element) => element.login === data.login && element.password === data.password);
    if (index >= 0) {
      const currentUser = this.context.users[index];
      this.logged = true;
      let view = {};
      switch (currentUser.type) {
        case 'Admin': view = new AdminView(this); break;
        case 'teacher': view = new TeacherView(this); break;
        case 'student': view = new StudentView(this); break;
      }
      view.selectAction(currentUser);
    } else {
      throw new Error(MSG_LOGIN_FAILED);
    }
  }

  //cambiar vistas
  selectAction(currentUser, options) {
    let view = {};
    switch (options) {
      case 'Cursos': {
        if (currentUser.type === 'Admin') {
          view = new CourseView()
        } else {
          const _CourseController= new CourseController;
          view= new SearchView(_CourseController);  
        }
      }
        break;
      case 'Notas': view = new CourseView(); break;
      case 'Parametros': view = new ParamView(); break;
      case 'Pass-Reset': view = new CourseView(); break;
      case 'Profesores': view = new PersonView(); break;
      case 'Estudiantes': view = new StudentsView(); break;
      case 'Materias': view = new SubjectView(); break;
      case 'Usuarios': view = new UserView(); break;
      case 'Actualizar su perfil': view = new PersonView(); break;
    }
    view.selectAction(currentUser);
  }
}


module.exports = UsersController;
