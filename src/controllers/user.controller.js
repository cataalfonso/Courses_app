const CtxCourses = require('../context/ctx-courses');
const CourseView = require('../views/Course/course.view');
const AdminView = require('../views/user/admin.view');
const StudentView = require('../views/user/student');
const TeacherView = require('../views/user/teacher');
const CourseController = require('./course.controller');


const MSG_LOGIN_FAILED = 'Usuario o contraseña incorrectos';

//corregir burrada del contexto en todos los controladores, pao , pao
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
      console.log(currentUser);
      let view = {};
      switch (currentUser.type) {
        case 'Admin': view = new AdminView(this); break;
        case 'teacher': view = new TeacherView(); break;
        case 'student': view = new StudentView(); break;
      }
      view.selectAction();
      } else {
      throw new Error(MSG_LOGIN_FAILED);
    }
  }

  //cambiar vistas
  selectAction(options) {
    const _couseController= new CourseController();
    let view = {};
    switch (options) {
      case 'Cursos': view = new CourseView(_couseController); break;
      case 'Notas':view = new CourseView(); break;
      case 'Parametros':view = new CourseView(); break;
      case 'Pass-Reset':view = new CourseView(); break;
      case 'Profesores':view = new CourseView(); break;
      case 'Estudiantes':view = new CourseView(); break;
      case 'Materias':view = new CourseView(); break;
      case 'Usuarios':view = new CourseView(); break;
    }
    view.selectAction();
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