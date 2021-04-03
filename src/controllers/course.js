const CtxCourses = require('../context/ctx-courses');
const courseModel= require('../models/course');


class CourseController extends CtxCourses{
    constructor( ){
        super();
        this._model= new courseModel;
    }

    add(item) {
        if (item) {
          this.courses.add(item);
        }
      }
    
    remove(id) {
        if (id) {
          this.courses.remove(id);
        }
      }
    
    update(id, item) {
        this.courses.update(id, item);
      }

    find (id){
       this.courses.findById(id);
     } 
}

module.exports = CourseController;


  
    
