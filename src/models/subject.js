const Course = require("./course");

class Subject{

    constructor() {
        this.name= '';
        this.course= new Course()
    }
}
module.exports = Subject;