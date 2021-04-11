const CtxCourses = require('../context/ctx-courses');

class StudentController{
  constructor( ){
      this.context= new CtxCourses();
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

  find (id){
     this.context.students.findById(id);
   } 
 
  }

module.exports = StudentController;