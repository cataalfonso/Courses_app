const Course = require("./course");

class Subject{

    constructor() {
        this.id= 0;
        this.name= '';
        //this.courseId= new Course(); está arrojando que course no es un constructor
    }
}
module.exports = Subject;