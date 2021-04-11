const CtxCourses = require('../context/ctx-courses');


class GradeController extends Ctx{
    constructor( ){
        this.context= new CtxCourses();
    }
    
    add(grade) {
        if (grade) {
          this.context.grades.add(grade);
        }
    }
    
    remove(id) {
        if (id) {
          this.grades.context.remove(id);
        }
      }
    
    update(id, item) {
        this.grades.context.update(id, item);
      }

    find (id){
       this.context.grades.findById(id);
     } 
   
    }

module.exports = GradeController;

