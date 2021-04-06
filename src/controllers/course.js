var inquirer = require('inquirer');
const CtxCourses = require('../context/ctx-courses');


class CourseController extends CtxCourses{
    constructor( ){
        super();
        this.choices=[{
          type: 'rawlist',
          name: 'criteria',
          message: "Elija el criterio por el que desea buscar",
          choices: ["id", "name", "duration"]   //intento hacerlo dinamico, pero no lo toma Object.keys(this._model)
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
        switch (answers.criteria) {
          case 'id':
            inquirer.prompt({
              type: 'input',
              name: 'id',
              message: "Ingrese el id del curso",
              }).then((answers)=>{ 
                console.log(this.courses.filter((element)=> element.id=== answers.id));
              });
              break;
          case 'name':
            inquirer.prompt({
              type: 'input',
              name: 'name',
              message: "Ingrese el nombre del curso",
              }).then((answers)=>{ 
                console.table(this.courses.filter((element)=> element.name=== answers.name));
              });
              break;
          case 'duration':
            inquirer.prompt({
              type: 'input',
              name: 'duration',
              message: "Ingrese la duración del curso",
              }).then((answers)=>{ 
                console.table(this.courses.filter((element)=> element.duration=== answers.duration));
              });
              break;
          }     
      });
    }
}

module.exports = CourseController;


  
    
