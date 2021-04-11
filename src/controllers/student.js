const Ctx = require('../context/ctx-courses');

class StudentController extends Ctx{
  constructor( ){
      super();
  }
  
  add(student) {
      if (student) {
        this.students.add(student);
      }
  }
  
  remove(id) {
      if (id) {
        this.students.remove(id);
      }
    }
  
  update(id, item) {
      this.students.update(id, item);
    }

  find (id){
     this.students.findById(id);
   } 
 
  }

module.exports = StudentController;