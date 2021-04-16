const CtxCourses = require('../context/ctx-courses');
const UpdateMineView = require('../views/Person/updatemine.view');
const DeleteView = require('../views/delete.view');
const NewView = require('../views/Person/new.view');
const SearchView = require('../views/Person/search.view');
const UpdateView = require('../views/Person/update.view');

class PersonController{
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

  updateOne(currentUser){
    console.log(currentUser);
    let view= new UpdateMineView(this);
    view.index(currentUser);
  }  

  get items(){
    return this.context.persons;
  }
  
  add(item) {
      if (item) {
        this.context.persons.add(item);
      }
  }
  
  remove(id) {
      if (id) {
        this.context.persons.remove(id);
      }
    }
  
  update(id, item) {
      this.context.persons.update(id, item);
    }


  find (id){
     this.context.persons.findById(id);
   } 
 

  list(criteria, compare){
    // criteria es el nombre de la propiedad por la cual se busca, compare, el valor que estoy buscando
    return this.context.params.filter((element) => element[criteria] == compare);
  }
}  
module.exports = PersonController;