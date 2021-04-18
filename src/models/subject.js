const Course = require("./course");

class Subject{

    constructor() {
        this.name= '';
        this.courseId= new Course()
    }
}
module.exports = Subject;