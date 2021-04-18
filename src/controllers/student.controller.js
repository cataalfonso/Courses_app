const CtxCourses = require('../context/ctx-courses');
const UpdateMineView = require('../views/Student/updatemine.view');
const DeleteView = require('../views/delete.view');
const NewView = require('../views/Student/new.view');
const SearchView = require('../views/Student/search.view');
const UpdateView = require('../views/Student/update.view');

class StudentController{
  constructor( ){
      this.context= new CtxCourses();
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
    return this.context.students;
  }
  
  add(student) {
      if (student) {
        this.context.students.add(student);
      }
  }
  
  remove(id) {
      if (id) {
        this.context.students.remove(id);
      }
    }
  
  update(id, item) {
      this.context.students.update(id, item);
    }

  updateChildId(id, child, idChild){
      this.context.students.updateChildId(id, child, idChild)
  }  

  find (id){
     this.context.students.findById(id);
   } 
 
   list(criteria, compare){
    // criteria es el nombre de la propiedad por la cual se busca, compare, el valor que estoy buscando
    return this.context.students.filter((element) => element[criteria] == compare);
  }

  }

module.exports = StudentController;