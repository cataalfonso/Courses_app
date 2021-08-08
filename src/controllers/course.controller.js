const CtxCourses = require('../context/ctx-courses');
const DeleteView = require('../views/delete.view');
const NewView = require('../views/Course/new.view');
const SearchView = require('../views/Course/search.view');
const UpdateView = require('../views/Course/update.view');
const Course = require('../models/course');


class CourseController {

  constructor() {
    this.context = new CtxCourses();
  }

  selectAction(options) {
    let view = {};
    switch (options) {
      case 'Nuevo registro': view = new NewView(this); break;
      case 'Eliminar registro': view = new DeleteView(this); break;
      case 'Actualizar registro': view = new UpdateView(this); break;
      case 'Consultar': view = new SearchView(this); break;
    };
    view.index();
  }

  get items(){
    return this.context.courses;
  }

  add(course) {
    if (course) {
      let newCourse = new Course();
      newCourse.name= course.name;
      newCourse.duration= course.duration; 
      this.context.courses.add(newCourse);
    }
  }

  remove(id) {
    if (id) {
      this.context.courses.remove(id);
    }
  }

  update(id, item) {
    this.context.courses.update(id, item);
  }

  find(id) {
    return this.context.courses.findById(id);
    
  }

  list(criteria, compare) {
    // criteria es el nombre de la propiedad por la cual se busca, compare, el valor que estoy buscando
    return this.context.courses.filter((element) => element[criteria] == compare);
  }

}

module.exports = CourseController;




