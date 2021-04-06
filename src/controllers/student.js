const Ctx = require('../context/ctx-courses');

class GradeController extends Ctx{
    constructor( ){
        super();
    }
    
    add(grade) {
        if (grade) {
          this.grades.add(grade);
        }
    }
    
    remove(id) {
        if (id) {
          this.grades.remove(id);
        }
      }
    
    update(id, item) {
        this.grades.update(id, item);
      }

    find (id){
       this.grades.findById(id);
     } 
   
    }

module.exports = GradeController;