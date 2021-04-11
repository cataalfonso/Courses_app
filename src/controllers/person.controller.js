const CtxCourses = require('../context/ctx-courses');

class PersonController{
  constructor( ){
      this.context= new CtxCourses();
  }
  
  add(student) {
      if (student) {
        this.context.persons.add(student);
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
 
  }

module.exports = PersonController;