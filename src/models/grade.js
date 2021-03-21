const Course = require("./course");
const Student = require("./student");
const Subject = require("./subject");

function Grade(){
}
Grade.prototype = {
    id: 0,
    student: new Student(),
    subject: new Subject(),
    course: new Course,
    concepto: '',
    valor: 0
}

module.exports = Grade;