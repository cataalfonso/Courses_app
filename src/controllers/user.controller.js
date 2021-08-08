const CtxCourses = require('../context/ctx-courses');
const DeleteView = require('../views/delete.view');
const SearchView = require('../views/user/search.view');
const UpdateView = require('../views/user/update.view');

class UserController {
  constructor() {
    this.context = new CtxCourses();
  }

  selectAction(options) {
    let view = {};
    switch (options) {
      case 'Eliminar registro': view = new DeleteView(this); break;
      case 'Actualizar registro': view = new UpdateView(this); break;
      case 'Consultar': view = new SearchView(this); break;
    };
    view.index();
  }

  get items(){
    return this.context._users;
  }

  get students(){ //esta mal hecho que lo llame de aca?
    return this.context.students;
  }

  get teachers(){//esta mal hecho que lo llame de aca?
    return this.context.persons;
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

  list(criteria, compare) {
    // criteria es el nombre de la propiedad por la cual se busca, compare, el valor que estoy buscando
    return this.context.users.filter((element) => element[criteria] == compare);
  }
}

module.exports = UserController;