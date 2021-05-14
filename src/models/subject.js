const Course = require("./course");

class Subject{

    constructor() {
        this.name= '';
        this.course= ''; // se quita new Courses(), sacaba error de referencia circular y una materia no genera un nuevo curso
    }
}
module.exports = Subject;