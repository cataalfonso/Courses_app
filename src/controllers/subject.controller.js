const CtxCourses = require('../context/ctx-courses');

class SubjectController{
  constructor( ){
      this.context= CtxCourses();
  }
  
  add(subject) {
      if (subject) {
        this.context.subjects.add(subject);
      }
  }
  
  remove(id) {
      if (id) {
        this.context.subjects.remove(id);
      }
    }
  
  update(id, item) {
      this.context.subjects.update(id, item);
    }

  find (id){
     this.context.subjects.findById(id);
   } 

 
  }

module.exports = SubjectController;