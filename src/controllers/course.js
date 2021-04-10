var inquirer = require('inquirer');
const CtxCourses = require('../context/ctx-courses');


class CourseController extends CtxCourses{
    constructor( ){
        super();
      
    }

    add(course) {
        if (course) {
          this.courses.add(course);
          console.log ('Curso agregado exitosamente')
          this.listall()
        }
      }
    
    remove(id) {
        if (id) {
          this.courses.remove(id);
          console.log ('Curso eliminado exitosamente')
          this.listall()

        }
      }
    
    update(id, item) {
        this.courses.update(id, item);
        console.log ('Curso actualizado exitosamente')
        this.listall()
      }

    find (id){
       this.courses.findById(id);
     } 

    listall(){
      console.table(this.courses);
    } 

    list(criteria, compare){
      // criteria es el nombre de la propiedad por la cual se busca, compare, el valor que estoy buscando
      console.table(this.courses.filter((element)=> element[criteria]== compare))
    }  
      
}

module.exports = CourseController;


  
    
