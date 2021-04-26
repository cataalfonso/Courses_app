const CtxCourses = require('../context/ctx-courses');
const DeleteView = require('../views/delete.view');
const NewView = require('../views/Params/new.view');
const SearchView = require('../views/Params/search.view');
const UpdateView = require('../views/Params/update.view');
const Param = require('../models/param');

class ParamController{
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
      return this.context._params;
    }
  
    
    add(param) {
        if (param) {
          let newParam = new Param();
          for (let key in newParam){
            newParam[key] = param[key]; 
          }
          this.context.params.add(newParam);
        }
    }
    
    remove(id) {
        if (id) {
          this.context.params.remove(id);
        }
      }
    
    update(id, item) {
        this.context.params.update(id, item);
      }

    find (id){
       this.context.params.findById(id);
     } 
   
    list(criteria, compare){
      // criteria es el nombre de la propiedad por la cual se busca, compare, el valor que estoy buscando
      return this.context.params.filter((element) => element[criteria] == compare);
    }  
  }

module.exports = ParamController;

