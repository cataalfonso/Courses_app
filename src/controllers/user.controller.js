const CtxCourses = require('../context/ctx-courses');
const CourseView = require('../views/Course/course.view');
const ParamView = require('../views/Params/param.view');
const PersonView = require('../views/Person/person.view');
const AdminView = require('../views/user/admin.view');
const StudentView = require('../views/user/student.view');
const TeacherView = require('../views/user/teacher.view');


const MSG_LOGIN_FAILED = 'Usuario o contraseña incorrectos';

class UserController {
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
      case 'Cursos': view = new CourseView(); break;
      case 'Notas':view = new CourseView(); break;
      case 'Parametros':view = new ParamView();break;
      case 'Pass-Reset':view = new CourseView(); break;
      case 'Profesores':view = new PersonView(); break;
      case 'Estudiantes':view = new CourseView(); break;
      case 'Materias':view = new CourseView(); break;
      case 'Usuarios':view = new CourseView(); break;
      case 'Actualizar su perfil': new PersonView(); break;
    }
    view.selectAction(currentUser);
  }

  add(user) {
    if (user) {
      this.context.users.add(user);
    }
  }

  remove(id) {
    if (id) {
      this.context.users.remove(id);
    }
  }

  update(id, item) {
    this.context.users.update(id, item);
  }

  find(id) {
    this.context.users.findById(id);
  }
}

module.exports = UserController;