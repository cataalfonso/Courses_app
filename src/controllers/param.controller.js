const CtxCourses = require('../context/ctx-courses');


class ParamController{
    constructor( ){
        this.context= new CtxCourses();
    }
    
    add(param) {
        if (param) {
          this.context.params.add(param);
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
      console.table(this.params.filter((element)=> element[criteria]== compare))
    }  
  }

module.exports = ParamController;

