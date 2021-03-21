const Course = require("./course");

function Subject(){
}
Subject.prototype = {
    id: 0,
    nombre: '',
    cursoId: new Course()
}

module.exports = Subject;