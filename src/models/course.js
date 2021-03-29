const Grade = require("./grade");

class Course {

    constructor(){
        this.id= 0;
        this.name= '';
        this.duration= '';
        this.grades= new Grade;
    }

}


module.exports = Course;