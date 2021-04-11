const Ctx = require('../context/ctx-courses');

class PersonController extends Ctx{
  constructor( ){
      super();
  }
  
  add(student) {
      if (student) {
        this.persons.add(student);
      }
  }
  
  remove(id) {
      if (id) {
        this.persons.remove(id);
      }
    }
  
  update(id, item) {
      this.persons.update(id, item);
    }

  find (id){
     this.persons.findById(id);
   } 
 
  }

module.exports = PersonController;