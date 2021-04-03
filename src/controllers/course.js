var inquirer = require('inquirer');
const CtxCourses = require('../context/ctx-courses');
const courseModel= require('../models/course');


class CourseController extends CtxCourses{
    constructor( ){
        super();
        this._model= new courseModel();
        this.choices=[{
          type: 'rawlist',
          name: 'name',
          message: "Elija el criterio por el que desea buscar",
          choices: [Object.keys(this._model)]  
        }];
    }

    add(course) {
        if (course) {
          this.courses.add(course);
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

    list(){
      inquirer.prompt(this.choices).then((answers)=>{
            console.log(this.courses.filter(answers));
      });
    }
}

module.exports = CourseController;


  
    
