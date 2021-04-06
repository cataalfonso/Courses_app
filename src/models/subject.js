const Course = require("./course");

class Subject{

    constructor() {
        this.id= 0;
        this.name= '';
        this.courseId= new Course()
    }
}
module.exports = Subject;