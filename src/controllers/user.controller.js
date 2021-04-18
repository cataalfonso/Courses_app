const CtxCourses = require('../context/ctx-courses');
const DeleteView = require('../views/delete.view');
const NewView = require('../views/user/new.view');
const NewParentView = require('../views/user/newParent.view');
const SearchView = require('../views/user/search.view');
const UpdateView = require('../views/user/update.view');

class UserController {
  constructor() {
    this.context = new CtxCourses();
  }

  selectAction(options) {
    let view = {};
    switch (options) {
      case 'Nuevo registro': view = new NewParentView(this); break; // quiero consultar primero el person o student al que le voy a asociar el usuario
      case 'Eliminar registro': view = new DeleteView(this); break;
      case 'Actualizar registro': view = new UpdateView(this); break;
      case 'Consultar': view = new SearchView(this); break;
    };
    view.index();
  }

  parentLink(type){
    let view={};
    view= new NewView(this);
    view.index(type);
  }

  get items(){
    return this.context.users;
  }

  get students(){ //esta mal hecho que lo llame de aca?
    return this.context.students;
  }

  get teachers(){//esta mal hecho que lo llame de aca?
    return this.context.persons;
  }


  add(type, idParent, user) {
    if (user) {
      this.context.users.add(user);
      let userarray = this.context.users;
      let userid=(userarray[userarray.length-1].id);
      if (type== 'Estudiante'){
        this.context.students.updateChildId(idParent, 'user', userid)
      }else{
        console.log(userid)
        this.context.persons.updateChildId(idParent, 'user', userid)
      }
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

  list(criteria, compare) {
    // criteria es el nombre de la propiedad por la cual se busca, compare, el valor que estoy buscando
    return this.context.users.filter((element) => element[criteria] == compare);
  }
}

module.exports = UserController;