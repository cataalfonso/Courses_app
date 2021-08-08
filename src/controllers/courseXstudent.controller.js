const CtxCourses = require('../context/ctx-courses');
const CourseController = require('./course.controller');


const MSG_FIND_FAILED= 'Registro no encontrado, ingrese los datos nuevamente'

class CouserXstudentController{
  constructor( ){
      this.context= new CtxCourses();
      this.courseController= new CourseController();
  }    

  get items(){
    return this.context.courseXstudents;
  }

  get courses(){
    return this.context.courses;
  }

  get students(){
    return this.context.students;
  }
  
  add(item) {
        let newEnroll={};
        let courseValidation= this.findCoursebyId(item.course);
        let studentValidation= this.findStudentbyId(item.student);
        if (courseValidation && studentValidation){
          newEnroll.course= item.course;
          newEnroll.student= item.student;
          this.context.courseXstudents.add(newEnroll);
        } else {
          throw new Error(MSG_FIND_FAILED);
        };
  }

  findCoursebyId(id){
   return this.courseController.find(id);
  }

  findStudentbyId(id){
    return this.context.students.findById(id); //método repetido en student.controller
  }
  
  remove(id) {
      if (id) {
        this.context.courseXstudents.remove(id);
      }
    }

  }

module.exports = CouserXstudentController;
