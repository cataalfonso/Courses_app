const Grade = require("./grade");

class Course {

    constructor(){
        this.id= 0;
        this.name= '';
        this.duration= '';
        this.grades= new Grade();
        this.questions = [
            {
              type: 'input',
              name: 'name',
              message: "Ingrese el nombre del  curso",
            },
            {
              type: 'input',
              name: 'duration',
              message: "Ingrese la duración del curso en meses",
              },
          ];  
    }
    
}

module.exports = Course;