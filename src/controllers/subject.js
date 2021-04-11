const Ctx = require('../context/ctx-courses');

class SubjectController extends Ctx{
  constructor( ){
      super();
  }
  
  add(subject) {
      if (subject) {
        this.subjects.add(subject);
      }
  }
  
  remove(id) {
      if (id) {
        this.subjects.remove(id);
      }
    }
  
  update(id, item) {
      this.subjects.update(id, item);
    }

  find (id){
     this.subjects.findById(id);
   } 

 
  }

module.exports = SubjectController;