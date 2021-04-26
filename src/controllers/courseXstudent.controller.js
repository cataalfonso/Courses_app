const CtxCourses = require('../context/ctx-courses');


class CouserXstudentController{
  constructor( ){
      this.context= new CtxCourses();
  }

  get items(){
    return this.context._courseXstudents;
  }
  
  add(idS, idCourse) {
        let newEnroll={};
        newEnroll.id_student= idS;
        newEnroll.id_course= idCourse;
        console.log(newEnroll);
        console.log(this.context.courseXstudents);
        this.context.courseXstudents.add(newEnroll);
  }
  
  remove(id) {
      if (id) {
        this.context.courseXstudents.remove(id);
      }
    }
 
   list(criteria, compare){
    // criteria es el nombre de la propiedad por la cual se busca, compare, el valor que estoy buscando
    return this.context.courseXstudents.filter((element) => element[criteria] == compare);
  }

 

  }

module.exports = CouserXstudentController;
