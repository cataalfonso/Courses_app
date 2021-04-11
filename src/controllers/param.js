const Ctx = require('../context/ctx-courses');


class ParamController extends Ctx{
    constructor( ){
        super();
    }
    
    add(param) {
        if (param) {
          this.params.add(param);
        }
    }
    
    remove(id) {
        if (id) {
          this.params.remove(id);
        }
      }
    
    update(id, item) {
        this.params.update(id, item);
      }

    find (id){
       this.params.findById(id);
     } 

    listall(){
      console.table(this.params);
    } 
   
    list(criteria, compare){
      // criteria es el nombre de la propiedad por la cual se busca, compare, el valor que estoy buscando
      console.table(this.params.filter((element)=> element[criteria]== compare))
    }  


    }

module.exports = ParamController;

